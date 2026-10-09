import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

export default function Testimonials() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const featuredRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!featuredRef.current) return;
    const { left, top, width, height } = featuredRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    setMousePos({ x, y });
  };

  const featuredReview = {
    name: 'João Silva',
    role: t('home.testimonials.featured.role'),
    content: t('home.testimonials.featured.content'),
    rating: 5,
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=800&auto=format&fit=crop'
  };

  const supportingReviews = [
    {
      name: 'Maria Fernandes',
      role: t('home.testimonials.support1.role'),
      content: t('home.testimonials.support1.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=400&auto=format&fit=crop',
      position: 'top-right'
    },
    {
      name: 'Carlos Oliveira',
      role: t('home.testimonials.support2.role'),
      content: t('home.testimonials.support2.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop',
      position: 'bottom-right'
    },
    {
      name: 'Ana Costa',
      role: t('home.testimonials.support3.role'),
      content: t('home.testimonials.support3.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400&auto=format&fit=crop',
      position: 'bottom-left'
    }
  ];

  const allReviews = [featuredReview, ...supportingReviews];

  return (
    <section className="testimonials-cinematic section-padding" id="testimonials" ref={sectionRef}>
      <div className="testi-bg-effects">
        <div className="testi-glow"></div>
        <div className="testi-noise"></div>
      </div>

      <div className={`container cinematic-container ${isVisible ? 'is-visible' : ''}`}>
        
        {/* LEFT: Intro */}
        <div className="testi-intro stagger-1">
          <div className="eyebrow text-gradient mb-4">{t('home.testimonials.eyebrow')}</div>
          <h2 className="heading-md testi-heading">
            {t('home.testimonials.title1')}<br/>
            <span className="italic-serif text-gradient">{t('home.testimonials.title2')}</span>
          </h2>
          <p className="text-muted mt-6 testi-desc">
            {t('home.testimonials.desc')}
          </p>
        </div>

        {/* CENTER: Featured Image & Testimonial */}
        <div 
          className="testi-featured-area stagger-2" 
          ref={featuredRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        >
          <div 
            className="featured-image-wrapper"
            style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
          >
            <div className="massive-quote-mark">“</div>
            <img src={featuredReview.image} alt={featuredReview.name} className="featured-portrait" />
            <div className="featured-overlay"></div>
          </div>

          <div 
            className="featured-card stagger-3"
            style={{ transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)` }}
          >
            <div className="review-stars animated-stars">
              {[...Array(featuredReview.rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="star-icon" style={{ animationDelay: `${1000 + (i * 100)}ms` }} />
              ))}
            </div>
            <p className="featured-quote italic-serif">"{featuredReview.content}"</p>
            <div className="author-info mt-6">
              <div className="author-name">{featuredReview.name}</div>
              <div className="author-role text-muted">{featuredReview.role}</div>
            </div>
          </div>
        </div>

        {/* RIGHT/PERIPHERY: Floating Supporting Cards */}
        <div className="testi-floating-area">
          {supportingReviews.map((review, idx) => (
            <div key={idx} className={`floating-card card-pos-${review.position} stagger-${4 + idx}`}>
              <div className="floating-card-inner">
                <img src={review.image} alt={review.name} className="floating-avatar" />
                <div className="floating-content">
                  <div className="review-stars small-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" className="star-icon" />
                    ))}
                  </div>
                  <p className="floating-quote">"{review.content}"</p>
                  <div className="author-name small-name">{review.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE CAROUSEL: Hidden on desktop, visible < 992px */}
        <div className="testi-mobile-carousel stagger-2">
          <div className="testi-carousel-track">
            {allReviews.map((review, idx) => (
              <div key={`mob-${idx}`} className="testi-carousel-slide">
                <div className="mobile-card">
                  <div className="mobile-card-img-wrapper">
                    <img src={review.image} alt={review.name} className="mobile-card-img" />
                    <div className="mobile-card-overlay"></div>
                  </div>
                  <div className="mobile-card-content">
                    <div className="review-stars">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className="star-icon" />
                      ))}
                    </div>
                    <p className="mobile-quote">"{review.content}"</p>
                    <div className="author-info mt-auto">
                      <div className="author-name">{review.name}</div>
                      <div className="author-role text-muted">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mobile-swipe-indicator text-muted">
            <span>{t('home.testimonials.swipe')}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
