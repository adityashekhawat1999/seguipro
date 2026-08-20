import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { X, ArrowRight, CheckCircle2, AlertCircle, User, Mail, Phone } from 'lucide-react';
import './QuoteForm.css'; // Reuse form styles
import './PremiumQuoteModal.css'; // Shared premium modal styles

export default function WebsitesQuoteModal({ isOpen, onClose, plan }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    requirements: [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  // Handle body scroll lock, Lenis pause, & ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  // Reset status when opened with a new plan
  useEffect(() => {
    if (isOpen) {
      setSubmitStatus('idle');
    }
  }, [isOpen, plan]);

  if (!isOpen || !plan) return null;

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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      service: 'Website',
      message: formData.message || '—',
      details: `
        Plano Selecionado: ${plan.name}
        Tipo de Site: ${plan.isEcommerce ? 'Loja Online (E-commerce)' : 'Site Profissional'}
        Requisitos Adicionais: ${formData.requirements.join(', ') || 'Nenhum selecionado'}
      `
    };

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_placeholder';

      if (serviceId === 'service_placeholder') {
        console.warn('EmailJS vars missing. Simulating success.');
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

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className="modal-container" data-lenis-prevent="true">
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitStatus === 'success' ? (
          <div className="modal-success-state">
            <CheckCircle2 size={64} className="modal-success-icon" />
            <h3 className="modal-success-title">PEDIDO RECEBIDO ✓</h3>
            <p className="modal-success-desc">
              Obrigado, {formData.name.split(' ')[0]}.<br/>
              Recebemos o seu pedido para o <strong>{plan.name}</strong>.<br/><br/>
              A nossa equipa entrará em contacto consigo brevemente.
            </p>
            <button className="btn-secondary" onClick={onClose}>FECHAR</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h3 className="modal-title">PEDIR ORÇAMENTO</h3>
              
              {/* Locked Plan Summary */}
              <div className="modal-plan-summary">
                <div className="mps-name">{plan.name}</div>
                <div className="mps-price">{plan.price}</div>
                <div className="mps-details">
                  <span>{plan.isEcommerce ? 'Loja Online' : 'Website Profissional'}</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              {submitStatus === 'error' && (
                <div className="qf-error-banner" style={{ marginBottom: '24px' }}>
                  <AlertCircle size={20} />
                  <span>Não foi possível enviar o pedido. Por favor, tente novamente ou contacte-nos diretamente pelo WhatsApp.</span>
                </div>
              )}

              <form className="quote-form" onSubmit={handleSubmit} style={{ padding: 0, background: 'transparent', border: 'none' }}>
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
                      <input type="tel" name="whatsapp" placeholder="+351 900 000 000" value={formData.whatsapp} onChange={handleInputChange} required />
                    </div>
                  </div>
                </div>

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

                <div className="qf-group" style={{ marginTop: '16px' }}>
                  <label>MENSAGEM (OPCIONAL)</label>
                  <textarea 
                    name="message" 
                    rows="3" 
                    placeholder="Tem alguma funcionalidade específica em mente ou algum site de referência?" 
                    value={formData.message} 
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary qf-submit" disabled={isSubmitting} style={{ marginTop: '24px' }}>
                  {isSubmitting ? 'A ENVIAR...' : (
                    <>PEDIR ORÇAMENTO <ArrowRight size={18} className="qf-btn-icon" /></>
                  )}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
