"use client";

import { motion } from "framer-motion";

/**
 * حروف إنجليزية عملاقة بتطفو في الخلفية — لمسة مميزة لمنصة الإنجليزي
 * حروف مضيئة + حروف محيطية (outline) + أوربس توهج بنفسجي/كهرماني
 */
const FLOATERS = [
  { ch: "A", x: "6%", y: "18%", size: "clamp(70px, 9vw, 150px)", cls: "letter-outline", dur: 9, delay: 0, rot: -12 },
  { ch: "B", x: "22%", y: "62%", size: "clamp(50px, 6vw, 100px)", cls: "letter-glow", dur: 11, delay: 0.8, rot: 10 },
  { ch: "C", x: "40%", y: "10%", size: "clamp(44px, 5vw, 84px)", cls: "letter-outline", dur: 8, delay: 1.6, rot: 8 },
  { ch: "W", x: "58%", y: "70%", size: "clamp(60px, 7.5vw, 120px)", cls: "letter-glow", dur: 12, delay: 0.4, rot: -8 },
  { ch: "X", x: "74%", y: "16%", size: "clamp(48px, 5.5vw, 92px)", cls: "letter-outline", dur: 10, delay: 2.2, rot: 14 },
  { ch: "Y", x: "88%", y: "48%", size: "clamp(56px, 6.5vw, 110px)", cls: "letter-glow", dur: 9.5, delay: 1.1, rot: -14 },
  { ch: "abc", x: "48%", y: "88%", size: "clamp(34px, 4vw, 64px)", cls: "letter-outline", dur: 10.5, delay: 0.6, rot: -4 },
  { ch: "ENGLISH", x: "12%", y: "86%", size: "clamp(30px, 3.5vw, 56px)", cls: "letter-glow", dur: 13, delay: 1.9, rot: 6 },
];

const ORBS = [
  { x: "-8%", y: "-12%", size: 420, color: "rgba(124,58,237,0.35)" },
  { x: "70%", y: "10%", size: 360, color: "rgba(217,70,239,0.22)" },
  { x: "30%", y: "75%", size: 300, color: "rgba(245,158,11,0.14)" },
];

export function LettersBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* أوربس التوهج */}
      {ORBS.map((o, i) => (
        <div
          key={i}
          className="orb"
          style={{
            left: o.x,
            top: o.y,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
          }}
        />
      ))}

      {/* الحروف الطافية */}
      {FLOATERS.map((f, i) => (
        <motion.span
          key={i}
          className={`absolute font-display font-bold ${f.cls}`}
          style={{ left: f.x, top: f.y, fontSize: f.size, rotate: `${f.rot}deg` }}
          animate={{ y: [0, -26, 0], x: [0, 12, 0] }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {f.ch}
        </motion.span>
      ))}

      {/* ووترمارك عملاق في النص */}
      <span
        className="letter-outline absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold tracking-tight opacity-60"
        style={{ fontSize: "clamp(120px, 22vw, 340px)" }}
      >
        ABC
      </span>
    </div>
  );
}
