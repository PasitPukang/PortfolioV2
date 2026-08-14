import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFire, faRocket } from '@fortawesome/free-solid-svg-icons';

export default function KudosButton() {
  const [kudos, setKudos] = useState(42);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_kudos_count');
    if (saved) setKudos(parseInt(saved, 10));
  }, []);

  const handleKudos = (e) => {
    const newCount = kudos + 1;
    setKudos(newCount);
    localStorage.setItem('portfolio_kudos_count', newCount.toString());

    // Generate floating emoji particle
    const icons = ['🚀', '💖', '✨', '🔥', '⚡', '💯'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const newParticle = {
      id: Date.now() + Math.random(),
      x: (Math.random() - 0.5) * 60,
      icon: randomIcon,
    };
    setParticles((prev) => [...prev.slice(-10), newParticle]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1200);
  };

  return (
    <div className="relative inline-flex items-center">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 1, y: 0, scale: 0.8, x: p.x }}
            animate={{ opacity: 0, y: -50, scale: 1.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none text-base z-50 select-none"
          >
            {p.icon}
          </motion.span>
        ))}
      </AnimatePresence>

      <button
        onClick={handleKudos}
        className="btn btn-sm bg-gradient-to-r from-indigo-600/20 to-pink-600/20 hover:from-indigo-600/40 hover:to-pink-600/40 border border-indigo-500/30 text-indigo-200 text-xs font-semibold rounded-xl gap-2 shadow-lg shadow-indigo-950/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <FontAwesomeIcon icon={faHeart} className="text-pink-400 animate-pulse" />
        <span>Drop Kudos</span>
        <div className="badge badge-sm badge-primary font-mono text-[10px] font-bold">
          {kudos}
        </div>
      </button>
    </div>
  );
}
