"use client";

import { motion } from "framer-motion";
import { services } from "../data";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const duplicatedServices = [...services, ...services];

  return (
    <section
      id="services"
      dir="ltr"
      className="py-24 bg-white overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
        <span className="text-blue-600 font-bold text-[11px] uppercase tracking-[0.4em] block mb-4">
          Expertise
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
          Our <span className="text-slate-400">Capabilities</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden py-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {duplicatedServices.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <div
                key={i}
                className="w-87.5 shrink-0 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-500/30 hover:bg-white hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500 transition-all duration-500">
                    {IconComponent && (
                      <IconComponent
                        className="text-slate-400 group-hover:text-blue-600"
                        size={24}
                      />
                    )}
                  </div>
                  <ArrowUpRight
                    className="text-slate-300 group-hover:text-blue-600 transition-colors"
                    size={20}
                  />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed whitespace-normal font-medium">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
