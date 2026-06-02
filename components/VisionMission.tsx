"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  const { t, language } = useLanguage();

  return (
    <section
      id="vision"
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
            {t("vision_badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            {t("vision_title_part1")}{" "}
            <span className="text-slate-300">{t("vision_title_part2")}</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`group p-10 bg-white rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 ${language === "ar" ? "text-right" : "text-left"}`}
          >
            <div
              className={`flex items-center gap-4 mb-8 ${language === "ar" ? "flex-row-reverse" : ""}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                <Eye
                  size={22}
                  className="text-blue-600 group-hover:text-white transition-colors duration-500"
                />
              </div>
              <h3 className="text-slate-900 font-black text-xl uppercase tracking-tight">
                {t("vision_card_title")}
              </h3>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              {t("vision_card_desc")}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`group p-10 bg-blue-600 rounded-3xl border border-blue-600 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 ${language === "ar" ? "text-right" : "text-left"}`}
          >
            <div
              className={`flex items-center gap-4 mb-8 ${language === "ar" ? "flex-row-reverse" : ""}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Target size={22} className="text-white" />
              </div>
              <h3 className="text-white font-black text-xl uppercase tracking-tight">
                {t("mission_card_title")}
              </h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed font-medium">
              {t("mission_card_desc")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
