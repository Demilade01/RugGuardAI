import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, ShieldAlert } from "lucide-react";

export function ProductPreviewSection() {
  return (
    <section className="relative w-full py-24 z-10" id="demo">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try The Scanner</h2>
          <p className="text-muted-foreground">Paste any token address below to see RugGuard in action.</p>
        </div>

        <Card className="glass-card p-8 border-primary/20 bg-background/60 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input 
              placeholder="0x..." 
              className="h-14 font-mono text-lg bg-background/50 border-primary/30 focus-visible:ring-primary"
              defaultValue="0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
            />
            <Button size="lg" className="glass-button h-14 px-8 w-full md:w-auto">
              <Search className="mr-2 h-5 w-5" /> Analyze
            </Button>
          </div>

          <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5 border border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h4 className="text-xl font-bold flex items-center gap-2">
                  Uniswap <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">Verified</Badge>
                </h4>
                <p className="text-sm font-mono text-muted-foreground">UNI • ERC-20</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">Safety Score</div>
                <div className="text-3xl font-bold text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">98/100</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Contract Security</span>
                <span className="text-emerald-500 font-medium flex items-center gap-1"><CheckCircle className="h-4 w-4"/> Safe</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-full shadow-[0_0_10px_#10B981]"></div>
              </div>

              <div className="flex justify-between items-center text-sm pt-2">
                <span className="text-muted-foreground">Liquidity Locked</span>
                <span className="text-emerald-500 font-medium flex items-center gap-1"><CheckCircle className="h-4 w-4"/> $850M+</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-[95%] shadow-[0_0_10px_#10B981]"></div>
              </div>

              <div className="flex justify-between items-center text-sm pt-2">
                <span className="text-muted-foreground">Creator Wallet Risk</span>
                <span className="text-yellow-500 font-medium flex items-center gap-1"><ShieldAlert className="h-4 w-4"/> Low Risk</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                 <div className="bg-yellow-500 h-2 rounded-full w-[80%] shadow-[0_0_10px_#EAB308]"></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
