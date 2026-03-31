"use client";

import { motion } from "framer-motion";
import { Target, Cpu, LineChart, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "رؤيتنا",
    desc: "أن نكون الشريك التقني الأول في تحويل البيانات المعقدة إلى قرارات ذكية.",
    color: "text-blue-400",
    bg: "bg-blue-400/5",
  },
  {
    icon: Cpu,
    title: "مهمتنا",
    desc: "تمكين المؤسسات من خلال حلول ذكاء اصطناعي مبتكرة تجمع بين القوة والبساطة.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/5",
  },
  {
    icon: LineChart,
    title: "هدفنا",
    desc: "دفع عجلة التحول الرقمي وبناء مستقبل يعتمد على دقة الأرقام والنتائج.",
    color: "text-blue-500",
    bg: "bg-blue-500/5",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 text-right"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              من نحن؟
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-[1.15] tracking-tight">
              نحن في{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                بصيرة{" "}
              </span>{" "}
              نقرأ المستقبل بين السطور
            </h2>

            <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-light max-w-2xl">
              وكالة بصيرة ليست مجرد شركة برمجة، نحن فريق من{" "}
              <span className="text-white font-medium">مهندسي البرمجيات</span>{" "}
              والمبدعين الذين يؤمنون بأن البيانات هي النفط الجديد. نسعى لتقديم
              حلول تقنية تجمع بين التحليل العميق والواجهات العصرية.
            </p>

            <div className="grid gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-6 p-5 rounded-2xl bg-white/1 border border-white/5 hover:border-blue-500/30 hover:bg-white/3 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 group-hover:border-blue-500/20 transition-all duration-300`}
                  >
                    <f.icon className={f.color} size={28} />
                  </div>
                  <div className="grow">
                    <h4 className="text-white font-bold text-xl mb-1.5 flex items-center gap-3">
                      {f.title}
                      <CheckCircle2
                        size={16}
                        className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-125 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-zinc-800 rounded-full border-dashed opacity-40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[85%] h-[85%] border-2 border-blue-500/10 rounded-full border-dotted"
              />

              <div className="relative z-10 w-[75%] h-[75%] rounded-full border border-white/10 bg-zinc-900/40 backdrop-blur-3xl flex flex-col items-center justify-center shadow-3xl overflow-hidden group">
                <motion.div
                  animate={{ top: ["-100%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-32 bg-linear-to-b from-transparent via-blue-500/5 to-transparent z-0"
                />

                <div className="text-center z-10 p-6 flex flex-col items-center">
                  <div className="text-sm font-bold text-blue-500 tracking-[0.3em] uppercase mb-1.5">
                    AI DATA
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                    BASIRA
                  </div>
                  <div className="h-0.5 w-20 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full mb-6" />
                  <div className="flex gap-1 justify-center">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <motion.div
                        key={dot}
                        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: dot * 0.1,
                        }}
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
