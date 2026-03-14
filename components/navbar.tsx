"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex h-20 items-center justify-between px-6 md:px-12 glass shadow-none border-b border-border/40">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.jpg"
          alt="RugGuard AI Logo"
          width={40}
          height={40}
          className="rounded-lg border border-primary/20 shadow-[0_0_15px_rgba(28,77,255,0.5)]"
        />
        <span className="text-xl font-bold tracking-tight text-foreground">
          RugGuard
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#demo" className="hover:text-primary transition-colors">Scanner</a>
        <a href="#security" className="hover:text-primary transition-colors">Security</a>
      </div>

      <div className="flex items-center gap-4">
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-primary/10 rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </Button>
        )}
        <Button className="glass-button rounded-full px-6 font-semibold hidden sm:flex">
          Launch App
        </Button>
      </div>
    </nav>
  );
};
