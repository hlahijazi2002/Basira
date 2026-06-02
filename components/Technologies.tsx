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
            {t("tech_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            {t("tech_title_part1")}{" "}
            <span className="text-slate-300">{t("tech_title_part2")}</span>
          </h2>
        </motion.div>

        {/* Groups */}
        <div className="flex flex-col gap-12">
          {techGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className={`flex flex-col ${language === "ar" ? "items-end" : "items-start"} gap-4`}
            >
              {/* Group Label */}
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                {t(group.labelKey)}
              </span>

              {/* Tools */}
              <div
                className={`flex flex-wrap gap-3 ${language === "ar" ? "justify-end" : ""}`}
              >
                {group.tools.map((tool, ti) => (
                  <motion.span
                    key={ti}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + ti * 0.05 }}
                    className="group px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm font-black uppercase tracking-tight hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              {/* Divider */}
              {gi < techGroups.length - 1 && (
                <div className="w-full h-px bg-slate-100 mt-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
