import { data } from '../../contents/about';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGraduationCap,
  faCodeBranch,
  faLightbulb,
  faCheckCircle,
  faCalendarAlt,
  faRocket,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div id="about-section" className="space-y-8">
      {/* Header Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
            <FontAwesomeIcon icon={faUser} className="text-base" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-100 tracking-wide flex items-center gap-2">
              <span>{data.title}</span>
              <span className="badge badge-sm badge-outline badge-primary font-mono text-[10px]">Profile</span>
            </h2>
            <p className="text-xs text-slate-400">
              {data.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Bio Card with daisyUI Alert/Card style */}
      <div className="space-y-4">
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-950/60 border border-slate-800/80 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all pointer-events-none" />
          <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-normal">
            {data.description}
          </p>
        </div>

        {/* DaisyUI Collapse Accordion for Passion / Mindset */}
        {data.story && (
          <div className="collapse collapse-arrow bg-slate-950/60 border border-indigo-500/30 rounded-2xl shadow-lg">
            <input type="checkbox" defaultChecked />
            <div className="collapse-title text-xs sm:text-sm font-bold text-indigo-300 flex items-center gap-2">
              <FontAwesomeIcon icon={faLightbulb} className="text-amber-400" />
              <span>ความตั้งใจ & ปรัชญาการพัฒนาซอฟต์แวร์ (My Passion & Mindset)</span>
            </div>
            <div className="collapse-content text-xs text-slate-300 leading-relaxed pt-1">
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 space-y-2">
                <p>{data.story}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="badge badge-sm badge-success gap-1 text-[10px]">
                    <FontAwesomeIcon icon={faCheckCircle} /> Clean Code
                  </span>
                  <span className="badge badge-sm badge-info gap-1 text-[10px]">
                    <FontAwesomeIcon icon={faCheckCircle} /> User-Centric UI
                  </span>
                  <span className="badge badge-sm badge-accent gap-1 text-[10px]">
                    <FontAwesomeIcon icon={faCheckCircle} /> Continuous Learner
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* DaisyUI Education Timeline Component */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center justify-between">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-400" />
            Educational Journey & Background
          </span>
          <span className="badge badge-xs badge-neutral text-[9px]">Timeline</span>
        </div>

        <div className="p-5 rounded-3xl bg-slate-950/60 border border-slate-800 shadow-xl">
          <ul className="timeline timeline-vertical timeline-compact">
            <li>
              <div className="timeline-middle">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md shadow-indigo-500/50">
                  4
                </div>
              </div>
              <div className="timeline-end timeline-box bg-slate-900/90 border border-indigo-500/30 text-slate-200 p-4 rounded-2xl shadow-md w-full ml-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="font-bold text-slate-100 text-sm">{data.education.degree}</div>
                  <span className="badge badge-sm badge-success text-[10px]">กำลังศึกษา (Yr 4)</span>
                </div>
                <div className="text-xs text-indigo-300 font-medium">{data.education.institution}</div>
                <p className="text-[11px] text-slate-400 mt-1">{data.education.faculty} ({data.education.year})</p>
              </div>
              <hr className="bg-indigo-500/40" />
            </li>

            <li>
              <hr className="bg-indigo-500/40" />
              <div className="timeline-middle">
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md shadow-purple-500/50">
                  ★
                </div>
              </div>
              <div className="timeline-end timeline-box bg-slate-900/90 border border-slate-800 text-slate-200 p-4 rounded-2xl shadow-md w-full ml-2">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <div className="font-bold text-slate-100 text-sm">การเรียนรู้โปรเจกต์เชิงลึก (Self-Taught & Projects)</div>
                  <span className="badge badge-sm badge-primary text-[10px]">2024 - 2026</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  ศึกษาและพัฒนาโปรเจกต์จริง Next.js 14, React 19, Supabase Cloud, Tailwind CSS, daisyUI และสร้างระบบ Fullstack พร้อมใช้งาน
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Technical Skills Categorized with Tooltips & Badges */}
      {data.skills && (
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCodeBranch} className="text-indigo-400" />
              Technical Stack & Competencies
            </span>
            <span className="badge badge-xs badge-primary text-[9px]">Interactive Badges</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.skills.map((group, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className="p-5 rounded-3xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 space-y-3 shadow-xl relative group overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="text-xs font-bold text-indigo-300 tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400" />
                    {group.category}
                  </div>
                  <span className="badge badge-xs badge-neutral text-[9px] font-mono">
                    {group.items.length} Techs
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.items.map((skill, j) => (
                    <div key={j} className="tooltip tooltip-top" data-tip={`Proficient in ${skill}`}>
                      <motion.span
                        whileHover={{ scale: 1.08, y: -1 }}
                        className="badge badge-lg bg-slate-900/90 hover:bg-indigo-600/30 text-indigo-200 border border-indigo-500/25 hover:border-indigo-400 font-mono text-xs cursor-default transition-all shadow-sm py-3"
                      >
                        {skill}
                      </motion.span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;