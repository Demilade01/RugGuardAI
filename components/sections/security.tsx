import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export function SecuritySection() {
  return (
    <section className="relative w-full py-24 bg-linear-to-b from-transparent to-primary/5 border-t border-border/40 z-10" id="security">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20 shadow-[0_0_30px_rgba(28,77,255,0.2)]">
          <ShieldCheck className="h-12 w-12" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Don’t Get Rugged Again</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          Combine the transparency of blockchain with the predictive power of Artificial Intelligence. Join thousands of secure investors today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="glass-button h-14 px-10 text-lg">
            Launch App
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 text-lg glass border-brand-glow/50 text-brand-glow hover:bg-brand-glow/10">
            Connect Wallet
          </Button>
        </div>
      </div>
    </section>
  );
}
