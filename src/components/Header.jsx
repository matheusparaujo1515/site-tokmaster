import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import Logo from './Logo';
import { Calendar, Menu, X } from 'lucide-react';

export default function Header({ onOpenBooking, onOpenAdmin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      
      if (day >= 1 && day <= 6 && hour >= 9 && hour < 18) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Apresentação", href: "#apresentacao" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Serviços & Preços", href: "#servicos" },
    { label: "Agendamento", href: "#agendamento" },
    { label: "Localização", href: "#localizacao" },
    { label: "Depoimentos", href: "#depoimentos" }
  ];

  return (
    <header
      style={{ minHeight: '72px' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 flex items-center ${
        isScrolled ? 'shadow-md bg-white/95 backdrop-blur-md py-2.5' : 'py-3'
      }`}
    >
      <div className="container flex items-center justify-between w-full">
        
        {/* Logo */}
        <a href="#" className="no-underline flex items-center">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs md:text-sm font-semibold text-slate-700 hover:text-[#E52320] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden sm:flex items-center gap-3">
          <span className={`hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${isOpenNow ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
            {isOpenNow ? 'Aberto' : 'Fechado'}
          </span>

          <button
            onClick={() => onOpenBooking()}
            className="btn-red text-xs py-2 px-4 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Horário</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#E52320]"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 py-4 px-6 shadow-xl animate-fadeIn absolute top-full left-0 right-0">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-[#E52320] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-red w-full justify-center py-2.5 text-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar Horário Online</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="text-xs text-slate-500 hover:text-slate-800 py-1 text-center font-medium"
              >
                Área do Salão / Gestão de Horários
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
