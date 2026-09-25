import React, { useState } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/salonData';
import { Scissors, Heart, Sparkles, Eye, Feather, Smile, Clock, Calendar } from 'lucide-react';

const iconMap = {
  Smile: Smile,
  Scissors: Scissors,
  Sparkles: Sparkles,
  Heart: Heart,
  Eye: Eye,
  Feather: Feather
};

export default function ServicesList({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredServices = activeCategory === "todos"
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section
      id="servicos"
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
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px auto' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#E52320', display: 'block', marginBottom: '8px' }}>
            NOSSOS SERVIÇOS & TABELA DE VALORES
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
            Menu de Procedimentos <span style={{ color: '#E52320', fontStyle: 'italic' }}>TokMaster</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#475569', textAlign: 'center', margin: '0 auto' }}>
            Clique em qualquer serviço para abrir o sistema de agendamento online e reservar seu horário com vaga garantida.
          </p>
        </div>

        {/* Category Pills Centered with Generous Margins */}
        <div style={{ display: 'flex', flexWrap: 'wrap', itemsCenter: 'center', justifyCenter: 'center', gap: '10px', marginBottom: '48px', width: '100%' }}>
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? '#E52320' : '#F1F5F9',
                  color: isActive ? '#FFFFFF' : '#334155',
                  boxShadow: isActive ? '0 4px 12px rgba(229, 35, 32, 0.3)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid-3">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Scissors;

            return (
              <div
                key={service.id}
                className="card-clean"
                style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}
              >
                <div>
                  {/* Service Image Box */}
                  {service.image && (
                    <div className="service-card-img">
                      <img
                        src={service.image}
                        alt={service.title}
                      />
                      {service.badge && (
                        <span className="badge-red" style={{ position: 'absolute', top: '12px', right: '12px' }}>
                          {service.badge}
                        </span>
                      )}
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E52320', shrink: 0 }}>
                      <IconComponent style={{ width: '16px', height: '16px' }} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', color: '#0F172A', lineHeight: '1.2' }}>
                      {service.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6', marginBottom: '16px', fontWeight: '400' }}>
                    {service.description}
                  </p>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid #F1F5F9', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', itemsCenter: 'center', justifyBetween: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock style={{ width: '14px', height: '14px', color: '#E52320' }} />
                      {service.duration}
                    </span>
                    <span style={{ fontSize: '1rem', fontWeight: '700', color: '#0F172A' }}>
                      {service.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="btn-red"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '10px 16px' }}
                  >
                    <Calendar style={{ width: '16px', height: '16px' }} />
                    <span>Agendar Horário</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
