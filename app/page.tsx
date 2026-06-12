import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FloatingChat from "@/components/FloatingChat";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import VisionMission from "@/components/VisionMission";

export default function Home() {
  return (
    <main className="relative bg-slate-950">
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <WhyUs />
      <Process />
      <Industries />
      <CaseStudies />
      <Contact />
      <Footer />
      <FloatingChat />
    </main>
  );
}
