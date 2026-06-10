import React, { Suspense, useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import MagazineHero from './components/layout/MagazineHero';
import MagazineIndex from './components/layout/MagazineIndex';
import GeneralInfo from './components/notes/GeneralInfo';
import Unit1Card from './components/notes/Unit1Card';
import Footer from './components/layout/Footer';

export default function App() {
  const [activePdf, setActivePdf] = useState(null);

  // Bloquear el scroll del fondo cuando el modal esté abierto
  useEffect(() => {
    if (activePdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activePdf]);

  return (
    <div className="min-h-screen bg-[#0a0f16] font-sans text-gray-200 selection:bg-[#00E5FF] selection:text-black relative">
      
      {/* 1. Portada Principal */}
      <MagazineHero />

      {/* 2. Índice de Navegación */}
      <MagazineIndex />

      {/* 3. Contexto (Introducción, Objetivos, Palabras Clave) */}
      <GeneralInfo />

      {/* 4. Notas Científicas (Diseño Asimétrico) */}
      <main className="container mx-auto px-6 py-20 max-w-7xl">
        <Suspense fallback={<div className="text-center text-[#00E5FF] font-medium py-10 animate-pulse">Cargando repositorios...</div>}>
          
          {/* Unidad 1: Revolución Industrial */}
          <Unit1Card onOpenPdf={setActivePdf} />

          {/* Espacio reservado para la Unidad 2 */}
          <div className="text-center py-20 border-2 border-dashed border-gray-800 rounded-2xl mt-12">
            <h3 className="text-2xl text-gray-400 font-light">
              [Zona lista para integrar el diseño interactivo de la Unidad 2]
            </h3>
          </div>

        </Suspense>
      </main>

      {/* 5. Pie de página */}
      <Footer />

      {/* Modal Visor de PDF (Diseño Premium Oscuro) */}
      {activePdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0f16]/90 p-4 sm:p-6 backdrop-blur-md transition-opacity">
          <div className="bg-[#121a25] w-full max-w-6xl h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-[0_0_40px_rgba(0,229,255,0.15)] border border-gray-800 animate-in fade-in zoom-in duration-300">
            
            {/* Barra superior del Modal */}
            <div className="bg-[#0a0f16] px-8 py-5 flex justify-between items-center border-b border-gray-800">
              <h3 className="text-white font-bold text-xl tracking-wide flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
                Lectura de Documento
              </h3>
              <div className="flex items-center gap-6">
                <a 
                  href={`/pdfs/${activePdf}`} 
                  download 
                  className="flex items-center gap-2 text-sm text-[#00E5FF] hover:text-white transition-colors font-medium"
                >
                  <Download className="w-5 h-5" />
                  Descargar PDF
                </a>
                <button 
                  onClick={() => setActivePdf(null)} 
                  className="bg-gray-800 hover:bg-red-500 text-gray-300 hover:text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Contenedor del Iframe */}
            <div className="flex-grow bg-white w-full h-full relative">
              <iframe 
                src={`/pdfs/${activePdf}`} 
                className="w-full h-full border-none absolute inset-0" 
                title="Visor PDF"
              />
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}