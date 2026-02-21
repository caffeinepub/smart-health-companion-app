import { AlertCircle, Activity, Brain, Apple } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-6">
              <AlertCircle className="w-4 h-4" />
              <span>The Challenge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Problem</h2>
          </div>

          {/* Content */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Nowadays, many health apps focus on only one area — either fitness or diet — while ignoring mental well-being and preventive care. There is no single integrated solution that provides a complete picture of a person's overall health.
            </p>

            {/* Fragmented Apps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-muted/50 border border-border/50">
                <Activity className="w-10 h-10 text-muted-foreground mb-3" />
                <h3 className="font-semibold mb-2">Fitness Only</h3>
                <p className="text-sm text-muted-foreground">Limited to exercise tracking</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-muted/50 border border-border/50">
                <Apple className="w-10 h-10 text-muted-foreground mb-3" />
                <h3 className="font-semibold mb-2">Diet Only</h3>
                <p className="text-sm text-muted-foreground">Focuses solely on nutrition</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-muted/50 border border-border/50">
                <Brain className="w-10 h-10 text-muted-foreground mb-3" />
                <h3 className="font-semibold mb-2">Mental Health Ignored</h3>
                <p className="text-sm text-muted-foreground">No holistic approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
