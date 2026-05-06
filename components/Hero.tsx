"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-slate-50 pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-blue-400/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 text-blue-600 text-[11px] font-bold mb-8 uppercase tracking-[0.25em]">
          <Sparkles size={14} className="text-blue-500" />
          The Future of Intelligence
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.05] text-slate-900 tracking-tight">
          Digital Visions <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-indigo-500 to-blue-400">
            Beyond Boundaries
          </span>
        </h1>

        <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl font-medium leading-relaxed">
          At <span className="text-slate-900 font-bold">Basira</span>, we weave
          code into magic and data into wisdom. Building intelligent ecosystems
          that don&rsquo;t just solve problems, but evolve with your ambitions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <Link
            href="#services"
            className="group px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-blue-600/15 active:scale-95"
          >
            Explore Our Craft
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="#contact"
            className="px-10 py-4 border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-white hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm active:scale-95"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
