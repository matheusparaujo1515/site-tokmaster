import React, { useState } from 'react';
import { FAQS } from '../data/salonData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        clear: 'both'
      }}
    >
      <div className="container" style={{ maxWidth: '850px' }}>
        
        {/* Centered Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: '#FEF2F2',
              border: '1px solid #FCA5A5',
              fontSize: '0.8rem',
              fontWeight: '700',
              color: '#E52320',
              marginBottom: '16px'
            }}
          >
            <HelpCircle style={{ width: '16px', height: '16px', color: '#E52320' }} />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2
            style={{
              fontSize: '2.5rem',
              lineHeight: '1.25',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '12px',
              textAlign: 'center'
            }}
          >
            Perguntas <span style={{ color: '#E52320', fontStyle: 'italic' }}>Frequentes</span>
          </h2>

          <p style={{ fontSize: '1rem', color: '#475569', textAlign: 'center', margin: '0 auto' }}>
            Tudo o que você precisa saber sobre nossos agendamentos, atendimento e formas de pagamento.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#0F172A',
                    fontWeight: '700',
                    fontSize: '1rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    style={{
                      width: '20px',
                      height: '20px',
                      color: '#E52320',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 20px 24px',
                      color: '#475569',
                      fontSize: '0.9rem',
                      lineHeight: '1.65',
                      borderTop: '1px solid #E2E8F0',
                      paddingTop: '16px'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
