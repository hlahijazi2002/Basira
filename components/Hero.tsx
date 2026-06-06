"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-slate-50 pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[var(--color-brand)]/8 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-brand)]/25 bg-[var(--color-brand)]/8 text-[var(--color-brand)] text-[11px] font-bold mb-8 uppercase tracking-[0.25em]">
          <Sparkles size={14} />
          {t("hero_badge")}
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.05] text-slate-900 tracking-tight">
          {t("hero_title_part1")} <br />
          <span className="text-[var(--color-brand)]">
            {t("hero_title_part2")}
          </span>
        </h1>

        <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl font-medium leading-relaxed">
          {t("hero_desc_part1")}
          <span className="text-slate-900 font-bold">
            {t("hero_desc_part2")}
          </span>
          {t("hero_desc_part3")}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <Link
            href="#services"
            className="group px-10 py-4 bg-[var(--color-brand)] text-white rounded-2xl font-bold hover:bg-[var(--color-brand-dark)] transition-all flex items-center gap-2 shadow-xl shadow-[var(--color-brand)]/20 active:scale-95"
          >
            {t("hero_cta_primary")}
            <ArrowRight
              size={20}
              className={`${language === "ar" ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform`}
            />
          </Link>
          <Link
            href="#contact"
            className="px-10 py-4 border border-slate-300 text-slate-600 rounded-2xl font-bold hover:border-[var(--color-brand)]/50 hover:text-slate-900 transition-all active:scale-95"
          >
            {t("hero_cta_secondary")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
