import { Reveal } from "./Reveal";
import { introEmbedSrc, introVideoKind } from "@/lib/intro-video";

// ============================================================
// الفيديوهات التعريفية — ستاتيك في الكود (المنصة من غير باك إند)
// بنفس أسلوب zikola القديم: لينك فاضي = القسم مخفي خالص من الـ DOM
// ============================================================

// حط هنا لينك الفيديو التعريفي عن المنصة (يوتيوب/ستريمابل/درايف) — فاضي = القسم مخفي خالص
export const INTRO_VIDEO_URL = "";

// حط هنا لينك الفيديو التعريفي عن المستر — فاضي = القسم مخفي خالص
export const TEACHER_VIDEO_URL = "";

/**
 * مشغل موحد: يوتيوب/ستريمابل/درايف/فيميو → iframe embed،
 * لينك mp4 مباشر → <video controls playsInline>.
 */
function VideoPlayer({ url, title }: { url: string; title: string }) {
  const kind = introVideoKind(url);
  const embed = introEmbedSrc(url);

  if (kind === "file") {
    return (
      <video
        controls
        playsInline
        preload="metadata"
        src={url}
        className="absolute inset-0 h-full w-full bg-[#12101F]"
      />
    );
  }

  return (
    <iframe
      src={embed ?? url}
      title={title}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 h-full w-full"
    />
  );
}

/** إطار الفيديو المشترك — كارت أبيض ناعم بنفس توقيع المنصة */
function VideoCard({ url, title }: { url: string; title: string }) {
  return (
    <figure className="card-soft mt-10 overflow-hidden !rounded-[1.5rem] p-2 sm:p-3">
      <div className="relative aspect-video overflow-hidden rounded-[1.15rem] bg-[#12101F] shadow-[0_18px_44px_-24px_rgba(18,16,31,0.55)]">
        <VideoPlayer url={url} title={title} />
      </div>
    </figure>
  );
}

/** «الفيديو التعريفي» — عن المنصة نفسها، بعد الهيرو مباشرة */
export function IntroVideoSection() {
  if (!INTRO_VIDEO_URL.trim()) return null;

  return (
    <section
      id="intro-video"
      className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* زخارف ناعمة بهوية المنصة (بنفسجي × عنبري) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-[#F59E0B]/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
            Platform tour
          </p>
          <h2
            dir="rtl"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            الفيديو التعريفي
          </h2>
          <p dir="rtl" className="mt-4 text-base leading-relaxed text-muted-foreground">
            اتعرف على المنصة في دقائق
          </p>
        </Reveal>

        <Reveal delay={120}>
          <VideoCard url={INTRO_VIDEO_URL} title="الفيديو التعريفي — اتعرف على المنصة في دقائق" />
        </Reveal>
      </div>
    </section>
  );
}

/** «فيديو عن المستر» — قبل قسم About (المحتوى عن المعلم) */
export function TeacherVideoSection() {
  if (!TEACHER_VIDEO_URL.trim()) return null;

  return (
    <section
      id="teacher-video"
      className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-[#F59E0B]/12 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-1/4 h-56 w-56 rounded-full bg-[#7C3AED]/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-[#D97706]">
            Meet your teacher
          </p>
          <h2
            dir="rtl"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            فيديو عن المستر
          </h2>
          <p dir="rtl" className="mt-4 text-base leading-relaxed text-muted-foreground">
            تعرّف على مستر إسلام
          </p>
        </Reveal>

        <Reveal delay={120}>
          <VideoCard url={TEACHER_VIDEO_URL} title="فيديو عن المستر — تعرّف على مستر إسلام" />
        </Reveal>
      </div>
    </section>
  );
}
