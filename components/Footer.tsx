"use client";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-6 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2 text-center md:text-right">
          <div className="text-2xl font-black text-white tracking-tighter uppercase">
            BASIRA <span className="text-blue-500">LENS</span>
          </div>
        </div>
        <div className="flex gap-10 text-zinc-500 text-xs font-bold uppercase tracking-widest">
          <a
            href="#"
            className="hover:text-blue-400 transition-all border-b border-transparent hover:border-blue-500/50 pb-1"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-cyan-400 transition-all border-b border-transparent hover:border-cyan-500/50 pb-1"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/970597238788"
            className="hover:text-blue-400 transition-all border-b border-transparent hover:border-blue-500/50 pb-1"
          >
            WhatsApp
          </a>
        </div>
        <div className="text-zinc-800 text-[10px] font-black uppercase tracking-[4px]">
          &copy; {new Date().getFullYear()} BASIRA GLOBAL
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent blur-[1px]" />
    </footer>
  );
}
