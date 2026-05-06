"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { team } from "../data";

export default function Team() {
  return (
    <section id="team" dir="ltr" className="py-24 bg-white px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em] block mb-2">
              Our Talent
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Meet the <span className="text-blue-700">Experts</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs font-medium italic">
            A diverse team of engineers and designers building the future of
            digital lens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-100 mb-6 border border-slate-100 group-hover:border-blue-500/20 transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="flex items-center justify-between gap-2 px-2">
                <div className="overflow-hidden">
                  <h3 className="text-lg font-black text-slate-900 uppercase truncate tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[10px] text-blue-600 font-bold tracking-widest uppercase truncate">
                    {member.role}
                  </p>
                </div>

                <Link href={`/team/${member.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 shrink-0 flex items-center justify-center text-slate-800 bg-slate-50 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 shadow-sm"
                  >
                    <Eye size={20} strokeWidth={2.5} />{" "}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
