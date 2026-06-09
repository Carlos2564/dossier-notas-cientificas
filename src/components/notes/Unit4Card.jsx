import React from 'react';
import { BookOpen, Video, MonitorOff, Users } from 'lucide-react';

export default function Unit4Card({ onOpenPdf }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      
      <div className="bg-[#0F2537] p-6 border-b-4 border-[#D4AF37]">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-[#D4AF37] w-6 h-6" />
          <h2 className="text-white text-xl font-serif font-bold tracking-wide">
            Unidad 4: Telecomunicaciones Educativas
          </h2>
        </div>
        <h3 className="text-gray-300 text-sm font-medium uppercase tracking-wider">
          Videoconferencia y Virtualidad Forzada
        </h3>
      </div>

      <div className="p-6 space-y-6 flex-grow">
        
        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <Video className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Este estudio ofrece una visión crítica y profunda sobre el uso de la videoconferencia como eje central de la educación a distancia en las universidades de El Salvador, partiendo de una revisión de sus fundamentos teóricos y roles institucionales para luego contrastarlos con la compleja experiencia vivida por docentes y alumnos durante la implementación de la virtualidad forzada
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <MonitorOff className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Resaltando cómo la promesa de un entorno de aprendizaje flexible y colaborativo se vio empañada por la persistente brecha digital y la falta de una formación pedagógica adecuada que permitiera trascender el modelo de la clase magistral tradicional
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <Users className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Concluyendo finalmente que la verdadera modernización educativa no depende de la calidad de las plataformas digitales sino de una transformación profunda que humanice el proceso de enseñanza y aprendizaje, reconociendo las desigualdades estructurales del país para construir un modelo inclusivo que garantice el derecho a una educación digna y liberadora
          </p>
        </div>

      </div>

      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
        <button 
          onClick={() => onOpenPdf('unidad4.pdf')}
          className="flex items-center gap-2 bg-[#004AAD] text-white font-medium py-2 px-5 rounded hover:bg-[#003882] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#004AAD]"
        >
          Leer Nota Completa
        </button>
      </div>

    </article>
  );
}