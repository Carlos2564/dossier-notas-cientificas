import React from 'react';
import { ExternalLink, Video, MonitorOff, BookOpen, Users } from 'lucide-react';

export default function Unit4Card({ onOpenPdf }) {
  return (
    <div className="mb-32 relative pt-6 border-t border-gray-800/50 mt-10">
      
      {/* Animación personalizada de Levitación inyectada directamente */}
      <style>
        {`
          @keyframes levitate {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-levitate {
            animation: levitate 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Etiqueta "Sentada" (Color Verde Cyber para la Unidad 4) */}
      <div className="absolute -top-6 left-4 md:left-10 z-30 inline-flex items-center gap-2 bg-[#0a0f16] border-2 border-[#00FFA3] text-[#00FFA3] px-6 py-2.5 rounded-full text-sm md:text-base font-black tracking-widest uppercase shadow-[0_0_20px_rgba(0,255,163,0.3)] transform hover:scale-105 transition-transform duration-300">
        <BookOpen className="w-5 h-5" /> Unidad 04
      </div>

      {/* BLOQUE 1: Portada Estilo Panel (Dashboard) */}
      <div className="bg-[#121a25] rounded-3xl border border-gray-800 p-6 md:p-10 mb-12 shadow-2xl relative overflow-hidden group">
        {/* Luces de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FFA3] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 relative z-10">
             <p className="text-[#00FFA3] text-sm uppercase font-bold tracking-widest mb-1 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse"></span> Nota Científica
             </p>
             <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
               Videoconferencia y <br />
               <span className="text-gray-400 font-light text-2xl md:text-4xl">Virtualidad Forzada</span>
             </h2>
             <p className="text-gray-300 text-lg leading-relaxed font-light text-justify border-l-4 border-gray-700 pl-5">
               Este estudio ofrece una visión crítica y profunda sobre el uso de la videoconferencia como eje central de la educación a distancia en las universidades de El Salvador, partiendo de una revisión de sus fundamentos teóricos y roles institucionales para luego contrastarlos con la compleja experiencia vivida por docentes y alumnos durante la implementación de la virtualidad forzada.
             </p>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
            {/* Aquí aplicamos la animación continua 'animate-levitate' */}
            <img 
              src="/u4.1.svg" 
              alt="Videoconferencia" 
              className="w-full h-full object-contain relative z-10 animate-levitate drop-shadow-[0_10px_20px_rgba(0,255,163,0.15)]" 
            />
          </div>
        </div>
      </div>

      {/* BLOQUE 2: Tarjetas Superpuestas (Overlay Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Artículo 1 */}
        <article className="relative rounded-3xl border border-gray-800 overflow-hidden group h-[450px]">
          {/* Imagen de fondo con levitación sutil */}
          <div className="absolute inset-0 bg-[#0a0f16] flex items-center justify-center p-8">
            <img 
              src="/u4.2.svg" 
              alt="Brecha digital" 
              className="w-full h-full object-contain opacity-40 group-hover:opacity-100 animate-levitate transform group-hover:scale-110 transition-all duration-700" 
            />
          </div>
          {/* Panel de cristal superpuesto */}
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="bg-[#0a0f16]/80 backdrop-blur-md border-t border-gray-800 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-4">
                <MonitorOff className="text-[#00FFA3] w-6 h-6" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 01: La Promesa Empañada</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-justify font-light">
                Resaltando cómo la promesa de un entorno de aprendizaje flexible y colaborativo se vio empañada por la persistente brecha digital y la falta de una formación pedagógica adecuada que permitiera trascender el modelo de la clase magistral tradicional.
              </p>
            </div>
          </div>
        </article>

        {/* Artículo 2 */}
        <article className="relative rounded-3xl border border-gray-800 overflow-hidden group h-[450px]">
          {/* Imagen de fondo con levitación sutil */}
          <div className="absolute inset-0 bg-[#0a0f16] flex items-center justify-center p-8">
            <img 
              src="/u4.3.svg" 
              alt="Educación digna" 
              className="w-full h-full object-contain opacity-40 group-hover:opacity-100 animate-levitate transform group-hover:scale-110 transition-all duration-700" 
            />
          </div>
          {/* Panel de cristal superpuesto */}
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="bg-[#0a0f16]/80 backdrop-blur-md border-t border-gray-800 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#00FFA3] w-6 h-6" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 02: Humanizar el Proceso</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-justify font-light">
                Concluyendo finalmente que la verdadera modernización educativa no depende de la calidad de las plataformas digitales sino de una transformación profunda que humanice el proceso de enseñanza y aprendizaje, reconociendo las desigualdades estructurales del país para construir un modelo inclusivo que garantice el derecho a una educación digna y liberadora.
              </p>
            </div>
          </div>
        </article>

      </div>

      {/* Botón CTA */}
      <div className="mt-16 flex justify-end">
        <button 
          onClick={() => onOpenPdf('unidad4.pdf')} 
          className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#00FFA3] text-[#00FFA3] font-bold text-lg px-8 py-3 rounded-full hover:bg-[#00FFA3] hover:text-[#0a0f16] transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(0,255,163,0.2)] hover:shadow-[0_0_25px_rgba(0,255,163,0.6)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Leer Nota Completa <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

    </div>
  );
}