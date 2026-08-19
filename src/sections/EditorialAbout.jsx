import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faCodeBranch,
  faCertificate,
  faExternalLinkAlt,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { data as aboutData } from '../contents/about';
import { data as headerData } from '../contents/header';

export default function EditorialAbout() {
  return (
    <section id="about-section" className="w-full px-6 sm:px-10 lg:px-14 py-12 sm:py-20 border-t-[2px] border-[#1C1D20]/15 bg-[#F4F3EF]">

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
            • Background & Skills
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-[#1C1D20] tracking-tight uppercase">
            ABOUT & COMPETENCIES
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#1C1D20]/70 max-w-md font-normal">
          เส้นทางการเรียนรู้ ทักษะทางเทคนิค และเอกสารรับรองความสามารถ (Certificates)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">

        {/* Left Column: Education & Story (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Education Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border-[2px] border-[#1C1D20] shadow-md space-y-4">
            <div className="flex items-center justify-between border-b border-[#1C1D20]/15 pb-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGraduationCap} className="text-emerald-600 text-sm" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20]">
                  Education
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                Yr 4 Student
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-[#1C1D20] leading-snug">
                {aboutData.education.degree}
              </h3>
              <p className="text-xs font-semibold text-emerald-700">
                {aboutData.education.institution}
              </p>
              <p className="text-xs text-[#1C1D20]/70">
                {aboutData.education.faculty} ({aboutData.education.year})
              </p>
            </div>
          </div>



          {/* Verified Certificates */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border-[2px] border-[#1C1D20] shadow-md space-y-4">
            <div className="flex items-center justify-between border-b border-[#1C1D20]/15 pb-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCertificate} className="text-amber-500 text-sm" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20]">
                  Certificates
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#1C1D20]/60">3 Verified</span>
            </div>

            <div className="space-y-2.5">
              {headerData.certificates.map((cert, cIdx) => (
                <a
                  key={cIdx}
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F4F3EF] hover:bg-[#1C1D20] text-[#1C1D20] hover:text-white border border-[#1C1D20]/15 transition-all group cursor-pointer"
                >
                  <div>
                    <div className="text-xs font-bold leading-tight group-hover:text-emerald-300 transition">
                      {cert.name}
                    </div>
                    <div className="text-[10px] opacity-70">
                      {cert.issuer}
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px] opacity-60 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Categorized Technical Competencies (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.skills.map((group, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-white border-[2px] border-[#1C1D20] shadow-md flex flex-col justify-between gap-4 hover:border-emerald-600 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-[#1C1D20]/15 pb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20]">
                    {group.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-[#F4F3EF] border border-[#1C1D20]/20 font-mono text-xs font-semibold text-[#1C1D20] hover:bg-[#1C1D20] hover:text-white transition-all cursor-default shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact & Summary banner */}
          <div className="p-6 sm:p-7 rounded-3xl border-[2px] border-[#1C1D20] bg-emerald-50 text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-display text-2xl font-black uppercase tracking-wide">
                Ready for Internship in 2026
              </h4>
              <p className="text-xs opacity-80 mt-0.5">
                พร้อมเริ่มงานทันที ติดต่อเพื่อนัดสัมภาษณ์หรือพูดคุยรายละเอียดได้ครับ
              </p>
            </div>
            <a
              href="mailto:pasit.pu@ku.th"
              className="px-5 py-2.5 rounded-full bg-[#1C1D20] hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-all self-start sm:self-auto shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
