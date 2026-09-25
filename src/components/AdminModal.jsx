import React, { useState, useEffect } from 'react';
import { Calendar, Trash2, ShieldCheck, RefreshCw, X, User, Phone, Lock } from 'lucide-react';

const STORAGE_KEY = 'tokmaster_booked_slots';

export default function AdminModal({ isOpen, onClose }) {
  const [bookedSlots, setBookedSlots] = useState({});

  const reloadSlots = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBookedSlots(JSON.parse(saved));
      } else {
        setBookedSlots({});
      }
    } catch (e) {
      setBookedSlots({});
    }
  };

  useEffect(() => {
    if (isOpen) {
      reloadSlots();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleUnblockSlot = (key) => {
    if (!window.confirm("Deseja realmente liberar este horário reservado?")) return;
    
    const updated = { ...bookedSlots };
    delete updated[key];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setBookedSlots(updated);
  };

  const handleClearAll = () => {
    if (!window.confirm("ATENÇÃO: Deseja apagar TODOS os agendamentos registrados no navegador?")) return;
    localStorage.removeItem(STORAGE_KEY);
    setBookedSlots({});
  };

  const slotKeys = Object.keys(bookedSlots).sort();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl glass-card p-6 md:p-8 rounded-3xl border border-[#D4AF37]/40 shadow-2xl relative max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">Painel da Administração - TokMaster</h3>
              <p className="text-xs text-slate-400">Gestão dos Horários Reservados & Confirmados</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content list */}
        <div className="py-6 overflow-y-auto grow space-y-4 pr-1">
          {slotKeys.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-slate-600" />
              <p className="text-base font-semibold">Nenhum horário reservado no momento.</p>
              <p className="text-xs text-slate-500">Todos os horários do calendário estão livres.</p>
            </div>
          ) : (
            slotKeys.map((key) => {
              const info = bookedSlots[key];
              const [dateStr, timeStr] = key.split('_');
              const parts = dateStr.split('-');
              const dateBR = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : dateStr;

              return (
                <div
                  key={key}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#D4AF37]/30 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 text-[11px] font-bold border border-red-500/30 flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Reservado
                      </span>
                      <span className="text-sm font-bold text-[#D4AF37]">
                        {dateBR} às {timeStr}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mt-1">
                      {info.serviceTitle || "Serviço"}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-slate-300 mt-1">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {info.clientName || "Cliente"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {info.phone || "N/A"}
                      </span>
                    </div>

                    {info.notes && (
                      <p className="text-xs text-slate-400 italic mt-1">
                        Obs: "{info.notes}"
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleUnblockSlot(key)}
                    className="px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors self-end sm:self-center"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Liberar Horário</span>
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
          <button
            onClick={handleClearAll}
            className="text-xs text-red-400 hover:underline font-medium"
          >
            Limpar todos os agendamentos
          </button>
          
          <button
            onClick={onClose}
            className="btn-primary text-xs py-2.5 px-6"
          >
            Concluído
          </button>
        </div>

      </div>
    </div>
  );
}
