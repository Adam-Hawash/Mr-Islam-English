import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { Features } from "./Features";
import { Grades } from "./Grades";
import { About } from "./About";
import { Footer } from "./Footer";

export function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-night-900 text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Features />
        <Grades />
        <About />
      </main>
      <Footer />
    </div>
  );
}
