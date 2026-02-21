import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import EmergencyAlertsSection from './components/EmergencyAlertsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <EmergencyAlertsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
