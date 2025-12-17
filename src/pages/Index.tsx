import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PracticesSection } from "@/components/PracticesSection";
import { EventSection } from "@/components/EventSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { GallerySection } from "@/components/GallerySection";
import { PartnersSection } from "@/components/PartnersSection";
import { DonationSection } from "@/components/DonationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticesSection />
        <EventSection />
        <BenefitsSection />
        <GallerySection />
        <PartnersSection />
        <DonationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
