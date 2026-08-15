import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faEye,
  faTimes,
  faCheckCircle,
  faGlobe,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { data as projectsData } from '../contents/Project';

export default function EditorialWorks() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="works-section" className="w-full px-6 sm:px-10 lg:px-14 py-12 sm:py-16 border-t-[2px] border-[#1C1D20]/15">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
            • Selected Projects
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-[#1C1D20] tracking-tight uppercase">
            FEATURED WORKS
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#1C1D20]/70 max-w-md font-normal">
          ผลงานพัฒนาเว็บแอปพลิเคชันจริง ครอบคลุมทั้ง Fullstack Serverless, Cloud Database (Supabase PostgreSQL), Real-time IoT และ Interactive Frontend
        </p>
      </div>

      {/* 2-Column Editorial Grid (Matching video reference) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between border-[2px] border-[#1C1D20] rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#F4F3EF] hover:bg-white transition-all duration-500 shadow-lg hover:shadow-2xl group"
          >
            {/* Card Top: Title, Subtitle, and Pill Tags */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 
                    onClick={() => setActiveModal(project)}
                    className="text-2xl sm:text-3xl font-display font-black text-[#1C1D20] group-hover:text-emerald-700 transition cursor-pointer tracking-wide uppercase leading-tight"
                  >
                    {project.title.split(' (')[0]}
                  </h3>
                  <p className="text-xs font-mono text-[#1C1D20]/60 mt-1">
                    {project.category}
                  </p>
                </div>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-1.5 justify-end">
                  <span className="px-2.5 py-0.5 rounded-full border border-[#1C1D20]/30 text-[10px] font-mono font-bold uppercase tracking-wide text-[#1C1D20] bg-white">
                    {project.date}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full border border-emerald-600/40 text-[10px] font-mono font-bold uppercase tracking-wide text-emerald-800 bg-emerald-50">
                    Verified
                  </span>
                </div>
              </div>

              {/* Brief Description */}
              <p className="text-xs sm:text-sm text-[#1C1D20]/80 line-clamp-2 leading-relaxed">
                {project.descriptions[0]}
              </p>
            </div>

            {/* Card Middle: Image Thumbnail with Hover Zoom */}
            <div
              onClick={() => setActiveModal(project)}
              className="relative aspect-video rounded-xl overflow-hidden border-[1.5px] border-[#1C1D20] bg-slate-900 cursor-pointer mb-6 group/img shadow-inner"
            >
              <img
                src={project.picture}
                alt={project.title}
                className="w-full h-full object-cover group-hover/img:scale-108 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#1C1D20]/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-[#1C1D20] text-white text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 shadow-xl">
                  <FontAwesomeIcon icon={faEye} className="text-xs" />
                  <span>VIEW DETAILS</span>
                </span>
              </div>
            </div>

            {/* Card Bottom: Tech Stack Chips & Action Buttons */}
            <div className="flex flex-col gap-4 pt-4 border-t border-[#1C1D20]/15">
              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5">
                {project.skills.slice(0, 6).map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md bg-[#E7E5E0] text-[#1C1D20] border border-[#1C1D20]/15 font-mono text-[10px] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  {project.materials.map((mat, mIdx) => (
                    <a
                      key={mIdx}
                      href={mat.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-[#1C1D20] hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <FontAwesomeIcon icon={mat.type || faGlobe} className="text-xs" />
                      <span>{mat.label}</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[9px] opacity-70" />
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModal(project)}
                  className="text-xs font-mono font-bold text-[#1C1D20] hover:text-emerald-700 underline underline-offset-4 cursor-pointer"
                >
                  Architecture & Specs →
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1D20]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#ECEAE5] border-[2.5px] border-[#1C1D20] rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1C1D20] text-white flex items-center justify-center hover:bg-emerald-600 transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="space-y-6">
              {/* Modal Image */}
              <div className="rounded-2xl overflow-hidden border-[2px] border-[#1C1D20] shadow-md max-h-72 aspect-video bg-black">
                <img
                  src={activeModal.picture}
                  alt={activeModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1C1D20] text-white font-mono text-[10px] font-bold">
                    {activeModal.date}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full border border-[#1C1D20] font-mono text-[10px] font-bold text-[#1C1D20]">
                    {activeModal.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-[#1C1D20] uppercase leading-tight">
                  {activeModal.title}
                </h3>
              </div>

              {/* Descriptions & Architecture */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#1C1D20]/20 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20] flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-600" />
                  Key Highlights & Implementation
                </h4>
                {activeModal.descriptions.map((desc, i) => (
                  <p key={i} className="text-xs sm:text-sm text-[#1C1D20]/80 leading-relaxed font-normal">
                    {desc}
                  </p>
                ))}
              </div>

              {/* Tech Stack Breakdown */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20] mb-2">
                  Tech Stack & Tools:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModal.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#1C1D20]/30 font-mono text-xs font-medium text-[#1C1D20]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-4 border-t border-[#1C1D20]/20">
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20] hover:underline"
                >
                  Close Window
                </button>
                <div className="flex items-center gap-2">
                  {activeModal.materials.map((mat, i) => (
                    <a
                      key={i}
                      href={mat.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#1C1D20] hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
                    >
                      <FontAwesomeIcon icon={mat.type || faGlobe} />
                      <span>{mat.label}</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
