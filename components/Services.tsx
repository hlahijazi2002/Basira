"use client";

import { motion } from "framer-motion";
import { services } from "../data";
import { Cpu, Layers, ArrowUpRight } from "lucide-react";
import { useLanguage, translations } from "@/context/LanguageContext";

export default function Services() {
  const { t, language } = useLanguage();

  return (
    <section
      id="services"
      className="py-24 bg-white border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-24 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <span className="text-[var(--color-brand)] font-bold text-[11px] uppercase tracking-[0.4em] block mb-4">
            {t("services_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            {t("services_title_part1")}{" "}
            <span className="text-[var(--color-brand)]/40">
              {t("services_title_part2")}
            </span>
          </h2>
          <div
            className={`w-20 h-1.5 bg-brand rounded-full ${language === "ar" ? "mr-0 ml-auto" : ""}`}
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          {services.map((s, i) => {
            const IconComponent = s.icon;
            const details =
              (translations[language] as any)[`service_${i + 1}_details`] || [];
            const tools: string[] = s.tools || [];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:border-[var(--color-brand)]/30 hover:shadow-2xl hover:shadow-[var(--color-brand)]/10 transition-all duration-500 overflow-hidden group`}
              >
                <div className="flex-1 p-10 flex flex-col justify-between">
                  <div>
                    <div
                      className={`flex items-center gap-4 mb-6 ${language === "ar" ? "flex-row-reverse" : ""}`}
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-200 text-slate-400 shadow-sm group-hover:bg-brand group-hover:text-white group-hover:border-[var(--color-brand)] group-hover:shadow-xl transition-all duration-500 shrink-0">
                        {IconComponent && <IconComponent size={28} />}
                      </div>
                      <h3
                        className={`text-2xl font-black uppercase tracking-tight text-slate-900 ${language === "ar" ? "text-right" : "text-left"}`}
                      >
                        {t(`service_${i + 1}_title`)}
                      </h3>
                    </div>

                    <p
                      className={`text-sm leading-relaxed text-slate-500 font-medium mb-8 ${language === "ar" ? "text-right" : "text-left"}`}
                    >
                      {t(`service_${i + 1}_desc`)}
                    </p>

                    <div>
                      <div
                        className={`flex items-center gap-2 text-[10px] font-black text-[var(--color-brand)] uppercase tracking-widest mb-3 ${language === "ar" ? "flex-row-reverse" : ""}`}
                      >
                        <Cpu size={12} /> {t("tools_label")}
                      </div>
                      <div
                        className={`flex flex-wrap gap-1.5 ${language === "ar" ? "justify-end" : ""}`}
                      >
                        {tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-white text-slate-500 text-[9px] font-black rounded-lg border border-slate-200 uppercase tracking-tighter hover:border-[var(--color-brand)]/40 hover:text-[var(--color-brand)] transition-all"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center justify-between pt-8 mt-8 border-t border-slate-100 ${language === "ar" ? "flex-row-reverse" : ""}`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-[var(--color-brand)] transition-colors duration-500">
                      {t("service_pillar")} 0{i + 1}
                    </span>
                    <a
                      href="#contact"
                      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-white text-[10px] font-black uppercase tracking-widest hover:bg-[var(--color-brand-dark)] transition-all duration-300 shadow-lg shadow-[var(--color-brand)]/20 ${language === "ar" ? "flex-row-reverse" : ""}`}
                    >
                      {t("contact naw")} <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="hidden md:block w-px bg-slate-100 group-hover:bg-brand/20 transition-colors duration-500" />

                <div className="w-full md:w-[320px] p-10 bg-white flex flex-col justify-center">
                  <div
                    className={`flex items-center gap-2 text-[10px] font-black text-[var(--color-brand)] uppercase tracking-widest mb-6 ${language === "ar" ? "flex-row-reverse" : ""}`}
                  >
                    <Layers size={12} /> {t("expertise_label")}
                  </div>
                  <div className="flex flex-col gap-3">
                    {details.map((detail: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.08 + idx * 0.06,
                        }}
                        className={`flex items-center gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}
                      >
                        <div className="w-1.5 h-1.5 bg-brand rounded-full shrink-0" />
                        <span
                          className={`text-xs font-bold text-slate-700 uppercase tracking-tight ${language === "ar" ? "text-right" : "text-left"}`}
                        >
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
