import React from 'react';
import { ExternalLink, Globe, Cpu, BookOpen } from 'lucide-react';

export default function Unit1Card({ onOpenPdf }) {
  return (
    <div className="mb-24 relative pt-6">
      
      {/* Etiqueta "Sentada" sobre el borde superior derecho de la imagen */}
      <div className="absolute top-0 right-4 md:right-10 z-30 inline-flex items-center gap-2 bg-[#0a0f16] border-2 border-[#00E5FF] text-[#00E5FF] px-6 py-2.5 rounded-full text-sm md:text-base font-black tracking-widest uppercase shadow-[0_0_20px_rgba(0,229,255,0.4)] transform hover:scale-105 transition-transform duration-300">
        <BookOpen className="w-5 h-5" /> Unidad 01
      </div>

      {/* 1. Portada de la Unidad (Responsiva 100% y sin recortes) */}
      <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl group mb-10 bg-[#0a0f16] flex items-center justify-center">
        {/* Capa sutil de brillo interno */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 z-10 rounded-3xl pointer-events-none"></div>
        
        <img 
          src="/u1.1.svg" 
          alt="Contexto Histórico" 
          /* h-auto y object-contain garantizan que NUNCA se corte la imagen, ni en PC ni en Móvil */
          className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* 3. Grid Asimétrico para los Artículos (u1.2 y u1.3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Artículo 1 */}
        <article className="bg-[#121a25] rounded-3xl border border-gray-800 overflow-hidden group hover:border-[#00E5FF]/50 transition-colors duration-300 flex flex-col shadow-lg">
          <div className="relative h-64 overflow-hidden bg-[#0a0f16]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="/u1.2.svg" 
              alt="La Primera Revolución" 
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Globe className="text-[#00E5FF] w-6 h-6" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 01: La Primera Revolución</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
                Desde una perspectiva técnica e histórica, se detalla cómo la Primera Revolución Industrial, iniciada a finales del siglo XVIII, sentó las bases de la mecanización mediante el uso de maquinaria impulsada por agua y vapor.
              </p>
            </div>
          </div>
        </article>

        {/* Artículo 2 */}
        <article className="bg-[#121a25] rounded-3xl border border-gray-800 overflow-hidden group hover:border-[#00E5FF]/50 transition-colors duration-300 flex flex-col shadow-lg">
          <div className="relative h-64 overflow-hidden bg-[#0a0f16]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="/u1.3.svg" 
              alt="Producción en Masa" 
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Cpu className="text-[#00E5FF] w-6 h-6" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 02: Producción en Masa</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
                Posteriormente, la Segunda Revolución Industrial, a finales del siglo XIX, transformó radicalmente las industrias con la llegada de la electricidad y la producción en masa.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Botón CTA */}
      <div className="mt-12 flex justify-end">
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