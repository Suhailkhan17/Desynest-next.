import { Check, X } from "lucide-react";

const competitors = [
  { name: "Pinterest", weakness: "Passive — can't edit or remix" },
  { name: "Canva", weakness: "Overcrowded, generic, paywall-heavy" },
  { name: "CapCut", weakness: "Video-only, not professional" },
  { name: "Figma", weakness: "Too complex for casual creators" },
];

const desynestFeatures = [
  "Scroll + Save + Create in one app",
  "AI-powered, fresh templates",
  "Mobile-first & offline-ready",
  "Localized cultural design packs",
  "Community + Creator marketplace",
  "3–5 tap micro-creation flow",
];

export function Competitors() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">
            The Gap
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Every other app solves
            <br />
            <span className="text-gradient">half the problem.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Existing tools are great at one thing. Desynest connects the full
            creative journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Competitors */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-white/40 text-sm uppercase tracking-widest mb-6">
              The competition
            </h3>
            {competitors.map((comp) => (
              <div
                key={comp.name}
                className="flex items-start gap-4 p-4 rounded-xl bg-surface-card border border-surface-border"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-coral/10 border border-accent-coral/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X size={14} className="text-accent-coral" />
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm mb-1">
                    {comp.name}
                  </p>
                  <p className="text-white/40 text-xs">{comp.weakness}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desynest */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-5 blur-sm" />
            <div className="relative glass rounded-2xl p-6 border border-brand-500/30 glow-primary">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center shadow-brand">
                  <span className="text-white font-display font-bold text-sm">D</span>
                </div>
                <h3 className="font-display font-bold text-white">Desynest</h3>
                <span className="ml-auto text-xs text-brand-400 font-display font-semibold bg-brand-500/10 border border-brand-500/20 rounded-full px-3 py-1">
                  All-in-one
                </span>
              </div>

              <div className="space-y-3">
                {desynestFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-mint/10 border border-accent-mint/30 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-accent-mint" />
                    </div>
                    <p className="text-white/80 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
