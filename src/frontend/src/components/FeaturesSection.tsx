import { Brain, Activity, Heart, Shield, Bell, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Health Analysis',
      description: 'Advanced machine learning algorithms analyze your health data to provide intelligent insights and recommendations.',
      gradient: 'from-primary/10 to-primary/5'
    },
    {
      icon: Activity,
      title: 'All-in-One Wellness Tracking',
      description: 'Track fitness, nutrition, sleep, and mental health in a single integrated platform for complete visibility.',
      gradient: 'from-accent/10 to-accent/5'
    },
    {
      icon: Heart,
      title: 'Mental & Physical Health Monitoring',
      description: 'Holistic approach that monitors both your physical fitness and mental well-being for balanced health.',
      gradient: 'from-chart-1/10 to-chart-1/5'
    },
    {
      icon: Shield,
      title: 'Preventive Care Recommendations',
      description: 'Proactive health suggestions to prevent issues before they arise, keeping you healthy long-term.',
      gradient: 'from-chart-2/10 to-chart-2/5'
    },
    {
      icon: Bell,
      title: 'Real-Time Emergency Alerts',
      description: 'Instant notifications when abnormal health patterns are detected, ensuring immediate awareness.',
      gradient: 'from-destructive/10 to-destructive/5'
    },
    {
      icon: MapPin,
      title: 'GPS-Based Emergency Assistance',
      description: 'Automatic location-based routing to the nearest hospital or emergency service when critical alerts trigger.',
      gradient: 'from-chart-4/10 to-chart-4/5'
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Health Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for complete health management in one intelligent platform
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
