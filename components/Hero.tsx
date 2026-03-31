"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-zinc-950 pt-15 md:pt-18">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-75 bg-blue-600/10 blur-[120px] rounded-full" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-medium mb-6 uppercase tracking-[0.2em]">
          <Sparkles size={12} className="animate-pulse" /> مستقبل الذكاء
          الاصطناعي
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] text-white tracking-tight">
          رؤية رقمية <br />
          <span className="bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            تتجاوز الحدود
          </span>
        </h1>
        <p className="text-zinc-500 text-base md:text-lg mb-10 max-w-2xl font-light leading-relaxed">
          في بصيرة، نمزج سحر البرمجة بقوة البيانات لنخلق أنظمة ذكية لا تخدمك
          فحسب، بل تفهمك وتنمو معك.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="#services"
            className="group px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
          >
            اكتشف خدماتنا
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3.5 border border-zinc-800 text-zinc-400 rounded-xl font-bold hover:bg-white/5 hover:text-white transition-all"
          >
            تواصل معنا
          </Link>
        </div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-linear-to-b from-blue-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">
          Scroll
        </span>
      </div>
    </section>
  );
}
