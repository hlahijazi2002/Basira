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

  return (
    <section
      id="industries"
      className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-20 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <span className="text-blue-600 font-bold text-[11px] uppercase tracking-[0.4em] block mb-4">
            {t("industries_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            {t("industries_title_part1")}{" "}
            <span className="text-slate-300">
              {t("industries_title_part2")}
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`group flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 ${language === "ar" ? "flex-row-reverse text-right" : "text-left"}`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-500">
                  <Icon
                    size={18}
                    className="text-blue-600 group-hover:text-white transition-colors duration-500"
                  />
                </div>
                <span className="text-slate-700 font-black text-sm uppercase tracking-tight">
                  {industry.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
