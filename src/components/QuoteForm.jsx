import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ArrowRight, CheckCircle2, AlertCircle, User, Mail, Phone, Briefcase } from 'lucide-react';
import './QuoteForm.css';

export default function QuoteForm() {
  const location = useLocation();
  const path = location.pathname;

  const getInitialService = () => {
    if (path === '/instagram') return 'Instagram Growth';
    if (path === '/websites') return 'Website';
    return '';
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: getInitialService(),
    
    // Instagram Fields
    instagram_username: '',
    followers_quantity: '',
    instagram_plan: '',
    
    // Website Fields
    website_type: '',
    website_plan: '',
    pages: '',
    ecommerce: '',
    ecommerce_plan: '',
    requirements: [],
    
    // SEO Fields
    seo_goal: '',
    website_url: '',
    
    // Common optional
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'success', 'error'

  // Update service if user navigates without full reload
  useEffect(() => {
    setFormData(prev => ({ ...prev, service: getInitialService() }));
  }, [path]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentReqs = [...prev.requirements];
      if (checked) {
        return { ...prev, requirements: [...currentReqs, value] };
      } else {
        return { ...prev, requirements: currentReqs.filter(req => req !== value) };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Build the email parameters dynamically so we only send what's relevant
    const templateParams = {
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      service: formData.service,
      message: formData.message || '—',
    };

    if (formData.service === 'Instagram Growth') {
      templateParams.details = `
        Instagram Username: ${formData.instagram_username || '—'}
        Followers Target: ${formData.followers_quantity || '—'}
        Selected Plan: ${formData.instagram_plan || '—'}
      `;
    } else if (formData.service === 'Website') {
      templateParams.details = `
        Website Type: ${formData.website_type || '—'}
        Selected Plan: ${formData.website_plan || '—'}
        Pages Needed: ${formData.pages || '—'}
        Needs E-commerce: ${formData.ecommerce || '—'}
        E-commerce Plan: ${formData.ecommerce_plan || '—'}
        Requirements: ${formData.requirements.join(', ') || '—'}
      `;
    } else if (formData.service === 'SEO') {
      templateParams.details = `
        SEO Goal: ${formData.seo_goal || '—'}
        Website URL: ${formData.website_url || '—'}
      `;
    } else {
      templateParams.details = 'See message for details.';
    }

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_placeholder';

      // If placeholders are present (i.e., env vars not set), we simulate success for demo purposes
      if (serviceId === 'service_placeholder') {
        console.warn('EmailJS environment variables are missing. Simulating success.');
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="quote-form-container success-state">
        <CheckCircle2 size={48} className="success-icon" />
        <h3 className="success-title">PEDIDO RECEBIDO</h3>
        <p className="success-desc">
          Obrigado, {formData.name.split(' ')[0]}.<br/>
          Recebemos o seu pedido e a nossa equipa entrará em contacto brevemente.
        </p>
      </div>
    );
  }

  return (
    <div className="quote-form-container">
      <div className="quote-form-header">
        <h3 className="qf-title">PEDIR ORÇAMENTO</h3>
        <p className="qf-subtitle">Diga-nos o que precisa e enviamos a melhor solução.</p>
      </div>

      {submitStatus === 'error' && (
        <div className="qf-error-banner">
          <AlertCircle size={20} />
          <span>Ocorreu um erro ao enviar. Por favor, tente novamente ou contacte-nos pelo WhatsApp.</span>
        </div>
      )}

      <form className="quote-form" onSubmit={handleSubmit}>
        
        {/* STEP 1: Basic Info */}
        <div className="qf-row">
          <div className="qf-group">
            <label>NOME COMPLETO</label>
            <div className="qf-input-wrapper">
              <User size={18} className="qf-input-icon" />
              <input type="text" name="name" placeholder="O seu nome" value={formData.name} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="qf-group">
            <label>EMAIL</label>
            <div className="qf-input-wrapper">
              <Mail size={18} className="qf-input-icon" />
              <input type="email" name="email" placeholder="seu@email.com" value={formData.email} onChange={handleInputChange} required />
            </div>
          </div>
        </div>

        <div className="qf-row">
          <div className="qf-group">
            <label>WHATSAPP / TELEFONE</label>
            <div className="qf-input-wrapper">
              <Phone size={18} className="qf-input-icon" />
              <input type="tel" name="whatsapp" placeholder="+244 900 000 000" value={formData.whatsapp} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="qf-group">
            <label>SERVIÇO PRETENDIDO</label>
            <div className="qf-select-wrapper">
              <Briefcase size={18} className="qf-input-icon select-icon" />
              <select name="service" value={formData.service} onChange={handleInputChange} required>
                <option value="" disabled>Selecione um serviço...</option>
                <option value="Instagram Growth">Crescimento Instagram</option>
                <option value="Website">Criação de Site / E-commerce</option>
                <option value="SEO">Otimização SEO</option>
                <option value="Other">Outro / Não tenho certeza</option>
              </select>
            </div>
          </div>
        </div>

        {/* STEP 2: Conditional Fields */}
        <div className={`qf-conditional-area ${formData.service ? 'expanded' : ''}`}>
          
          {/* INSTAGRAM GROWTH FLOW */}
          {formData.service === 'Instagram Growth' && (
            <div className="qf-flow animate-fade-in">
              <div className="qf-row">
                <div className="qf-group">
                  <label>USERNAME DO INSTAGRAM</label>
                  <input type="text" name="instagram_username" placeholder="@seuperfil" value={formData.instagram_username} onChange={handleInputChange} />
                </div>
                <div className="qf-group">
                  <label>OBJETIVO DE SEGUIDORES</label>
                  <div className="qf-select-wrapper">
                    <select name="followers_quantity" value={formData.followers_quantity} onChange={handleInputChange} required>
                      <option value="" disabled>Quantidade desejada...</option>
                      <option value="1000">1.000 seguidores</option>
                      <option value="2000">2.000 seguidores</option>
                      <option value="5000">5.000 seguidores</option>
                      <option value="10000">10.000 seguidores</option>
                      <option value="20000">20.000 seguidores</option>
                      <option value="50000">50.000 seguidores</option>
                      <option value="100000+">100.000+ seguidores</option>
                      <option value="Outro">Outra quantidade</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="qf-group">
                <label>PLANO PREFERIDO</label>
                <div className="qf-select-wrapper">
                  <select name="instagram_plan" value={formData.instagram_plan} onChange={handleInputChange} required>
                    <option value="" disabled>Selecione um plano...</option>
                    <option value="Instagram Seguidores Mundiais">Instagram Seguidores Mundiais (Mais Solicitado)</option>
                    <option value="Instagram Mundiais">Instagram Mundiais (Alta Qualidade)</option>
                    <option value="Instagram Mundial VIP">Instagram Mundial VIP (Com Reposição)</option>
                    <option value="Instagram Brasileiros Média">Instagram Brasileiros (Qualidade Média)</option>
                    <option value="Instagram Brasileiros Alta">Instagram Brasileiros (Alta Qualidade)</option>
                    <option value="Instagram Premium Brasileiros e Mundiais">Instagram Premium Brasileiros e Mundiais</option>
                    <option value="Não sei">Não sei, preciso de ajuda</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* WEBSITE FLOW */}
          {formData.service === 'Website' && (
            <div className="qf-flow animate-fade-in">
              <div className="qf-row">
                <div className="qf-group">
                  <label>TIPO DE SITE</label>
                  <div className="qf-select-wrapper">
                    <select name="website_type" value={formData.website_type} onChange={handleInputChange} required>
                      <option value="" disabled>Qual o tipo de site?</option>
                      <option value="Site Empresarial">Site Institucional / Empresarial</option>
                      <option value="Landing Page">Landing Page (1 página)</option>
                      <option value="Blog/Portfolio">Blog / Portfólio</option>
                      <option value="Não sei">Não tenho certeza</option>
                    </select>
                  </div>
                </div>
                <div className="qf-group">
                  <label>PRECISA DE E-COMMERCE (LOJA ONLINE)?</label>
                  <div className="qf-select-wrapper">
                    <select name="ecommerce" value={formData.ecommerce} onChange={handleInputChange} required>
                      <option value="" disabled>Selecione...</option>
                      <option value="Sim">Sim, vou vender produtos online</option>
                      <option value="Não">Não, apenas apresentação/serviços</option>
                    </select>
                  </div>
                </div>
              </div>

              {formData.ecommerce === 'Não' && (
                <div className="qf-row animate-fade-in">
                  <div className="qf-group">
                    <label>PLANO DE SITE</label>
                    <div className="qf-select-wrapper">
                      <select name="website_plan" value={formData.website_plan} onChange={handleInputChange} required>
                        <option value="" disabled>Selecione um pacote...</option>
                        <option value="Site Starter">Site Starter (Até 2 páginas)</option>
                        <option value="Site Empresarial">Site Empresarial (Até 5 páginas) - Mais Popular</option>
                        <option value="Site Profissional">Site Profissional (Até 10 páginas)</option>
                        <option value="Não sei">Não sei qual escolher</option>
                      </select>
                    </div>
                  </div>
                  <div className="qf-group">
                    <label>Nº DE PÁGINAS ESTIMADAS</label>
                    <div className="qf-select-wrapper">
                      <select name="pages" value={formData.pages} onChange={handleInputChange}>
                        <option value="" disabled>Quantas páginas?</option>
                        <option value="1-2">1–2 páginas</option>
                        <option value="3-5">3–5 páginas</option>
                        <option value="6-10">6–10 páginas</option>
                        <option value="10+">Mais de 10 páginas</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {formData.ecommerce === 'Sim' && (
                <div className="qf-group animate-fade-in">
                  <label>PLANO DE E-COMMERCE</label>
                  <div className="qf-select-wrapper">
                    <select name="ecommerce_plan" value={formData.ecommerce_plan} onChange={handleInputChange} required>
                      <option value="" disabled>Selecione um pacote de loja online...</option>
                      <option value="Ecommerce Starter">Ecommerce Starter (Até 20 Produtos)</option>
                      <option value="Ecommerce Business">Ecommerce Business (Produtos Ilimitados)</option>
                      <option value="Ecommerce Enterprise">Ecommerce Enterprise (Solução Avançada)</option>
                      <option value="Não sei">Não sei qual escolher</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="qf-group">
                <label>REQUISITOS ADICIONAIS (Opcional)</label>
                <div className="qf-checkbox-grid">
                  {['Registo de Domínio', 'Alojamento Premium', 'Email Profissional', 'Otimização SEO', 'Integração WhatsApp'].map((req) => (
                    <label key={req} className="qf-checkbox-label">
                      <input type="checkbox" name="requirements" value={req} onChange={handleCheckboxChange} />
                      <span className="qf-checkbox-custom"></span>
                      {req}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SEO FLOW */}
          {formData.service === 'SEO' && (
            <div className="qf-flow animate-fade-in">
              <div className="qf-row">
                <div className="qf-group">
                  <label>OBJETIVO PRINCIPAL</label>
                  <div className="qf-select-wrapper">
                    <select name="seo_goal" value={formData.seo_goal} onChange={handleInputChange} required>
                      <option value="" disabled>O que deseja melhorar?</option>
                      <option value="Visibilidade no Google">Visibilidade no Google</option>
                      <option value="Tráfego do site">Aumentar tráfego geral</option>
                      <option value="SEO Local">SEO Local (Google Meu Negócio)</option>
                      <option value="Ranking de palavras-chave">Ranking para termos específicos</option>
                    </select>
                  </div>
                </div>
                <div className="qf-group">
                  <label>URL DO SITE ATUAL</label>
                  <input type="url" name="website_url" placeholder="https://seusite.com" value={formData.website_url} onChange={handleInputChange} />
                </div>
              </div>
            </div>
          )}

          {/* MESSAGE BOX FOR ALL */}
          {formData.service && (
            <div className="qf-group animate-fade-in mt-4">
              <label>MENSAGEM (OPCIONAL)</label>
              <textarea 
                name="message" 
                rows="3" 
                placeholder={formData.service === 'Other' ? "Descreva detalhadamente o que procura..." : "Mais algum detalhe que devamos saber?"} 
                value={formData.message} 
                onChange={handleInputChange}
                required={formData.service === 'Other'}
              ></textarea>
            </div>
          )}

        </div>

        <button type="submit" className="btn-primary qf-submit" disabled={isSubmitting}>
          {isSubmitting ? 'A ENVIAR...' : (
            <>ENVIAR SOLICITAÇÃO <ArrowRight size={18} className="qf-btn-icon" /></>
          )}
        </button>
      </form>
    </div>
  );
}
