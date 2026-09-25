import React, { useState, useEffect } from 'react';
import { SERVICES, TIME_SLOTS, SALON_INFO, PROFESSIONALS } from '../data/salonData';
import { Clock, Check, User, Phone, Sparkles, CheckCircle, ArrowLeft, MessageSquare, ShieldCheck, ChevronDown, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'tokmaster_booked_slots';

const getInitialBookedSlots = () => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowObj = new Date();
  tomorrowObj.setDate(tomorrowObj.getDate() + 1);
  const tomorrow = tomorrowObj.toISOString().split('T')[0];

  return {
    [`${today}_10:30`]: { clientName: "Roberto M.", serviceTitle: "Corte Masculino", phone: "(61) 98844-1234" },
    [`${today}_14:30`]: { clientName: "Fernanda S.", serviceTitle: "Manicure & Pedicure (Gel)", phone: "(61) 99122-4455" },
    [`${tomorrow}_09:00`]: { clientName: "Juliana K.", serviceTitle: "Corte Infantil Neuroinclusivo", phone: "(61) 98133-9090" }
  };
};

export default function BookingPage({ initialServiceId, onBackToHome }) {
  const [bookedSlots, setBookedSlots] = useState({});
  const [selectedService, setSelectedService] = useState(
    SERVICES.find(s => s.id === initialServiceId) || SERVICES[0]
  );
  
  // Available professionals allowed for the current service
  const availableProfessionals = PROFESSIONALS.filter(pro =>
    pro.servicesAllowed.includes(selectedService.id)
  );

  const [selectedProfessional, setSelectedProfessional] = useState(
    availableProfessionals[0] || PROFESSIONALS[0]
  );

  const getTomorrowString = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const [selectedDate, setSelectedDate] = useState(getTomorrowString());
  const [selectedTime, setSelectedTime] = useState('');
  
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBookedSlots(JSON.parse(saved));
      } else {
        const initial = getInitialBookedSlots();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        setBookedSlots(initial);
      }
    } catch (e) {
      setBookedSlots(getInitialBookedSlots());
    }
  }, []);

  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES.find(s => s.id === initialServiceId);
      if (match) {
        setSelectedService(match);
        const allowed = PROFESSIONALS.filter(pro => pro.servicesAllowed.includes(match.id));
        if (allowed.length > 0) {
          setSelectedProfessional(allowed[0]);
        }
      }
    }
  }, [initialServiceId]);

  const handleServiceChange = (serviceId) => {
    const srv = SERVICES.find(s => s.id === serviceId);
    if (!srv) return;
    setSelectedService(srv);
    setSelectedTime('');

    const allowed = PROFESSIONALS.filter(pro => pro.servicesAllowed.includes(srv.id));
    const isProAllowed = allowed.some(p => p.id === selectedProfessional.id);
    if (!isProAllowed && allowed.length > 0) {
      setSelectedProfessional(allowed[0]);
    }
  };

  const handleProfessionalChange = (proId) => {
    const pro = PROFESSIONALS.find(p => p.id === proId);
    if (pro) {
      setSelectedProfessional(pro);
      setSelectedTime('');
    }
  };

  const isSlotBooked = (time) => {
    const key = `${selectedDate}_${time}`;
    return !!bookedSlots[key];
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Por favor, selecione um horário disponível.");
      return;
    }
    if (!clientName.trim() || !clientPhone.trim()) {
      alert("Por favor, preencha seu nome e telefone para contato.");
      return;
    }

    const bookingKey = `${selectedDate}_${selectedTime}`;
    
    if (bookedSlots[bookingKey]) {
      alert("Este horário acabou de ser reservado. Por favor, escolha outro horário livre.");
      return;
    }

    const newBooking = {
      date: selectedDate,
      time: selectedTime,
      professionalName: selectedProfessional.name,
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      price: selectedService.price,
      clientName: clientName.trim(),
      phone: clientPhone.trim(),
      notes: notes.trim(),
      bookedAt: new Date().toISOString()
    };

    const updated = {
      ...bookedSlots,
      [bookingKey]: newBooking
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error("Erro ao salvar agendamento:", err);
    }
    
    setBookedSlots(updated);
    setConfirmedBookingData(newBooking);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const formatDateBR = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  const getWhatsAppMessageUrl = () => {
    if (!confirmedBookingData) return '#';
    const text = `Ol%C3%A1%20TokMaster!%20Fiz%20um%20agendamento%20pelo%20site:%0A%0A` +
      `%F0%9F%93%85%20*Data:*%20${formatDateBR(confirmedBookingData.date)}%0A` +
      `%E2%8F%B0%20*Hor%C3%A1rio:*%20${confirmedBookingData.time}%0A` +
      `%E2%9C%82%EF%B8%8F%20*Servi%C3%A7o:*%20${encodeURIComponent(confirmedBookingData.serviceTitle)}%0A` +
      `%F0%9F%91%A4%20*Profissional:*%20${encodeURIComponent(confirmedBookingData.professionalName)}%0A` +
      `%F0%9F%91%A4%20*Cliente:*%20${encodeURIComponent(confirmedBookingData.clientName)}%0A` +
      `%F0%9F%93%9E%20*Telefone:*%20${encodeURIComponent(confirmedBookingData.phone)}` +
      (confirmedBookingData.notes ? `%0A%F0%9F%93%9D%20*Obs:*%20${encodeURIComponent(confirmedBookingData.notes)}` : '');

    return `https://wa.me/${SALON_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Top Bar Navigation */}
      <div className="w-full bg-white border-b border-slate-200 py-4 shadow-sm mb-6">
        <div className="container flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#E52320] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#E52320]" />
            <span>Voltar ao Site Principal</span>
          </button>

          <img
            src="/images/logo.png"
            alt="TokMaster Instituto de Beleza"
            className="h-10 w-auto object-contain"
          />

          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#E52320] bg-red-50 px-3 py-1.5 rounded-full border border-red-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendamento Online TokMaster</span>
          </span>
        </div>
      </div>

      <div className="container max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E52320] block mb-2">
            Agendamento de Horários TokMaster
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-slate-900 mb-3">
            Escolha o Serviço & <span className="text-[#E52320] italic">Agende seu Horário</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-normal">
            Selecione o procedimento desejado, escolha o profissional da sua preferência, o dia e o horário de atendimento.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-xl">

          {!isSuccess ? (
            <form onSubmit={handleConfirmBooking} className="space-y-8">
              
              {/* Step 1: Services */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#E52320] text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                    <span>Selecione o Serviço Desejado:</span>
                  </label>
                  <span className="text-xs font-semibold text-slate-500">Clique em um serviço ou use a lista:</span>
                </div>

                <div className="relative mb-4">
                  <select
                    value={selectedService.id}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 pr-10 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#E52320] appearance-none cursor-pointer shadow-sm transition-colors"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title} — ({srv.price})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-5 h-5 text-slate-500 absolute right-4 top-3.5 pointer-events-none" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {SERVICES.map((srv) => {
                    const isSelected = selectedService.id === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => handleServiceChange(srv.id)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-red-50/80 border-[#E52320] shadow-md ring-2 ring-[#E52320]/20'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                        }`}
                      >
                        <div className="flex items-start gap-3 mb-2">
                          {srv.image && (
                            <img
                              src={srv.image}
                              alt={srv.title}
                              className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                            />
                          )}
                          <div className="flex-1">
                            <h4 className={`text-xs font-bold leading-snug ${isSelected ? 'text-[#E52320]' : 'text-slate-900'}`}>
                              {srv.title}
                            </h4>
                            <span className="text-[11px] text-slate-500 block font-medium mt-0.5">{srv.duration}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 mt-auto">
                          <span className="text-xs font-extrabold text-slate-900">{srv.price}</span>
                          {isSelected && (
                            <span className="text-[10px] font-bold text-white bg-[#E52320] px-2 py-0.5 rounded-md flex items-center gap-1">
                              <Check className="w-3 h-3 stroke-[3]" /> Selecionado
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Professionals */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#E52320] text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                    <span>Escolha o Profissional Disponível:</span>
                  </label>
                  <span className="text-xs font-semibold text-[#E52320]">
                    Profissionais qualificados para {selectedService.title.split('&')[0]}
                  </span>
                </div>

                <div className="relative mb-4">
                  <select
                    value={selectedProfessional.id}
                    onChange={(e) => handleProfessionalChange(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 pr-10 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#E52320] appearance-none cursor-pointer shadow-sm transition-colors"
                  >
                    {availableProfessionals.map((pro) => (
                      <option key={pro.id} value={pro.id}>
                        {pro.name} — ({pro.role})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-5 h-5 text-slate-500 absolute right-4 top-3.5 pointer-events-none" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {availableProfessionals.map((pro) => {
                    const isSelected = selectedProfessional.id === pro.id;
                    return (
                      <div
                        key={pro.id}
                        onClick={() => handleProfessionalChange(pro.id)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-red-50/80 border-[#E52320] shadow-md ring-2 ring-[#E52320]/20'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={pro.avatar}
                            alt={pro.name}
                            className="w-10 h-10 rounded-xl object-cover border border-slate-300 shrink-0"
                          />
                          <div>
                            <h4 className={`text-xs font-bold ${isSelected ? 'text-[#E52320]' : 'text-slate-900'}`}>
                              {pro.name}
                            </h4>
                            <span className="text-[11px] text-slate-500 block font-medium leading-tight">{pro.role}</span>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#E52320] text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Date & Time */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#E52320] text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                    <span>Escolha a Data:</span>
                  </label>

                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setSelectedTime('');
                    }}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:outline-none focus:border-[#E52320] text-sm"
                    required
                  />
                  <p className="text-[11px] text-slate-500 mt-2 font-medium">
                    Atendimento de Segunda a Sábado, das 09h às 18h.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#E52320] text-white font-bold text-xs flex items-center justify-center shrink-0">4</span>
                    <span>Escolha o Horário Disponível:</span>
                  </label>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-52 overflow-y-auto pr-1">
                    {TIME_SLOTS.map((time) => {
                      const booked = isSlotBooked(time);
                      const isSelected = selectedTime === time;

                      if (booked) {
                        return (
                          <button
                            key={time}
                            type="button"
                            disabled
                            className="py-2.5 px-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 text-xs font-bold flex flex-col items-center justify-center cursor-not-allowed"
                            title="Horário já reservado"
                          >
                            <span className="line-through">{time}</span>
                            <span className="text-[9px] text-[#E52320] font-bold mt-0.5">
                              Ocupado
                            </span>
                          </button>
                        );
                      }

                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center ${
                            isSelected
                              ? 'bg-[#E52320] text-white border-[#E52320] shadow-md scale-105'
                              : 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100'
                          }`}
                        >
                          <span>{time}</span>
                          <span className={`text-[9px] font-semibold ${isSelected ? 'text-white' : 'text-emerald-700'}`}>
                            Livre
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Step 4: Client Info */}
              <div className="pt-4 border-t border-slate-100">
                <label className="block text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#E52320] text-white font-bold text-xs flex items-center justify-center shrink-0">5</span>
                  <span>Seus Dados para Confirmação:</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Nome Completo *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        placeholder="Ex: Maria Silva"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E52320]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Telefone com WhatsApp *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        placeholder="(61) 99999-9999"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E52320]"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Observações Especiais (Opcional)</label>
                  <input
                    type="text"
                    placeholder="Ex: Preferência por ambiente calmo, atendimento neuroinclusivo..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E52320]"
                  />
                </div>
              </div>

              {/* Confirmation Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <div className="text-xs text-slate-600 flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#E52320]" />
                  <span>Seu horário é garantido e reservado diretamente no salão.</span>
                </div>

                <button
                  type="submit"
                  className="btn-red w-full sm:w-auto px-8 py-4 text-base shadow-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Agendar Horário</span>
                </button>
              </div>

            </form>
          ) : (
            /* Confirmation Receipt */
            <div className="py-6 text-center animate-fadeIn space-y-6">
              
              <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                  Agendamento Confirmado!
                </span>
                <h3 className="text-3xl font-serif font-bold text-slate-900 mt-3">
                  Sua vaga está garantida no TokMaster!
                </h3>
                <p className="text-slate-600 text-sm max-w-lg mx-auto mt-2 font-normal">
                  O horário das <strong className="text-[#E52320] font-bold">{confirmedBookingData.time}</strong> do dia <strong className="text-[#E52320] font-bold">{formatDateBR(confirmedBookingData.date)}</strong> foi reservado com sucesso.
                </p>
              </div>

              {/* Formatted Receipt Box */}
              <div className="max-w-lg mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-3.5 shadow-sm">
                
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 font-semibold">Serviço:</span>
                  <span className="text-sm font-bold text-slate-900">{confirmedBookingData.serviceTitle}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 font-semibold">Profissional:</span>
                  <span className="text-sm font-bold text-slate-900">{confirmedBookingData.professionalName}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 font-semibold">Data & Horário:</span>
                  <span className="text-sm font-bold text-[#E52320]">
                    {formatDateBR(confirmedBookingData.date)} às {confirmedBookingData.time}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 font-semibold">Cliente:</span>
                  <span className="text-sm font-bold text-slate-900">{confirmedBookingData.clientName} ({confirmedBookingData.phone})</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-semibold">Endereço:</span>
                  <span className="text-xs text-slate-800 font-bold">SHC/N CL Qd 310 Bl. E Loja 40 - Asa Norte</span>
                </div>

                {confirmedBookingData.notes && (
                  <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 italic">
                    Obs: "{confirmedBookingData.notes}"
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto px-6 py-3.5 shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Enviar Confirmação no WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setSelectedTime('');
                  }}
                  className="btn-dark w-full sm:w-auto px-6 py-3.5"
                >
                  <span>Novo Agendamento</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

