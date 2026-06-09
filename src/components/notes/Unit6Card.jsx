import React from 'react';
import { BookOpen, ShieldCheck, AlertTriangle, LockKeyhole } from 'lucide-react';

export default function Unit6Card({ onOpenPdf }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      
      <div className="bg-[#0F2537] p-6 border-b-4 border-[#D4AF37]">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-[#D4AF37] w-6 h-6" />
          <h2 className="text-white text-xl font-serif font-bold tracking-wide">
            Unidad 6: Telecomunicaciones Educativas
          </h2>
        </div>
        <h3 className="text-gray-300 text-sm font-medium uppercase tracking-wider">
          Seguridad de la Información Educativa
        </h3>
      </div>

      <div className="p-6 space-y-6 flex-grow">
        
        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <LockKeyhole className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            La seguridad de la información representa uno de los componentes más importantes dentro de la transformación digital de la educación, el uso creciente de plataformas virtuales, recursos educativos en línea y sistemas tecnológicos para la gestión académica ha incrementado la necesidad de proteger la información que circula en estos entornos, la confidencialidad, integridad y disponibilidad de los datos constituyen principios esenciales para garantizar el correcto funcionamiento de los servicios educativos y la protección de la información de estudiantes, docentes e instituciones, el crecimiento de las Tecnologías de la Información y la Comunicación ha permitido ampliar el acceso a la educación
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <AlertTriangle className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Además, se identifican las amenazas más frecuentes que afectan a las instituciones educativas, tales como el phishing, el malware, el acceso no autorizado a sistemas y la pérdida de información, de igual forma, se presentan diversas medidas técnicas y organizativas orientadas a fortalecer la protección de los datos y reducir las vulnerabilidades existentes
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <ShieldCheck className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Finalmente, se concluye que la implementación de estrategias integrales de seguridad no solo contribuye a proteger los activos de información, sino que también fortalece la confianza de la comunidad educativa, favorece la continuidad de los procesos de enseñanza y aprendizaje y promueve una transformación digital sostenible y segura para enfrentar los desafíos tecnológicos presentes y futuros
          </p>
        </div>

      </div>

      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
        <button 
          onClick={() => onOpenPdf('unidad6.pdf')}
          className="flex items-center gap-2 bg-[#004AAD] text-white font-medium py-2 px-5 rounded hover:bg-[#003882] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#004AAD]"
        >
          Leer Nota Completa
        </button>
      </div>

    </article>
  );
}   