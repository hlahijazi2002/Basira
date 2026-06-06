"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Clock } from "lucide-react";

export default function CaseStudies() {
  const { t, language } = useLanguage();

  return (
    <section
      id="case-studies"
      className="py-24 bg-white border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-20 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <span className="text-[var(--color-brand)] font-bold text-[11px] uppercase tracking-[0.4em] block mb-4">
            {t("cases_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            {t("cases_title_part1")}{" "}
            <span className="text-[var(--color-brand)]/40">
              {t("cases_title_part2")}
            </span>
          </h2>
          <p
            className={`mt-6 text-slate-500 text-lg font-medium max-w-xl ${language === "ar" ? "mr-0 ml-auto" : ""}`}
          >
            {t("cases_desc")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-16 flex flex-col items-center justify-center text-center gap-6 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-brand)]/5 blur-[100px] rounded-full" />
          </div>

          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center">
            <Clock size={28} className="text-[var(--color-brand)]" />
          </div>

          <div>
            <h3 className="text-slate-900 font-black text-2xl uppercase tracking-tight mb-3">
              {t("cases_soon_title")}
            </h3>
            <p className="text-slate-400 text-sm font-medium max-w-md">
              {t("cases_soon_desc")}
            </p>
          </div>

          <a
            href="#contact"
            className={`group inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-brand)] text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-[var(--color-brand-dark)] transition-all shadow-lg shadow-[var(--color-brand)]/20 ${language === "ar" ? "flex-row-reverse" : ""}`}
          >
            {t("cases_cta")}
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
