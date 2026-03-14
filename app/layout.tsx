import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RugGuard AI | Web3 Security Agent",
  description: "AI-Powered Protection Against Crypto Rug Pulls with Real-Time Scanning",
  icons: {
    icon: "/logo.jpg"
  },
  openGraph: {
    title: "RugGuard AI | Web3 Security",
    description: "Stay ahead of malicious contracts with our AI security agent.",
    type: "website",
    siteName: "RugGuard AI",
    images: ["/logo.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "RugGuard AI",
    description: "AI-Powered Protection Against Crypto Rug Pulls",
    images: ["/logo.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-500 ease-in-out`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
