import React from 'react';
import { Layers, Zap, Shield, Cpu, Smartphone, Globe } from 'lucide-react';

export default function MagazineIndex() {
  const chapters = [
    { num: "01", title: "Revolución Industrial y Sociedad", icon: Globe, color: "from-blue-500 to-cyan-400" },
    { num: "02", title: "Impacto Histórico y Brecha", icon: Smartphone, color: "from-purple-500 to-pink-500" },
    { num: "03", title: "Competencias Digitales", icon: Cpu, color: "from-amber-400 to-orange-500" },
    { num: "04", title: "Videoconferencia y Virtualidad", icon: Layers, color: "from-emerald-400 to-green-500" },
    { num: "05", title: "Capacitación Docente y TIC", icon: Zap, color: "from-indigo-500 to-blue-600" },
    { num: "06", title: "Seguridad de la Información", icon: Shield, color: "from-rose-500 to-red-600" }
  ];

  return (
    <section className="bg-[#0a0f16] py-20 border-b border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-2">Índice de <span className="text-[#00E5FF]">Contenidos</span></h2>
            <p className="text-gray-400 text-lg font-light">Selecciona el artículo científico que deseas explorar</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <div key={index} className="group relative bg-[#121a25] p-6 rounded-2xl border border-gray-800 hover:border-[#00E5FF] transition-all duration-300 cursor-pointer overflow-hidden flex items-center gap-6">
              
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${chapter.color} opacity-10 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500`}></div>
              
              <div className="text-5xl font-black text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-gray-500 transition-colors duration-300">
                {chapter.num}
              </div>
              
              <div className="flex-1 relative z-10">
                <chapter.icon className="w-6 h-6 text-gray-400 group-hover:text-[#00E5FF] mb-2 transition-colors duration-300" />
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#00E5FF] transition-colors duration-300">
                  {chapter.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}