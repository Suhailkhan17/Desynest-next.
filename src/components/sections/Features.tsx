import { Card } from "@/components/ui/Card";
import {
  Sparkles,
  Zap,
  Globe,
  Users,
  WifiOff,
  ShoppingBag,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    label: "Micro-Creation",
    title: "Design in 3–5 taps",
    description:
      "Skip the menus. Smart defaults and AI-assisted templates get you from blank to beautiful in seconds.",
    color: "text-accent-peach",
    bg: "bg-accent-peach/10",
    border: "border-accent-peach/20",
  },
  {
    icon: Sparkles,
    label: "AI-Powered",
    title: "Your AI design partner",
    description:
      "Type \"festival poster\" and Desynest suggests layouts, fonts, and color palettes. Hyper-personalized for you.",
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
  },
  {
    icon: Globe,
    label: "Localized",
    title: "Globally inclusive design",
    description:
      "Region-specific packs for Diwali, Ramadan, Carnival, and more. Your culture, your aesthetic.",
    color: "text-accent-mint",
    bg: "bg-accent-mint/10",
    border: "border-accent-mint/20",
  },
  {
    icon: WifiOff,
    label: "Offline-First",
    title: "Create without internet",
    description:
      "Unstable connection? No problem. Design offline and sync everything when you're back online.",
    color: "text-accent-sky",
    bg: "bg-accent-sky/10",
    border: "border-accent-sky/20",
  },
  {
    icon: Users,
    label: "Community",
    title: "A creative ecosystem",
    description:
      "Share designs, collab on projects, remix others' work. Desynest is a tool AND a community.",
    color: "text-accent-violet",
    bg: "bg-accent-violet/10",
    border: "border-accent-violet/20",
  },
  {
    icon: ShoppingBag,
    label: "Monetization",
    title: "Earn from your creativity",
    description:
      "Sell your templates and designs inside Desynest. Turn your creativity into income. (Coming soon)",
    color: "text-accent-coral",
    bg: "bg-accent-coral/10",
    border: "border-accent-coral/20",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">
            Why Desynest
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Everything a creator needs.
            <br />
            <span className="text-gradient">Nothing they don&apos;t.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            We took what was best from Pinterest, Canva, and CapCut then
            rebuilt it for the mobile first generation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <Card key={feature.title} hover className="group">
              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-xl ${feature.bg} border ${feature.border} mb-5`}
              >
                <feature.icon size={20} className={feature.color} />
              </div>

              {/* Label */}
              <p className={`text-xs font-display font-semibold tracking-widest uppercase mb-2 ${feature.color}`}>
                {feature.label}
              </p>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
