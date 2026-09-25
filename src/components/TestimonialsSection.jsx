import React from 'react';
import { TESTIMONIALS } from '../data/salonData';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0',
        clear: 'both'
      }}
    >
      <div className="container">
        
        {/* Centered Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px auto' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#E52320', display: 'block', marginBottom: '8px' }}>
            AVALIAÇÕES DOS CLIENTES
          </span>
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
            O que dizem sobre o <span style={{ color: '#E52320', fontStyle: 'italic' }}>TokMaster</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#475569', textAlign: 'center', margin: '0 auto' }}>
            Depoimentos reais de quem confia a beleza e o bem-estar da família ao nosso salão na Asa Norte.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={idx}
              className="card-clean"
              style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between', position: 'relative' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} style={{ width: '16px', height: '16px', fill: '#F59E0B', color: '#F59E0B' }} />
                  ))}
                </div>

                <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.65', fontStyle: 'italic', marginBottom: '24px' }}>
                  "{testi.comment}"
                </p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', fontFamily: "'Playfair Display', Georgia, serif", color: '#0F172A' }}>{testi.name}</h4>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#E52320' }}>{testi.role}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
