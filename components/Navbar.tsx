"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#about", label: "عن بصيرة" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-cyan-400 tracking-wider"
        >
          BASIRA <span className="text-slate-100">بصيرة</span>
        </Link>

        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          aria-label="فتح القائمة"
          className="md:hidden text-slate-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-slate-300 hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
