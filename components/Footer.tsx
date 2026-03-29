import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-slate-800 text-center px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
        <div className="text-lg font-semibold text-slate-300">
          BASIRA <span className="text-cyan-500">Agency</span> بصيرة
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} وكالة بصيرة الرقمية. جميع الحقوق
          محفوظة.
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="#services" className="hover:text-cyan-400">
            الخدمات
          </Link>
          <Link href="#contact" className="hover:text-cyan-400">
            تواصل
          </Link>
          <Link href="/privacy" className="hover:text-cyan-400">
            الخصوصية
          </Link>
        </div>
      </div>
    </footer>
  );
}
