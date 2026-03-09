# Desynest — Next.js + TypeScript Template

> **Scroll. Save. Create.**  
> The all-in-one mobile-first creative platform.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ 
- npm / yarn / pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Card.tsx
│   └── sections/         # Page sections
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── Competitors.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts          # Helper functions (cn, slugify, truncate)
└── styles/
    └── globals.css        # Global styles + Tailwind base
```

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `brand-500` | `#6366f1` | Primary actions, highlights |
| `accent-violet` | `#cc5de8` | Secondary accents |
| `accent-coral` | `#ff6b6b` | Alerts, attention |
| `accent-mint` | `#51cf66` | Success states |
| `surface` | `#0f0f14` | Page background |
| `surface-card` | `#16161f` | Card backgrounds |

### Typography
- **Display**: Syne (headings, labels, buttons)
- **Body**: DM Sans (paragraphs, descriptions)
- **Mono**: JetBrains Mono (code)

### Utility Classes
- `.text-gradient` — Indigo → Violet → Coral gradient text
- `.glass` — Glassmorphism effect
- `.glow-primary` — Brand glow shadow
- `.bg-noise` — Subtle noise texture overlay

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Fonts | Google Fonts (Syne + DM Sans) |

---

## 📦 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

---

## 🔮 Next Steps

- [ ] Add auth (NextAuth.js or Clerk)
- [ ] Connect to backend (Railway.app API)
- [ ] Add Framer Motion animations
- [ ] Build out `/dashboard` route
- [ ] Add `next-i18next` for localization
- [ ] Set up AI feature endpoints

---

Built with ❤️ by the **Desynest Team**
