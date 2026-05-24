"use client";

import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data";
import { ArrowUpRight, Cpu, Layers } from "lucide-react";
import { useLanguage, translations } from "@/context/LanguageContext";
import { useState } from "react";

export default function Services() {
  const { t, language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-24 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <span className="text-blue-600 font-bold text-[11px] uppercase tracking-[0.4em] block mb-4">
            {t("services_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            {t("services_title_part1")} <span className="text-slate-300">{t("services_title_part2")}</span>
          </h2>
          <div className={`w-20 h-1.5 bg-blue-600 rounded-full ${language === 'ar' ? 'mr-0 ml-auto' : ''}`} />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const IconComponent = s.icon;
            const details = (translations[language] as any)[`service_${i + 1}_details`] || [];
            const tools = s.tools || [];

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group p-8 rounded-[2.5rem] border transition-all duration-700 cursor-default min-h-[480px] flex flex-col justify-between overflow-hidden ${
                  hoveredIndex === i 
                    ? "bg-white border-blue-200 shadow-2xl shadow-blue-500/10 scale-[1.02] z-20" 
                    : "bg-slate-50 border-slate-100"
                }`}
              >
                {/* Background Accent Animation */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl transition-opacity duration-700 ${hoveredIndex === i ? "opacity-100" : "opacity-0"}`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                    hoveredIndex === i ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20" : "bg-white border border-slate-200 text-slate-400 shadow-sm"
                  }`}>
                    {IconComponent && <IconComponent size={28} />}
                  </div>

                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tight leading-tight text-slate-900">
                    {t(`service_${i + 1}_title`)}
                  </h3>

                  <div className="space-y-8">
                    {/* Description */}
                    <p className={`text-sm leading-relaxed font-medium transition-colors duration-500 ${hoveredIndex === i ? "text-slate-600" : "text-slate-400"}`}>
                      {t(`service_${i + 1}_desc`)}
                    </p>

                    {/* Expertise List (Reveal on Hover) */}
                    <div className={`space-y-4 transition-all duration-700 ${hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">
                          <Layers size={12} /> {t("expertise_label")}
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {details.map((detail: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-tight">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack for this service */}
                      <div className="pt-4">
                        <div className="flex items-center gap-2 text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-3">
                          <Cpu size={12} /> {t("tools_label")}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {tools.map((tool, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-500 text-[9px] font-black rounded-lg border border-slate-200/50 uppercase tracking-tighter hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 w-full pt-8 mt-8 border-t border-slate-100 flex justify-between items-center">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${
                    hoveredIndex === i ? "text-blue-600" : "text-slate-300"
                  }`}>
                    {t("service_pillar")} 0{i + 1}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === i ? "bg-blue-600 text-white shadow-lg" : "bg-white border border-slate-200 text-slate-300"
                  }`}>
                    <ArrowUpRight size={20} />
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
