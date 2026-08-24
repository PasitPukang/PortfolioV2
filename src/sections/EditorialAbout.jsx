import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faCode,
  faDatabase,
  faPaintBrush,
  faTools,
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
          เส้นทางการเรียนรู้ ประวัติการศึกษา และทักษะทางเทคนิค (Education & Technical Competencies)
        </p>
      </div>

      <div className="flex flex-col gap-6">

        {/* 1. Featured Top Education Card (Full Width Bento Row) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-[2px] border-[#1C1D20] shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl transition-all duration-300">
          
          {/* Education Info */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-xl shrink-0 shadow-sm">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20]/60">
                  Education • การศึกษา
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                  นิสิตชั้นปีที่ 4
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1C1D20] leading-snug">
                {aboutData.education.degree}
              </h3>
              
              <p className="text-xs sm:text-sm font-semibold text-emerald-700 mt-0.5">
                {aboutData.education.institution}
              </p>
              
              <p className="text-xs text-[#1C1D20]/70">
                {aboutData.education.faculty} ({aboutData.education.year})
              </p>
            </div>
          </div>

          {/* Quick Status Tag on the Right */}
          <div className="flex flex-row md:flex-col items-start md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-[#1C1D20]/10 pt-4 md:pt-0 md:pl-8 shrink-0">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1C1D20]/50 block mb-1">
              Internship Status
            </span>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1D20] text-white font-mono text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>พร้อมเริ่มฝึกงาน 2026</span>
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
