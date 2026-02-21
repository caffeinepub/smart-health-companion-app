import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'smart-health-companion';

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Tagline */}
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              Smart Health. Smarter Living.
            </h3>
            <p className="text-muted-foreground">
              Your AI-powered companion for complete well-being
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Smart Health Companion. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
