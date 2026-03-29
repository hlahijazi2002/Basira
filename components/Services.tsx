"use client";

import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, CodeXml, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "تحليل البيانات واستشراف المستقبل",
    description:
      "نحول الأرقام الصماء إلى رؤى استراتيجية تدعم اتخاذ القرار وتوقع الاتجاهات المستقبلية.",
    icon: BarChart3,
  },
  {
    title: "حلول الذكاء الاصطناعي",
    description:
      "تطوير نماذج ذكية مخصصة لرفع كفاءة الأعمال وأتمتة العمليات المعقدة.",
    icon: BrainCircuit,
  },
  {
    title: "تطوير المنصات الرقمية",
    description:
      "بناء مواقع وتطبيقات ويب سريعة، متجاوبة، ومدعومة بأحدث التقنيات الحديثة.",
    icon: CodeXml,
  },
  {
    title: "أمن وحوكمة البيانات",
    description:
      "ضمان تدفق البيانات بشكل آمن وفق أعلى معايير الحماية والخصوصية الدولية.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* لمسة فنية: دائرة ضوئية في الخلفية */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            خدمات <span className="text-cyan-400">بصيرة</span> المتكاملة
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            نقدم حلولاً تقنية شاملة تجمع بين دقة التحليل وإبداع التنفيذ لتمكين
            أعمالكم رقمياً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
                <service.icon
                  className="text-cyan-400 group-hover:text-slate-950 transition-colors"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
