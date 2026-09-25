import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Calendar } from 'lucide-react';

export default function FloatingButtons({ onOpenBooking }) {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Olá! Estou no site do TokMaster e gostaria de tirar uma dúvida ou agendar um horário.")}`;

  return (
    <>
      {/* Floating WhatsApp Button (Bottom Right) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl pulse-whatsapp hover:scale-110 transition-transform group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        <span className="absolute right-16 bg-[#0F172A] text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Conversar no WhatsApp
        </span>
      </a>

      {/* Floating Quick Booking Bar for Mobile (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 md:hidden">
        <button
          onClick={onOpenBooking}
          className="btn-primary py-3 px-5 text-xs shadow-2xl border border-[#D4AF37]"
        >
          <Calendar className="w-4 h-4" />
          <span>Agendar Online</span>
        </button>
      </div>
    </>
  );
}
