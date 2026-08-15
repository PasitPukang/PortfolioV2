import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import certFile from '../assets/css_certificate.pdf';

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
    <nav className="w-full flex items-center justify-between py-6 px-6 sm:px-10 border-b-[1.5px] border-[#1C1D20]/15 select-none relative">
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

      {/* Center Download CV Button */}
      <div className="hidden md:flex items-center">
        <a
          href={certFile}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-xs font-semibold text-[#1C1D20] hover:text-[#10B981] transition uppercase tracking-wider py-1 border-b border-[#1C1D20]/40 hover:border-[#10B981]"
        >
          <span>Download CV / Resume</span>
          <FontAwesomeIcon icon={faArrowDown} className="text-[10px] group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Right Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#1C1D20] uppercase tracking-wider">
        <button onClick={() => scrollTo('works-section')} className="hover:opacity-60 transition cursor-pointer">
          Work
        </button>
        <button onClick={() => scrollTo('stages-section')} className="hover:opacity-60 transition cursor-pointer">
          Process
        </button>
        <button onClick={() => scrollTo('music-section')} className="hover:opacity-60 transition cursor-pointer">
          Music & Talent
        </button>
        <button onClick={() => scrollTo('about-section')} className="hover:opacity-60 transition cursor-pointer">
          About
        </button>
        <button onClick={() => scrollTo('contact-section')} className="hover:opacity-60 transition cursor-pointer">
          Contact
        </button>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="flex md:hidden items-center gap-3">
        <a
          href={certFile}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-bold uppercase tracking-wider underline text-[#1C1D20]"
        >
          CV ⤓
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#1C1D20] text-lg focus:outline-none"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#ECEAE5] border-b-2 border-[#1C1D20] p-6 shadow-xl flex flex-col gap-4 z-50 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <button 
            onClick={() => scrollTo('works-section')}
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1 border-b border-[#1C1D20]/10"
          >
            Work (ผลงาน)
          </button>
          <button 
            onClick={() => scrollTo('stages-section')}
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1 border-b border-[#1C1D20]/10"
          >
            Process (ขั้นตอนทำงาน)
          </button>
          <button 
            onClick={() => scrollTo('music-section')}
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1 border-b border-[#1C1D20]/10"
          >
            Music & Talent (ความสามารถด้านดนตรี)
          </button>
          <button 
            onClick={() => scrollTo('about-section')}
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1 border-b border-[#1C1D20]/10"
          >
            About (ประวัติ & ทักษะ)
          </button>
          <button 
            onClick={() => scrollTo('contact-section')}
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1"
          >
            Contact (ติดต่อ)
          </button>
        </div>
      )}
    </nav>
  );
}
