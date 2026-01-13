import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { LeadMagnetSection } from "@/components/home/LeadMagnetSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <SocialProofSection />
        <LeadMagnetSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
