import React from 'react';
import { ExternalLink, BrainCircuit, Laptop, BookOpen } from 'lucide-react';

export default function Unit3Card({ onOpenPdf }) {
  return (
    <div className="mb-32 relative pt-6 border-t border-gray-800/50 mt-10">
      
      {/* Etiqueta "Sentada" (Color Ámbar para la Unidad 3) */}
      <div className="absolute -top-6 right-4 md:right-10 z-30 inline-flex items-center gap-2 bg-[#0a0f16] border-2 border-[#FACC15] text-[#FACC15] px-6 py-2.5 rounded-full text-sm md:text-base font-black tracking-widest uppercase shadow-[0_0_20px_rgba(250,204,21,0.3)] transform hover:scale-105 transition-transform duration-300">
        <BookOpen className="w-5 h-5" /> Unidad 03
      </div>

      {/* BLOQUE 1: Portada Principal Centrada */}
      <div className="mb-12 pt-12 flex flex-col items-center">
        
        <div className="w-full max-w-4xl text-center mb-10">
           <p className="text-[#FACC15] text-sm uppercase font-bold tracking-widest mb-3">Nota Científica</p>
           <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
             Competencias Digitales <br />
             <span className="text-gray-400 font-light text-2xl md:text-4xl">y la Crisis de la Memorización</span>
           </h2>
           <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mt-6 max-w-3xl mx-auto">
             La presente nota científica analiza la importancia de las competencias y habilidades digitales en la educación actual, así como la crisis de la memorización en los procesos de enseñanza-aprendizaje.
           </p>
        </div>

        <div className="relative w-full rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_40px_rgba(250,204,21,0.05)] group bg-[#0a0f16] flex items-center justify-center p-6 h-[350px] md:h-[500px]">
          {/* Brillo radial ámbar en el fondo */}
          <div className="absolute inset-0 bg-[#FACC15] opacity-5 blur-[100px] rounded-full"></div>
          <img 
            src="/u3.1.svg" 
            alt="Competencias Digitales" 
            className="w-full h-full object-contain relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700 ease-in-out" 
          />
        </div>
      </div>

      {/* BLOQUE 2: Bento Grid (Artículos en paralelo) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Artículo 1: Habilidades Digitales */}
        <article className="bg-[#121a25]/80 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden group hover:border-[#FACC15]/50 transition-colors duration-300 flex flex-col shadow-xl">
          <div className="p-8 flex-grow flex flex-col justify-between order-2 md:order-1">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Laptop className="text-[#FACC15] w-7 h-7" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 01: Habilidades Clave</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
                Asimismo, se diferencian las habilidades digitales fundamentales, orientadas al análisis crítico y reflexivo del entorno digital, y las habilidades instrumentales, relacionadas con el uso práctico de las herramientas tecnológicas.
              </p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden bg-[#0a0f16] p-4 order-1 md:order-2 border-b md:border-b-0 md:border-t border-gray-800/50">
            <img 
              src="/u3.2.svg" 
              alt="Habilidades instrumentales" 
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
          </div>
        </article>

        {/* Artículo 2: Crisis de la Memorización */}
        <article className="bg-[#121a25]/80 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden group hover:border-[#FACC15]/50 transition-colors duration-300 flex flex-col shadow-xl">
          <div className="relative h-64 overflow-hidden bg-[#0a0f16] p-4 border-b border-gray-800/50">
            <img 
              src="/u3.3.svg" 
              alt="Crisis de la memorización" 
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
          </div>
          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <BrainCircuit className="text-[#FACC15] w-7 h-7" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Art. 02: Crisis Cognitiva</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
                Por otro lado, se aborda la crisis de la memorización, señalando que este enfoque tradicional resulta insuficiente en la actualidad, debido al fácil acceso a la información mediante las tecnologías.
              </p>
            </div>
          </div>
        </article>

      </div>

      {/* Botón CTA */}
      <div className="mt-16 flex justify-center">
        <button 
          onClick={() => onOpenPdf('unidad3.pdf')} 
          className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#FACC15] text-[#FACC15] font-bold text-lg px-10 py-4 rounded-full hover:bg-[#FACC15] hover:text-[#0a0f16] transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Leer Nota Completa <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

    </div>
  );
}