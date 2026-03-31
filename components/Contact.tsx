"use client";
import { motion } from "framer-motion";
import { Send, User, AtSign, MessageSquare, Building } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-zinc-950 px-6 relative border-t border-white/5 overflow-hidden"
      dir="rtl"
    >
      <div className="absolute top-1/2 left-0 w-100 h-100 bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
        تواصل معنا
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-[40%] text-right w-full"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            لنحول أفكارك <br />
            <span className="text-blue-500">إلى واقع رقمي</span>
          </h2>

          <p className="text-zinc-500 text-lg mb-10 font-light leading-relaxed">
            سواء كان لديك مشروع جديد أو استفسار تقني، فريق بصيرة جاهز لمساعدتك
            في كل خطوة من رحلتك الرقمية.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-zinc-400">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/5">
                <AtSign size={18} className="text-blue-500" />
              </div>
              <span className="text-sm font-medium">info@basira.agency</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-400">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/5">
                <MessageSquare size={18} className="text-cyan-500" />
              </div>
              <span className="text-sm font-medium" dir="ltr">
                +970 59 000 0000
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-[55%] w-full"
        >
          <div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-4xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative group">
                  <User
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-blue-500 transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    required
                    placeholder="الاسم الكريم"
                    className="w-full bg-zinc-950/50 border border-white/5 rounded-xl py-4 pr-12 pl-4 text-white text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-zinc-700 text-right"
                  />
                </div>
                <div className="relative group">
                  <Building
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-blue-500 transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="الشركة (اختياري)"
                    className="w-full bg-zinc-950/50 border border-white/5 rounded-xl py-4 pr-12 pl-4 text-white text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-zinc-700 text-right"
                  />
                </div>
              </div>

              <div className="relative group">
                <AtSign
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-blue-500 transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  required
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-zinc-950/50 border border-white/5 rounded-xl py-4 pr-12 pl-4 text-white text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-zinc-700 text-right"
                />
              </div>
              <div className="relative group">
                <textarea
                  required
                  rows={4}
                  placeholder="كيف يمكننا مساعدتك؟"
                  className="w-full bg-zinc-950/50 border border-white/5 rounded-xl py-4 pr-4 pl-4 text-white text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-zinc-700 resize-none text-right"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/20 active:bg-blue-700"
              >
                <span className="text-base">إرسال الرسالة</span>
                <Send size={18} className="rotate-180" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
