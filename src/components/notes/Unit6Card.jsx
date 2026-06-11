import React from 'react';
import { ExternalLink, ShieldCheck, AlertTriangle, LockKeyhole, BookOpen } from 'lucide-react';

export default function Unit6Card({ onOpenPdf }) {
  return (
    <div className="mb-20 relative pt-10 mt-16">
      
      {/* Animaciones Ciberseguras */}
      <style>
        {`
          @keyframes levitate-massive {
            0% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-20px) scale(1.02); }
            100% { transform: translateY(0px) scale(1); }
          }
          .animate-massive-shield {
            animation: levitate-massive 7s ease-in-out infinite;
          }
        `}
      </style>

      {/* Etiqueta "Sentada" Flotante (Color Cian Neón) */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-40 inline-flex items-center gap-2 bg-[#050b14] border-2 border-[#0EA5E9] text-[#0EA5E9] px-8 py-3 rounded-full text-base font-black tracking-widest uppercase shadow-[0_0_30px_rgba(14,165,233,0.5)]">
        <BookOpen className="w-5 h-5" /> Unidad 06
      </div>

      {/* BLOQUE 1: PORTADA CINEMÁTICA (El Protagonismo Absoluto de la Imagen) */}
      <div className="mb-16 relative">
        
        {/* Título Gigante Central */}
        <div className="text-center pt-8 mb-10 relative z-20">
           <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 text-[#0EA5E9] font-bold tracking-widest text-sm mb-6 backdrop-blur-md">
             <ShieldCheck className="w-5 h-5" /> NOTA CIENTÍFICA
           </div>
           <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e0f2fe] to-[#0EA5E9] tracking-tighter drop-shadow-[0_0_40px_rgba(14,165,233,0.4)] leading-none">
             SEGURIDAD <br /> INFORMÁTICA
           </h2>
        </div>

        {/* Contenedor Masivo de la Imagen y Texto */}
        <div className="relative w-full rounded-[3rem] bg-[#050b14] border border-[#0EA5E9]/30 shadow-[0_0_80px_rgba(14,165,233,0.15)] overflow-hidden group flex flex-col">
           
           {/* Resplandor interno de la caja fuerte */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#0EA5E9]/10 to-transparent pointer-events-none"></div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0EA5E9] opacity-10 blur-[150px] pointer-events-none"></div>

           {/* La Imagen como Protagonista (Tamaño Enorme) */}
           <div className="relative w-full h-[400px] md:h-[600px] lg:h-[750px] flex items-center justify-center p-4 mt-4">
             <img 
               src="/u6.1.svg" 
               alt="Cúpula de Seguridad" 
               className="w-full h-full object-contain animate-massive-shield drop-shadow-[0_0_50px_rgba(14,165,233,0.4)] relative z-10" 
             />
           </div>

           {/* Panel de Cristal Inferior (Texto Resumen) */}
           <div className="relative z-20 bg-[#0a0f16]/70 backdrop-blur-2xl border-t border-[#0EA5E9]/30 p-8 md:p-12 lg:p-16">
             <p className="text-gray-300 text-lg md:text-2xl leading-relaxed font-light text-justify max-w-5xl mx-auto">
               La seguridad de la información representa uno de los componentes más importantes dentro de la transformación digital de la educación, el uso creciente de plataformas virtuales, recursos educativos en línea y sistemas tecnológicos para la gestión académica ha incrementado la necesidad de proteger la información que circula en estos entornos, la confidencialidad, integridad y disponibilidad de los datos constituyen principios esenciales para garantizar el correcto funcionamiento de los servicios educativos y la protección de la información de estudiantes, docentes e instituciones.
             </p>
           </div>
        </div>
      </div>

      {/* BLOQUE 2: Paneles de Amenaza y Defensa (Visualmente Ampliados) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Panel 1: Vulnerabilidades (u6.2) */}
        <article className="relative bg-[#050b14] rounded-3xl border border-gray-800 overflow-hidden group hover:border-[#0EA5E9]/60 transition-all duration-500 shadow-2xl flex flex-col">
          <div className="h-[300px] md:h-[400px] relative bg-[#0a0f16] border-b border-gray-800 p-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img 
              src="/u6.2.svg" 
              alt="Puente de Vulnerabilidades" 
              className="w-full h-full object-contain transform group-hover:scale-[1.08] transition-transform duration-700 ease-out relative z-0" 
            />
          </div>
          <div className="p-8 md:p-10 relative z-20 flex-grow">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0EA5E9]/10 p-3 rounded-xl border border-[#0EA5E9]/30">
                <AlertTriangle className="text-[#0EA5E9] w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Art. 01: Identificación de Amenazas</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
              Además, se identifican las amenazas más frecuentes que afectan a las instituciones educativas, tales como el phishing, el malware, el acceso no autorizado a sistemas y la pérdida de información, de igual forma, se presentan diversas medidas técnicas y organizativas orientadas a fortalecer la protección de los datos y reducir las vulnerabilidades existentes.
            </p>
          </div>
        </article>

        {/* Panel 2: Defensas (u6.3) */}
        <article className="relative bg-[#050b14] rounded-3xl border border-gray-800 overflow-hidden group hover:border-[#0EA5E9]/60 transition-all duration-500 shadow-2xl flex flex-col">
          <div className="h-[300px] md:h-[400px] relative bg-[#0a0f16] border-b border-gray-800 p-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img 
              src="/u6.3.svg" 
              alt="Cortafuegos y Servidores" 
              className="w-full h-full object-contain transform group-hover:scale-[1.08] transition-transform duration-700 ease-out relative z-0" 
            />
          </div>
          <div className="p-8 md:p-10 relative z-20 flex-grow">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0EA5E9]/10 p-3 rounded-xl border border-[#0EA5E9]/30">
                <LockKeyhole className="text-[#0EA5E9] w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Art. 02: Estrategias Integrales</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
              Finalmente, se concluye que la implementación de estrategias integrales de seguridad no solo contribuye a proteger los activos de información, sino que también fortalece la confianza de la comunidad educativa, favorece la continuidad de los procesos de enseñanza y aprendizaje y promueve una transformación digital sostenible y segura para enfrentar los desafíos tecnológicos presentes y futuros.
            </p>
          </div>
        </article>

      </div>

      {/* Botón CTA Final (Más imponente) */}
      <div className="mt-20 flex justify-center pb-10">
        <button 
          onClick={() => onOpenPdf('unidad6.pdf')} 
          className="group relative inline-flex items-center gap-4 bg-transparent border-2 border-[#0EA5E9] text-[#0EA5E9] font-black text-xl px-12 py-5 rounded-full hover:bg-[#0EA5E9] hover:text-[#050b14] transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_40px_rgba(14,165,233,0.8)] hover:-translate-y-1"
        >
          <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase">
            Acceder al Documento Completo <ExternalLink className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>
      </div>

    </div>
  );
}