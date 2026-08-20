import { useDocumentTitle } from '../hooks/useDocumentTitle';
import WebsitesHero from '../components/WebsitesHero';
import WebDevelopment from '../components/WebDevelopment';

export default function WebsitesPage() {
  useDocumentTitle('Websites & E-commerce — SeguiProo');

  return (
    <div className="page-websites">
      <WebsitesHero />
      {/* We add an id to scroll to when "Ver Pacotes" is clicked in the Hero */}
      <div id="planos">
        <WebDevelopment />
      </div>
    </div>
  );
}
