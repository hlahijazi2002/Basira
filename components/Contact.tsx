"use client";

import { motion } from "framer-motion";
import {
  Send,
  User,
  AtSign,
  MessageSquare,
  Building,
  Globe,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, useState } from "react";

export default function Contact() {
  const { t, language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setError(null);

    const formData = new FormData(formRef.current);
    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
      template_params: {
        user_name: formData.get("user_name"),
        user_email: formData.get("user_email"),
        user_company: formData.get("user_company"),
        message: formData.get("message"),
      },
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        formRef.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const errorData = await response.text();
        throw new Error(errorData || "Failed to send message");
      }
    } catch (err) {
      setError(language === 'ar' ? "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى." : "Failed to send message. Please try again.");
      console.error("EmailJS Error:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-24 bg-white px-16 relative border-t border-slate-100 overflow-hidden ${language === 'ar' ? 'text-right' : 'text-left'}`}
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%] w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Globe size={12} /> {t("contact_badge")}
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tighter">
              {t("contact_title_part1")}
              <span className="text-blue-600">{t("contact_title_part2")}</span>
            </h2>

            <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed max-w-md">
              {t("contact_desc")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-600 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-blue-500 transition-colors">
                  <AtSign size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    {t("contact_email_us")}
                  </p>
                  <a 
                    href="mailto:basira.ai3333@gmail.com"
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    basira.ai3333@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-cyan-500 transition-colors">
                  <MessageSquare size={20} className="text-cyan-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    {t("contact_chat_with_us")}
                  </p>
                  <a 
                    href="https://wa.me/970597238788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors"
                  >
                    +970 597 238 788
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[50%] w-full"
          >
            <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-sm relative">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 ms-1">
                      {t("contact_form_name")}
                    </label>
                    <div className="relative group">
                      <User
                        className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors`}
                        size={18}
                      />
                      <input
                        type="text"
                        name="user_name"
                        required
                        placeholder={language === 'ar' ? 'جون دو' : 'John Doe'}
                        className={`w-full bg-white border border-slate-200 rounded-2xl py-4 ${language === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-slate-900 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-300`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 ms-1">
                      {t("contact_form_company")}
                    </label>
                    <div className="relative group">
                      <Building
                        className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors`}
                        size={18}
                      />
                      <input
                        type="text"
                        name="user_company"
                        placeholder={t("contact_form_company_placeholder")}
                        className={`w-full bg-white border border-slate-200 rounded-2xl py-4 ${language === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-slate-900 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-300`}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-slate-400 ms-1">
                    {t("contact_form_email")}
                  </label>
                  <div className="relative group">
                    <AtSign
                      className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors`}
                      size={18}
                    />
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="hello@example.com"
                      className={`w-full bg-white border border-slate-200 rounded-2xl py-4 ${language === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-slate-900 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-300`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-slate-400 ms-1">
                    {t("contact_form_message")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={t("contact_form_message_placeholder")}
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-4 text-slate-900 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  disabled={isSending || isSuccess}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 ${
                    isSuccess ? "bg-green-500 text-white" : "bg-slate-900 hover:bg-blue-600 text-white shadow-slate-900/10"
                  }`}
                >
                  {isSending ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : isSuccess ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} />
                      <span className="text-sm uppercase tracking-widest">
                        {language === 'ar' ? "تم الإرسال بنجاح" : "Message Sent"}
                      </span>
                    </div>
                  ) : (
                    <>
                      <span className="text-sm uppercase tracking-widest">
                        {t("contact_form_submit")}
                      </span>
                      <Send
                        size={18}
                        className={`transition-transform ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                      />
                    </>
                  )}
                </motion.button>
                {error && (
                  <p className="text-red-500 text-xs font-bold text-center mt-2 uppercase tracking-tighter">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
