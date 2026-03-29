"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "البريد الإلكتروني للإدارة",
    value: "info@basira.agency",
    href: "mailto:info@basira.agency",
  },
  {
    icon: Phone,
    label: "للتواصdل الهاتفي / واتساب",
    value: "+970 59 000 0000",
    href: "tel:+970590000000",
  },
  {
    icon: MapPin,
    label: "المقر الرئيسي",
    value: "غزة، فلسطين",
    href: "#",
  },
  {
    icon: Share2,
    label: "الملف المهني للوكالة",
    value: "BASIRA Agency - Linkedin",
    href: "https://www.linkedin.com/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* تأثير ضوئي خافت في الخلفية جهة اليسار */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-950/20 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            دعنا نبدأ <span className="text-cyan-400">الرؤية</span> معاً
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            فريق بصيرة جاهز للاستماع لأفكارك وتحويلها إلى حلول رقمية ذكية. تواصل
            معنا لاستكشاف آفاق جديدة لمشروعك.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactDetails.map((detail, index) => (
            <motion.a
              key={index}
              href={detail.href}
              target={detail.href.startsWith("http") ? "_blank" : "_self"}
              variants={itemVariants}
              layout
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                borderColor: "rgba(34, 211, 238, 0.5)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="p-8 rounded-2xl bg-slate-950/40 border border-slate-800 backdrop-blur-sm transition-colors group flex flex-col items-center text-center shadow-lg shadow-slate-950/30"
            >
              <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-400/20 group-hover:bg-cyan-500/20 transition-colors">
                <detail.icon className="text-cyan-400" size={36} />
              </div>

              <h4 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wide">
                {detail.label}
              </h4>
              <p className="text-lg font-semibold text-slate-100 leading-tight group-hover:text-cyan-300 transition-colors">
                {detail.value}
              </p>

              <div className="mt-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {detail.label.includes("واتساب")
                  ? "تواصل الآن"
                  : "زيارة الرابط"}{" "}
                ←
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
