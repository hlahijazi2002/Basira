"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  BarChart2,
  Cpu,
  Target,
  Users,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const icons = [BarChart2, Cpu, Target, Users, ShieldCheck, Lightbulb];

export default function WhyUs() {
  const { t, language } = useLanguage();

  const reasons = Array.from({ length: 6 }, (_, i) => ({
    icon: icons[i],
    title: t(`why_${i + 1}_title`),
    desc: t(`why_${i + 1}_desc`),
  }));

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-16 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-brand)]/25 bg-[var(--color-brand)]/8 text-[var(--color-brand)] text-[11px] font-bold mb-8 uppercase tracking-[0.25em]">
            {t("why_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            {t("why_title_part1")}{" "}
            <span className="text-[var(--color-brand)]/80">
              {t("why_title_part2")}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group p-8 bg-white rounded-4xl border border-slate-100 hover:border-[var(--color-brand)]/30 hover:shadow-xl hover:shadow-[var(--color-brand)]/10 transition-all duration-500 ${language === "ar" ? "text-right" : "text-left"}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)] mb-6 group-hover:bg-[var(--color-brand)] group-hover:text-white transition-all duration-500">
                  <Icon size={22} />
                </div>
                <h3 className="text-slate-900 font-black text-lg uppercase tracking-tight mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
