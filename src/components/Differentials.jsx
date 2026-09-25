import React from 'react';
import { DIFFERENTIALS } from '../data/salonData';
import { HeartHandshake, Award, Sparkles, ShieldCheck } from 'lucide-react';

const iconMap = {
  HeartHandshake: HeartHandshake,
  Award: Award,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck
};

export default function Differentials() {
  return (
    <section
      id="diferenciais"
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
            POR QUE NOS ESCOLHER?
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
            Diferenciais que conquistaram a <span style={{ color: '#E52320', fontStyle: 'italic' }}>Asa Norte</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#475569', textAlign: 'center', margin: '0 auto' }}>
            Qualidade técnica de alto padrão combinada com carinho e paciência no atendimento.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid-4">
          {DIFFERENTIALS.map((diff, index) => {
            const IconComponent = iconMap[diff.icon] || Sparkles;
            return (
              <div
                key={index}
                className="card-clean"
                style={{ padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E52320', marginBottom: '16px' }}>
                  <IconComponent style={{ width: '24px', height: '24px' }} />
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', fontFamily: "'Playfair Display', Georgia, serif", color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>
                  {diff.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: '1.6', textAlign: 'center' }}>
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
