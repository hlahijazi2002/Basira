"use client";

import { motion } from "framer-motion";
import { features } from "@/data";

export default function About() {
  return (
    <section
      id="about"
      dir="ltr"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-20">
          <div className="lg:w-1/2 space-y-8 text-left">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-blue-600 font-bold text-[11px] uppercase tracking-[0.4em] block"
              >
                Beyond the Code
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter"
              >
                We don&rsquo;t just build apps. <br />
                <span className="text-slate-300">We engineer growth.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl text-left"
            >
              Basira Lens is a high-performance collective of engineers. We
              transform raw data into strategic intelligence.
            </motion.p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative pl-10 border-l border-slate-200 hover:border-blue-600 transition-all duration-500 text-left"
              >
                <span className="absolute -left-3 top-0 bg-white px-2 text-[10px] font-black text-slate-300 group-hover:text-blue-600">
                  0{i + 1}
                </span>
                <h4 className="text-slate-900 font-black text-xl mb-2 uppercase tracking-tight">
                  {f.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
