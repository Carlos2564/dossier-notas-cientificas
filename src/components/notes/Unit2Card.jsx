import React from 'react';
import { ExternalLink, Radio, Smartphone, WifiOff, BookOpen } from 'lucide-react';

export default function Unit2Card({ onOpenPdf }) {
  return (
    <div className="mb-32 relative pt-6 border-t border-gray-800/50 mt-10">
      
      {/* Etiqueta "Sentada" a la izquierda para variar el diseño */}
      <div className="absolute -top-6 left-4 md:left-10 z-30 inline-flex items-center gap-2 bg-[#0a0f16] border-2 border-[#D946EF] text-[#D946EF] px-6 py-2.5 rounded-full text-sm md:text-base font-black tracking-widest uppercase shadow-[0_0_20px_rgba(217,70,239,0.3)] transform hover:scale-105 transition-transform duration-300">
        <BookOpen className="w-5 h-5" /> Unidad 02
      </div>

      {/* BLOQUE 1: Portada y Texto Principal (Imagen a la derecha) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pt-12">
        <div className="lg:col-span-5 order-2 lg:order-1 border-l-4 border-[#D946EF] pl-6">
           <p className="text-[#D946EF] text-sm uppercase font-bold tracking-widest mb-2">Nota Científica</p>
           <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
             Impacto Histórico <br />
             <span className="text-gray-400 font-light text-2xl md:text-4xl">y Brecha Tecnológica</span>
           </h2>
           <p className="text-gray-300 text-lg leading-relaxed font-light text-justify mt-6">
             La nota científica analiza el impacto histórico y actual de las Tecnologías de la Información y la Comunicación en El Salvador, destacando que su desarrollo ha estado marcado por desigualdades estructurales que han limitado su verdadero potencial educativo, se analiza la evolución de los medios de comunicación, desde la radio y la televisión hasta la llegada del internet, evidenciando que muchas iniciativas tecnológicas no han logrado consolidarse como herramientas pedagógicas inclusivas.
           </p>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(217,70,239,0.05)] group bg-[#0a0f16] flex items-center justify-center p-4 h-[350px] md:h-[450px]">
          {/* Luz de fondo sutil */}
          <div className="absolute inset-0 bg-[#D946EF] opacity-5 blur-3xl rounded-full"></div>
          <img 
            src="/u2.1.svg" 
            alt="Medios de comunicación" 
            className="w-full h-full object-contain relative z-10 transform group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" 
          />
        </div>
      </div>

      {/* BLOQUE 2: Zig-Zag Art 1 (Imagen a la izquierda) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-gray-800 group bg-[#121a25] p-6 shadow-lg hover:border-[#D946EF]/50 transition-colors duration-300 h-[250px] md:h-[350px] flex items-center justify-center">
          <img 
            src="/u2.2.svg" 
            alt="Radio antigua" 
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Radio className="text-[#D946EF] w-8 h-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Art. 01: El Abandono Estructural</h3>
          </div>
          <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
            De manera comparativa, se analiza la experiencia de aprendizaje móvil en Costa Rica, promovida por la UNESCO, donde se evidencia que la integración efectiva de dispositivos móviles en la educación depende de políticas públicas coherentes, capacitación docente y estrategias metodológicas innovadoras centradas en el estudiante.
          </p>
        </div>
      </div>

      {/* BLOQUE 3: Zig-Zag Art 2 (Imagen a la derecha) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="text-[#D946EF] w-8 h-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Art. 02: La Fractura de la Pandemia</h3>
          </div>
          <p className="text-gray-400 leading-relaxed text-justify font-light text-lg">
            Asimismo, se reflexiona sobre cómo la pandemia de COVID-19 puso en evidencia la brecha digital existente en El Salvador, mostrando que la falta de conectividad, infraestructura tecnológica y preparación docente afectó directamente el derecho a la educación de muchos estudiantes, especialmente en zonas rurales y sectores vulnerables.
          </p>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-gray-800 group bg-[#121a25] p-6 shadow-lg hover:border-[#D946EF]/50 transition-colors duration-300 h-[250px] md:h-[350px] flex items-center justify-center order-1 lg:order-2">
          <img 
            src="/u2.3.svg" 
            alt="Aprendizaje móvil" 
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </div>
      </div>

      {/* Botón CTA */}
      <div className="mt-16 flex justify-end">
        <button 
          onClick={() => onOpenPdf('unidad2.pdf')} 
          className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#D946EF] text-[#D946EF] font-bold text-lg px-8 py-3 rounded-full hover:bg-[#D946EF] hover:text-[#0a0f16] transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(217,70,239,0.2)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Leer Nota Completa <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

    </div>
  );
}