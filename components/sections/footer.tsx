import Image from "next/image";
import { Twitter, Github, DiscIcon as Discord } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="w-full relative py-12 border-t border-border/40 z-10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="RugGuard AI Logo"
                width={32}
                height={32}
                className="rounded-lg border border-primary/20 shadow-[0_0_10px_rgba(28,77,255,0.4)]"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                RugGuard AI
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Advanced Web3 security powered by predictive artificial intelligence. Empowering investors to identify risks before deploying capital on-chain.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">Scanner Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-brand-glow transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-glow transition-colors" aria-label="Discord">
                <Discord className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-glow transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm">
          <p>© 2026 RugGuard AI. All rights reserved. Not financial advice.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
