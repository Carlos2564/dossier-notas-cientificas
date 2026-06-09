import React from 'react';
import { Target, Key, BookOpenCheck, Library, GraduationCap } from 'lucide-react';

export default function GeneralInfo() {
  return (
    <section className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-12">
      
      {/* Nuevo Encabezado Premium */}
      <div className="relative bg-gradient-to-br from-[#0F2537] via-[#1a365d] to-[#0F2537] px-8 pt-12 pb-10 overflow-hidden">
        
        {/* Icono de fondo como marca de agua */}
        <div className="absolute -right-4 -bottom-10 opacity-5 transform rotate-12 pointer-events-none">
          <Library className="w-64 h-64 text-white" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
          
          {/* Emblema superpuesto */}
          <div className="bg-gradient-to-tr from-[#D4AF37] to-[#fceeb5] p-4 rounded-2xl shadow-xl inline-flex transform -rotate-3 transition-transform hover:rotate-0 duration-300">
            <GraduationCap className="w-10 h-10 text-[#0F2537]" />
          </div>
          
          {/* Tipografía refinada */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 tracking-tight drop-shadow-md">
              Análisis Transversal sobre Telecomunicaciones
            </h2>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-[#D4AF37] to-transparent hidden md:block"></span>
              <p className="text-blue-100 font-medium text-sm md:text-base tracking-widest uppercase">
                
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="p-8 md:p-10 space-y-12">
        
        {/* Palabras Clave */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-50 p-2 rounded-lg">
              <Key className="text-[#004AAD] w-5 h-5" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#0F2537]">Palabras Clave</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white text-[#0F2537] px-5 py-2 rounded-full text-sm font-semibold border-2 border-gray-100 shadow-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">Telecomunicaciones Educativas</span>
            <span className="bg-white text-[#0F2537] px-5 py-2 rounded-full text-sm font-semibold border-2 border-gray-100 shadow-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">Brecha Digital</span>
            <span className="bg-white text-[#0F2537] px-5 py-2 rounded-full text-sm font-semibold border-2 border-gray-100 shadow-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">Competencias Digitales</span>
            <span className="bg-white text-[#0F2537] px-5 py-2 rounded-full text-sm font-semibold border-2 border-gray-100 shadow-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">Inclusión Tecnológica</span>
            <span className="bg-white text-[#0F2537] px-5 py-2 rounded-full text-sm font-semibold border-2 border-gray-100 shadow-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">Innovación Pedagógica</span>
            <span className="bg-white text-[#0F2537] px-5 py-2 rounded-full text-sm font-semibold border-2 border-gray-100 shadow-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">Educación Salvadoreña</span>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Introducción */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-50 p-2 rounded-lg">
              <BookOpenCheck className="text-[#004AAD] w-5 h-5" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#0F2537]">Introducción General</h3>
          </div>
          <div className="space-y-5 text-gray-600 leading-loose text-justify font-medium">
            <p className="border-l-4 border-gray-200 pl-4">El presente dossier consolida un análisis crítico y exhaustivo sobre el impacto de las Tecnologías de la Información y la Comunicación en el sistema educativo contemporáneo, donde se aborda la evolución histórica de las telecomunicaciones y su confrontación directa con la realidad socioeconómica y la profunda brecha digital existente en El Salvador.</p>
            <p className="border-l-4 border-gray-200 pl-4">A través de esta investigación se busca desmitificar la ilusión de la modernidad tecnológica que prioriza la adquisición de equipos sobre la verdadera planificación didáctica, el propósito fundamental es fomentar una transformación pedagógica que coloque la inclusión y el desarrollo del pensamiento crítico por encima del simple uso instrumental de la virtualidad.</p> 
            <p className="border-l-4 border-gray-200 pl-4"></p>
          </div>
        </div>

        {/* Objetivo General */}
        <div className="relative mt-8">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#D4AF37] rounded-r-md"></div>
          <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-100 shadow-inner">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[#D4AF37] w-6 h-6" />
              <h3 className="text-xl font-serif font-bold text-[#0F2537]">Objetivo General</h3>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed italic font-serif">
              "Analizar críticamente la integración de las herramientas tecnológicas y de telecomunicación en los entornos formativos, proponiendo estrategias pedagógicas innovadoras que enfrenten las desigualdades estructurales y promuevan un aprendizaje verdaderamente significativo, inclusivo y ético en el contexto nacional."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}