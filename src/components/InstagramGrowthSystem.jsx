import { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Send } from 'lucide-react';
import './InstagramGrowthSystem.css';

export default function InstagramGrowthSystem() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth <= 1024) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for counting animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        // Start counting animation
        let start = 0;
        const end = 10000;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / (end / 100)));
        
        const timer = setInterval(() => {
          start += 100;
          if (start >= end) {
            setCount(10000);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, stepTime);
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const formatCount = (num) => {
    if (num >= 10000) return '+10K';
    if (num >= 1000) return `+${(num / 1000).toFixed(1)}K`;
    return `+${num}`;
  };

  return (
    <section className="gim-section reveal" ref={sectionRef}>
      <div className="gim-bg"></div>
      
      <div className="gim-micro gim-micro-1">SEGUIPRO / 2026</div>
      <div className="gim-micro gim-micro-2">DIGITAL / SOCIAL</div>

      <div className="gim-container">
        
        {/* Left Typography */}
        <div className="gim-typography reveal">
          <span className="gim-label">01 &mdash; O PADRÃO SEGUIPRO</span>
          <h2 className="gim-headline">CRESCIMENTO</h2>
          <span className="gim-subhead italic-serif text-gradient">que se vê.</span>
          <p className="gim-desc">Seguidores reais, entrega rápida e qualidade premium para transformar a presença da sua marca no Instagram.</p>
          
          {/* Mobile Annotations Container (Only visible on mobile) */}
          <div className="gim-annotations-mobile">
            <div className="gim-annotation">
              <div className="gim-ann-num">01 / SEGUIDORES REAIS</div>
              <p className="gim-ann-desc">Pessoas reais e ativas.</p>
            </div>
            <div className="gim-annotation">
              <div className="gim-ann-num">02 / ALTA QUALIDADE</div>
              <p className="gim-ann-desc">Perfis reais e engajados.</p>
            </div>
            <div className="gim-annotation">
              <div className="gim-ann-num">03 / ENTREGA RÁPIDA</div>
              <p className="gim-ann-desc">Entregas em até 72h.</p>
            </div>
            <div className="gim-annotation">
              <div className="gim-ann-num">04 / REPOSIÇÃO GARANTIDA</div>
              <p className="gim-ann-desc">Reposição em caso de queda.</p>
            </div>
          </div>
        </div>

        {/* Right Visual Area */}
        <div className="gim-visual-area">
          
          {/* Asymmetrical Annotations (Desktop Only) */}
          <div className="gim-annotation gim-ann-1">
            <div className="gim-ann-num">01 / SEGUIDORES REAIS</div>
            <p className="gim-ann-desc">Pessoas reais e ativas.</p>
          </div>
          
          <div className="gim-annotation gim-ann-2">
            <div className="gim-ann-num">02 / ALTA QUALIDADE</div>
            <p className="gim-ann-desc">Perfis reais e engajados.</p>
          </div>

          <div className="gim-annotation gim-ann-3">
            <div className="gim-ann-num">03 / ENTREGA RÁPIDA</div>
            <p className="gim-ann-desc">Entregas em até 72h.</p>
          </div>

          <div className="gim-annotation gim-ann-4">
            <div className="gim-ann-num">04 / REPOSIÇÃO GARANTIDA</div>
            <p className="gim-ann-desc">Reposição em caso de queda.</p>
          </div>

          {/* Floating Tiles */}
          <div className="gim-tile gim-tile-1" style={{ '--tx': `${mousePos.x * 30}px`, '--ty': `${mousePos.y * 30}px` }}>
            <div className="gim-tile-icon"><Heart size={16} fill="currentColor" /></div>
            <span className="gim-tile-text">Engajamento</span>
          </div>
          
          <div className="gim-tile gim-tile-2" style={{ '--tx': `${mousePos.x * -40}px`, '--ty': `${mousePos.y * -20}px` }}>
            <div className="gim-tile-icon"><MessageCircle size={16} fill="currentColor" /></div>
            <span className="gim-tile-text">Credibilidade</span>
          </div>

          <div className="gim-tile gim-tile-3" style={{ '--tx': `${mousePos.x * 20}px`, '--ty': `${mousePos.y * -40}px` }}>
            <div className="gim-tile-icon"><Send size={16} fill="currentColor" /></div>
          </div>

          {/* Glass Monolith */}
          <div className="gim-monolith" style={{ '--px': `${mousePos.x * -15}px`, '--py': `${mousePos.y * -15}px` }}>
            
            {/* SVG Growth Arrow overlaid on monolith */}
            <svg className="gim-arrow-svg" viewBox="0 0 360 720" preserveAspectRatio="none">
              <path 
                className="gim-arrow-path" 
                d="M 40,680 C 100,500 250,300 320,80 L 290,80 M 320,80 L 320,110" 
              />
            </svg>

            <div className="gim-monolith-inner">
              <div className="gim-mono-header">
                <div className="gim-mono-circle"></div>
                <div className="gim-mono-lines">
                  <div className="gim-mono-line"></div>
                  <div className="gim-mono-line short"></div>
                </div>
              </div>

              <div className="gim-counter-wrap">
                <div className="gim-counter">{formatCount(count)}</div>
                <div className="gim-counter-lbl">Followers</div>
              </div>

              <div className="gim-mono-footer">
                <div className="gim-mono-grid-item"></div>
                <div className="gim-mono-grid-item"></div>
                <div className="gim-mono-grid-item"></div>
                <div className="gim-mono-grid-item"></div>
                <div className="gim-mono-grid-item"></div>
                <div className="gim-mono-grid-item"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
