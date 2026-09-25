import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Clock, Navigation, ExternalLink, Phone, Copy, Check } from 'lucide-react';

export default function LocationSection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("SHC/N CL Quadra 310 Bloco E Loja 40 Asa Norte Brasilia DF")}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent("SHC/N CL Quadra 310 Bloco E Loja 40 Asa Norte Brasilia DF")}`;

  return (
    <section id="localizacao" className="section-padding bg-white relative border-b border-slate-100">
      <div className="container">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-xs font-bold text-[#E52320] border border-red-200 mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Onde Estamos</span>
              </div>

              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Sua visita na <span className="text-[#E52320] italic">Asa Norte</span>
              </h2>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-[#E52320] shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Endereço Completo</h4>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed font-semibold">
                      {SALON_INFO.address}
                    </p>
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs text-[#E52320] hover:underline mt-2 font-bold"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copiado para a área de transferência!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Endereço</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-[#E52320] shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Horário de Atendimento</h4>
                    <p className="text-xs text-slate-700 mt-1 font-medium">
                      {SALON_INFO.hours.weekdays}
                    </p>
                    <p className="text-xs text-slate-500">
                      {SALON_INFO.hours.sunday}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-[#E52320] shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Telefones de Contato</h4>
                    <p className="text-xs text-slate-700 mt-1 font-medium">
                      Fixo: {SALON_INFO.phone} | WhatsApp: {SALON_INFO.whatsapp}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pt-8 border-t border-slate-200 mt-8 flex flex-wrap gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red text-xs py-3 px-5 flex-1 justify-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Maps</span>
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark text-xs py-3 px-5 flex-1 justify-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir Waze</span>
              </a>
            </div>

          </div>

          {/* Right Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-lg min-h-[400px] relative">
            <iframe
              title="Mapa Salão TokMaster Asa Norte"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.8160472481335!2d-47.8865421!3d-15.7607733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a4660d5b5b5%3A0x7d0a20a6e3d22b0!2sCLN%20310%20-%20Asa%20Norte%2C%20Bras%C3%ADlia%20-%20DF%2C%2070756-500!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
