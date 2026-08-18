import { useState } from 'react';
import { Plus } from 'lucide-react';
import './ServicesOverview.css';

export default function ServicesOverview() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      title: 'Crescimento no Instagram',
      description: 'Estratégias avançadas para impulsionar a sua conta com seguidores reais, aumentando a sua autoridade e prova social instantaneamente.',
      bullets: [
        'Seguidores Reais',
        'Alta Qualidade',
        'Entrega Rápida',
        'Reposição Garantida'
      ]
    },
    {
      title: 'Criação de Sites & E-commerce',
      description: 'Desenvolvimento web profissional focado em conversão. Criamos plataformas rápidas, seguras e com design premium para o seu negócio.',
      bullets: [
        'Design Premium',
        'SEO Otimizado',
        'Totalmente Responsivo',
        'Certificado SSL'
      ]
    }
  ];

  return (
    <section className="services-overview section-padding" id="servicos">
      <div className="container">
        
        <div className="services-header reveal">
          <div className="eyebrow text-gradient">Serviços</div>
          <h2 className="heading-md">
            Serviços <span className="italic-serif text-gradient">Que</span> Fazem a Diferença
          </h2>
        </div>

        <div className="accordion-container reveal" style={{ transitionDelay: '200ms' }}>
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`accordion-row ${isOpen ? 'open' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-header">
                  <div className="accordion-title-wrap">
                    <span className="accordion-dot"></span>
                    <h3 className="accordion-title">{service.title}</h3>
                  </div>
                  <button className="accordion-icon" aria-label="Toggle details">
                    <Plus size={24} />
                  </button>
                </div>
                
                <div className="accordion-content-wrapper">
                  <div className="accordion-content">
                    <p className="accordion-desc text-muted">{service.description}</p>
                    <ul className="accordion-bullets">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx}>
                          <span className="bullet-dot"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
