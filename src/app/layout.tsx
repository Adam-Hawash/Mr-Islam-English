import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "منصة مستر إسلام | اللغة الإنجليزية",
  description:
    "منصة مستر إسلام لتعليم اللغة الإنجليزية — قواعد مبسطة، مفردات، امتحانات تفاعلية، ومتابعة مستمرة. Learn English with Mr. Islam!",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0A0812",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth">
      {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router: الخطوط في الـlayout بتشتغل على كل الصفحات */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
