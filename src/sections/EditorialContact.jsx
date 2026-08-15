import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faCheckCircle,
  faCopy,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { data as headerData } from '../contents/header';

export default function EditorialContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(headerData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { label: 'GitHub', link: headerData.github, icon: faGithub },
    { label: 'LinkedIn', link: 'https://linkedin.com', icon: faLinkedin },
    { label: 'Facebook', link: 'https://facebook.com', icon: faFacebook },
    { label: 'Instagram', link: 'https://instagram.com', icon: faInstagram },
  ];

  return (
    <footer id="contact-section" className="w-full px-6 sm:px-10 lg:px-14 py-12 sm:py-20 border-t-[2px] border-[#1C1D20] bg-[#ECEAE5] select-none">
      
      {/* Massive Typographic Contact Header (Matching video frame 00:09 - 00:10) */}
      <div className="mb-12 sm:mb-16">
        <div className="flex flex-col leading-[0.85] tracking-tight">
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] font-display font-black text-[#1C1D20] uppercase">
            CONTACT
          </span>
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="stroke-text-thick text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] font-display font-black uppercase tracking-wider">
              ME
            </span>
            <div className="h-[2px] sm:h-[3px] flex-1 bg-[#1C1D20]/40 mt-4 sm:mt-8" />
          </div>
        </div>
      </div>

      {/* 2-Column Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-[#1C1D20]/20">
        
        {/* Left Column: SOCIALS (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1C1D20]/60 block mb-2">
            Socials
          </span>

          <div className="flex flex-col gap-2.5">
            {socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between text-sm sm:text-base font-semibold text-[#1C1D20] hover:text-emerald-700 transition-colors py-1.5 border-b border-[#1C1D20]/10"
              >
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={soc.icon} className="text-sm opacity-60 group-hover:opacity-100 transition" />
                  <span>{soc.label}</span>
                </div>
                <span className="text-xs font-mono opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: CONTACTS INFO (7 cols) */}
        <div className="md:col-span-7 space-y-4 md:pl-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1C1D20]/60 block mb-2">
            Contacts
          </span>

          <div className="space-y-4 text-sm sm:text-base text-[#1C1D20]">
            {/* Email with One-click Copy */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl bg-white border border-[#1C1D20]/20 shadow-sm">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-emerald-600" />
                <span className="font-mono font-bold text-xs sm:text-sm">{headerData.email}</span>
              </div>
              <button
                onClick={copyEmail}
                className="px-3.5 py-1.5 rounded-xl bg-[#1C1D20] hover:bg-emerald-600 text-white text-xs font-mono font-semibold transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <FontAwesomeIcon icon={copied ? faCheckCircle : faCopy} className={copied ? 'text-emerald-300' : ''} />
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#1C1D20]/80">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-emerald-600" />
              <span>{headerData.location} (พร้อมฝึกงาน On-site / Remote)</span>
            </div>

            {/* Status Quote */}
            <p className="text-xs text-[#1C1D20]/60 italic pt-2">
              "{headerData.quote}"
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1C1D20]/70">
        <div>
          <span>{headerData.englishName} © {new Date().getFullYear()} — All Rights Reserved.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[#1C1D20] transition-colors cursor-pointer group"
        >
          <span>BACK TO TOP</span>
          <FontAwesomeIcon icon={faArrowUp} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

    </footer>
  );
}
