"use client";

import { motion } from "framer-motion";
import Target from "lucide-react/dist/esm/icons/target";
import Lightbulb from "lucide-react/dist/esm/icons/lightbulb";
import Rocket from "lucide-react/dist/esm/icons/rocket";

const features = [
  {
    icon: Target,
    title: "رؤيتنا",
    desc: "أن نكون الشريك التقني الأول في تحويل البيانات إلى قرارات ذكية.",
  },
  {
    icon: Lightbulb,
    title: "مهمتنا",
    desc: "تمكين المؤسسات من خلال حلول ذكاء اصطناعي مبتكرة وسهلة الاستخدام.",
  },
  {
    icon: Rocket,
    title: "هدفنا",
    desc: "دفع عجلة التحول الرقمي وبناء مستقبل يعتمد على دقة الأرقام.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-right"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              نحن في <span className="text-cyan-400">بصيرة </span>
              نقرأ المستقبل بين السطور
            </h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
              وكالة بصيرة ليست مجرد شركة برمجة، نحن فريق من مهندسي البيانات
              والمبدعين الذين يؤمنون بأن البيانات هي النفط الجديد. نسعى لتقديم
              حلول تقنية تجمع بين التحليل العميق والواجهات العصرية.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-4 text-right"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <f.icon className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">
                      {f.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative z-10 w-full h-full border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-10">
                  <div className="text-8xl mb-4 opacity-20 text-cyan-400 font-bold">
                    BASIRA
                  </div>
                  <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full" />
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[150%] h-[150%] border border-slate-700/30 rounded-full border-dashed"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
