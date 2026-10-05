// ============================================================
// intro-video — منطق الفيديوهات التعريفية (نسخة ثابتة في الكود)
// ============================================================
// المنصة دي ستاتيك من غير باك إند/لوحة أدمن — اللينكات بتتحدد يدويًا في
// src/components/english/IntroVideos.tsx (INTRO_VIDEO_URL / TEACHER_VIDEO_URL).
// المنطق منسوخ مبسطًا من Zicola-Math/src/lib/intro-video.ts:
//   • يوتيوب (watch / youtu.be / shorts / embed / live / nocookie) → iframe youtube-nocookie
//   • ستريمابل (صفحة /e/ /o/) → iframe streamable.com/e/<id>
//   • جوجل درايف (أي صيغة مشاركة) → iframe /preview
//   • فيميو → iframe player.vimeo.com
//   • لينك mp4/webm مباشر → <video controls playsInline>
//   • فاضي → القسم كله بيختفي من الـ DOM (لا صندوق فاضي ولا placeholder)
// ============================================================

export type IntroVideoKind =
  | "none"
  | "youtube"
  | "drive"
  | "vimeo"
  | "streamable"
  | "file"
  | "link";

/** YouTube ID من أي صيغة لينك معروفة */
export function youTubeId(u: string): string | null {
  if (!u) return null;
  const m = String(u).match(
    /(?:youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{6,})/
  );
  return m ? m[1] : null;
}

/** Google Drive file ID من أي صيغة مشاركة */
export function driveFileId(u: string): string | null {
  if (!u) return null;
  const s = String(u);
  let m = s.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (m) return m[1];
  m = s.match(/[?&]id=([\w-]+)/);
  if (m && s.indexOf("drive.google.com") !== -1) return m[1];
  return null;
}

/** Vimeo video ID */
export function vimeoId(u: string): string | null {
  if (!u) return null;
  const m = String(u).match(/vimeo\.com\/(?:video\/)?(\d{6,})/);
  return m ? m[1] : null;
}

/** Streamable ID — صفحة streamable.com/<id> أو صيغ الـ embed /e/ أو /o/ */
export function streamableId(u: string): string | null {
  if (!u) return null;
  const m = String(u).match(/streamable\.com\/(?:[eo]\/)?([a-z0-9]+)(?:[?&#/]|$)/i);
  return m ? m[1] : null;
}

/** لينك ملف فيديو مباشر؟ (بيتعرض في <video> مش iframe) */
export function isDirectVideoFile(u: string): boolean {
  return /\.(mp4|webm|mov|m4v|ogg|ogv)(\?.*)?$/i.test(String(u || ""));
}

/** نوع القيمة المخزنة */
export function introVideoKind(url: string | null | undefined): IntroVideoKind {
  const u = String(url || "").trim();
  if (!u) return "none";
  if (youTubeId(u)) return "youtube";
  if (driveFileId(u)) return "drive";
  if (vimeoId(u)) return "vimeo";
  if (streamableId(u)) return "streamable";
  if (isDirectVideoFile(u)) return "file";
  return "link";
}

/** src الجاهز للـ iframe — بيرجع null لو المفروض يتعرض في <video> مباشرة */
export function introEmbedSrc(url: string): string | null {
  const u = String(url || "").trim();
  if (!u) return null;
  const yt = youTubeId(u);
  if (yt) return "https://www.youtube-nocookie.com/embed/" + yt + "?rel=0";
  const dv = driveFileId(u);
  if (dv) return "https://drive.google.com/file/d/" + dv + "/preview";
  const vm = vimeoId(u);
  if (vm) return "https://player.vimeo.com/video/" + vm;
  const st = streamableId(u);
  if (st) return "https://streamable.com/e/" + st;
  return null;
}
