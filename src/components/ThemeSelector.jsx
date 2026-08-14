import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMoon, faBolt, faLeaf, faGhost } from '@fortawesome/free-solid-svg-icons';

const themes = [
  { id: 'dark', label: 'Midnight', icon: faMoon, color: 'bg-indigo-500', glow: 'shadow-indigo-500/20' },
  { id: 'forest', label: 'KU Forest', icon: faLeaf, color: 'bg-emerald-500', glow: 'shadow-emerald-500/20' },
  { id: 'dracula', label: 'Dracula', icon: faGhost, color: 'bg-purple-500', glow: 'shadow-purple-500/20' },
  { id: 'cyberpunk', label: 'Neon Cyber', icon: faBolt, color: 'bg-pink-500', glow: 'shadow-pink-500/20' },
];

export default function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_theme') || 'dark';
    setCurrentTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId);
    localStorage.setItem('portfolio_theme', themeId);
    document.documentElement.setAttribute('data-theme', themeId);
  };

  return (
    <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-md">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 pl-1">
        <FontAwesomeIcon icon={faPalette} className="text-indigo-400 text-xs" />
        <span className="text-[11px] tracking-wider uppercase">Theme Mood</span>
      </div>

      <div className="flex items-center gap-1">
        {themes.map((theme) => {
          const isActive = currentTheme === theme.id;
          return (
            <div key={theme.id} className="tooltip tooltip-bottom" data-tip={theme.label}>
              <button
                onClick={() => changeTheme(theme.id)}
                className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs transition-all duration-300 cursor-pointer ${
                  isActive
                    ? `${theme.color} text-white shadow-lg ${theme.glow} scale-110 ring-2 ring-white/30`
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <FontAwesomeIcon icon={theme.icon} className="text-[11px]" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
