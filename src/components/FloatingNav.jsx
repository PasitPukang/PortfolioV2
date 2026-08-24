import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faMusic,
  faUser,
  faEnvelope,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

const NAV_ITEMS = [
  { id: 'hero-section', label: 'Home', icon: faHome },
  { id: 'works-section', label: 'Work', icon: faBriefcase },
  { id: 'music-section', label: 'Music & Talent', icon: faMusic },
  { id: 'about-section', label: 'About', icon: faUser },
  { id: 'contact-section', label: 'Contact', icon: faEnvelope },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero-section');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for trigger

      const sectionElements = NAV_ITEMS.map(item => {
        return {
          id: item.id,
          element: document.getElementById(item.id),
        };
      });

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element) {
          const top = item.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'hero-section') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero-section');
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-40 select-none no-print">
      <motion.nav 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-row md:flex-col items-stretch gap-1 md:gap-1.5 p-1.5 md:p-2 rounded-full md:rounded-2xl bg-[#1C1D20]/95 backdrop-blur-xl border-[1.5px] border-[#1C1D20]/30 shadow-[0_12px_40px_rgba(0,0,0,0.35)] w-auto md:w-44 overflow-hidden"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-3 sm:px-4 md:px-3.5 py-2 md:py-2.5 rounded-full md:rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center md:justify-start gap-2.5 cursor-pointer whitespace-nowrap w-auto md:w-full select-none ${
                isActive
                  ? 'text-[#1C1D20] font-bold'
                  : 'text-[#ECEAE5]/70 hover:text-white hover:bg-white/10'
              }`}
              title={item.label}
            >
              {/* Active Background highlight */}
              {isActive && (
                <motion.div
                  layoutId="activeFloatingPill"
                  className="absolute inset-0 bg-[#E7E5E0] rounded-full md:rounded-xl -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <FontAwesomeIcon 
                icon={item.icon} 
                className={`text-[12px] w-4 text-center shrink-0 ${isActive ? 'text-emerald-700' : 'opacity-70'}`} 
              />
              <span className="hidden xs:inline sm:inline md:inline truncate">{item.label}</span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
}
