import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import RotatingStamp from '../components/RotatingStamp';

const STAGES = [
  {
    stage: 'STAGE 1',
    title: 'BRIEFING & REQUIREMENTS',
    description:
      'In this stage, there is an in-depth acquaintance with the project goals and requirements. We analyze user stories, identify core constraints, outline functional specifications (SRS), and define clear deliverables and development milestones.',
  },
  {
    stage: 'STAGE 2',
    title: 'ANALYTICS & ARCHITECTURE',
    description:
      'Designing robust system architecture, database schema normalization (PostgreSQL on Supabase Cloud), RESTful API contracts, role-based access control (RLS), and triple-tier fallback systems to ensure high reliability and zero downtime.',
  },
  {
    stage: 'STAGE 3',
    title: 'PROTOTYPING & UI/UX',
    description:
      'Developing clean wireframes, visual rhythm, responsive layout design, and design token systems. Ensuring intuitive micro-interactions and mobile-first touch optimization across every viewport.',
  },
  {
    stage: 'STAGE 4',
    title: 'FRONTEND & BACKEND DEVELOPMENT',
    description:
      'Writing clean, modular, and maintainable TypeScript/JavaScript code using React 19 / Next.js 14, Tailwind CSS, and daisyUI. Implementing state management, API hooks, and seamless cloud database synchronization.',
  },
  {
    stage: 'STAGE 5',
    title: 'ADAPTIVE & QA TESTING',
    description:
      'Rigorous cross-browser testing across desktop, tablet, and mobile devices. Testing edge cases, form validations, network error handling, performance optimization, and accessibility compliance.',
  },
  {
    stage: 'STAGE 6',
    title: 'THE FINAL DEPLOYMENT',
    description:
      'Building production bundles with Vite / Next.js, setting up automated CI/CD pipelines with GitHub Actions / GitHub Pages, and verifying live cloud database connections for 24/7 public availability.',
  },
];

export default function StagesSection() {
  const [openIndex, setOpenIndex] = useState(0); // Stage 1 open by default as in video

  const toggleStage = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="stages-section" className="w-full px-6 sm:px-10 lg:px-14 py-12 sm:py-20 border-t-[2px] border-[#1C1D20] bg-[#ECEAE5] relative">
      
      {/* Top Header */}
      <div className="flex items-start justify-between gap-6 mb-10 sm:mb-14">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
            • Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-[#1C1D20] uppercase tracking-tight leading-[0.9]">
            STAGES OF WEBSITE DEVELOPMENT
          </h2>
        </div>

        {/* Floating Rotating Stamp (Matching video frame 00:08) */}
        <div className="hidden sm:block">
          <RotatingStamp
            text="• WORK PROCESS • PRODUCTION READY • QUALITY FIRST •"
            size={110}
            color="#1C1D20"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="border-t-[1.5px] border-[#1C1D20]/40">
        {STAGES.map((stage, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border-b-[1.5px] border-[#1C1D20]/30 transition-colors duration-200"
            >
              {/* Accordion Row Header */}
              <button
                onClick={() => toggleStage(idx)}
                className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer select-none"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-16 md:gap-24">
                  <span className="text-xs font-mono font-bold text-[#1C1D20]/60 uppercase tracking-wider w-20">
                    {stage.stage}
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-display font-black text-[#1C1D20] group-hover:text-emerald-700 tracking-wide uppercase transition-colors">
                    {stage.title}
                  </span>
                </div>

                {/* Plus / Minus Icon */}
                <div className="w-8 h-8 rounded-full border border-[#1C1D20]/30 flex items-center justify-center text-[#1C1D20] group-hover:border-[#1C1D20] group-hover:bg-[#1C1D20] group-hover:text-white transition-all shrink-0">
                  <FontAwesomeIcon
                    icon={isOpen ? faMinus : faPlus}
                    className="text-xs transition-transform duration-300"
                  />
                </div>
              </button>

              {/* Accordion Expandable Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 sm:pb-8 sm:pl-28 md:pl-36 max-w-3xl">
                      <p className="text-xs sm:text-sm md:text-base text-[#1C1D20]/80 leading-relaxed font-normal bg-white/70 p-5 rounded-2xl border border-[#1C1D20]/15 shadow-sm">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
}
