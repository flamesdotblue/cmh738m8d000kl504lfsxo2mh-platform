import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import CourseGrid from './components/CourseGrid.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero3D />
        <section className="container mx-auto px-4 py-16">
          <CourseGrid />
        </section>
        <section className="container mx-auto px-4 py-16">
          <CTA />
        </section>
      </main>
    </div>
  );
}

export default App;
