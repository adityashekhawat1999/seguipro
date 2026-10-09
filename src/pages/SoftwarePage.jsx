import { useState, useEffect } from 'react';
import { ArrowRight, Code, LayoutDashboard, Smartphone, Bot, Activity, Network, ChevronRight, ChevronLeft, Menu, Bell, Database, Fingerprint, Activity as ActivityIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../context/LanguageContext';
import './SoftwarePage.css';

export default function SoftwarePage() {
  const { t } = useLanguage();
  useDocumentTitle('Software & IA - SeguiProo');
  useScrollReveal();

  const [activeSolution, setActiveSolution] = useState(0);
  const [isSolutionDropdownOpen, setIsSolutionDropdownOpen] = useState(false);
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);

  const translatedIndustries = t('software.industries.list', { returnObjects: true }) || [];
  
  const industriesList = [
    {
      id: 'FINTECH',
      name: translatedIndustries[0]?.name,
      desc: translatedIndustries[0]?.desc,
      example: translatedIndustries[0]?.example,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 'HEALTHCARE',
      name: translatedIndustries[1]?.name,
      desc: translatedIndustries[1]?.desc,
      example: translatedIndustries[1]?.example,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 'EDUCATION',
      name: translatedIndustries[2]?.name,
      desc: translatedIndustries[2]?.desc,
      example: translatedIndustries[2]?.example,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 'RETAIL',
      name: translatedIndustries[3]?.name,
      desc: translatedIndustries[3]?.desc,
      example: translatedIndustries[3]?.example,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 'REAL_ESTATE',
      name: translatedIndustries[4]?.name,
      desc: translatedIndustries[4]?.desc,
      example: translatedIndustries[4]?.example,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 'LOGISTICS',
      name: translatedIndustries[5]?.name,
      desc: translatedIndustries[5]?.desc,
      example: translatedIndustries[5]?.example,
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 'CONSTRUCTION',
      name: translatedIndustries[6]?.name,
      desc: translatedIndustries[6]?.desc,
      example: translatedIndustries[6]?.example,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 'HOSPITALITY',
      name: translatedIndustries[7]?.name,
      desc: translatedIndustries[7]?.desc,
      example: translatedIndustries[7]?.example,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  const handleNextIndustry = () => {
    setActiveIndustryIdx((prev) => (prev + 1) % industriesList.length);
  };

  const handlePrevIndustry = () => {
    setActiveIndustryIdx((prev) => (prev - 1 + industriesList.length) % industriesList.length);
  };

  const translatedSolutions = t('software.solutions.list', { returnObjects: true }) || [];

  const solutions = [
    {
      id: 'custom',
      title: translatedSolutions[0]?.title,
      desc1: translatedSolutions[0]?.desc1,
      desc2: translatedSolutions[0]?.desc2,
      icon: <Code size={20} />,
      pointers: translatedSolutions[0]?.pointers || []
    },
    {
      id: 'web',
      title: translatedSolutions[1]?.title,
      desc1: translatedSolutions[1]?.desc1,
      desc2: translatedSolutions[1]?.desc2,
      icon: <LayoutDashboard size={20} />,
      pointers: translatedSolutions[1]?.pointers || []
    },
    {
      id: 'mobile',
      title: translatedSolutions[2]?.title,
      desc1: translatedSolutions[2]?.desc1,
      desc2: translatedSolutions[2]?.desc2,
      icon: <Smartphone size={20} />,
      pointers: translatedSolutions[2]?.pointers || []
    },
    {
      id: 'ai',
      title: translatedSolutions[3]?.title,
      desc1: translatedSolutions[3]?.desc1,
      desc2: translatedSolutions[3]?.desc2,
      icon: <Bot size={20} />,
      pointers: translatedSolutions[3]?.pointers || []
    },
    {
      id: 'dashboards',
      title: translatedSolutions[4]?.title,
      desc1: translatedSolutions[4]?.desc1,
      desc2: translatedSolutions[4]?.desc2,
      icon: <Activity size={20} />,
      pointers: translatedSolutions[4]?.pointers || []
    },
    {
      id: 'integrations',
      title: translatedSolutions[5]?.title,
      desc1: translatedSolutions[5]?.desc1,
      desc2: translatedSolutions[5]?.desc2,
      icon: <Network size={20} />,
      pointers: translatedSolutions[5]?.pointers || []
    }
  ];
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePos({ x, y });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="page-software">
      {/* 1. HERO SECTION */}
      <section className="sp-hero">
        <div className="sp-hero-bg">
          <div className="sp-hero-ambient"></div>
        </div>
        <div className="container relative z-10">
          <div className="sp-hero-layout">
            
            {/* LEFT: TEXT */}
            <div className="sp-hero-content">
              <div className="trust-badge reveal">
                <span className="star-icon">●</span> {t('software.hero.badge')}
              </div>
              <h1 className="heading-lg reveal" style={{ transitionDelay: '100ms', fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: '1.1', maxWidth: '600px', letterSpacing: '-1px' }}>
                {t('software.hero.title1')} <br/><span className="text-gradient">{t('software.hero.title2')}</span>
              </h1>
              <p className="hero-subhead text-muted reveal" style={{ transitionDelay: '200ms' }}>
                {t('software.hero.subtitle')}
              </p>
              <div className="hero-actions reveal" style={{ transitionDelay: '300ms' }}>
                <a href="#contacto" className="btn-primary btn-large">
                  {t('software.hero.btn1')} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                </a>
                <a href="#contacto" className="btn-secondary">
                  {t('software.hero.btn2')}
                </a>
              </div>
            </div>

            {/* RIGHT: PREMIUM 3D DIGITAL ARCHITECTURE */}
            <div className="sp-hero-visual-wrapper reveal" style={{ transitionDelay: '400ms' }}>
              <div className="sp-glass-monolith" style={{
                transform: `rotateY(${mousePos.x * -10}deg) rotateX(${mousePos.y * 10}deg)`
              }}>
                
                {/* Layer: Deep architectural background/connections */}
                <div className="sp-layer sp-layer-back" style={{ transform: `translateZ(-60px) translateX(${mousePos.x * 10}px) translateY(${mousePos.y * 10}px)` }}>
                  <div className="sp-tech-grid"></div>
                  <div className="sp-ambient-glow"></div>
                </div>

                {/* Layer: Integrations & API paths */}
                <div className="sp-layer sp-layer-middle" style={{ transform: `translateZ(20px) translateX(${mousePos.x * 20}px) translateY(${mousePos.y * 20}px)` }}>
                  <div className="sp-data-path p1"><div className="sp-data-signal"></div></div>
                  <div className="sp-data-path p2"><div className="sp-data-signal delayed"></div></div>
                  <div className="sp-data-path p3"><div className="sp-data-signal"></div></div>
                </div>

                {/* Layer: Main Analytics Dashboard */}
                <div className="sp-layer sp-layer-front-1" style={{ transform: `translateZ(80px) translateX(${mousePos.x * 30}px) translateY(${mousePos.y * 30}px)` }}>
                  <div className="sp-mock-dashboard">
                    <div className="sp-db-sidebar">
                      <div className="sp-db-icon-btn"><LayoutDashboard size={14}/></div>
                      <div className="sp-db-icon-btn"><Database size={14}/></div>
                      <div className="sp-db-icon-btn"><ActivityIcon size={14}/></div>
                      <div className="sp-db-icon-btn"><Network size={14}/></div>
                    </div>
                    <div className="sp-db-main">
                      <div className="sp-db-header">
                        <div className="sp-db-search"></div>
                        <div className="sp-db-actions"><Bell size={14}/><div className="sp-db-avatar"></div></div>
                      </div>
                      <div className="sp-db-content">
                        <div className="sp-db-metrics">
                          <div className="sp-db-metric"><div className="sp-db-trend"></div><div className="sp-db-val">84.2K</div></div>
                          <div className="sp-db-metric"><div className="sp-db-trend down"></div><div className="sp-db-val">12.5%</div></div>
                        </div>
                        <div className="sp-db-chart-box">
                          <div className="sp-chart-line animated-line"></div>
                          <div className="sp-chart-area"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer: Mobile UI & AI automation overlay */}
                <div className="sp-layer sp-layer-front-2" style={{ transform: `translateZ(140px) translateX(${mousePos.x * 45}px) translateY(${mousePos.y * 45}px)` }}>
                  <div className="sp-mock-mobile">
                    <div className="sp-mob-header"><Menu size={12}/><Fingerprint size={12}/></div>
                    <div className="sp-mob-card"></div>
                    <div className="sp-mob-card"></div>
                  </div>
                  <div className="sp-mock-ai-panel">
                    <div className="sp-ai-pulse"><Bot size={16} /></div>
                    <div className="sp-ai-lines">
                      <div className="sp-ai-line"></div>
                      <div className="sp-ai-line w-half"></div>
                    </div>
                  </div>
                </div>
                
                {/* Layer: Glass reflection overlay */}
                <div className="sp-layer sp-layer-reflection" style={{ transform: `translateZ(150px)` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SOLUTIONS SECTION */}
      <section className="sp-solutions">
        <div className="container">
          <div className="reveal text-center">
            <h2 className="heading-md">{t('software.solutions.title1')} <span className="text-gradient">{t('software.solutions.title2')}</span></h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '20px auto 60px' }}>
              {t('software.solutions.subtitle')}
            </p>
          </div>

          <div className="sp-solutions-editorial reveal" style={{ transitionDelay: '100ms' }}>
            {/* LEFT: VERTICAL STAGES */}
            <div className="sp-editorial-stages">
              {t('software.solutions.stages', { returnObjects: true }).map((stage, idx, arr) => (
                <div key={idx} style={{ display: 'contents' }}>
                  <div className="sp-stage">{stage}</div>
                  {idx < arr.length - 1 && <div className="sp-stage-link"></div>}
                </div>
              ))}
            </div>

            {/* RIGHT: INTERACTIVE TECHNOLOGY PANEL */}
            <div className="sp-editorial-panel">
              
              <div className="sp-system-nodes">
                {solutions.map((sol, idx) => (
                  <div 
                    key={sol.id} 
                    className={`sp-system-node ${activeSolution === idx ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSolution(idx)}
                  >
                    <div className="sp-node-icon">{sol.icon}</div>
                    <span>{sol.title}</span>
                    <div className="sp-node-connection"></div>
                  </div>
                ))}
              </div>

              {/* Mobile Dropdown for Solutions */}
              <div className="sp-mobile-solution-dropdown">
                <div 
                  className="sp-msd-header" 
                  onClick={() => setIsSolutionDropdownOpen(!isSolutionDropdownOpen)}
                >
                  <div className="sp-msd-selected">
                    <div className="sp-node-icon">{solutions[activeSolution].icon}</div>
                    <span>{solutions[activeSolution].title}</span>
                  </div>
                  <div className={`sp-msd-arrow ${isSolutionDropdownOpen ? 'open' : ''}`}>
                    <ChevronRight size={16} />
                  </div>
                </div>
                {isSolutionDropdownOpen && (
                  <div className="sp-msd-list">
                    {solutions.map((sol, idx) => (
                      <div 
                        key={sol.id} 
                        className={`sp-msd-item ${activeSolution === idx ? 'active' : ''}`}
                        onClick={() => {
                          setActiveSolution(idx);
                          setIsSolutionDropdownOpen(false);
                        }}
                      >
                        <div className="sp-node-icon">{sol.icon}</div>
                        <span>{sol.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              
              <div className="sp-system-core">
                 <div className="sp-system-core-bg"></div>
                 <div className="sp-system-content" key={activeSolution}>
                    <h4>{solutions[activeSolution].title}</h4>
                    <p className="sp-desc-primary">{solutions[activeSolution].desc1}</p>
                    <p className="sp-desc-secondary">{solutions[activeSolution].desc2}</p>
                    
                    <div className="sp-desc-pointers">
                      {solutions[activeSolution].pointers.map((pointer, i) => (
                        <div key={i} className="sp-pointer-item" style={{ animationDelay: `${i * 100 + 200}ms` }}>
                          <div className="sp-pointer-icon">
                            <ChevronRight size={12} strokeWidth={4} />
                          </div>
                          <span className="sp-pointer-text">{pointer}</span>
                        </div>
                      ))}
                    </div>
                 </div>
                 
                 {/* Decorative UI elements that react */}
                 <div className="sp-system-visual">
                   <div className="sp-sv-layer sl1"></div>
                   <div className="sp-sv-layer sl2"></div>
                   <div className="sp-sv-layer sl3"></div>
                 </div>
              </div>
            </div>
          </div>

          <div className="sp-solutions-footer reveal text-center" style={{ transitionDelay: '200ms', marginTop: '80px' }}>
            <h3 className="heading-sm">{t('software.solutions.footer1')}</h3>
            <p className="text-muted" style={{ maxWidth: '700px', margin: '16px auto 0' }}>
              {t('software.solutions.footer2')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES + EXAMPLES */}
      <section className="sp-industries-cinematic">
        <div className="container relative z-10">
          <div className="sp-ind-header reveal text-center">
            <div className="trust-badge" style={{ margin: '0 auto' }}>{t('software.industries.badge')}</div>
            <h2 className="heading-md mt-4" style={{ marginTop: '24px' }}>{t('software.industries.title1')} <br/><span className="text-gradient">{t('software.industries.title2')}</span></h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '20px auto 40px' }}>
              {t('software.industries.subtitle')}
            </p>
          </div>

          <div className="sp-ind-nav reveal" style={{ transitionDelay: '100ms' }}>
            {industriesList.map((ind, idx) => (
              <button 
                key={ind.id} 
                className={`sp-ind-nav-btn ${activeIndustryIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveIndustryIdx(idx)}
              >
                {ind.name}
              </button>
            ))}
          </div>
        </div>

        <div className="sp-ind-gallery-wrapper reveal" style={{ transitionDelay: '200ms' }}>
          
          <button className="sp-gallery-arrow left" onClick={handlePrevIndustry}>
            <ChevronLeft size={24} />
          </button>
          <button className="sp-gallery-arrow right" onClick={handleNextIndustry}>
            <ChevronRight size={24} />
          </button>

          {industriesList.map((ind, idx) => (
            <div 
              key={ind.id} 
              className={`sp-ind-gallery-slide ${activeIndustryIdx === idx ? 'active' : ''}`}
            >
              <div className="sp-ind-bg" style={{ backgroundImage: `url('${ind.image}')` }}></div>
              <div className="sp-ind-overlay"></div>
              
              <div className="container relative z-10 sp-ind-content-container">
                <div className="sp-ind-content">
                  <h3>{ind.name}</h3>
                  <p className="sp-ind-desc">{ind.desc}</p>
                  <p className="sp-ind-example">{ind.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="container relative z-10">
          <div className="sp-ind-footer reveal text-center">
            <h3 className="heading-sm">{t('software.industries.footer1')}</h3>
            <p className="text-muted mt-4 mb-8" style={{ maxWidth: '700px', margin: '16px auto 32px' }}>
              {t('software.industries.footer2')}
            </p>
            <a href="#contacto" className="btn-primary" style={{ margin: '0 auto', display: 'inline-flex' }}>
              {t('software.industries.btn')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. FINAL CONVERSION SECTION (Process & Pricing) */}
      <section className="sp-conversion">
        <div className="sp-conversion-bg"></div>
        <div className="container relative z-10">
          <div className="reveal text-center">
            <h2 className="heading-md" style={{ lineHeight: '1.2' }}>{t('software.conversion.title1')}<br /><span className="text-gradient">{t('software.conversion.title2')}</span></h2>
            <p className="text-muted" style={{ maxWidth: '700px', margin: '24px auto 60px' }}>
              {t('software.conversion.subtitle')}
            </p>
          </div>

          <div className="sp-process-steps reveal" style={{ transitionDelay: '200ms' }}>
            {t('software.conversion.steps', { returnObjects: true })?.map((step, idx) => (
              <div key={idx} className="sp-step">
                <div className="sp-step-bg-num">0{idx + 1}</div>
                <div className="sp-step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal text-center" style={{ transitionDelay: '300ms' }}>
            <div className="sp-pricing-note">
              <div className="sp-pricing-badge">{t('software.conversion.noteBadge')}</div>
              <p>{t('software.conversion.noteDesc')}</p>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '400ms', marginTop: '60px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="#contacto" className="btn-primary btn-large">
              {t('software.conversion.btn1')} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#contacto" className="btn-secondary">
              {t('software.conversion.btn2')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
