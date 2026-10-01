import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-violet-400/10 bg-night-800/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 font-display text-sm font-bold text-white">
            MI
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-foreground">منصة مستر إسلام</p>
            <p className="font-display text-[10px] font-medium tracking-[0.22em] text-violet-300/70" dir="ltr">
              MR. ISLAM · ENGLISH
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} منصة مستر إسلام — جميع الحقوق محفوظة
        </p>

        <p className="inline-flex items-center gap-1.5 text-xs text-violet-300/70">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          English Made Easy
          <Heart className="h-3.5 w-3.5 text-fuchsia-400" />
        </p>
      </div>
    </footer>
  );
}
