import { BackgroundBeams } from "@/components/background-beams";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { ProductPreviewSection } from "@/components/sections/product-preview";
import { SecuritySection } from "@/components/sections/security";

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

      {/* Footer */}
      <footer className="w-full py-8 border-t border-border/40 text-center text-muted-foreground text-sm z-10 bg-background/80 backdrop-blur-md">
        <p>© 2026 RugGuard AI. All rights reserved. Not financial advice.</p>
      </footer>
    </main>
  );
}
