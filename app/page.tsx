import { BackgroundBeams } from "@/components/background-beams";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { ProductPreviewSection } from "@/components/sections/product-preview";
import { SecuritySection } from "@/components/sections/security";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden">
      <BackgroundBeams />
      <Navbar />
      
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ProductPreviewSection />
      <SecuritySection />

      <FooterSection />
    </main>
  );
}
