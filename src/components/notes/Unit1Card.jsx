import React from 'react';
import { BookOpen, Cpu, Globe } from 'lucide-react';

export default function Unit1Card({ onOpenPdf }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      
      {/* Encabezado de la Tarjeta */}
      <div className="bg-[#0F2537] p-6 border-b-4 border-[#D4AF37]">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-[#D4AF37] w-6 h-6" />
          <h2 className="text-white text-xl font-serif font-bold tracking-wide">
            Unidad 1: Telecomunicaciones Educativas
          </h2>
        </div>
        <h3 className="text-gray-300 text-sm font-medium uppercase tracking-wider">
          Revolución Industrial y Transformación Social
        </h3>
      </div>

      {/* Contenido Extraído Exactamente del PDF (Sin puntos y seguidos) */}
      <div className="p-6 space-y-6 flex-grow">
        
        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <Globe className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            El presente documento expone una revisión exhaustiva sobre la evolución histórica de la tecnología y su impacto innegable en la estructura social contemporánea, estructurada a través de las cuatro grandes revoluciones industriales
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <Cpu className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Desde una perspectiva técnica e histórica, se detalla cómo la Primera Revolución Industrial, iniciada a finales del siglo XVIII, sentó las bases de la mecanización mediante el uso de maquinaria impulsada por agua y vapor
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <Cpu className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Posteriormente, la Segunda Revolución Industrial, a finales del siglo XIX, transformó radicalmente las industrias con la llegada de la electricidad y la producción en masa
          </p>
        </div>

      </div>

      {/* Pie de la Tarjeta con CTA Vinculado al Modal */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
        <button 
          onClick={onOpenPdf}
          className="flex items-center gap-2 bg-[#004AAD] text-white font-medium py-2 px-5 rounded hover:bg-[#003882] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#004AAD]"
        >
          Leer Nota Completa
        </button>
      </div>

    </article>
  );
}