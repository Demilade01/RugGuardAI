# RugGuard AI | Web3 Security Agent 🛡️

**Live Demo:** [https://rug-guardai.vercel.app/](https://rug-guardai.vercel.app/)

![RugGuard AI Dark Mode](/dark-brand.jpg)

RugGuard AI is a next-generation Web3 security platform designed to detect and prevent crypto rug pulls. Powered by an advanced AI agent, it continuously monitors the blockchain, analyzing smart contract bytecode, liquidity health, developer behavior, and holder distributions in real-time.

---

## 🚀 Features

- **AI Contract Scanner:** Detects hidden mint functions, honeypots, and malicious proxies.
- **Liquidity Monitoring:** Tracks liquidity depth, lock durations, and suspicious removals.
- **Ownership Risk Detection:** Analyzes wallet concentration and developer team history.
- **Real-Time Risk Scoring:** Get an instant 0-100 safety score before you approve any transaction.
- **Sleek Interface:** Premium dark/light mode UI built with glassmorphism and modern web aesthetics.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
ruguardai/
├── app/                      # Next.js App Router root
│   ├── favicon.ico           # Application icon (mapped from logo)
│   ├── globals.css           # Global Tailwind CSS and custom glassmorphism utilities
│   ├── layout.tsx            # Root layout with comprehensive SEO metadata & ThemeProvider
│   └── page.tsx              # Main landing page assembling all section components
├── components/               # React components directory
│   ├── navbar.tsx            # Main navigation bar with mobile Sheet menu & theme toggle
│   ├── background-beams.tsx  # Animated Framer Motion background
│   ├── theme-provider.tsx    # next-themes wrapper for Dark/Light mode
│   ├── sections/             # Modular landing page sections
│   │   ├── hero.tsx          # Hero section with animated AI scanner visualization
│   │   ├── problem.tsx       # Statistics on crypto scams
│   │   ├── how-it-works.tsx  # Step-by-step explanation
│   │   ├── features.tsx      # Core platform features grid
│   │   ├── product-preview.tsx # Interactive mock scanner component
│   │   ├── security.tsx      # Final CTA and security assurance
│   │   └── footer.tsx        # Application footer with socials and links
│   └── ui/                   # Reusable shadcn/ui components (Button, Card, Input, Sheet, etc.)
├── lib/                      # shared utility functions
│   └── utils.ts              # Tailwind class merging utility (clsx, tailwind-merge)
├── public/                   # Static assets (images, fonts, etc.)
│   └── logo.jpg              # RugGuard AI brand logo
├── components.json           # shadcn/ui configuration
└── package.json              # Project dependencies and scripts
```

## 💻 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser** to see the application.
