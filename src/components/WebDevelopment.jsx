import { useState } from 'react';
import { Check, Star, Layout, MapPin, Smartphone, Shield, Zap, Search, Settings, Phone, BarChart2 } from 'lucide-react';
import WebsitesQuoteModal from './WebsitesQuoteModal';
import './WebDevelopment.css';

export default function WebDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlan(null), 300);
  };
  const features = [
    'Design Premium Personalizado',
    'Google Maps Integrado',
    'Interface Profissional (UI/UX)',
    'Totalmente Responsivo',
    'Certificado SSL Seguro',
    'Fácil Gestão de Conteúdo',
    'SEO Otimizado',
    'Formulários de Contacto',
    'Preparado para o Crescimento',
    'Integração com WhatsApp',
    'Alto Desempenho e Velocidade'
  ];

  const sitePackages = [
    {
      name: 'Site Starter',
      oldPrice: '€699',
      price: '€349 (454.350 Kz)',
      includes: ['Até 2 páginas', 'Design Responsivo', 'Formulário de Contacto', 'WhatsApp', 'SEO Básico', '2 Revisões', 'Entrega 5–7 dias']
    },
    {
      name: 'Site Empresarial',
      oldPrice: '€1.199',
      price: '€599 (779.350 Kz)',
      includes: ['Até 5 páginas', 'Design Personalizado', 'Google Maps', 'WhatsApp', 'SEO Básico', 'Otimização de Velocidade', '4 Revisões', 'Entrega 7–10 dias'],
      popular: true
    },
    {
      name: 'Site Profissional',
      oldPrice: '€1.799',
      price: '€899 (1.169.350 Kz)',
      includes: ['Até 10 páginas', 'Design Premium', 'Blog', 'CMS', 'SEO Avançado', 'Animações', 'Formulários de Agendamento', 'Otimização de Performance', 'Entrega 10–14 dias']
    }
  ];

  const ecoPackages = [
    {
      name: 'Ecommerce Starter',
      oldPrice: '€2.199',
      price: '€1.099 (1.429.350 Kz)',
      includes: ['Loja Online', 'Carrinho', 'Até 20 Produtos', 'Pagamento Online', 'Responsivo', 'SEO Básico']
    },
    {
      name: 'Ecommerce Business',
      oldPrice: '€2.999',
      price: '€1.499 (1.949.350 Kz)',
      includes: ['Produtos Ilimitados', 'Inventário', 'Cupões', 'Contas de Clientes', 'Relatórios', 'SEO Avançado']
    },
    {
      name: 'Ecommerce Enterprise',
      oldPrice: '€4.500',
      price: '€2.250 (2.925.000 Kz)',
      includes: ['Integrações API', 'CRM', 'ERP', 'Multi-idioma', 'Multi-moeda', 'Funcionalidades Personalizadas']
    }
  ];

  const addons = [
    { name: 'Página Extra', price: '€120 (156.000 Kz)' },
    { name: '5 Páginas Extras', price: '€500 (650.000 Kz)' },
    { name: '10 Páginas Extras', price: '€900 (1.170.000 Kz)' },
    { name: 'Registo de Domínio', price: '€25/ano (32.500 Kz/ano)' },
    { name: 'Alojamento Premium', price: '€180/ano (234.000 Kz/ano)' },
    { name: 'Email Profissional', price: '€60/ano (78.000 Kz/ano)' },
    { name: 'Manutenção do Site', price: '€60/mês (78.000 Kz/mês)' },
    { name: 'Otimização SEO', price: 'Desde €175 (97.500 Kz)', oldPrice: '€350' },
  ];

  const promise = [
    { icon: <Zap size={24} />, title: 'Entrega Rápida', desc: 'Cumprimos prazos sem comprometer a qualidade.' },
    { icon: <Shield size={24} />, title: 'Sites Seguros', desc: 'Melhores padrões de segurança para proteger o seu site.' },
    { icon: <Smartphone size={24} />, title: 'Mobile First', desc: '100% responsivos para qualquer dispositivo.' },
    { icon: <BarChart2 size={24} />, title: 'Feito Para Vender', desc: 'Criados estrategicamente para gerar leads e vendas.' },
  ];

  return (
    <section className="web-dev section-padding" id="sites">
      <div className="container">
        
        <div className="section-header reveal">
          <h2 className="heading-md">
            Sites Profissionais <span className="italic-serif text-gradient">Que Convertem</span>
          </h2>
        </div>

        <div className="features-grid reveal" style={{ transitionDelay: '100ms' }}>
          {features.map((feat, idx) => (
            <div key={idx} className="feat-pill">
              <Check size={16} className="feat-check" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="pricing-cards-section">
          <div className="pricing-cards reveal" style={{ transitionDelay: '200ms' }}>
            {sitePackages.map((pkg, idx) => (
              <div key={idx} className={`price-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge"><Star size={12} /> Mais Popular</div>}
                <h3 className="pkg-name">{pkg.name}</h3>
                <div className="pkg-price-wrapper">
                  {pkg.oldPrice && (
                    <div className="pkg-old-price">
                      <span className="strikethrough">De {pkg.oldPrice}</span>
                      <span className="discount-badge">50% OFF</span>
                    </div>
                  )}
                  <div className="pkg-price">{pkg.price}</div>
                </div>
                <ul className="pkg-includes">
                  {pkg.includes.map((inc, i) => (
                    <li key={i}><Check size={16} /> {inc}</li>
                  ))}
                </ul>
                <button onClick={() => handleOpenModal({ ...pkg, isEcommerce: false })} className={`btn-primary ${!pkg.popular ? 'outline' : ''}`} style={{ cursor: 'pointer', border: pkg.popular ? 'none' : '', fontFamily: 'inherit', width: '100%' }}>
                  ESCOLHER PACOTE
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-cards-section" id="ecommerce">
          <h3 className="heading-sm text-center mb-40 reveal">Planos de E-commerce</h3>
          <div className="pricing-cards reveal" style={{ transitionDelay: '200ms' }}>
            {ecoPackages.map((pkg, idx) => (
              <div key={idx} className="price-card">
                <h3 className="pkg-name">{pkg.name}</h3>
                <div className="pkg-price-wrapper">
                  {pkg.oldPrice && (
                    <div className="pkg-old-price">
                      <span className="strikethrough">De {pkg.oldPrice}</span>
                      <span className="discount-badge">50% OFF</span>
                    </div>
                  )}
                  <div className="pkg-price">{pkg.price}</div>
                </div>
                <ul className="pkg-includes">
                  {pkg.includes.map((inc, i) => (
                    <li key={i}><Check size={16} /> {inc}</li>
                  ))}
                </ul>
                <button onClick={() => handleOpenModal({ ...pkg, isEcommerce: true })} className="btn-primary outline" style={{ cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>
                  ESCOLHER PACOTE
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="addons-section reveal" style={{ transitionDelay: '300ms' }}>
          <h4 className="addons-title">Serviços Adicionais</h4>
          <div className="addons-grid">
            {addons.map((addon, idx) => (
              <div key={idx} className="addon-item">
                <span className="addon-name">{addon.name}</span>
                <span className="addon-price text-muted">
                  {addon.oldPrice && <span style={{ textDecoration: 'line-through', opacity: 0.7, marginRight: '8px' }}>De {addon.oldPrice}</span>}
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="promise-band reveal" style={{ transitionDelay: '400ms' }}>
          {promise.map((item, idx) => (
            <div key={idx} className="promise-item">
              <div className="promise-icon">{item.icon}</div>
              <h5 className="promise-title">{item.title}</h5>
              <p className="promise-desc text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
      
      {/* Premium Quote Modal */}
      <WebsitesQuoteModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        plan={selectedPlan} 
      />
    </section>
  );
}
