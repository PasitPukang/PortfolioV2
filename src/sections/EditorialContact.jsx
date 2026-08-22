import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGraduationCap,
  faPhone,
  faMapMarkerAlt,
  faCheckCircle,
  faCopy,
  faArrowUp,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons';
import { data as headerData } from '../contents/header';

export default function EditorialContact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { label: 'GitHub', link: headerData.github, icon: faGithub, handle: '@PasitPukang' },
    { label: 'Instagram', link: headerData.instagram, icon: faInstagram, handle: '@_bubx__best.t' },
    { label: 'LINE', link: `https://line.me/ti/p/~${headerData.line}`, icon: faLine, handle: headerData.line },
  ];

  return (
    <footer id="contact-section" className="w-full px-6 sm:px-10 lg:px-14 py-12 sm:py-20 border-t-[2px] border-[#1C1D20] bg-[#ECEAE5] select-none">
      
      {/* Massive Typographic Contact Header with clean spacing */}
      <div className="mb-10 sm:mb-14">
        <div className="flex flex-col gap-1 tracking-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="leading-none"
          >
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[130px] font-display font-black text-[#1C1D20] uppercase block leading-none">
              CONTACT
            </span>
          </motion.div>

          <div className="flex items-center gap-4 sm:gap-8 overflow-hidden leading-none pt-1">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="stroke-text-thick text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[130px] font-display font-black uppercase tracking-wider block leading-none"
            >
              ME
            </motion.span>
            
            {/* Animated Horizontal Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
              className="h-[2px] sm:h-[3px] flex-1 bg-[#1C1D20]/40" 
            />
          </div>
        </div>
      </div>

      {/* 2-Column Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-[#1C1D20]/20">
        
        {/* Left Column: SOCIALS & CHANNELS (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1C1D20]/60 block mb-2">
            Socials & Instant Messaging
          </span>

          <div className="flex flex-col gap-3">
            {socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between text-sm sm:text-base font-semibold text-[#1C1D20] hover:text-emerald-700 transition-all p-3 rounded-2xl bg-white/70 border border-[#1C1D20]/15 hover:border-[#1C1D20] shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1C1D20] text-white flex items-center justify-center text-sm group-hover:bg-emerald-600 transition-colors">
                    <FontAwesomeIcon icon={soc.icon} />
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm">{soc.label}</div>
                    <div className="text-[11px] font-mono text-[#1C1D20]/60">{soc.handle}</div>
                  </div>
                </div>
                <span className="text-xs font-mono opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300 no-print">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: DIRECT CONTACTS (7 cols) */}
        <div className="md:col-span-7 space-y-4 md:pl-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1C1D20]/60 block mb-2">
            Direct Contacts
          </span>

          <div className="space-y-3 text-sm sm:text-base text-[#1C1D20]">
            
            {/* 1. Personal Email */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#1C1D20]/20 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#1C1D20]/60 block">
                    อีเมลส่วนตัว (Personal Email)
                  </span>
                  <a 
                    href={`mailto:${headerData.personalEmail}`}
                    className="font-mono font-bold text-xs sm:text-sm hover:text-emerald-700 transition"
                  >
                    {headerData.personalEmail}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(headerData.personalEmail, 'pEmail')}
                className="px-3.5 py-1.5 rounded-xl bg-[#1C1D20] hover:bg-emerald-600 text-white text-xs font-mono font-semibold transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer hover:scale-105 active:scale-95 no-print"
              >
                <FontAwesomeIcon icon={copiedKey === 'pEmail' ? faCheckCircle : faCopy} className={copiedKey === 'pEmail' ? 'text-emerald-300' : ''} />
                <span>{copiedKey === 'pEmail' ? 'คัดลอกแล้ว!' : 'Copy'}</span>
              </button>
            </div>

            {/* 2. University Email */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#1C1D20]/20 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center text-sm shrink-0">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#1C1D20]/60 block">
                    อีเมลมหาวิทยาลัย (KU Mail)
                  </span>
                  <a 
                    href={`mailto:${headerData.universityEmail}`}
                    className="font-mono font-bold text-xs sm:text-sm hover:text-blue-700 transition"
                  >
                    {headerData.universityEmail}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(headerData.universityEmail, 'uEmail')}
                className="px-3.5 py-1.5 rounded-xl bg-[#1C1D20] hover:bg-emerald-600 text-white text-xs font-mono font-semibold transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer hover:scale-105 active:scale-95 no-print"
              >
                <FontAwesomeIcon icon={copiedKey === 'uEmail' ? faCheckCircle : faCopy} className={copiedKey === 'uEmail' ? 'text-emerald-300' : ''} />
                <span>{copiedKey === 'uEmail' ? 'คัดลอกแล้ว!' : 'Copy'}</span>
              </button>
            </div>

            {/* 3. Phone & LINE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Phone */}
              <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-white border border-[#1C1D20]/20 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#1C1D20]/60 block">
                      เบอร์โทรศัพท์ (Phone)
                    </span>
                    <a href={`tel:${headerData.phone.replace(/-/g, '')}`} className="font-mono font-bold text-xs sm:text-sm hover:text-emerald-700">
                      {headerData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(headerData.phone, 'phone')}
                  className="p-2 rounded-lg hover:bg-slate-100 text-[#1C1D20] text-xs transition cursor-pointer no-print"
                  title="คัดลอกเบอร์โทร"
                >
                  <FontAwesomeIcon icon={copiedKey === 'phone' ? faCheckCircle : faCopy} className={copiedKey === 'phone' ? 'text-emerald-600' : ''} />
                </button>
              </div>

              {/* LINE ID */}
              <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-white border border-[#1C1D20]/20 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-green-100 text-green-700 flex items-center justify-center text-sm shrink-0">
                    <FontAwesomeIcon icon={faLine} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#1C1D20]/60 block">
                      LINE ID / Phone
                    </span>
                    <span className="font-mono font-bold text-xs sm:text-sm">
                      {headerData.line}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(headerData.line, 'line')}
                  className="p-2 rounded-lg hover:bg-slate-100 text-[#1C1D20] text-xs transition cursor-pointer no-print"
                  title="คัดลอก LINE ID"
                >
                  <FontAwesomeIcon icon={copiedKey === 'line' ? faCheckCircle : faCopy} className={copiedKey === 'line' ? 'text-emerald-600' : ''} />
                </button>
              </div>

            </div>

            {/* Location & Status */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#1C1D20]/80 pt-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-emerald-600 text-sm" />
              <span>{headerData.location} (พร้อมฝึกงาน On-site / Remote)</span>
            </div>

            {/* Status Quote */}
            <p className="text-xs text-[#1C1D20]/60 italic pt-1">
              "{headerData.quote}"
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1C1D20]/70">
        <div>
          <span>{headerData.englishName} ({headerData.name}) © {new Date().getFullYear()} — All Rights Reserved.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[#1C1D20] transition-colors cursor-pointer group hover:opacity-100 no-print"
        >
          <span>BACK TO TOP</span>
          <FontAwesomeIcon icon={faArrowUp} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

    </footer>
  );
}
