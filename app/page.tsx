import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FloatingChat from "@/components/FloatingChat";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Technologies from "@/components/Technologies";
import CaseStudies from "@/components/CaseStudies";
import VisionMission from "@/components/VisionMission";

export default function Home() {
  return (
    <main className="relative bg-slate-950">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Industries />
      <Technologies />
      <CaseStudies />
      <VisionMission />
      <Contact />
      <Footer />
      <FloatingChat />
    </main>
  );
}
