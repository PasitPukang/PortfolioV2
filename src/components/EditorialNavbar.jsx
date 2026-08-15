import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function EditorialNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 sm:px-10 border-b-[1.5px] border-[#1C1D20]/15 select-none relative no-print">
      {/* Brand Name */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="cursor-pointer group"
      >
        <span className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-wider text-[#1C1D20] group-hover:opacity-75 transition">
          PASIT PUKANG
        </span>
        <span className="text-[10px] font-mono block text-[#1C1D20]/60 -mt-1 tracking-widest uppercase">
          Fullstack & Frontend Dev
        </span>
      </div>

      {/* Right Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#1C1D20] uppercase tracking-wider">
        <button onClick={() => scrollTo('works-section')} className="hover:text-emerald-700 transition cursor-pointer">
          Work
        </button>
        <button onClick={() => scrollTo('music-section')} className="hover:text-emerald-700 transition cursor-pointer">
          Music & Talent
        </button>
        <button onClick={() => scrollTo('about-section')} className="hover:text-emerald-700 transition cursor-pointer">
          About
        </button>
        <button onClick={() => scrollTo('contact-section')} className="hover:text-emerald-700 transition cursor-pointer">
          Contact
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="flex md:hidden items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#1C1D20] text-xl focus:outline-none"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#ECEAE5] border-b-2 border-[#1C1D20] p-6 shadow-xl flex flex-col gap-4 z-50 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <button 
            onClick={() => scrollTo('works-section')}
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1.5 border-b border-[#1C1D20]/10"
          >
            Work (ผลงาน)
          </button>
          <button 
            onClick={() => scrollTo('music-section')}
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1.5 border-b border-[#1C1D20]/10"
          >
            Music & Talent (ความสามารถด้านดนตรี)
          </button>
          <button 
            onClick={() => scrollTo('about-section')}
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1.5 border-b border-[#1C1D20]/10"
          >
            About (ประวัติ & ทักษะ)
          </button>
          <button 
            onClick={() => scrollTo('contact-section')}
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1.5 border-b border-[#1C1D20]/10"
          >
            Contact (ติดต่อ)
          </button>
        </div>
      )}
    </nav>
  );
}
