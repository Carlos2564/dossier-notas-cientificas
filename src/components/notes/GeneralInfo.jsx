import React from 'react';
import { Target, KeyRound, BookOpenText } from 'lucide-react';

export default function GeneralInfo() {
  return (
    <section className="bg-[#0a0f16] py-16 border-b border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Columna Izquierda: Introducción y Objetivos */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Introducción */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpenText className="text-[#00E5FF] w-8 h-8" />
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Introducción General</h2>
              </div>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light text-justify">
                <p className="border-l-4 border-[#00E5FF] pl-4">
                  El presente dossier consolida un análisis crítico y exhaustivo sobre el impacto de las Tecnologías de la Información y la Comunicación en el sistema educativo contemporáneo, donde se aborda la evolución histórica de las telecomunicaciones y su confrontación directa con la realidad socioeconómica y la profunda brecha digital existente en El Salvador.
                </p>
                <p className="border-l-4 border-[#00E5FF] pl-4">
                  A través de esta investigación se busca desmitificar la ilusión de la modernidad tecnológica que prioriza la adquisición de equipos sobre la verdadera planificación didáctica, el propósito fundamental es fomentar una transformación pedagógica que coloque la inclusión y el desarrollo del pensamiento crítico por encima del simple uso instrumental de la virtualidad.
                </p>
              </div>
            </div>

            {/* Objetivo General */}
            <div className="relative p-8 bg-[#121a25] rounded-2xl border border-gray-800 overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00E5FF]"></div>
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Target className="w-48 h-48 text-[#00E5FF]" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#00E5FF] w-6 h-6" />
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Objetivo General</h3>
              </div>
              
              <p className="text-xl text-gray-400 italic leading-relaxed font-serif relative z-10">
                "Analizar críticamente la integración de las herramientas tecnológicas y de telecomunicación en los entornos formativos, proponiendo estrategias pedagógicas innovadoras que enfrenten las desigualdades estructurales y promuevan un aprendizaje verdaderamente significativo, inclusivo y ético en el contexto nacional."
              </p>
            </div>

          </div>

          {/* Columna Derecha: Palabras Clave */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 bg-[#121a25] p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
                <KeyRound className="text-[#00E5FF] w-6 h-6" />
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Palabras Clave</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {[
                  "Telecomunicaciones Educativas", 
                  "Brecha Digital", 
                  "Competencias Digitales", 
                  "Inclusión Tecnológica", 
                  "Innovación Pedagógica", 
                  "Educación Salvadoreña"
                ].map((keyword, idx) => (
                  <span 
                    key={idx} 
                    className="bg-[#0a0f16] text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-gray-700 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}