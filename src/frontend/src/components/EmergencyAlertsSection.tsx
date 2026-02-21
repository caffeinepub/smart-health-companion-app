import { AlertTriangle, Bell, MapPin } from 'lucide-react';

export default function EmergencyAlertsSection() {
  const abnormalConditions = [
    { icon: '💓', label: 'Extreme heart rate' },
    { icon: '😰', label: 'High stress levels' },
    { icon: '😴', label: 'Critical sleep deprivation' }
  ];

  const emergencySteps = [
    {
      icon: AlertTriangle,
      title: 'Automatic Alert Trigger',
      description: 'System detects abnormal health patterns'
    },
    {
      icon: Bell,
      title: 'Immediate Notification',
      description: 'User receives instant alert on their device'
    },
    {
      icon: MapPin,
      title: 'GPS-Based Assistance',
      description: 'Redirects to nearest hospital or emergency service'
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>Emergency Protection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Emergency Health Alerts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our system includes an intelligent emergency health alert feature.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Abnormal Conditions */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Monitored Conditions</h3>
              <p className="text-muted-foreground mb-6">
                If the user's health data shows abnormal conditions such as:
              </p>
              <div className="space-y-4">
                {abnormalConditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50"
                  >
                    <span className="text-3xl">{condition.icon}</span>
                    <span className="text-foreground font-medium">{condition.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Icon */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src="/assets/generated/emergency-alert-icon.dim_256x256.png"
                  alt="Emergency Alert"
                  className="w-64 h-64 object-contain"
                />
                <div className="absolute inset-0 bg-destructive/5 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* Emergency Response Steps */}
          <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-2xl p-8 md:p-12 border border-destructive/20">
            <h3 className="text-2xl font-bold mb-8 text-center">Emergency Response System</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-xl p-6 shadow-md border border-border h-full">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h4 className="font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < emergencySteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-destructive/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
