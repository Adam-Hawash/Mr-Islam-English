"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, GraduationCap, Languages, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LettersBackground } from "./LettersBackground";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* الخلفية المولدة + طبقات تعتيم */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-glow.jpg"
          alt="خلفية مضيئة بحروف إنجليزية"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-900/80 via-night-900/60 to-night-900" />
      </div>

      <LettersBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* النص */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-right">
          <motion.div variants={item} className="mb-6 flex justify-center lg:justify-start">
            <span className="glow-ring inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-bold text-violet-200">
              <Languages className="h-4 w-4 text-amber-300" />
              مادة اللغة الإنجليزية — بطريقة ممتعة وسهلة
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl font-black leading-[1.25] sm:text-5xl lg:text-6xl">
            <span className="text-shine">مستر إسلام محمد</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-display text-lg font-semibold tracking-[0.35em] text-violet-300/90" dir="ltr">
            MR. ISLAM MOHAMED
          </motion.p>

          <motion.h2 variants={item} className="mt-5 text-xl font-extrabold text-foreground/90 sm:text-2xl">
            منصة مستر إسلام للغة الإنجليزية
          </motion.h2>

          <motion.p variants={item} className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted-foreground lg:mx-0">
            قواعد مبسّطة، مفردات بتتفتح في ذاكرتك، وامتحانات تفاعلية بتقيس مستواك خطوة بخطوة.
            <span className="font-display font-semibold text-amber-300" dir="ltr"> Learn English the smart way!</span>
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-gradient-to-l from-violet-600 via-fuchsia-500 to-amber-400 px-8 text-base font-extrabold text-white shadow-[0_0_35px_rgba(139,92,246,0.45)] transition-all hover:shadow-[0_0_55px_rgba(217,70,239,0.55)]"
            >
              <a href="#features">
                استكشف المميزات
                <ArrowDown className="mr-1 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass h-12 rounded-full px-8 text-base font-bold text-violet-200 hover:bg-violet-500/15 hover:text-amber-300"
            >
              <a href="#about">تعرف على المستر</a>
            </Button>
          </motion.div>

          {/* شريط صغير أسفل الأزرار */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-violet-300/70 lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-amber-300" /> إعدادي وثانوي
            </span>
            <span className="inline-flex items-center gap-1.5" dir="ltr">
              <Star className="h-4 w-4 text-amber-300" /> Grammar · Vocabulary · Exams
            </span>
          </motion.div>
        </motion.div>

        {/* صورة المستر — إطار مؤقت بيقوم الاسترض بتبديله */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <div className="glow-ring relative overflow-hidden rounded-[2rem] shadow-[0_20px_80px_rgba(124,58,237,0.35)]">
            <Image
              src="/images/teacher-frame.jpg"
              alt="إطار صورة مستر إسلام — يُستبدل بصورته الشخصية"
              width={864}
              height={1152}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night-900/95 via-night-900/60 to-transparent p-5 pt-14 text-center">
              <p className="font-display text-xl font-bold tracking-wide text-white" dir="ltr">Mr. Islam</p>
              <p className="mt-1 text-sm font-bold text-amber-300">مدرس اللغة الإنجليزية</p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            صورة مؤقتة — بتستبدل بصورة المستر بنفس الاسم
          </p>
        </motion.div>
      </div>

      {/* مؤشر سكرول */}
      <motion.a
        href="#features"
        aria-label="انتقل للأسفل"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-violet-300/70 hover:text-amber-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
