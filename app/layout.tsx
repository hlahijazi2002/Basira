import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "BasiraLens | AI & Data Analysis Solutions",
  description:
    "BasiraLens specializes in AI solutions, data analysis, machine learning, computer vision, and smart web development. Empowering organizations with intelligent technology.",
  keywords: [
    "AI solutions",
    "data analysis",
    "machine learning",
    "computer vision",
    "smart web development",
    "artificial intelligence",
    "business intelligence",
    "NLP",
    "predictive analytics",
    "تحليل البيانات",
    "الذكاء الاصطناعي",
    "تطوير المواقع",
    "حلول تقنية",
  ],
  openGraph: {
    title: "BasiraLens | AI & Data Analysis Solutions",
    description:
      "Empowering organizations through data analysis and innovative AI solutions.",
    url: "https://basiralens.vercel.app",
    siteName: "BasiraLens",
    locale: "ar_AR",
    alternateLocale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cairo.className} bg-slate-950 text-slate-100`}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
