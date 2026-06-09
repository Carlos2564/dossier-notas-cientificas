import React from 'react';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

export default function FinalConclusions() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-12 mb-8">
      
      <div className="bg-[#0F2537] p-8 border-t-4 border-[#D4AF37]">
        <h2 className="text-3xl font-serif font-bold text-white mb-2">
          Síntesis Final
        </h2>
        <p className="text-gray-300 font-medium">
          Conclusiones y líneas de acción recomendadas
        </p>
      </div>

      <div className="p-8 space-y-10">
        
        {/* Conclusiones Generales */}
        <div>
          <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
            <CheckCircle2 className="text-green-600 w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#0F2537]">Conclusiones Generales</h3>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-[#004AAD] mt-2 shrink-0"></div>
              <p className="text-gray-700 leading-relaxed text-justify">La integración de la tecnología en el aula carece de valor educativo si no está respaldada por una planificación pedagógica sólida y centrada en las verdaderas necesidades del estudiante.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-[#004AAD] mt-2 shrink-0"></div>
              <p className="text-gray-700 leading-relaxed text-justify">La virtualidad forzada y la implementación de videoconferencias evidenciaron que la brecha digital no es solo un problema de infraestructura técnica sino un factor de profunda exclusión social y económica.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-[#004AAD] mt-2 shrink-0"></div>
              <p className="text-gray-700 leading-relaxed text-justify">El enfoque tradicional de memorización mecánica ha quedado obsoleto ante el acceso inmediato a la información, exigiendo una transición urgente hacia el desarrollo del pensamiento crítico y la resolución de problemas.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-[#004AAD] mt-2 shrink-0"></div>
              <p className="text-gray-700 leading-relaxed text-justify">El éxito de la modernización educativa recae en la evolución del rol docente, quien debe transformarse en un guía ético capaz de enseñar habilidades digitales fundamentales y no solo destrezas instrumentales.</p>
            </div>
          </div>
        </div>

        {/* Recomendaciones */}
        <div>
          <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
            <Lightbulb className="text-yellow-500 w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#0F2537]">Recomendaciones</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <p className="text-gray-800 font-medium mb-2">1. Priorizar Inclusión</p>
              <p className="text-sm text-gray-600 text-justify">Garantizar políticas públicas que provean conectividad y recursos tecnológicos gratuitos para estudiantes en zonas rurales y sectores de alta vulnerabilidad económica.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <p className="text-gray-800 font-medium mb-2">2. Capacitación Docente</p>
              <p className="text-sm text-gray-600 text-justify">Implementar programas de formación continua para el profesorado enfocados en metodologías activas y en la gestión pedagógica de entornos virtuales.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <p className="text-gray-800 font-medium mb-2">3. Transformar la Evaluación</p>
              <p className="text-sm text-gray-600 text-justify">Sustituir las pruebas tradicionales de memorización por métodos de evaluación formativa que valoren la aplicación práctica del conocimiento y la argumentación.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <p className="text-gray-800 font-medium mb-2">4. Fomentar Habilidades Críticas</p>
              <p className="text-sm text-gray-600 text-justify">Integrar en todos los niveles curriculares actividades orientadas al análisis de la información, evitando que el alumno sea un simple consumidor pasivo de tecnología.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}