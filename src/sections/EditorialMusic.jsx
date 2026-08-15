import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophoneLines,
  faUsers,
  faBolt,
  faTimes,
  faCompactDisc,
} from '@fortawesome/free-solid-svg-icons';
import { musicData } from '../contents/music';

const ICONS = [faMicrophoneLines, faUsers, faBolt, faCompactDisc];

export default function EditorialMusic() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="music-section" className="w-full px-6 sm:px-10 lg:px-14 py-12 sm:py-20 border-t-[2px] border-[#1C1D20] bg-[#ECEAE5] select-none">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14"
      >
        <div>
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
            {musicData.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-[#1C1D20] uppercase tracking-tight leading-[0.9]">
            {musicData.headline}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#1C1D20]/75 max-w-lg font-normal leading-relaxed">
          {musicData.description}
        </p>
      </motion.div>

      {/* Bento Grid Photo Gallery */}
      <div className="print-music-grid grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {musicData.gallery.map((item, idx) => (
          <motion.div
            key={item.id || idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            data-cursor="view"
            onClick={() => setSelectedPhoto(item)}
            className={`print-music-card group relative overflow-hidden rounded-2xl sm:rounded-3xl border-[2px] border-[#1C1D20] bg-slate-950 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${item.span}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="print-music-img w-full h-full object-cover group-hover:scale-108 transition-all duration-700 ease-out"
            />
            
            {/* Dark Overlay with Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6 text-white">
              <div className="flex justify-end">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md font-mono text-[10px] font-bold uppercase tracking-wider text-white border border-white/30">
                  {item.tag}
                </span>
              </div>

              <div>
                <h4 className="font-display font-black text-lg sm:text-xl uppercase tracking-wide group-hover:text-emerald-300 transition leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300 font-mono mt-0.5 opacity-90">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4 Soft Skills Pillar Cards */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1C1D20]/60 block mb-2">
          {musicData.softSkillsTitle}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {musicData.softSkills.map((skill, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sIdx * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-[2px] border-[#1C1D20] shadow-md flex flex-col justify-between gap-3 hover:border-emerald-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-sm shadow-sm">
                <FontAwesomeIcon icon={ICONS[sIdx % ICONS.length]} />
              </div>

              <div>
                <h4 className="font-bold text-xs sm:text-sm text-[#1C1D20] leading-snug">
                  {skill.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#1C1D20]/75 mt-1.5 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1D20]/85 backdrop-blur-sm no-print">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-[#ECEAE5] border-[2.5px] border-[#1C1D20] rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1C1D20] text-white flex items-center justify-center hover:bg-emerald-600 transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border-[2px] border-[#1C1D20] bg-black max-h-[60vh] flex items-center justify-center">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full h-full max-h-[60vh] object-contain"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1C1D20] text-white font-mono text-[10px] font-bold uppercase">
                      {selectedPhoto.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-black text-[#1C1D20] uppercase mt-1">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-xs text-[#1C1D20]/70 font-mono">
                      {selectedPhoto.subtitle} — {musicData.role} {musicData.bandName}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D20] hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
