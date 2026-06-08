"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const techGroups = [
  {
    labelKey: "tech_group_1",
    tools: ["Python", "SQL", "Excel", "SPSS", "R"],
  },
  {
    labelKey: "tech_group_2",
    tools: ["Power BI", "Tableau", "Looker Studio"],
  },
  {
    labelKey: "tech_group_3",
    tools: [
      "Machine Learning",
      "Generative AI",
      "OpenAI",
      "Intelligent Agents",
    ],
  },
];

export default function Technologies() {
  const { t, language } = useLanguage();

  return (
    <section
      id="technologies"
      className="py-14 bg-white border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-20 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <span className="text-[var(--color-brand)] font-bold text-[11px] uppercase tracking-[0.4em] block mb-4">
            {t("tech_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            {t("tech_title_part1")}{" "}
            <span className="text-[var(--color-brand)]/40">
              {t("tech_title_part2")}
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col divide-y divide-slate-100">
          {techGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className={`flex items-center gap-8 py-5 `}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 min-w-[140px] shrink-0">
                {t(group.labelKey)}
              </span>

              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool, ti) => (
                  <motion.span
                    key={ti}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + ti * 0.05 }}
                    className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-xs font-black uppercase tracking-tight hover:border-[var(--color-brand)]/40 hover:bg-[var(--color-brand)]/8 hover:text-[var(--color-brand)] transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
