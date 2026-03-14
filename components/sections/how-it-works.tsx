import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="relative w-full py-24 z-10" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 glass border-primary/30 text-primary">Intelligent Analysis</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How RugGuard Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced AI agent continuously monitors the blockchain, analyzing contract code, liquidity health, and developer behavior in real-time.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-linear-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 -z-10" />
          
          <Card className="glass-card p-8 w-full md:w-1/3 text-center border-t-4 border-t-primary/50 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass bg-background flex items-center justify-center border-primary/30 text-primary font-bold shadow-[0_0_15px_rgba(28,77,255,0.3)]">
              1
            </div>
            <Search className="h-10 w-10 mx-auto text-primary mb-4 mt-2" />
            <h3 className="text-xl font-bold mb-2">Scan Token</h3>
            <p className="text-sm text-muted-foreground">Input any token address or let our agent monitor new pairs automatically.</p>
          </Card>

          <ArrowRight className="hidden md:block h-8 w-8 text-primary shadow-sm" />

          <Card className="glass-card p-8 w-full md:w-1/3 text-center border-t-4 border-t-brand-glow/50 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass bg-background flex items-center justify-center border-brand-glow/30 text-brand-glow font-bold shadow-[0_0_15px_rgba(79,124,255,0.3)]">
              2
            </div>
            <Zap className="h-10 w-10 mx-auto text-brand-glow mb-4 mt-2" />
            <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
            <p className="text-sm text-muted-foreground">Neural networks analyze the bytecode, liquidity lock status, and holder distribution.</p>
          </Card>

          <ArrowRight className="hidden md:block h-8 w-8 text-brand-glow shadow-sm" />

          <Card className="glass-card p-8 w-full md:w-1/3 text-center border-t-4 border-t-emerald-500/50 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass bg-background flex items-center justify-center border-emerald-500/30 text-emerald-500 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              3
            </div>
            <ShieldCheck className="h-10 w-10 mx-auto text-emerald-500 mb-4 mt-2" />
            <h3 className="text-xl font-bold mb-2">Risk Score</h3>
            <p className="text-sm text-muted-foreground">Receive an instant, transparent risk score from 0-100 before you approve any tx.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
