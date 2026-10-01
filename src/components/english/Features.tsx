"use client";

import { motion } from "framer-motion";
import { BookOpenText, Gamepad2, MessagesSquare, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: BookOpenText,
    title: "قواعد مبسّطة",
    body: "شرح Grammar خطوة بخطوة بأمثلة من الحياة اليومية — من غير حفظ بل(rules) على الفاضي.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: MessagesSquare,
    title: "مفردات وتعبيرات",
    body: "Vocabulary وIdioms بتتثبت بالممارسة والتكرار الذكي، وتستخدمها بثقة في كلامك وكتابتك.",
    accent: "from-fuchsia-500 to-amber-400",
  },
  {
    icon: Gamepad2,
    title: "امتحانات تفاعلية",
    body: "Quiz والامتحانات بصياغة ممتعة تقيس مستواك لحظيًا وتوريك نقاط قوتك واللي محتاج تركيز.",
    accent: "from-amber-400 to-violet-500",
  },
  {
    icon: TrendingUp,
    title: "متابعة مستمرة",
    body: "تقدمك مسجّل دايمًا — تعرف وصلت لفين وإيه الخطوة الجاية عشان توصل للتفوق.",
    accent: "from-violet-600 to-amber-500",
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-amber-300" dir="ltr">
            WHY US?
          </p>
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl">
            ليه <span className="text-shine">منصة مستر إسلام</span>؟
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            كل اللي محتاجه لتتقن الإنجليزي في مكان واحد — بأسلوب حديث وممتع.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(139,92,246,0.25)]"
            >
              {/* حرف إنجليزي شفاف في خلفية الكارت */}
              <span aria-hidden className="letter-outline absolute -left-2 -top-4 font-display text-7xl font-bold opacity-70 transition-opacity group-hover:opacity-100">
                {["A", "B", "C", "D"][i]}
              </span>

              <span className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} shadow-lg`}>
                <f.icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="relative text-lg font-extrabold text-foreground">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-7 text-muted-foreground">{f.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
