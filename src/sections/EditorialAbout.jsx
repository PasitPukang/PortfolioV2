import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faCalendarAlt,
  faClock,
  faCode,
  faDatabase,
  faPaintBrush,
  faTools,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { data as aboutData } from '../contents/about';

const CATEGORY_ICONS = [faCode, faDatabase, faPaintBrush, faTools];

export default function EditorialAbout() {
  return (
    <section id="about-section" className="w-full px-6 sm:px-10 lg:px-14 py-12 sm:py-20 border-t-[2px] border-[#1C1D20]/15 bg-[#F4F3EF] select-none">

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
            • Background & Skills
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-[#1C1D20] tracking-tight uppercase">
            ABOUT & COMPETENCIES
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#1C1D20]/70 max-w-md font-normal">
          เส้นทางการเรียนรู้ ประวัติการศึกษา และช่วงเวลาพร้อมเข้าฝึกงาน (Education & Internship Schedule)
        </p>
      </div>

      <div className="flex flex-col gap-6">

        {/* 1. Top Bento Grid: Education (Left) & Internship Schedule (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1.1 Education Card (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border-[2px] border-[#1C1D20] shadow-md flex flex-col justify-between gap-4 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between border-b border-[#1C1D20]/15 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-sm shadow-sm">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20]">
                  Education • การศึกษา
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                นิสิตชั้นปีที่ 4
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold text-[#1C1D20] leading-snug">
                {aboutData.education.degree}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-emerald-700">
                {aboutData.education.institution}
              </p>
              <p className="text-xs text-[#1C1D20]/70">
                {aboutData.education.faculty} ({aboutData.education.year})
              </p>
            </div>
          </div>

          {/* 1.2 Internship Schedule Card (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-emerald-950 text-white border-[2px] border-[#1C1D20] shadow-md flex flex-col justify-between gap-4 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            
            {/* Background Subtle Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/20 pb-3 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 flex items-center justify-center text-sm">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                  Internship Availability • พร้อมฝึกงาน
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500 text-[#1C1D20] font-mono text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Available 2026 - 2027
              </span>
            </div>

            <div className="space-y-2 relative z-10">
              <div>
                <span className="text-[10px] font-mono text-emerald-300/80 uppercase tracking-widest block">
                  ช่วงเวลาฝึกงาน (Period)
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                  23 พฤศจิกายน 2569 – 12 มีนาคม 2570
                  <span className="text-xs font-normal text-emerald-300 block sm:inline sm:ml-2">(ยินดีฝึกต่อเนื่อง / มากกว่านั้น)</span>
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-mono">
                  <FontAwesomeIcon icon={faClock} className="text-emerald-400 text-[11px]" />
                  <span>3 เดือน 19 วัน (16 สัปดาห์เต็ม)</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-emerald-200 text-xs font-mono">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400 text-[11px]" />
                  <span>On-site / Hybrid / Remote</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 2. Categorized Technical Competencies (2x2 Balanced Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.skills.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border-[2px] border-[#1C1D20] shadow-md flex flex-col justify-between gap-5 hover:border-emerald-600 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-[#1C1D20]/15 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#F4F3EF] border border-[#1C1D20]/15 text-[#1C1D20] flex items-center justify-center text-xs">
                    <FontAwesomeIcon icon={CATEGORY_ICONS[idx % CATEGORY_ICONS.length]} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20]">
                    {group.category}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              {/* Badges / Pill Tags */}
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-xl bg-[#F4F3EF] border border-[#1C1D20]/20 font-mono text-xs font-semibold text-[#1C1D20] hover:bg-[#1C1D20] hover:text-white hover:border-[#1C1D20] transition-all duration-200 cursor-default shadow-sm hover:scale-105 active:scale-95"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
