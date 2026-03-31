"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "خدماتنا", href: "#services" },
    { name: "عن بصيرة", href: "#about" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-500 px-6 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 flex items-center justify-between px-6 py-3 rounded-2xl border ${
          isScrolled
            ? "bg-zinc-900/70 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-xl font-black text-white tracking-tighter uppercase">
            BASIRA <span className="text-blue-500">LENS</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-400 text-sm font-bold hover:text-blue-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="hidden md:block gap-4">
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] active:scale-95"
          >
            ابدأ مشروعك
          </Link>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-8 bg-zinc-900 border border-white/10 rounded-3xl backdrop-blur-2xl z-101 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-300 text-lg font-bold hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/5" />
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20"
              >
                ابدأ مشروعك الآن
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
