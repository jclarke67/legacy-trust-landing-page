
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to section when clicking on navigation links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle hash change and initial hash
    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main content with padding to account for fixed header */}
      <main className="pt-16">
        <HeroSection />
        
        <section id="services">
          <BenefitsSection />
        </section>
        
        <SocialProofSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="faq">
          <FAQSection />
        </section>
        
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
