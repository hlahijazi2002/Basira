"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  HandHeart,
  Rocket,
} from "lucide-react";

const icons = [
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  HandHeart,
  Rocket,
];

export default function Industries() {
  const { t, language } = useLanguage();

  const industries = Array.from({ length: 7 }, (_, i) => ({
    icon: icons[i],
    title: t(`industry_${i + 1}_title`),
  }));

  const doubled = [...industries, ...industries];

  return (
    <section
      id="industries"
      className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-20 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <span className="text-[var(--color-brand)] font-bold text-[11px] uppercase tracking-[0.4em] block mb-4">
            {t("industries_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            {t("industries_title_part1")}{" "}
            <span className="text-[var(--color-brand)]/40">
              {t("industries_title_part2")}
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 w-max animate-marquee">
          {doubled.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={i}
                className={`group flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-[var(--color-brand)]/30 hover:shadow-lg hover:shadow-[var(--color-brand)]/10 transition-all duration-500 shrink-0 w-64 ${
                  language === "ar"
                    ? "flex-row-reverse text-right"
                    : "text-left"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand)] transition-all duration-500">
                  <Icon
                    size={18}
                    className="text-[var(--color-brand)] group-hover:text-white transition-colors duration-500"
                  />
                </div>
                <span className="text-slate-700 font-black text-sm uppercase tracking-tight">
                  {industry.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
