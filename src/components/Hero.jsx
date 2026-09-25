import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Calendar, MessageCircle, Sparkles, Award, CheckCircle2, Scissors, Camera } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Olá! Vim pelo site do TokMaster e gostaria de tirar dúvidas ou agendar um horário.")}`;

  return (
    <section
      id="home"
      style={{
        paddingTop: '160px',
        paddingBottom: '80px',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        overflow: 'hidden'
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '250px',
          backgroundColor: 'rgba(254, 226, 226, 0.4)',
          borderRadius: '9999px',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Top Badge */}
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
              marginBottom: '20px'
            }}
          >
            <Sparkles style={{ width: '16px', height: '16px', color: '#E52320' }} />
            <span>Tradição & Excelência na Asa Norte desde 2004</span>
          </div>

          {/* Main Centered Title */}
          <h1
            style={{
              fontSize: '2.75rem',
              lineHeight: '1.2',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: '900',
              color: '#0F172A',
              marginBottom: '20px',
              textAlign: 'center'
            }}
          >
            Sua beleza tratada com arte, <span style={{ color: '#E52320', fontStyle: 'italic' }}>sofisticação e excelência.</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.65',
              color: '#475569',
              maxWidth: '680px',
              margin: '0 auto 28px auto',
              textAlign: 'center',
              fontWeight: '400'
            }}
          >
            Há mais de 20 anos na Quadra 310 Norte (Bloco E Loja 40), renovando sua autoestima com <strong style={{ color: '#0F172A' }}>cortes femininos e masculinos visagistas, mechas iluminadas, tratamentos capilares e manicuria de alto padrão</strong> em um espaço agradável para toda a sua família.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
            <button
              onClick={() => onOpenBooking()}
              className="btn-red"
              style={{ padding: '14px 32px', fontSize: '1rem' }}
            >
              <Calendar style={{ width: '20px', height: '20px' }} />
              <span>Agendar Horário Online</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              style={{ padding: '14px 32px', fontSize: '1rem' }}
            >
              <MessageCircle style={{ width: '20px', height: '20px', color: '#34D399' }} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* FEATURED SALON PHOTO CARD */}
          <div
            style={{
              width: '100%',
              maxWidth: '850px',
              marginBottom: '40px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)',
              border: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              position: 'relative'
            }}
          >
            <div style={{ position: 'relative', height: '380px', width: '100%', backgroundColor: '#0F172A', overflow: 'hidden' }}>
              <img
                src="/images/foto_salao1.jpeg"
                alt="TokMaster Instituto de Beleza"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.1) 60%, transparent 100%)'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  color: '#FFFFFF',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '6px', backgroundColor: 'rgba(229, 35, 32, 0.9)', fontSize: '0.75rem', fontWeight: '700', marginBottom: '8px' }}>
                  <Camera style={{ width: '13px', height: '13px' }} />
                  <span>Nosso Espaço na Asa Norte</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.5)', margin: 0 }}>
                  TokMaster Instituto de Beleza
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', margin: '4px 0 0 0' }}>
                  SHC/N CL Quadra 310 Bloco E Loja 40 — Conforto, tradição e atendimento acolhedor
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              width: '100%',
              maxWidth: '750px',
              paddingTop: '32px',
              borderTop: '1px solid #E2E8F0'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: '#E52320' }}>
                <Award style={{ width: '20px', height: '20px', margin: 'auto' }} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: '#0F172A' }}>+20 Anos de Tradição</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B' }}>Referência na Qd 310</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#FFF1F2', border: '1px solid #FECDD3', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: '#E52320' }}>
                <Scissors style={{ width: '20px', height: '20px', margin: 'auto' }} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: '#0F172A' }}>Expertise & Estilo</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B' }}>Cortes, Mechas & Manicure</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: '#059669' }}>
                <CheckCircle2 style={{ width: '20px', height: '20px', margin: 'auto' }} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: '#0F172A' }}>Atendimento Acolhedor</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B' }}>Para toda a sua família</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

