const steps = [
  {
    number: "01",
    title: "Scroll & Discover",
    description:
      "Browse a personalized feed of trending designs, templates, and community creations. Save what inspires you.",
    color: "from-brand-500 to-brand-600",
  },
  {
    number: "02",
    title: "Tap to Edit",
    description:
      "Found something you love? Tap it and instantly remix it with your own colors, text, and brand. No blank canvas.",
    color: "from-accent-violet to-brand-500",
  },
  {
    number: "03",
    title: "AI Enhances",
    description:
      "Let AI suggest improvements, auto-resize for different platforms, and generate fresh variations in one tap.",
    color: "from-accent-coral to-accent-violet",
  },
  {
    number: "04",
    title: "Share & Earn",
    description:
      "Publish to your community, share directly to social media, or list your design in the marketplace.",
    color: "from-accent-peach to-accent-coral",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">
            The Flow
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            From scroll to
            <br />
            <span className="text-gradient">published post.</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-base">
            The entire creative journey in one seamless app. No tab-switching,
            no file-exporting, no friction.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-accent-violet/30 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:text-right">
                  <div
                    className={`${
                      index % 2 === 1 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <p
                      className={`font-display text-5xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}
                    >
                      {step.number}
                    </p>
                    <h3 className="font-display font-bold text-xl text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-sm ml-auto">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${step.color} shadow-brand`}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
