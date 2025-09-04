import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CommunitySection from '@/components/CommunitySection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowToUseSection from '@/components/HowToUseSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-grid-pattern"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-hero-glow mx-auto"></div>
      </div>

      {/* Main Content */}
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <CommunitySection />
        <FeaturesSection />
        <BenefitsSection />
        <HowToUseSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;