"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 mb-8 animate-in fade-in zoom-in duration-1000">
        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#1C4DFF]"></span>
        <span className="text-sm font-medium text-foreground/80">RugGuard AI Agent active</span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
        AI-Powered Protection Against Crypto Rug Pulls
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
        RugGuard analyzes smart contracts and token behavior using AI to detect rug pull risks before you invest. Secure your portfolio with on-chain transparency.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
        <Button size="lg" className="glass-button h-12 px-8 text-base">
          Launch App <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline" className="h-12 px-8 text-base glass border-primary/20 hover:bg-primary/10">
          View Docs
        </Button>
      </div>

      {/* Abstract Hero Visual (AI Scanner Simulation) */}
      <div className="relative mt-20 w-full max-w-4xl mx-auto h-[300px] md:h-[400px] rounded-2xl glass-card flex items-center justify-center animate-in zoom-in duration-1000 delay-700">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-primary/10 to-transparent pointer-events-none" />
        
        <div className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_20px_#1C4DFF] animate-scan opacity-50" />
        
        <div className="text-center space-y-4 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-primary/10 backdrop-blur-md mb-2 border border-primary/30">
            <Image 
              src="/logo.jpg" 
              alt="Logo" 
              width={72} 
              height={72} 
              className="rounded-2xl shadow-[0_0_30px_rgba(28,77,255,0.4)]"
            />
          </div>
          <h3 className="text-xl font-mono font-semibold text-primary tracking-widest">SCANNING CONTRACT</h3>
          <p className="text-sm font-mono text-muted-foreground bg-black/40 dark:bg-black/60 px-4 py-2 rounded-lg border border-white/5">
            0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984
          </p>
          <div className="flex justify-center gap-2 mt-4">
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150" />
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
