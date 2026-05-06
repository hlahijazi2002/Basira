"use client";

import { motion } from "framer-motion";
import {
  Send,
  User,
  AtSign,
  MessageSquare,
  Building,
  Globe,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      dir="ltr"
      className="py-24 bg-white px-16 relative border-t border-slate-100 overflow-hidden text-left"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%] w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Globe size={12} /> Get in Touch
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tighter">
              Let&rsquo;s build
              <span className="text-blue-600"> the future</span>
            </h2>

            <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed max-w-md">
              Whether you have a groundbreaking idea or a technical challenge,
              Basira is here to engineer your digital success.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-600 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-blue-500 transition-colors">
                  <AtSign size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    Email us
                  </p>
                  <span className="text-sm font-bold text-slate-900">
                    info@basira.agency
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-cyan-500 transition-colors">
                  <MessageSquare size={20} className="text-cyan-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    Chat with us
                  </p>
                  <span className="text-sm font-bold text-slate-900">
                    +970 59 000 0000
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* الجانب الأيمن: النموذج (Form) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[50%] w-full"
          >
            <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-sm relative">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 ml-1">
                      Full Name
                    </label>
                    <div className="relative group">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors"
                        size={18}
                      />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 ml-1">
                      Company
                    </label>
                    <div className="relative group">
                      <Building
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors"
                        size={18}
                      />
                      <input
                        type="text"
                        placeholder="Optional"
                        className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-slate-400 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <AtSign
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors"
                      size={18}
                    />
                    <input
                      type="email"
                      required
                      placeholder="hello@example.com"
                      className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-slate-400 ml-1">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-4 text-slate-900 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
                >
                  <span className="text-sm uppercase tracking-widest">
                    Launch Inquiry
                  </span>
                  <Send
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
