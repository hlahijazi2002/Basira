import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-cairo",
  display: "swap",
});
export const metadata: Metadata = {
  title: "بصيرة | الرؤية الرقمية المدعومة بالبيانات",
  description:
    "وكالة متخصصة في تحليل البيانات والذكاء الاصطناعي وتطوير الويب الذكي.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} font-sans bg-slate-950 text-slate-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
