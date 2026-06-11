import React, { Suspense, useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import MagazineHero from './components/layout/MagazineHero';
import MagazineIndex from './components/layout/MagazineIndex';
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
    <div className="min-h-screen bg-[#0a0f16] font-sans text-gray-200 selection:bg-[#00E5FF] selection:text-black relative">
      
      <MagazineHero />
      
      <MagazineIndex />

      {/* ANCLA 1: Generalidades */}
      <div id="generalidades" className="scroll-mt-10">
        <GeneralInfo />
      </div>

      <main className="container mx-auto px-6 py-10 max-w-7xl">
        <Suspense fallback={<div className="text-center text-[#00E5FF] font-medium py-10 animate-pulse">Cargando repositorios...</div>}>
          
          {/* ANCLA 2: Unidad 1 */}
          <div id="unidad1" className="scroll-mt-10">
            <Unit1Card onOpenPdf={setActivePdf} />
          </div>

          {/* ANCLA 3: Unidad 2 */}
          <div id="unidad2" className="scroll-mt-10">
            <Unit2Card onOpenPdf={setActivePdf} />
          </div>

          {/* ANCLA 4: Unidad 3 */}
          <div id="unidad3" className="scroll-mt-10">
            <Unit3Card onOpenPdf={setActivePdf} />
          </div>

          {/* ANCLA 5: Unidad 4 */}
          <div id="unidad4" className="scroll-mt-10">
            <Unit4Card onOpenPdf={setActivePdf} />
          </div>

          {/* ANCLA 6: Unidad 5 */}
          <div id="unidad5" className="scroll-mt-10">
            <Unit5Card onOpenPdf={setActivePdf} />
          </div>

          {/* ANCLA 7: Unidad 6 */}
          <div id="unidad6" className="scroll-mt-10">
            <Unit6Card onOpenPdf={setActivePdf} />
          </div>

        </Suspense>
      </main>

      {/* ANCLA 8: Conclusiones */}
      <div id="conclusiones" className="scroll-mt-10">
        <FinalConclusions />
      </div>

      <Footer />

      {/* Modal Visor de PDF */}
      {activePdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0f16]/90 p-4 sm:p-6 backdrop-blur-md transition-opacity">
          <div className="bg-[#121a25] w-full max-w-6xl h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-[0_0_40px_rgba(0,229,255,0.15)] border border-gray-800 animate-in fade-in zoom-in duration-300">
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
                  <Download className="w-5 h-5" /> Descargar PDF
                </a>
                <button 
                  onClick={() => setActivePdf(null)} 
                  className="bg-gray-800 hover:bg-red-500 text-gray-300 hover:text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
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