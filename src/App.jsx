import React, { Suspense, useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import GeneralInfo from './components/notes/GeneralInfo';
import Unit1Card from './components/notes/Unit1Card';
import Unit2Card from './components/notes/Unit2Card';
import Unit3Card from './components/notes/Unit3Card';
import Unit4Card from './components/notes/Unit4Card';
import Unit5Card from './components/notes/Unit5Card';
import Unit6Card from './components/notes/Unit6Card';
import FinalConclusions from './components/notes/FinalConclusions';
import Footer from './components/layout/Footer';

export default function App() {
  const [activePdf, setActivePdf] = useState(null);

  useEffect(() => {
    if (activePdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activePdf]);

  return (
    <div className="min-h-screen bg-[#F3F4F6] font-sans text-gray-800 relative">
      
      <header className="bg-white border-b border-gray-200 shadow-sm py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="border-l-4 border-[#004AAD] pl-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#0F2537] mb-2 uppercase tracking-wide">
              Dossier de Notas Científicas
            </h1>
            <p className="text-gray-500 font-medium text-lg">
              Licenciatura en Informática Educativa
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <Suspense fallback={<div className="text-center text-[#0F2537] font-medium py-10">Cargando repositorios...</div>}>
          
          {/* Portada de Generalidades */}
          <GeneralInfo />

          {/* Grid Asimétrico de 6 Unidades */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <Unit1Card onOpenPdf={() => setActivePdf('unidad1.pdf')} />
            <Unit2Card onOpenPdf={() => setActivePdf('unidad2.pdf')} />
            <Unit3Card onOpenPdf={() => setActivePdf('unidad3.pdf')} />
            <Unit4Card onOpenPdf={() => setActivePdf('unidad4.pdf')} />
            <Unit5Card onOpenPdf={() => setActivePdf('unidad5.pdf')} />
            <Unit6Card onOpenPdf={() => setActivePdf('unidad6.pdf')} />
          </div>

          {/* Cierre y Recomendaciones */}
          <FinalConclusions />

        </Suspense>
      </main>

      <Footer />

      {/* Modal Visor de PDF */}
      {activePdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F2537]/80 p-4 sm:p-6 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-6xl h-[90vh] rounded-xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="bg-[#0F2537] px-6 py-4 flex justify-between items-center border-b border-gray-700">
              <h3 className="text-white font-serif text-lg tracking-wide">Lectura de Documento</h3>
              <div className="flex items-center gap-4">
                <a 
                  href={`/pdfs/${activePdf}`} 
                  download 
                  className="flex items-center gap-2 text-sm text-[#D4AF37] hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Descargar
                </a>
                <button 
                  onClick={() => setActivePdf(null)} 
                  className="bg-red-500 hover:bg-red-600 text-white p-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-grow bg-gray-200 w-full h-full">
              <iframe 
                src={`/pdfs/${activePdf}`} 
                className="w-full h-full border-none" 
                title="Visor PDF"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}