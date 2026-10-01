const WORDS = ["Grammar", "Vocabulary", "Reading", "Writing", "Listening", "Speaking", "Phonetics", "Exams"];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section aria-label="مهارات اللغة الإنجليزية" className="border-y border-violet-400/10 bg-night-800/60 py-5">
      <div className="marquee-mask overflow-hidden" dir="ltr">
        <div className="animate-marquee flex w-max items-center gap-10 pl-10">
          {row.map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-2xl font-bold text-transparent sm:text-3xl" style={{ backgroundImage: "linear-gradient(90deg,#a78bfa,#e879f9,#fbbf24)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                {w}
              </span>
              <span className="text-sm text-amber-400/70">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
