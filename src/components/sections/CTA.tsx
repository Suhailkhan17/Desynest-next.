import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-surface to-surface" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-violet/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Ready to create
          <br />
          <span className="text-gradient">without limits?</span>
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join thousands of creators on the waitlist. Be first to access
          AI-powered design, localized templates, and a community built for
          you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="group">
            Join the Waitlist
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
          <Button variant="outline" size="lg">
            Learn more
          </Button>
        </div>

        <p className="mt-6 text-white/30 text-sm">
          Free to join. No credit card required.
        </p>
      </div>
    </section>
  );
}
