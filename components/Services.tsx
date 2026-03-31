"use client";
import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  CodeXml,
  ShieldCheck,
  Smartphone,
  LineChart,
} from "lucide-react";

const services = [
  { title: "تحليل البيانات", icon: BarChart3, color: "from-blue-500/20" },
  { title: "الذكاء الاصطناعي", icon: BrainCircuit, color: "from-cyan-500/20" },
  { title: "المنصات الرقمية", icon: CodeXml, color: "from-blue-400/20" },
  { title: "أمن البيانات", icon: ShieldCheck, color: "from-blue-600/20" },
  { title: "تطبيقات الموبايل", icon: Smartphone, color: "from-cyan-600/20" },
  { title: "التسويق الذكي", icon: LineChart, color: "from-blue-700/20" },
];

export default function Services() {
  const duplicated = [...services, ...services];
  return (
    <section
      id="services"
      className="py-24 bg-zinc-950 overflow-hidden border-t border-white/5"
    >
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          خدماتنا <span className="text-blue-500">الذكية</span>
        </h2>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex gap-6 pr-6"
        >
          {duplicated.map((s, i) => (
            <div
              key={i}
              className="w-[320px] shrink-0 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-xl group "
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${s.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative w-14 h-14 bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform hover:border-blue-500/50 transition-all">
                <s.icon
                  className="text-blue-400 group-hover:text-cyan-400"
                  size={28}
                />
              </div>
              <h3 className="relative z-10 text-xl font-bold text-white mb-2 text-right">
                {s.title}
              </h3>
              <p className="relative z-10 text-zinc-500 text-sm text-right leading-relaxed">
                نحوِّل التحديات التقنية إلى فرص نمو ذكية باستخدام أحدث الأدوات.
              </p>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
