import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import PremiumGateway from '../components/PremiumGateway';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  useDocumentTitle('SeguiProo - Mais Seguidores. Mais Credibilidade.');

  return (
    <div className="page-home">
      <Hero />
      <TrustBar />
      <PremiumGateway />
      <Process />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
