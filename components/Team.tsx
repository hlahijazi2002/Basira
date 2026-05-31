"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { team } from "../data";
import { useLanguage } from "@/context/LanguageContext";

export default function Team() {
  const { t, language } = useLanguage();

  return (
    <section id="team" className="py-24 bg-white px-16">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <div>
            <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em] block mb-2">
              {t("team_badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              {t("team_title_part1")}{" "}
              <span className="text-blue-700">{t("team_title_part2")}</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs font-medium italic">
            {t("team_desc")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col items-center text-center"
            >
              {/* صورة دائرية */}
              <div
                className="relative mb-5 shrink-0"
                style={{ width: 200, height: 200 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-lg group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-100 transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={
                      language === "ar" ? (member as any).nameAr : member.name
                    }
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="200px"
                  />
                </div>
                {/* Eye button */}
                <Link href={`/team/${member.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-2 right-2 w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    <Eye size={18} strokeWidth={2.5} />
                  </motion.div>
                </Link>
              </div>

              {/* الاسم والمنصب */}
              <h3 className="text-base font-black text-slate-900 uppercase tracking-tight mb-1">
                {language === "ar" ? (member as any).nameAr : member.name}
              </h3>
              <p className="text-[10px] text-blue-600 font-bold tracking-widest uppercase leading-relaxed">
                {language === "ar" ? (member as any).roleAr : member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
