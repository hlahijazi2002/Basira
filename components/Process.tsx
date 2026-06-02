"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Search, BarChart2, PieChart, Lightbulb } from "lucide-react";

const icons = [Search, BarChart2, PieChart, Lightbulb];

export default function Process() {
  const { t, language } = useLanguage();

  const steps = Array.from({ length: 4 }, (_, i) => ({
    icon: icons[i],
    title: t(`process_${i + 1}_title`),
    desc: t(`process_${i + 1}_desc`),
  }));

  return (
    <section
      id="process"
      className="py-24 bg-white border-t border-slate-100 overflow-hidden"
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
            {t("process_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            {t("process_title_part1")}{" "}
            <span className="text-slate-300">{t("process_title_part2")}</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 ${language === "ar" ? "text-right" : "text-left"}`}
              >
                {/* Step Number */}
                <span className="absolute top-6 right-6 text-[11px] font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                  <Icon
                    size={22}
                    className="text-blue-600 group-hover:text-white transition-colors duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-slate-900 font-black text-lg uppercase tracking-tight mb-3">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>

                {/* Connector line — hidden on last */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-slate-200 group-hover:bg-blue-200 transition-colors z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}