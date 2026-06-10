import React from 'react';
import { PlayCircle, ChevronDown } from 'lucide-react';

export default function MagazineHero() {
  const scrollToIndex = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0a0f16]">
      
      {/* Fondo Dinámico / Simulación de Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f16]/80 to-[#0a0f16] z-10"></div>
        {/* Aquí luego puedes cambiar el img por un <video autoPlay loop muted> */}
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="Cyber background" 
          className="w-full h-full object-cover opacity-40 animate-pulse-slow"
        />
      </div>

      {/* Contenido Principal de la Portada */}
      <div className="relative z-20 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
        
        <div className="max-w-4xl">
          <div className="inline-block bg-[#00E5FF] text-[#0a0f16] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full text-sm mb-6 shadow-[0_0_15px_rgba(0,229,255,0.5)]">
            Edición Especial 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 tracking-tighter">
            EL FUTURO DE LA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0055FF]">
              EDUCACIÓN DIGITAL
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-2xl font-light max-w-2xl leading-relaxed mb-10 border-l-4 border-[#00E5FF] pl-6">
            Un análisis crítico y transversal sobre cómo las telecomunicaciones y la inteligencia artificial están redefiniendo el aprendizaje en El Salvador
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button 
              onClick={scrollToIndex}
              className="w-full sm:w-auto bg-[#00E5FF] text-[#0a0f16] font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center justify-center gap-3"
            >
              <PlayCircle className="w-6 h-6" />
              Explorar Dossier
            </button>
            <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Desliza para ver el índice
            </p>
          </div>
        </div>

      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={scrollToIndex}>
        <ChevronDown className="w-10 h-10 text-[#00E5FF]" />
      </div>

    </section>
  );
}