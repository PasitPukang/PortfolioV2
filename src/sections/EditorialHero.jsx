import React from 'react';
import { motion } from 'framer-motion';
import avatarPic from '../assets/Pasit Pukang.svg';
import RotatingStamp from '../components/RotatingStamp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function EditorialHero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full px-6 sm:px-10 lg:px-14 pt-8 sm:pt-12 pb-12 sm:pb-16 flex flex-col gap-8 sm:gap-12">
      
      {/* Massive Typographic Hero Header with Mask Slide Reveal */}
      <div className="w-full select-none">
        <div className="flex flex-col gap-1 tracking-tight">
          
          {/* Top Line: FULLSTACK / DEVELOPER */}
          <div className="overflow-hidden py-1 leading-none">
            <motion.div
              initial={{ y: '120%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="flex flex-wrap items-baseline gap-2 sm:gap-4 leading-none"
            >
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black text-[#1C1D20] uppercase leading-none">
                FULLSTACK /
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black text-[#1C1D20] uppercase leading-none">
                FRONTEND DEV
              </span>
            </motion.div>
          </div>

          {/* Bottom Line: PORTFOLIO in Outline Typography */}
          <div className="overflow-hidden py-1 leading-none">
            <motion.div
              initial={{ y: '120%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="leading-none"
            >
              <span className="stroke-text-thick text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] font-display font-black uppercase tracking-wider block leading-none">
                PORTFOLIO
              </span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Split Grid: Photo + Intro Bio Statement */}
      <div className="print-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
        
        {/* Left Column: Full Color Photo Card with Rotating Stamp */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.4 }}
          className="print-hero-photo lg:col-span-5 relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-[2px] border-[#1C1D20] shadow-xl bg-slate-900 group">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.45 }}
              src={avatarPic}
              alt="Pasit Pukang (Best)"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 text-white font-mono text-xs flex items-center justify-between no-print">
              <span className="text-emerald-400">PASIT PUKANG (BEST)</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Prominent Name & Thai Introduction Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.5 }}
          className="print-hero-bio lg:col-span-7 flex flex-col justify-between gap-6 lg:pl-4"
        >
          <div className="space-y-4">
            
            {/* Status Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1C1D20]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#1C1D20] bg-white/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse no-print" />
              นิสิตชั้นปีที่ 4 เทคโนโลยีสารสนเทศ (IT) • ม.เกษตรศาสตร์ กำแพงแสน
            </div>

            {/* Standout Prominent Name Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1C1D20] tracking-tight leading-tight">
                นายพสิษฐ์ ภูฆัง <span className="text-emerald-700 font-black">(เบสท์)</span>
              </h1>
              
            </div>

            {/* Thai Introduction Bio */}
            <div className="space-y-3 pt-1">
              <p className="text-base sm:text-lg md:text-xl text-[#1C1D20] font-medium leading-relaxed">
                เป็น <strong className="font-extrabold text-[#1C1D20]">Fullstack & Frontend Developer</strong> ที่มีความมุ่งมั่นในการสร้างสรรค์และพัฒนาเว็บแอปพลิเคชันที่มีคุณภาพ ด้วย Clean Architecture ที่ตอบโจทย์การใช้งานจริงและสร้างคุณค่าให้แก่องค์กร ควบคู่ไปกับการยกระดับทักษะด้าน Software Engineering อย่างต่อเนื่อง
              </p>

              <p className="text-xs sm:text-sm md:text-base text-[#1C1D20]/80 leading-relaxed bg-white/75 p-4 sm:p-5 rounded-2xl border border-[#1C1D20]/15 shadow-sm">
                💡 <strong>จุดเด่น:</strong> พัฒนา Modern Web Application ด้วย <strong>Next.js 14, React 19, TypeScript, Tailwind CSS, daisyUI</strong> ควบคู่กับงานระบบฐานข้อมูล Cloud Database <strong>Supabase (PostgreSQL)</strong> และ <strong>Prisma ORM</strong> มีความกระตือรือร้นในการเรียนรู้สิ่งใหม่ๆ และพร้อมร่วมสร้างสรรค์ผลงานคุณภาพให้กับทีมทันทีครับ
              </p>
            </div>

          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1C1D20]/15 no-print">
            <button
              onClick={() => scrollTo('works-section')}
              className="px-6 py-3 rounded-full bg-[#1C1D20] hover:bg-[#10B981] text-[#ECEAE5] hover:text-[#1C1D20] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>ดูผลงานโปรเจกต์ (Works)</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
            </button>

            <a
              href="https://github.com/PasitPukang"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full border border-[#1C1D20]/40 hover:border-[#1C1D20] text-[#1C1D20] font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-105"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
              <span>GitHub Profile</span>
            </a>

            <button
              onClick={() => scrollTo('contact-section')}
              className="px-5 py-3 rounded-full border border-[#1C1D20]/40 hover:border-[#1C1D20] text-[#1C1D20] font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
              <span>ติดต่อฉัน (Contact)</span>
            </button>
          </div>

        </motion.div>

      </div>

    </section>
  );
}
