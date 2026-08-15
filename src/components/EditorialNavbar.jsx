import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faBars,
  faTimes,
  faFilePdf,
  faDownload,
  faAward,
} from '@fortawesome/free-solid-svg-icons';

export default function EditorialNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const baseUrl = import.meta.env.BASE_URL || '/';
  const resumeUrl = `${baseUrl}resume.pdf`;
  const certCss = `${baseUrl}css_certificate.pdf`;
  const certJs = `${baseUrl}javascript_basic_certificate.pdf`;
  const certJava = `${baseUrl}java_basic_certificate.pdf`;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleDirectDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName || 'Pasit_Pukang_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

      {/* Center Download CV / Resume Button */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href={resumeUrl}
          download="Pasit_Pukang_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            handleDirectDownload(resumeUrl, 'Pasit_Pukang_Resume.pdf');
          }}
          className="group inline-flex items-center gap-2 text-xs font-bold text-[#1C1D20] hover:text-[#10B981] transition uppercase tracking-wider py-1.5 px-3.5 rounded-full border border-[#1C1D20]/30 hover:border-[#10B981] hover:bg-[#1C1D20] hover:text-white shadow-sm cursor-pointer"
        >
          <FontAwesomeIcon icon={faDownload} className="text-[11px] group-hover:translate-y-0.5 transition-transform" />
          <span>Download CV / Resume</span>
        </a>

        <button
          onClick={() => setCvModalOpen(true)}
          className="text-[11px] font-mono text-[#1C1D20]/60 hover:text-[#1C1D20] underline underline-offset-4 cursor-pointer"
          title="ดูใบเซอร์และเอกสารทั้งหมด"
        >
          (All Docs)
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

      {/* Mobile Hamburger Toggle */}
      <div className="flex md:hidden items-center gap-2">
        <a
          href={resumeUrl}
          download="Pasit_Pukang_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[#1C1D20] text-white rounded-full flex items-center gap-1 shadow-sm"
        >
          <FontAwesomeIcon icon={faDownload} className="text-[10px]" />
          <span>CV</span>
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
          
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setCvModalOpen(true);
            }}
            className="text-left font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 py-2 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faFilePdf} />
            <span>ดาวน์โหลด Resume & ใบรับรองทั้งหมด</span>
          </button>
        </div>
      )}

      {/* All Documents / Resume & Certificates Modal */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#1C1D20]/80 backdrop-blur-sm">
          <div className="bg-[#ECEAE5] border-[2.5px] border-[#1C1D20] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <button
              onClick={() => setCvModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1C1D20] text-white flex items-center justify-center hover:bg-emerald-600 transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xs" />
            </button>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                  • Official Documents
                </span>
                <h3 className="text-2xl font-display font-black text-[#1C1D20] uppercase leading-tight">
                  RESUME & CERTIFICATES
                </h3>
                <p className="text-xs text-[#1C1D20]/70 mt-1">
                  คลิกเพื่อดาวน์โหลดเรซูเม่ทางการหรือเปิดดูใบรับรองความสามารถ (PDF)
                </p>
              </div>

              {/* Main Resume Item */}
              <div className="p-4 rounded-2xl bg-white border-[2px] border-[#1C1D20] shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-base">
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1C1D20] leading-tight">
                      Official Resume (PDF)
                    </h4>
                    <p className="text-[11px] text-[#1C1D20]/60 font-mono">
                      Pasit Pukang — Fullstack Dev
                    </p>
                  </div>
                </div>

                <a
                  href={resumeUrl}
                  download="Pasit_Pukang_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#1C1D20] hover:bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-[10px]" />
                  <span>Download</span>
                </a>
              </div>

              {/* Certificates List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20]/70 block">
                  Verified HackerRank Certificates:
                </span>

                {[
                  { name: 'CSS Certificate', issuer: 'HackerRank Verified', file: certCss },
                  { name: 'JavaScript Basic', issuer: 'HackerRank Verified', file: certJs },
                  { name: 'Java Basic', issuer: 'HackerRank Verified', file: certJava },
                ].map((cert, cIdx) => (
                  <a
                    key={cIdx}
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/70 hover:bg-white border border-[#1C1D20]/20 flex items-center justify-between text-xs font-semibold text-[#1C1D20] hover:border-emerald-600 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <FontAwesomeIcon icon={faAward} className="text-amber-500" />
                      <span>{cert.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold group-hover:underline">
                      View PDF ↗
                    </span>
                  </a>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setCvModalOpen(false)}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20] hover:underline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
