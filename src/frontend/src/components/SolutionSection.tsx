import { Sparkles, ArrowRight } from 'lucide-react';

export default function SolutionSection() {
  const healthInputs = [
    'Food intake',
    'Physical activity',
    'Stress levels',
    'Sleep hours'
  ];

  const aiOutputs = [
    'Personalized health insights',
    'Preventive health recommendations',
    'Smart lifestyle improvement suggestions'
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We propose an AI-based Smart Health Companion App that delivers a complete and personalized health experience.
            </p>
          </div>

          {/* Solution Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Health Inputs */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/assets/generated/integrated-health-icon.dim_256x256.png"
                  alt="Integrated Health"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-2xl font-bold">Daily Health Inputs</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                The system collects daily health inputs such as:
              </p>
              <ul className="space-y-3">
                {healthInputs.map((input, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{input}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Processing */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/assets/generated/ai-health-analysis.dim_512x512.png"
                  alt="AI Health Analysis"
                  className="w-48 h-48 object-contain"
                />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
                  <ArrowRight className="w-8 h-8 text-primary rotate-180" />
                </div>
              </div>
            </div>

            {/* AI Outputs */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-lg border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">AI-Generated Insights</h3>
              <p className="text-muted-foreground mb-6">
                Using advanced AI analytics, the app generates:
              </p>
              <ul className="space-y-4">
                {aiOutputs.map((output, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{output}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
