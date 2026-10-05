import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { IntroVideoSection, TeacherVideoSection } from "./IntroVideos";
import { Marquee } from "./Marquee";
import { Features } from "./Features";
import { Grades } from "./Grades";
import { About } from "./About";
import { Footer } from "./Footer";

export function Landing() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* «الفيديو التعريفي» — مخفي تمامًا لحد ما اللينك يتحدد في IntroVideos.tsx */}
        <IntroVideoSection />
        <Marquee />
        <Features />
        <Grades />
        {/* «فيديو عن المستر» — قبل قسم About */}
        <TeacherVideoSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}
