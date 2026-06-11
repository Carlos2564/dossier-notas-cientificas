import React from 'react';
import { ExternalLink, GraduationCap, WifiOff, BookOpen } from 'lucide-react';

export default function Unit5Card({ onOpenPdf }) {
  return (
    <div className="mb-32 relative pt-6 border-t border-gray-800/50 mt-10">
      
      {/* Animaciones de Levitación y Resplandor Dinámico optimizadas */}
      <style>
        {`
          @keyframes levitate-simple {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse-glow-simple {
            0% { filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.2)); }
            50% { filter: drop-shadow(0 0 35px rgba(139, 92, 246, 0.6)); }
            100% { filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.2)); }
          }
          .animate-hologram-single {
            animation: levitate-simple 5s ease-in-out infinite, pulse-glow-simple 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* Etiqueta "Sentada" (Color Violeta Neón) */}
      <div className="absolute -top-6 right-4 md:right-10 z-30 inline-flex items-center gap-2 bg-[#0a0f16] border-2 border-[#8B5CF6] text-[#8B5CF6] px-6 py-2.5 rounded-full text-sm md:text-base font-black tracking-widest uppercase shadow-[0_0_20px_rgba(139,92,246,0.3)] transform hover:scale-105 transition-transform duration-300">
        <BookOpen className="w-5 h-5" /> Unidad 05
      </div>

      {/* BLOQUE 1: Portada (Imagen Unificada a la Derecha) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pt-12">
        
        {/* Texto a la izquierda */}
        <div className="lg:col-span-5 border-l-4 border-[#8B5CF6] pl-6 z-10">
           <p className="text-[#8B5CF6] text-sm uppercase font-bold tracking-widest mb-2">Nota Científica</p>
           <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
             Capacitación Docente <br />
             <span className="text-gray-400 font-light text-2xl md:text-4xl">y Tecnología Educativa</span>
           </h2>
           <p className="text-gray-300 text-lg leading-relaxed font-light text-justify mt-6">
             Las Tecnologías de la Información y la Comunicación han modificado profundamente las tradicionales dinámicas de aprendizaje y enseñanza escolar, ofreciendo a los estudiantes múltiples entornos interactivos mediante el uso de diversas aplicaciones educativas que facilitan enormemente la asimilación de los variados contenidos académicos, estimulando al mismo tiempo nuevas capacidades esenciales como la creatividad crítica y el trabajo colaborativo grupal constante.
           </p>
        </div>

        {/* Imagen Unificada a la derecha con Holograma y Levitación */}
        <div className="lg:col-span-7 relative bg-[#0a0f16] rounded-3xl border border-gray-800 shadow-[0_0_40px_rgba(139,92,246,0.08)] flex items-center justify-center p-6 md:p-10 h-[350px] md:h-[500px]">
           {/* Luz de fondo ambiental */}
           <div className="absolute inset-0 bg-[#8B5CF6] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
           
           <img 
             src="/u5.1.svg" 
             alt="Portada Unidad 5" 
             className="w-full h-full object-contain relative z-10 animate-hologram-single transform hover:scale-[1.03] transition-transform duration-500" 
           />
        </div>
        
      </div>

      {/* BLOQUE 2: Artículos en Tarjetas Flotantes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Artículo 1 */}
        <article className="relative bg-[#121a25] rounded-3xl border border-gray-800 p-8 shadow-xl flex flex-col justify-between group hover:-translate-y-2 hover:border-[#8B5CF6]/50 transition-all duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6] opacity-10 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity pointer-events-none"></div>
          
          <div className="relative h-64 mb-8 bg-[#0a0f16] rounded-2xl overflow-hidden p-4 border border-gray-800/50">
            <img 
              src="/u5.2.svg" 
              alt="Obstáculos Tecnológicos" 
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
          </div>
          
          <div className="relative z-10 flex-grow flex flex-col justify-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <WifiOff className="text-[#8B5CF6] w-7 h-7" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 01: La Resistencia Digital</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
                Sin embargo la efectiva implementación de todos estos recursos choca frecuentemente con serios obstáculos tecnológicos como la falta de conectividad en zonas rurales, sumándose a ello la evidente carencia de competencias digitales por parte de muchos educadores que experimentan una fuerte resistencia generacional al cambio, lo cual limita considerablemente el máximo aprovechamiento de estas modernas e innovadoras plataformas educativas virtuales.
              </p>
            </div>
          </div>
        </article>

        {/* Artículo 2 */}
        <article className="relative bg-[#121a25] rounded-3xl border border-gray-800 p-8 shadow-xl flex flex-col justify-between group hover:-translate-y-2 hover:border-[#8B5CF6]/50 transition-all duration-500">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8B5CF6] opacity-10 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity pointer-events-none"></div>
          
          <div className="relative h-64 mb-8 bg-[#0a0f16] rounded-2xl overflow-hidden p-4 border border-gray-800/50">
            <img 
              src="/u5.3.svg" 
              alt="Capacitación Docente" 
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
          </div>
          
          <div className="relative z-10 flex-grow flex flex-col justify-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-[#8B5CF6] w-7 h-7" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 02: Capacitación Continua</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
                Para solucionar definitivamente estas limitaciones se requiere implementar programas de capacitación continua que incluyan estrategias innovadoras como la gamificación para despertar interés, apoyándose firmemente en sólidos modelos teóricos como el constructivismo y conectivismo que guían metodológicamente al profesorado, garantizando que adquieran las habilidades necesarias para integrar la tecnología de forma completamente adaptativa dentro de sus variadas rutinas laborales diarias actuales.
              </p>
            </div>
          </div>
        </article>

      </div>

      {/* Botón CTA */}
      <div className="mt-16 flex justify-end">
        <button 
          onClick={() => onOpenPdf('unidad5.pdf')} 
          className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] font-bold text-lg px-8 py-3 rounded-full hover:bg-[#8B5CF6] hover:text-[#0a0f16] transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Leer Nota Completa <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

    </div>
  );
}