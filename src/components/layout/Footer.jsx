import React from 'react';
import { Bookmark, Book, Info, Code, Mail, Globe, User, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1727] text-gray-300 py-12 mt-16 font-sans border-t-4 border-[#004AAD] relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Universidad */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
              <Bookmark className="text-[#D4AF37] w-5 h-5" />
              <h3 className="text-white font-semibold text-lg">Universidad</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#004AAD]"></div>Universidad de El Salvador</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#004AAD]"></div>Facultad de Ciencias Naturales y Matemática</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#004AAD]"></div>Escuela de Matemática</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#004AAD]"></div>Licenciatura en Informática Educativa</li>
            </ul>
          </div>

          {/* Columna 2: Asignatura */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
              <Book className="text-[#004AAD] w-5 h-5" />
              <h3 className="text-white font-semibold text-lg">Asignatura</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="bg-[#1a2b40] p-2 rounded border border-gray-700 shadow-sm flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div> Telecomunicaciones Educativas II</li>
              <li className="bg-[#1a2b40] p-2 rounded border border-gray-700 shadow-sm flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> Ciclo I - 2026</li>
              <li className="bg-[#1a2b40] p-2 rounded border border-gray-700 shadow-sm">Tutor: Ing. Salvador Amaru Flores</li>
              <li className="bg-[#1a2b40] p-2 rounded border border-gray-700 shadow-sm">Grupo: GT-01</li>
            </ul>
          </div>

          {/* Columna 3: Información */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
              <Info className="text-purple-400 w-5 h-5" />
              <h3 className="text-white font-semibold text-lg">Información</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="bg-[#1a2b40] p-2 rounded border border-gray-700 shadow-sm">Dossier de Notas Científicas</li>
              <li className="bg-[#1a2b40] p-2 rounded border border-gray-700 shadow-sm">Fundamentación Teórica</li>
              <li className="bg-[#1a2b40] p-2 rounded border border-gray-700 shadow-sm">Análisis Crítico Comparativo</li>
            </ul>
          </div>

          {/* Columna 4: Desarrollado por */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
              <Code className="text-yellow-400 w-5 h-5" />
              <h3 className="text-white font-semibold text-lg">Desarrollado por</h3>
            </div>
            <div className="bg-[#1a2b40] p-5 rounded-xl border border-gray-700 text-center shadow-lg">
              <div className="flex justify-center mb-3">
                <div className="bg-gradient-to-tr from-[#004AAD] to-blue-400 p-3 rounded-full shadow-md">
                  <User className="text-white w-6 h-6" />
                </div>
              </div>
              <h4 className="text-white font-semibold mb-1">Equipo Investigador</h4>
              <p className="text-[11px] text-[#4ea8ff] font-bold mb-4 tracking-widest uppercase">Estudiantes UES</p>
              <ul className="text-sm space-y-2 text-gray-400 text-left divide-y divide-gray-700/50">
                <li className="pt-2">Carlos Antonio Salgado Romero</li>
                <li className="pt-2">Ivania Yulisa Chicas Barrera</li>
                <li className="pt-2">Karla Oneyda Cruz Hernández</li>
                <li className="pt-2">José Abel Méndez</li>
                <li className="pt-2">Gabriela Elizabeth Luna Bonilla</li>
              </ul>
              <div className="flex justify-center gap-3 mt-5">
                <button className="bg-gray-800 p-2 rounded hover:bg-gray-600 transition-colors"><Mail className="w-4 h-4 text-white" /></button>
                <button className="bg-gray-800 p-2 rounded hover:bg-gray-600 transition-colors"><Globe className="w-4 h-4 text-white" /></button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Universidad de El Salvador • Proyecto Final Telecomunicaciones Educativas II</p>
          <p className="mt-2 md:mt-0 italic">Hacia la libertad por la cultura</p>
        </div>
      </div>

      {/* Botón flotante para subir */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-5 right-8 bg-[#004AAD] p-3 rounded-full shadow-lg hover:bg-[#003882] transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <ArrowUp className="text-white w-5 h-5" />
      </button>
    </footer>
  );
}