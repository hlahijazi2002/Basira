import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/Services"), {
  ssr: true,
  loading: () => <div className="h-20" />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="relative bg-slate-950">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
