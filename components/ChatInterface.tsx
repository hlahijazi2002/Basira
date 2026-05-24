"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Loader2, Sparkles, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatInterfaceProps {
  onClose?: () => void;
}

const hasArabic = (text: string) => /[\u0600-\u06FF]/.test(text);

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const sessionIdRef = useRef(`basira-chat-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: isArabic
        ? "مرحباً بك، أنا مساعد بصيرة الذكي. كيف يمكنني مساعدتك اليوم؟"
        : "Hello, I am the BasiraLens assistant. How can I help you?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: isArabic
          ? "مرحباً بك، أنا مساعد بصيرة الذكي. كيف يمكنني مساعدتك اليوم؟"
          : "Hello, I am the BasiraLens assistant. How can I help you?",
      },
    ]);
  }, [isArabic]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 20000);
      const apiUrl = process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:8003";
      const response = await fetch(`${apiUrl}/api/v1/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, session_id: sessionIdRef.current }),
        signal: controller.signal,
      });
      window.clearTimeout(timeoutId);

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: isArabic
            ? "تعذر الاتصال بالمساعد الآن. يرجى التأكد من تشغيل الخادم والمحاولة مرة أخرى."
            : "The assistant request timed out. Please restart the backend and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
      <div className="p-5 border-b border-slate-100 bg-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 leading-none">
              {isArabic ? "مساعد بصيرة Lens" : "BasiraLens Assistant"}
            </h2>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                {isArabic ? "متصل الآن" : "AI Online"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-500 opacity-50" />
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              aria-label={isArabic ? "إغلاق الشات" : "Close chat"}
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50 custom-scrollbar">
        {messages.map((m, i) => {
          const messageIsArabic = hasArabic(m.content);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex gap-3 max-w-[85%] ${
                  m.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                    m.role === "user" ? "bg-blue-600" : "bg-white border border-slate-200"
                  }`}
                >
                  {m.role === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div
                  dir={messageIsArabic ? "rtl" : "ltr"}
                  className={`p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm whitespace-pre-line ${
                    messageIsArabic ? "text-right" : "text-left"
                  } ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-white text-slate-700 rounded-tl-none border border-slate-100"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            </motion.div>
          );
        })}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
              </div>
              <div className="p-3 bg-white text-slate-400 rounded-2xl rounded-tl-none border border-slate-100 italic text-[13px]">
                {isArabic ? "جاري المعالجة..." : "Thinking..."}
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-5 bg-white border-t border-slate-100">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isArabic ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
            dir={isArabic ? "rtl" : "ltr"}
            className={`w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-slate-400 text-sm ${
              isArabic ? "pr-4 pl-12 text-right" : "pl-4 pr-12"
            }`}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={`absolute top-1.5 bottom-1.5 px-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-lg transition-all flex items-center justify-center group ${
              isArabic ? "left-1.5" : "right-1.5"
            }`}
          >
            <Send className={`w-4 h-4 ${isLoading ? "hidden" : ""}`} />
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          </button>
        </form>
        <p className="mt-3 text-[9px] text-center text-slate-400 uppercase tracking-widest font-bold">
          {isArabic ? "مدعوم بواسطة بصيرة Lens AI" : "Powered by BasiraLens AI"}
        </p>
      </div>
    </div>
  );
}
