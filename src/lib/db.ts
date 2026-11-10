import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

/**
 * تحديد مسار قاعدة البيانات بذكاء حسب البيئة:
 *
 * 1) محلي/ساندبوكس: فيه DATABASE_URL في .env بيأشر على الملف الحقيقي → نستخدمه زي ما هو.
 * 2) Vercel (Serverless): مفيش DATABASE_URL، والملف المرفوع مع الريبو للقراءة فقط
 *    → ننسخ القاعدة المرفقة (db/custom.db) إلى /tmp ونشتغل عليها،
 *    عشان عمليات الكتابة (إضافة إعلان/درس) تشتغل من غير أخطاء.
 */
function resolveDatabaseUrl(): string {
  const envUrl = process.env.DATABASE_URL;
  if (envUrl) {
    const filePath = envUrl.replace(/^file:/, "");
    try {
      if (filePath && fs.existsSync(filePath)) return envUrl;
    } catch {
      /* تجاهل — نكمل للبديل */
    }
  }

  const bundled = path.join(process.cwd(), "db", "custom.db");
  if (fs.existsSync(bundled)) {
    try {
      const writable = path.join("/tmp", "mr-sabry-db.sqlite");
      if (!fs.existsSync(writable)) fs.copyFileSync(bundled, writable);
      return `file:${writable}`;
    } catch {
      return `file:${bundled}`;
    }
  }

  return envUrl ?? "file:./db/custom.db";
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasourceUrl: resolveDatabaseUrl(),
    log: [],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

/* (ز43) withRetry + safeWrite — نفس منطق المنصة المرجعية: كتابة/قراءة
   SQLite بتتقابل أحيانًا مع «database is locked» (SQLITE_BUSY) أو انقطاع
   لحظي — بدل ما العملية تقع، بنعيد المحاولة بتأخير متزايد. backfill-figures
   و cleanup-extraction و sequential-guard بيلفوا كتاباتهم بيها. */
export async function withRetry(fn: () => Promise<any>, retries: number = 3, delayMs: number = 200): Promise<any> {
  for (var attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      var msg = (error && (error.message || "")) || "";
      var code = (error && (error.code || "")) || "";
      var isLocked = msg.indexOf("database is locked") !== -1 || code === "SQLITE_BUSY";
      var isTransient = code === "CONNRESET" || code === "ECONNRESET" || code === "ETIMEDOUT";
      if ((isLocked || isTransient) && attempt < retries) {
        await new Promise(function (r) { setTimeout(r, delayMs * (attempt + 1)); });
        continue;
      }
      throw error;
    }
  }
  throw new Error("withRetry: unexpected fallthrough");
}

export async function safeWrite(fn: () => Promise<any>) {
  return withRetry(fn, 3, 300);
}
