import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, ShieldCheck, Smile, Scissors } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="apresentacao"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        clear: 'both'
      }}
    >
      <div className="container">
        
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
            <Sparkles style={{ width: '16px', height: '16px', color: '#E52320' }} />
            <span>Conheça o TokMaster</span>
          </div>

          <h2
            style={{
              fontSize: '2.5rem',
              lineHeight: '1.25',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '16px',
              textAlign: 'center'
            }}
          >
            Um ambiente dedicado à sua <span style={{ color: '#E52320', fontStyle: 'italic' }}>beleza, conforto e bem-estar.</span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: '1.65',
              color: '#475569',
              textAlign: 'center',
              margin: '0 auto'
            }}
          >
            O <strong style={{ color: '#0F172A' }}>TokMaster Instituto de Beleza</strong> é um dos salões mais tradicionais da Asa Norte (SHC/N CL Qd. 310 Bloco E Loja 40). Há duas décadas oferecemos um atendimento carinhoso e profissional para renovar o visual de toda a família.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          {/* Image */}
          <div style={{ display: 'flex', justifyCenter: 'center' }}>
            <div className="about-img-box">
              <img
                src="/images/foto_salao2.jpeg"
                alt="TokMaster Instituto de Beleza Asa Norte"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.6), transparent)'
                }}
              ></div>
              
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '9999px', backgroundColor: '#FEF2F2', color: '#E52320', display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0 }}>
                    <Scissors style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0F172A' }}>Atendimento Dedicado</h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748B' }}>Espaço confortável, climatizado e atencioso para você se sentir em casa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#475569' }}>
              Combinamos o domínio de técnicas visagistas em cortes masculinos e femininos, mechas modernas e tratamentos de alta performance com a atenção a cada cliente. Além disso, dispomos de um carinho especial e paciência para o atendimento infantil.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Smile style={{ width: '20px', height: '20px', color: '#E52320', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0F172A' }}>Equipe Experiente & Atenciosa</h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>Profissionais qualificados para entender exatamente o resultado que você deseja.</p>
                </div>
              </div>

              <div style={{ padding: '16px', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <ShieldCheck style={{ width: '20px', height: '20px', color: '#E52320', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0F172A' }}>Produtos Premium & Biossegurança</h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>Cosméticos capilares e de estética de ponta com instrumentais esterilizados.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
