import { useDocumentTitle } from '../hooks/useDocumentTitle';
import InstagramHero from '../components/InstagramHero';
import InstagramGrowthSystem from '../components/InstagramGrowthSystem';
import InstagramGrowth from '../components/InstagramGrowth';

export default function InstagramPage() {
  useDocumentTitle('Instagram Growth - SeguiProo');

  return (
    <div className="page-instagram">
      <InstagramHero />
      <InstagramGrowthSystem />
      {/* We add an id to scroll to when "Ver Planos" is clicked in the Hero */}
      <div id="planos">
        <InstagramGrowth />
      </div>
    </div>
  );
}
