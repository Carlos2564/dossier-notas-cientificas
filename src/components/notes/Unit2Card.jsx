import React from 'react';
import { BookOpen, Radio, Smartphone, WifiOff } from 'lucide-react';

export default function Unit2Card({ onOpenPdf }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      
      {/* Encabezado de la Tarjeta */}
      <div className="bg-[#0F2537] p-6 border-b-4 border-[#D4AF37]">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-[#D4AF37] w-6 h-6" />
          <h2 className="text-white text-xl font-serif font-bold tracking-wide">
            Unidad 2: Telecomunicaciones Educativas
          </h2>
        </div>
        <h3 className="text-gray-300 text-sm font-medium uppercase tracking-wider">
          Impacto Histórico y Brecha Tecnológica
        </h3>
      </div>

      {/* Contenido Extraído Exactamente del PDF (Sin puntos y seguidos) */}
      <div className="p-6 space-y-6 flex-grow">
        
        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <Radio className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            La nota científica analiza el impacto histórico y actual de las Tecnologías de la Información y la Comunicación en El Salvador, destacando que su desarrollo ha estado marcado por desigualdades estructurales que han limitado su verdadero potencial educativo, se analiza la evolución de los medios de comunicación, desde la radio y la televisión hasta la llegada del internet, evidenciando que muchas iniciativas tecnológicas no han logrado consolidarse como herramientas pedagógicas inclusivas
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <Smartphone className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            De manera comparativa, se analiza la experiencia de aprendizaje móvil en Costa Rica, promovida por la UNESCO, donde se evidencia que la integración efectiva de dispositivos móviles en la educación depende de políticas públicas coherentes, capacitación docente y estrategias metodológicas innovadoras centradas en el estudiante
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <WifiOff className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Asimismo, se reflexiona sobre cómo la pandemia de COVID-19 puso en evidencia la brecha digital existente en El Salvador, mostrando que la falta de conectividad, infraestructura tecnológica y preparación docente afectó directamente el derecho a la educación de many estudiantes, especialmente en zonas rurales y sectores vulnerables
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