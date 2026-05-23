"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-lg border border-slate-200/60 backdrop-blur-sm">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${
          language === "en"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ar")}
        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${
          language === "ar"
            ? "bg-white text-blue-600 shadow-sm font-cairo"
            : "text-slate-500 hover:text-slate-700 font-cairo"
        }`}
      >
        عربي
      </button>
    </div>
  );
}
