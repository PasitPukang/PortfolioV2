import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faFilePdf,
  faDownload,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';

export default function EditorialNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleExportPdf = () => {
    window.print();
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

      {/* Center Download / Print Entire Web Page as PDF */}
      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={handleExportPdf}
          className="group inline-flex items-center gap-2 text-xs font-bold text-[#1C1D20] hover:text-[#10B981] transition uppercase tracking-wider py-1.5 px-4 rounded-full border border-[#1C1D20]/30 hover:border-[#10B981] hover:bg-[#1C1D20] hover:text-white shadow-sm cursor-pointer"
          title="บันทึก / ส่งออกทั้งหน้าเว็บเป็นไฟล์ PDF"
        >
          <FontAwesomeIcon icon={faFilePdf} className="text-sm group-hover:scale-110 transition-transform text-emerald-600 group-hover:text-emerald-300" />
          <span>Save / Download as PDF</span>
        </button>
      </div>

      {/* Right Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#1C1D20] uppercase tracking-wider">
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

      {/* Mobile Export PDF Button */}
      <div className="flex md:hidden items-center gap-2">
        <button
          onClick={handleExportPdf}
          className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-[#1C1D20] text-white rounded-full flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <FontAwesomeIcon icon={faFilePdf} className="text-[11px] text-emerald-400" />
          <span>PDF</span>
        </button>
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
            className="text-left font-display text-xl uppercase tracking-wider text-[#1C1D20] py-1 border-b border-[#1C1D20]/10"
          >
            Contact (ติดต่อ)
          </button>
          
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleExportPdf();
            }}
            className="text-left font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 py-2 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faFilePdf} />
            <span>บันทึกทั้งหน้าเว็บเป็น PDF (Export Portfolio PDF)</span>
          </button>
        </div>
      )}
    </nav>
  );
}
