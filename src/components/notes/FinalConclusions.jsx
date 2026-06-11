import React from 'react';
import { Lightbulb, CheckCircle2, Award } from 'lucide-react';

export default function FinalConclusions() {
  return (
    <section className="bg-[#0a0f16] py-20 border-t border-gray-800 relative overflow-hidden">
      
      {/* Luces ambientales de cierre */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#00E5FF]/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Título de Cierre */}
        <div className="text-center mb-20">
          <Award className="text-[#00E5FF] w-12 h-12 mx-auto mb-4 animate-bounce" />
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            <span className="text-[#00E5FF]"></span>
          </h2>
          <div className="h-1 w-24 bg-[#00E5FF] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Recomendaciones (Imagen 3) */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
              <Lightbulb className="text-yellow-400 w-8 h-8" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Recomendaciones</h3>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-[#050b14] mb-8 group">
              <img src="/3.svg" alt="Mundo Digital" className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-700" />
            </div>

            <ul className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <li className="flex gap-4">
                <span className="text-[#00E5FF] font-bold">01.</span>
                <p className="text-justify">Se recomienda priorizar la inversión en infraestructura tecnológica equitativa, especialmente en los sectores más vulnerables de El Salvador, para garantizar que el acceso a la información no sea un privilegio sino un derecho ciudadano fundamental.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00E5FF] font-bold">02.</span>
                <p className="text-justify">Es imperativo transformar los planes de capacitación docente hacia un modelo de competencias digitales críticas, donde el profesorado no solo aprenda a usar herramientas sino a diseñar experiencias de aprendizaje significativas y éticas.</p>
              </li>
            </ul>
          </div>

          {/* Conclusiones (Imagen 1) */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
              <CheckCircle2 className="text-emerald-400 w-8 h-8" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Conclusiones</h3>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-[#050b14] mb-8 group">
              <img src="/1.svg" alt="Rompecabezas Cognitivo" className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="bg-[#121a25] p-8 rounded-2xl border border-gray-800 shadow-inner">
              <p className="text-gray-300 text-lg font-light leading-relaxed text-justify">
                Finalmente se concluye que la verdadera integración de las telecomunicaciones en la educación requiere superar el enfoque instrumentalista y memorístico para abrazar una pedagogía que desarrolle el pensamiento crítico y la capacidad de resolver problemas en entornos de incertidumbre digital.
              </p>
              <p className="text-gray-300 text-lg font-light leading-relaxed text-justify mt-6">
                El éxito de la modernización educativa no reside en la sofisticación de los dispositivos instalados en los centros escolares, sino en la capacidad del sistema para reducir las desigualdades estructurales y formar ciudadanos con competencias digitales sólidas y responsables ante los desafíos de la sociedad del conocimiento.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}