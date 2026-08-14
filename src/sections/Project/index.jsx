import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faArrowUpRightFromSquare,
  faCode,
  faFilter,
  faEye,
  faCheckCircle,
  faTimes,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { data } from '../../contents/Project';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const SECTION_ID = 'project-section';

const FILTER_TABS = ['ทั้งหมด (All)', 'Fullstack & Cloud', 'IoT & Realtime', 'Interactive Web'];

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState('ทั้งหมด (All)');
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects = data.filter((project) => {
    if (selectedFilter === 'ทั้งหมด (All)') return true;
    if (selectedFilter === 'Fullstack & Cloud') {
      return project.category.includes('Fullstack') || project.category.includes('Cloud');
    }
    if (selectedFilter === 'IoT & Realtime') {
      return project.category.includes('IoT') || project.category.includes('Real-time');
    }
    if (selectedFilter === 'Interactive Web') {
      return project.category.includes('Interactive') || project.category.includes('Web');
    }
    return true;
  });

  return (
    <div id={SECTION_ID} className="space-y-8">
      {/* Header Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
            <FontAwesomeIcon icon={faFolderOpen} className="text-base" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-100 tracking-wide flex items-center gap-2">
              <span>Featured Projects</span>
              <span className="badge badge-sm badge-secondary text-[10px] font-mono">{filteredProjects.length} Items</span>
            </h2>
            <p className="text-xs text-slate-400">
              ผลงานพัฒนาเว็บไซต์และโปรเจกต์ที่ภาคภูมิใจ (Interactive Showcase)
            </p>
          </div>
        </div>

        {/* DaisyUI Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950/80 rounded-2xl border border-slate-800">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(
            (
              {
                date = '',
                title = '',
                category = '',
                materials = [],
                descriptions = [],
                skills = [],
                picture = '',
              },
              index
            ) => (
              <motion.div
                key={`${title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group flex flex-col md:flex-row gap-6 rounded-3xl p-5 sm:p-6 bg-slate-950/60 hover:bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
              >
                {/* Ambient Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                {/* Thumbnail Picture with Shine */}
                <div className="w-full md:w-56 shrink-0 flex flex-col gap-3 relative z-10">
                  {picture && (
                    <div
                      onClick={() =>
                        setModalProject({
                          date,
                          title,
                          category,
                          materials,
                          descriptions,
                          skills,
                          picture,
                        })
                      }
                      className="overflow-hidden rounded-2xl border border-slate-700/60 relative group-hover:border-indigo-500/50 transition duration-300 aspect-video md:aspect-[4/3] cursor-pointer group/img"
                    >
                      <img
                        src={picture}
                        alt={title}
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition duration-300 flex items-center justify-center">
                        <span className="badge badge-primary gap-1 font-semibold text-xs shadow-lg">
                          <FontAwesomeIcon icon={faEye} /> Quick View
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span className="font-mono text-indigo-400 text-xs font-bold">{date}</span>
                    {category && (
                      <span className="badge badge-sm badge-outline badge-primary text-[10px] font-medium">
                        {category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Right */}
                <div className="flex-1 flex flex-col justify-between gap-4 relative z-10">
                  <div className="space-y-2.5">
                    {/* Title and Links */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <h3
                        onClick={() =>
                          setModalProject({
                            date,
                            title,
                            category,
                            materials,
                            descriptions,
                            skills,
                            picture,
                          })
                        }
                        className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors leading-snug cursor-pointer"
                      >
                        {title}
                      </h3>

                      {/* Links / GitHub / Live Demo */}
                      <div className="flex items-center gap-2 shrink-0">
                        {materials.map((e, i) => (
                          <a
                            key={i}
                            href={e.link}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-xs bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 text-indigo-300 hover:text-white rounded-xl gap-1.5 font-semibold transition-all hover:scale-105 shadow-sm"
                            title={e.label || 'View Link'}
                          >
                            <FontAwesomeIcon icon={e.type || faGithub} className="text-xs" />
                            <span>{e.label || 'Source Code'}</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[9px] opacity-70" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Descriptions */}
                    <div className="space-y-1.5 pt-1">
                      {descriptions.map((desc, i) => (
                        <p key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills with daisyUI badge styling */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {skills.map((skill, i) => (
                      <span
                        key={i}
                        className="badge badge-sm bg-slate-900 text-indigo-200 border border-slate-800 font-mono text-[10px] group-hover:border-indigo-500/30 transition duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>

      {/* DaisyUI Project Details Modal */}
      {modalProject && (
        <div className="modal modal-open bg-slate-950/80 backdrop-blur-md z-50">
          <div className="modal-box max-w-3xl bg-slate-900 border border-indigo-500/40 shadow-2xl p-6 sm:p-8 rounded-3xl text-slate-200 relative">
            <button
              onClick={() => setModalProject(null)}
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Modal Content */}
            <div className="space-y-5">
              {modalProject.picture && (
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl max-h-72">
                  <img
                    src={modalProject.picture}
                    alt={modalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary font-mono text-xs">{modalProject.date}</span>
                  <span className="badge badge-outline badge-secondary text-xs">{modalProject.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">{modalProject.title}</h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <h4 className="font-bold text-indigo-300 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400" />
                  Key Highlights & Architecture
                </h4>
                {modalProject.descriptions.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>

              {/* Stack */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Tech Stack Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {modalProject.skills.map((s, i) => (
                    <span key={i} className="badge badge-md bg-indigo-600/20 text-indigo-200 border border-indigo-500/40 font-mono text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-action flex items-center justify-between pt-3 border-t border-slate-800">
                <button
                  onClick={() => setModalProject(null)}
                  className="btn btn-sm btn-ghost text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <div className="flex gap-2">
                  {modalProject.materials.map((mat, i) => (
                    <a
                      key={i}
                      href={mat.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary rounded-xl gap-2 font-semibold shadow-lg shadow-indigo-600/30"
                    >
                      <FontAwesomeIcon icon={mat.type || faGlobe} />
                      <span>{mat.label}</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;