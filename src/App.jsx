import React, { Suspense, useState } from 'react';
import MagazineHero from './components/layout/MagazineHero';
import MagazineIndex from './components/layout/MagazineIndex';
import GeneralInfo from './components/notes/GeneralInfo';
import Footer from './components/layout/Footer';

export default function App() {
  const [activePdf, setActivePdf] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0f16] font-sans text-gray-200 selection:bg-[#00E5FF] selection:text-black">
      
      {/* 1. Portada Principal */}
      <MagazineHero />

      {/* 2. Índice de Navegación */}
      <MagazineIndex />

      {/* 3. Contexto (Introducción, Objetivos, Palabras Clave) */}
      <GeneralInfo />

      {/* 4. Aquí irán las unidades con el nuevo diseño Xataka */}
      <main className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="text-center py-20 border-2 border-dashed border-gray-800 rounded-2xl">
          <h3 className="text-2xl text-gray-400 font-light">
            [Zona lista para integrar el diseño asimétrico de las Notas Científicas]
          </h3>
        </div>
      </main>

      {/* 5. Pie de página */}
      <Footer />

    </div>
  );
}