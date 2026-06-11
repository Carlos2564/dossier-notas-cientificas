import React from 'react';
import { 
  BookOpenText, 
  Target, 
  KeyRound, 
  Globe, 
  Smartphone, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Lightbulb, 
  CheckCircle2 
} from 'lucide-react';

export default function MagazineIndex() {
  const chapters = [
    { num: "01", title: "Introducción General", icon: BookOpenText, color: "from-teal-500 to-emerald-400", target: "generalidades" },
    { num: "02", title: "Objetivos de Investigación", icon: Target, color: "from-blue-500 to-indigo-500", target: "generalidades" },
    { num: "03", title: "Palabras Clave", icon: KeyRound, color: "from-amber-400 to-orange-500", target: "generalidades" },
    { num: "04", title: "UNIDAD 1: Contexto histórico e influencia de la información y la comunicación en la cultura en la sociedad", icon: Globe, color: "from-blue-600 to-cyan-500", target: "unidad1" },
    { num: "05", title: "UNIDAD 2: Medios de comunicación y su utilización en procesos de enseñanza y aprendizaje", icon: Smartphone, color: "from-purple-500 to-pink-500", target: "unidad2" },
    { num: "06", title: "UNIDAD 3: Las telecomunicaciones y su relación con el desarrollo de competencias en diversas áreas del aprendizaje", icon: Cpu, color: "from-amber-500 to-yellow-400", target: "unidad3" },
    { num: "07", title: "UNIDAD 4: Las posibilidades educativas de la videoconferencia como un recurso y medio de la educación a distancia", icon: Layers, color: "from-emerald-500 to-green-400", target: "unidad4" },
    { num: "08", title: "UNIDAD 5: La integración de los medios de comunicación en el proceso de aprendizaje", icon: Zap, color: "from-indigo-500 to-blue-600", target: "unidad5" },
    { num: "09", title: "UNIDAD 6: La construcción autónoma del conocimiento a partir del análisis y reflexión de la información (seguridad)", icon: ShieldCheck, color: "from-rose-500 to-red-600", target: "unidad6" },
    { num: "10", title: "Líneas de Recomendación", icon: Lightbulb, color: "from-yellow-500 to-amber-600", target: "conclusiones" },
    { num: "11", title: "Conclusiones Generales", icon: CheckCircle2, color: "from-teal-600 to-cyan-600", target: "conclusiones" }
  ];

  // Función para hacer scroll suave hacia la sección
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-[#0a0f16] py-20 border-b border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-2">
              Sumario <span className="text-[#00E5FF]">Editorial</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Haz clic en cualquier artículo para ir directamente a la sección
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <div 
              key={index} 
              onClick={() => scrollToSection(chapter.target)}
              className="group relative bg-[#121a25] p-6 rounded-2xl border border-gray-800 hover:border-[#00E5FF] transition-all duration-300 cursor-pointer overflow-hidden flex items-center gap-6 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-1"
            >
              
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${chapter.color} opacity-5 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500 pointer-events-none`}></div>
              
              <div className="text-3xl font-black tracking-tighter text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-gray-500 transition-colors duration-300 min-w-[60px]">
                {chapter.num}
              </div>
              
              <div className="flex-1 relative z-10">
                <chapter.icon className="w-6 h-6 text-gray-400 group-hover:text-[#00E5FF] mb-3 transition-colors duration-300" />
                <h3 className="text-white font-bold text-sm leading-snug group-hover:text-[#00E5FF] transition-colors duration-300">
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