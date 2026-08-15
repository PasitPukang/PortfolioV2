import React from 'react';
import { motion } from 'framer-motion';
import avatarPic from '../assets/Pasit Pukang.svg';
import RotatingStamp from '../components/RotatingStamp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function EditorialHero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full px-6 sm:px-10 lg:px-14 pt-8 sm:pt-12 pb-12 sm:pb-16 flex flex-col gap-8 sm:gap-12">
      
      {/* Massive Typographic Hero Header */}
      <div className="w-full select-none">
        <div className="flex flex-col leading-[0.85] tracking-tight">
          
          {/* Top Line: FULLSTACK / FRONTEND DEVELOPER */}
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black text-[#1C1D20] uppercase">
              FULLSTACK /
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black text-[#1C1D20] uppercase">
              DEVELOPER
            </span>
          </div>

          {/* Bottom Line: PORTFOLIO in Outline / Wireframe Typography */}
          <div className="w-full overflow-hidden">
            <span className="stroke-text-thick text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] font-display font-black uppercase tracking-wider block">
              PORTFOLIO
            </span>
          </div>
        </div>
      </div>

      {/* Split Grid: Photo + Intro Bio Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
        
        {/* Left Column: Photo Card with Rotating Stamp */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-[2px] border-[#1C1D20] shadow-xl bg-slate-900 group">
            <img
              src={avatarPic}
              alt="Pasit Pukang"
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 text-white font-mono text-[11px] flex items-center justify-between">
              <span>PASIT PUKANG (BEST)</span>
              <span className="text-emerald-400">● AVAILABLE 2026</span>
            </div>
          </div>

          {/* Floating Rotating Stamp overlapping photo corner */}
          <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-20">
            <RotatingStamp 
              text="• OPEN FOR INTERNSHIP 2026 • READY TO WORK •" 
              size={120} 
              color="#10B981" 
            />
          </div>
        </div>

        {/* Right Column: Statement Bio & Quick Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6 lg:pl-4">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C1D20]/30 text-xs font-mono font-semibold uppercase tracking-widest text-[#1C1D20]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              IT Senior Student @ KU Kamphaeng Saen
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-[#1C1D20] font-normal leading-relaxed tracking-tight">
              Hi, my name is <strong className="font-bold">Pasit (Best)</strong> and I am a <strong className="font-bold">Fullstack & Frontend Developer</strong>. My main goal is to create and develop quality products with clean architecture that bring real value to the company and users. Meanwhile, it will help me improve my engineering skills.
            </p>

            <p className="text-xs sm:text-sm text-[#1C1D20]/75 leading-relaxed">
              เชี่ยวชาญการพัฒนาโมเดิร์นเว็บแอปพลิเคชันด้วย Next.js 14, React 19, TypeScript, Tailwind CSS, Supabase Cloud PostgreSQL, และ Prisma ORM พร้อมเรียนรู้สิ่งใหม่ๆ และร่วมสร้างคุณค่าให้ทีมทันทีครับ
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1C1D20]/15">
            <button
              onClick={() => scrollTo('works-section')}
              className="px-6 py-3 rounded-full bg-[#1C1D20] hover:bg-[#10B981] text-[#ECEAE5] hover:text-[#1C1D20] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Explore My Works</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
            </button>

            <a
              href="https://github.com/PasitPukang"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full border border-[#1C1D20]/40 hover:border-[#1C1D20] text-[#1C1D20] font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
              <span>GitHub Profile</span>
            </a>

            <button
              onClick={() => scrollTo('contact-section')}
              className="px-5 py-3 rounded-full border border-[#1C1D20]/40 hover:border-[#1C1D20] text-[#1C1D20] font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
              <span>Contact Me</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
