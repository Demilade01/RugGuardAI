import { Card } from "@/components/ui/card";
import { FileCode2, Activity, Users, Bell, CheckCircle, Lock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    { icon: FileCode2, title: "AI Contract Scanner", desc: "Detects hidden mint functions, honeypots, and malicious proxies." },
    { icon: Activity, title: "Liquidity Monitoring", desc: "Tracks liquidity depth, lock durations, and suspicious removals." },
    { icon: Users, title: "Ownership Risk Detection", desc: "Analyzes wallet concentration and developer team history." },
    { icon: Bell, title: "Real-Time Alerts", desc: "Instant notifications when risk parameters change post-launch." },
    { icon: CheckCircle, title: "Smart Contract Verification", desc: "Cross-references source code verified on block explorers." },
    { icon: Lock, title: "On-Chain Transparency", desc: "All risk scores are permanently recorded for community review." }
  ];

  return (
    <section className="relative w-full py-24 bg-black/5 dark:bg-white/5 border-y border-border/40 z-10" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Protection</h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to navigate Web3 safely, powered by next-generation machine learning.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300 group">
              <feature.icon className="h-8 w-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(28,77,255,0.8)] transition-all" />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
