"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      dir="ltr"
      className="bg-white py-6 px-16 border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="text-2xl font-black text-slate-900 tracking-tighter uppercase">
            BASIRA <span className="text-blue-600">LENS</span>
          </div>
        </div>

        <div className="flex gap-8 text-slate-400 text-[11px] font-black uppercase tracking-widest">
          <a
            href="#"
            className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600/20 pb-1"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600/20 pb-1"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/970597238788"
            className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600/20 pb-1"
          >
            WhatsApp
          </a>
        </div>

        <div className="text-slate-400 text-[10px] font-black uppercase tracking-[3px]">
          &copy; {currentYear} BASIRA GLOBAL
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-blue-100 to-transparent" />
    </footer>
  );
}
