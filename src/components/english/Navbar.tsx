"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#features", label: "المميزات" },
  { href: "#grades", label: "الصفوف" },
  { href: "#about", label: "عن المستر" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* الشعار */}
        <Link href="#home" className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 shadow-[0_0_24px_rgba(139,92,246,0.5)]">
            <span className="font-display text-lg font-bold text-white">MI</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-shine">منصة مستر إسلام</span>
            <span className="font-display text-[11px] font-medium tracking-[0.25em] text-violet-300/80" dir="ltr">
              MR. ISLAM · ENGLISH
            </span>
          </span>
        </Link>

        {/* روابط الديسكتوب */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-white/5 hover:text-violet-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-300">
          <Sparkles className="h-3.5 w-3.5" />
          English Made Easy
        </span>

        {/* موبايل */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-violet-400/30 bg-white/5 text-foreground hover:bg-violet-500/20"
              aria-label="فتح القائمة"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-violet-400/20 bg-night-800">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 font-display text-sm font-bold text-white">
                  MI
                </span>
                منصة مستر إسلام
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground/85 transition-colors hover:bg-violet-500/15 hover:text-violet-300"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
