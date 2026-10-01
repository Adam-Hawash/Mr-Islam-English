"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Quote } from "lucide-react";

const TRAITS = [
  "شرح مبسّط وممتع",
  "خبرة في المناهج المصرية",
  "تدريبات وتقييم مستمر",
  "اهتمام بكل طالب",
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-amber-300" dir="ltr">
            YOUR TEACHER
          </p>
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl">
            اعرف <span className="text-shine">مستر إسلام</span> أكتر
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong glow-ring relative mx-auto grid max-w-4xl items-center gap-8 overflow-hidden rounded-3xl p-6 sm:p-10 md:grid-cols-[280px_1fr]"
        >
          {/* صورة المستر (مؤقتة) */}
          <div className="relative mx-auto w-56 sm:w-64 md:w-full">
            <div className="overflow-hidden rounded-2xl border border-violet-400/25 shadow-[0_12px_50px_rgba(124,58,237,0.3)]">
              <Image
                src="/images/teacher-frame.jpg"
                alt="إطار صورة مستر إسلام المؤقت"
                width={864}
                height={1152}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <Quote aria-hidden className="mb-3 h-8 w-8 text-violet-400/60" />
            <p className="text-base leading-8 text-foreground/85 sm:text-lg sm:leading-9">
              أهلًا بيكم! أنا <strong className="text-amber-300">مستر إسلام محمد</strong>، مدرس اللغة الإنجليزية.
              بؤمن إن الإنجليزي مش مادة حفظ — دي مهارة بتتبني بالفهم والتدريب الحلو.
              هنا هتلاقي كل حاجة واضحة ومنظمة: شرح بسيط، تدريب مستمر، وامتحانات بتقيس تقدمك بجد.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {TRAITS.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-1.5 text-xs font-bold text-violet-200"
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-amber-300" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
