import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import EditorialNavbar from './components/EditorialNavbar';
import EditorialHero from './sections/EditorialHero';
import MarqueeTicker from './components/MarqueeTicker';
import EditorialWorks from './sections/EditorialWorks';
import EditorialMusic from './sections/EditorialMusic';
import EditorialAbout from './sections/EditorialAbout';
import EditorialContact from './sections/EditorialContact';
import FloatingNav from './components/FloatingNav';

function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#E7E5E0] text-[#1C1D20] p-3 sm:p-6 lg:p-10 font-sans selection:bg-[#1C1D20] selection:text-[#ECEAE5] relative">
      
      {/* 1. Introductory Preloader Animation (00:10 - 00:13 in video) */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* 2. Interactive Custom Fluid Cursor */}
      <CustomCursor />

      {/* 3. Floating Navigation Dock with ScrollSpy */}
      <FloatingNav />

      {/* 4. Subtle Ambient Canvas Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden md:block no-print"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(28, 29, 32, 0.035), transparent 80%)`
        }}
      />

      {/* 5. Main Framed Editorial Canvas (Serhii Korzhov / UPROCK Agency Style) */}
      <div className="main-framed-canvas w-full max-w-[1400px] mx-auto bg-[#ECEAE5] border-[2.5px] border-[#1C1D20] rounded-[24px] sm:rounded-[36px] shadow-2xl overflow-hidden relative z-10">
        
        {/* Top Navbar */}
        <EditorialNavbar />

        {/* Hero Section with Kinetic Typography & Photo */}
        <EditorialHero />

        {/* Infinite Seamless Marquee Divider Ribbon */}
        <MarqueeTicker text="MY WORKS" separator="✕" />

        {/* Featured Works 2-Column Grid with Custom Cursor "VIEW" */}
        <EditorialWorks />

        {/* Music & Special Talent (Lead Vocalist of Tuesday Band) */}
        <EditorialMusic />

        {/* About & Technical Competencies */}
        <EditorialAbout />

        {/* Contact Me Footer */}
        <EditorialContact />

      </div>

    </div>
  );
}

export default App;