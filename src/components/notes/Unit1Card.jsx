import React from 'react';
import { BookOpen, ExternalLink, Globe, Cpu } from 'lucide-react';

export default function Unit1Card({ onOpenPdf }) {
  return (
    <div className="mb-24 relative">
      
      {/* Portada de la Unidad (u1.1.svg) */}
      <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl group mb-8">
        {/* Capa de degradado para que el texto sea siempre legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-[#0a0f16]/60 to-transparent z-10"></div>
        
        <img 
          src="/u1.1.svg" 
          alt="Contexto Histórico" 
          className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            <BookOpen className="w-4 h-4" /> Unidad 01
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Telecomunicaciones Educativas <br />
            <span className="text-gray-400 font-light text-2xl md:text-3xl">Revolución Industrial y Transformación Social</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed font-light border-l-4 border-[#00E5FF] pl-5">
            El presente documento expone una revisión exhaustiva sobre la evolución histórica de la tecnología y su impacto innegable en la estructura social contemporánea, estructurada a través de las cuatro grandes revoluciones industriales
          </p>
        </div>
      </div>

      {/* Grid Asimétrico para los Artículos (u1.2 y u1.3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Artículo 1 */}
        <article className="bg-[#121a25] rounded-3xl border border-gray-800 overflow-hidden group hover:border-[#00E5FF]/50 transition-colors duration-300 flex flex-col shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="/u1.2.svg" 
              alt="Aprendizaje Personalizado" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Globe className="text-[#00E5FF] w-6 h-6" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 01: La Primera Revolución</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
                Desde una perspectiva técnica e histórica, se detalla cómo la Primera Revolución Industrial, iniciada a finales del siglo XVIII, sentó las bases de la mecanización mediante el uso de maquinaria impulsada por agua y vapor
              </p>
            </div>
          </div>
        </article>

        {/* Artículo 2 */}
        <article className="bg-[#121a25] rounded-3xl border border-gray-800 overflow-hidden group hover:border-[#00E5FF]/50 transition-colors duration-300 flex flex-col shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="/u1.3.svg" 
              alt="Producción en Masa" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Cpu className="text-[#00E5FF] w-6 h-6" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 02: Producción en Masa</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
                Posteriormente, la Segunda Revolución Industrial, a finales del siglo XIX, transformó radicalmente las industrias con la llegada de la electricidad y la producción en masa
              </p>
            </div>
          </div>
        </article>

      </div>

      {/* Botón CTA - Interactivo y llamativo */}
      <div className="mt-10 flex justify-end">
        <button 
          onClick={() => onOpenPdf('unidad1.pdf')}
          className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#00E5FF] text-[#00E5FF] font-bold text-lg px-8 py-3 rounded-full hover:bg-[#00E5FF] hover:text-[#0a0f16] transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Leer Nota Completa <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

    </div>
  );
}