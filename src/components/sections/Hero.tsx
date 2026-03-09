import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-violet/5 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-accent-coral/5 blur-[60px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="primary" className="gap-2">
            <Sparkles size={12} />
            Now in Early Access Join the waitlist
          </Badge>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6 animate-slide-up">
          <span className="text-white">Create without</span>
          <br />
          <span className="text-gradient">limits.</span>
        </h1>

        {/* Sub-tagline */}
        <p className="font-display text-2xl md:text-3xl text-white/40 mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Scroll. Save. Create.
        </p>

        {/* Description */}
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 font-body leading-relaxed animate-slide-up" style={{ animationDelay: "0.15s" }}>
          The all-in-one creative platform for mobile- first creators. Discover
          inspiration, design in seconds with AI, and share with your community
          all without switching apps.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="primary" size="lg" className="group">
            Get Early Access
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
          <Button variant="secondary" size="lg">
            See how it works
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-accent-peach" />
            <span>Design in 3–5 taps</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-accent-peach" />
            <span>Offline-first mode</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-accent-peach" />
            <span>AI-powered templates</span>
          </div>
        </div>

        {/* Floating mock cards */}
        {/* <div className="relative mt-20 mx-auto max-w-3xl h-48 hidden md:block">
          <div className="absolute left-0 top-4 w-36 h-44 rounded-2xl glass border border-brand-500/20 glow-primary animate-float rotate-[-8deg] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-brand-600/30 to-accent-violet/20 flex items-end p-3">
              <span className="text-xs text-white/60 font-display">Festival Flyer</span>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-44 h-44 rounded-2xl glass border border-brand-500/30 glow-accent overflow-hidden" style={{ animationDelay: "2s" }}>
            <div className="w-full h-full bg-gradient-to-br from-accent-violet/30 to-accent-coral/20 flex items-end p-3">
              <span className="text-xs text-white/60 font-display">Story Template</span>
            </div>
          </div>
          <div className="absolute right-0 top-6 w-36 h-44 rounded-2xl glass border border-brand-500/20 animate-float rotate-[8deg] overflow-hidden" style={{ animationDelay: "4s" }}>
            <div className="w-full h-full bg-gradient-to-br from-accent-peach/20 to-accent-mint/20 flex items-end p-3">
              <span className="text-xs text-white/60 font-display">Brand Kit</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
