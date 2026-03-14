import { Card } from "@/components/ui/card";
import { ShieldAlert, TrendingDown, Users } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="relative w-full py-24 bg-black/5 dark:bg-white/5 border-y border-border/40 z-10" id="problem">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Web3 Security Crisis</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Millions are lost daily to malicious smart contracts and liquidity drains. 
            Traditional auditing is too slow. AI is the answer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card p-8 flex flex-col items-center text-center hover:border-destructive/30 transition-colors duration-300">
            <div className="p-4 rounded-2xl bg-destructive/10 text-destructive mb-6">
              <TrendingDown className="h-8 w-8" />
            </div>
            <h4 className="text-4xl font-bold mb-2">$2.4B+</h4>
            <p className="text-muted-foreground font-medium">Lost to Rug Pulls in 2023</p>
          </Card>

          <Card className="glass-card p-8 flex flex-col items-center text-center hover:border-primary/30 transition-colors duration-300">
            <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-6">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <h4 className="text-4xl font-bold mb-2">90%</h4>
            <p className="text-muted-foreground font-medium">Of fresh tokens have hidden risks</p>
          </Card>

          <Card className="glass-card p-8 flex flex-col items-center text-center hover:border-brand-glow/30 transition-colors duration-300">
            <div className="p-4 rounded-2xl bg-brand-glow/10 text-brand-glow mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h4 className="text-4xl font-bold mb-2">1M+</h4>
            <p className="text-muted-foreground font-medium">Victims affected globally</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
