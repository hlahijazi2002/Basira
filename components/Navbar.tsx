"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_services"), href: "#services" },
    { name: t("nav_case_studies"), href: "#case-studies" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-500 px-6 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-500 ${
          isScrolled
            ? "bg-slate-50/80 border-slate-200/60 backdrop-blur-xl shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black text-slate-900 tracking-tighter uppercase shrink-0"
        >
          BASIRA <span className="text-blue-600">LENS</span>
        </Link>

        {/*  Desktop Navigation*/}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-600 text-[13px] uppercase tracking-widest font-bold hover:text-blue-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher />
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] uppercase tracking-wider font-bold rounded-xl transition-transform active:scale-95 shadow-md shadow-blue-600/10"
          >
            {t("nav_cta")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="text-slate-900 p-2 outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-6 right-6 p-8 bg-white border border-slate-200 rounded-3xl shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 text-lg font-bold hover:text-blue-600 uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold uppercase tracking-wider"
              >
                {t("nav_cta_mobile")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
