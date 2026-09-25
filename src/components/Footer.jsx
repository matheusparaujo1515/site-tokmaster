import React from 'react';
import { SALON_INFO } from '../data/salonData';
import Logo from './Logo';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenAdmin }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#18181B] text-slate-300 pt-16 pb-12 text-sm relative border-t border-slate-800">
      <div className="container">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Logo isLightBg={false} />

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-md font-normal">
              Referência em beleza na Asa Norte (SHC/N CL Qd. 310 Bloco E Loja 40) há mais de 20 anos. Especialistas em corte masculino, feminino, infantil neuroinclusivo (autismo/TDAH), mechas e manicuria de alto padrão.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#E52320] transition-all"
                aria-label="Telefone Fixo"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4">Navegação</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#apresentacao" className="hover:text-[#E52320] transition-colors">Apresentação</a></li>
              <li><a href="#diferenciais" className="hover:text-[#E52320] transition-colors">Diferenciais</a></li>
              <li><a href="#servicos" className="hover:text-[#E52320] transition-colors">Serviços & Preços</a></li>
              <li><a href="#agendamento" className="hover:text-[#E52320] transition-colors">Agendamento Online</a></li>
              <li><a href="#localizacao" className="hover:text-[#E52320] transition-colors">Localização</a></li>
              <li><a href="#depoimentos" className="hover:text-[#E52320] transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4">Contato & Endereço</h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E52320] shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">{SALON_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E52320] shrink-0" />
                <span className="text-slate-300">{SALON_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">{SALON_INFO.whatsapp}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} TokMaster Instituto de Beleza. Todos os direitos reservados.</p>

          <button
            onClick={onOpenAdmin}
            className="text-[11px] text-slate-400 hover:text-white underline transition-colors"
          >
            Acesso da Equipe (Gestão de Horários)
          </button>
        </div>

      </div>
    </footer>
  );
}
