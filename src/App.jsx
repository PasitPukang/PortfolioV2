import React, { useState, useEffect } from 'react';
import './App.css';
import EditorialNavbar from './components/EditorialNavbar';
import EditorialHero from './sections/EditorialHero';
import MarqueeTicker from './components/MarqueeTicker';
import EditorialWorks from './sections/EditorialWorks';
import StagesSection from './sections/StagesSection';
import EditorialAbout from './sections/EditorialAbout';
import EditorialContact from './sections/EditorialContact';

function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#E7E5E0] text-[#1C1D20] p-3 sm:p-6 lg:p-10 font-sans selection:bg-[#1C1D20] selection:text-[#ECEAE5] relative">
      
      {/* Subtle Ambient Spotlight on Outer Canvas */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(28, 29, 32, 0.04), transparent 80%)`
        }}
      />

      {/* Main Framed Editorial Canvas (Serhii Korzhov / UPROCK Style) */}
      <div className="w-full max-w-[1400px] mx-auto bg-[#ECEAE5] border-[2.5px] border-[#1C1D20] rounded-[24px] sm:rounded-[36px] shadow-2xl overflow-hidden relative z-10">
        
        {/* Top Navbar */}
        <EditorialNavbar />

        {/* 1. Hero Section with Massive Typography & Photo */}
        <EditorialHero />

        {/* 2. Infinite Marquee Divider Ribbon */}
        <MarqueeTicker text="MY WORKS" separator="✕" />

        {/* 3. Featured Works 2-Column Grid */}
        <EditorialWorks />

        {/* 4. Stages of Website Development (Interactive Accordion) */}
        <StagesSection />

        {/* 5. About & Technical Competencies */}
        <EditorialAbout />

        {/* 6. Contact Me Footer */}
        <EditorialContact />

      </div>

    </div>
  );
}

export default App;