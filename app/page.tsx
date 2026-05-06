import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="relative bg-slate-950">
      <Hero />
      <About />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
