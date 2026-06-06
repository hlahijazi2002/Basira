"use client";

import { motion } from "framer-motion";
import { LinkedInIcon, team, UpworkIcon, WhatsAppIcon } from "@/data";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  params: Promise<{ id: string }>;
};

export default function MemberProfile({ params }: Props) {
  const { t, language } = useLanguage();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const member = team.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-30 pb-15 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/#team">
          <motion.button
            whileHover={{ x: language === "ar" ? 5 : -5 }}
            className="flex items-center gap-2 text-slate-400 hover:text-[var(--color-brand)] transition-colors mb-6 font-bold text-xs uppercase tracking-widest"
          >
            {language === "ar" ? (
              <ArrowLeft size={16} className="rotate-180" />
            ) : (
              <ArrowLeft size={16} />
            )}{" "}
            {t("back_to_team")}
          </motion.button>
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/3 relative aspect-3/4 rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl shadow-slate-200"
          >
            <Image
              src={member.image}
              alt={language === "ar" ? (member as any).nameAr : member.name}
              fill
              priority
              className="object-cover transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[var(--color-brand)] font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">
                {language === "ar" ? (member as any).roleAr : member.role}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8  leading-tight">
                {language === "ar" ? (member as any).nameAr : member.name}
              </h1>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    {t("about_member")}
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-xl whitespace-pre-line">
                    {language === "ar" ? (member as any).bioAr : member.bio}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    {t("core_stack")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 text-xs font-bold uppercase tracking-tight"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex gap-6">
                  {member.contact.linkedin && (
                    <a
                      href={member.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[var(--color-brand)] transition-colors"
                    >
                      <LinkedInIcon size={22} />
                    </a>
                  )}
                  {member.contact.whatsApp && (
                    <a
                      href={`https://wa.me/${member.contact.whatsApp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <WhatsAppIcon size={22} />
                    </a>
                  )}
                  {member.contact.email && (
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Mail size={22} />
                    </a>
                  )}
                  {member.contact.upwork && (
                    <a
                      href={member.contact.upwork}
                      target="_blank"
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <UpworkIcon size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
