import React from 'react';
import { BookOpen, MonitorPlay, WifiOff, GraduationCap } from 'lucide-react';

export default function Unit5Card({ onOpenPdf }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      
      <div className="bg-[#0F2537] p-6 border-b-4 border-[#D4AF37]">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-[#D4AF37] w-6 h-6" />
          <h2 className="text-white text-xl font-serif font-bold tracking-wide">
            Unidad 5: Telecomunicaciones Educativas
          </h2>
        </div>
        <h3 className="text-gray-300 text-sm font-medium uppercase tracking-wider">
          Capacitación Docente y Tecnología
        </h3>
      </div>

      <div className="p-6 space-y-6 flex-grow">
        
        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <MonitorPlay className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Las Tecnologías de la Información y la Comunicación han modificado profundamente las tradicionales dinámicas de aprendizaje y enseñanza escolar, ofreciendo a los estudiantes múltiples entornos interactivos mediante el uso de diversas aplicaciones educativas que facilitan enormemente la asimilación de los variados contenidos académicos, estimulando al mismo tiempo nuevas capacidades esenciales como la creatividad crítica y el trabajo colaborativo grupal constante
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <WifiOff className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Sin embargo la efectiva implementación de todos estos recursos choca frecuentemente con serios obstáculos tecnológicos como la falta de conectividad en zonas rurales, sumándose a ello la evidente carencia de competencias digitales por parte de muchos educadores que experimentan una fuerte resistencia generacional al cambio, lo cual limita considerablemente el máximo aprovechamiento de estas modernas e innovadoras plataformas educativas virtuales
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-lg shrink-0">
            <GraduationCap className="text-[#004AAD] w-5 h-5" />
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Para solucionar definitivamente estas limitaciones se requiere implementar programas de capacitación continua que incluyan estrategias innovadoras como la gamificación para despertar interés, apoyándose firmemente en sólidos modelos teóricos como el constructivismo y conectivismo que guían metodológicamente al profesorado, garantizando que adquieran las habilidades necesarias para integrar la tecnología de forma completamente adaptativa dentro de sus variadas rutinas laborales diarias actuales
          </p>
        </div>

      </div>

      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
        <button 
          onClick={() => onOpenPdf('unidad5.pdf')}
          className="flex items-center gap-2 bg-[#004AAD] text-white font-medium py-2 px-5 rounded hover:bg-[#003882] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#004AAD]"
        >
          Leer Nota Completa
        </button>
      </div>

    </article>
  );
}