"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-6 text-center bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.15] tracking-tight">
          بصيرة: <span className="text-cyan-400">الرؤية الرقمية</span> المدعومة
          بالبيانات
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          نحن لا نبرمج فقط، بل ندمج الذكاء الاصطناعي بتحليل البيانات لنخلق
          حلولاً رقمية تفهم احتياجاتك وتتجاوز توقعاتك.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <Link
            href="#services"
            className="px-8 py-3 bg-cyan-500 text-slate-950 rounded-full font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-900/50"
          >
            اكتشف خدماتنا
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-slate-700 rounded-full hover:border-slate-500 transition"
          >
            تواصل معنا
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
