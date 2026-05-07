import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "BasiraLens",
  description:
    "A company specialized in data analysis, AI, and smart web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${cairo.className} bg-slate-950 text-slate-100`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
