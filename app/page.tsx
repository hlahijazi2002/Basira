import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

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
