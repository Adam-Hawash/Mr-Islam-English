"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const GRADES = [
  { label: "الصف الأول الإعدادي", code: "G7", topics: "Present Simple · Nouns · Reading" },
  { label: "الصف الثاني الإعدادي", code: "G8", topics: "Past Simple · Prepositions · Writing" },
  { label: "الصف الثالث الإعدادي", code: "G9", topics: "Present Perfect · Conditionals · Exam Prep" },
  { label: "المرحلة الثانوية", code: "HS", topics: "Advanced Grammar · Comprehension · Translation" },
];

export function Grades() {
  return (
    <section id="grades" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24">
      {/* توهج خلفي خفيف */}
      <div
        aria-hidden
        className="orb left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.16), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-amber-300" dir="ltr">
            ALL LEVELS
          </p>
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl">
            الدروس <span className="text-shine">لكل الصفوف</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            محتوى مرتب لكل صف — من الإعدادي للثانوية، وبينضاف ويُحدّث باستمرار.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {GRADES.map((g, i) => (
            <motion.div
              key={g.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-ring glass relative flex items-center gap-5 overflow-hidden rounded-2xl p-6"
            >
              <span className="font-display absolute -left-3 -top-6 text-8xl font-bold opacity-[0.07]" aria-hidden dir="ltr">
                {g.code}
              </span>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 font-display text-lg font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]" dir="ltr">
                {g.code}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-extrabold text-foreground">{g.label}</h3>
                <p className="mt-1 truncate font-display text-xs font-medium text-violet-300/70" dir="ltr">
                  {g.topics}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-300">
                <Clock className="h-3.5 w-3.5" />
                قريبًا
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
