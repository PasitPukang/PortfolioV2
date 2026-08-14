import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faGraduationCap,
  faMapMarkerAlt,
  faEnvelope,
  faCheckCircle,
  faQuoteLeft,
  faExternalLinkAlt,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { data } from '../../contents/header';
import { motion } from 'framer-motion';
import avatarPic from '../../assets/Pasit Pukang.svg';
import ThemeSelector from '../../components/ThemeSelector';
import InteractiveTerminal from '../../components/InteractiveTerminal';
import KudosButton from '../../components/KudosButton';
import InteractiveChat from '../../components/InteractiveChat';

const Header = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">

      {/* Theme Mood Selector */}
      <ThemeSelector />

      {/* Profile Avatar & Name Header */}
      <div className="space-y-4">
        {/* Avatar Image + Status Badge */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-2xl shadow-indigo-500/20 bg-slate-900 shrink-0 group cursor-pointer"
          >
            <img
              src={avatarPic}
              alt={data.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="badge badge-sm badge-success gap-1.5 text-[10px] font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                พร้อมฝึกงาน
              </span>
              <span className="badge badge-sm badge-outline badge-primary text-[10px] font-mono">
                Yr 4 IT
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight leading-snug truncate">
                <span>{data.name}</span>
                <span className="text-xs font-medium text-indigo-400 ml-1.5">({data.nickname})</span>
              </h1>
              <p className="text-[11px] text-slate-400 tracking-wider font-mono">
                {data.englishName}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-wide">
            {data.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-0.5">
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-400" />
            {data.subtitle}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-400" />
            {data.location}
          </span>
        </div>
      </div>

      {/* Interactive DaisyUI Mockup Code */}
      <InteractiveTerminal />

      {/* Caption & Quote */}
      <div className="space-y-2">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {data.caption}
        </p>

        <div className="flex items-center gap-2 text-xs italic text-indigo-300/80 pt-1">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-500/60 text-xs" />
          <span>"{data.quote}"</span>
        </div>
      </div>

      {/* DaisyUI Stats Card Widget */}
      <div className="stats stats-horizontal shadow-xl bg-slate-950/80 border border-slate-800 text-slate-200 w-full">
        <div className="stat p-3 text-center">
          <div className="stat-title text-[10px] text-slate-400">Featured Projects</div>
          <div className="stat-value text-indigo-400 text-lg sm:text-xl font-black">4+</div>
          <div className="stat-desc text-[9px] text-emerald-400">Fullstack / IoT / React</div>
        </div>

        <div className="stat p-3 text-center border-x border-slate-800">
          <div className="stat-title text-[10px] text-slate-400">Internship Readiness</div>
          <div className="stat-value text-emerald-400 text-lg sm:text-xl font-black">100%</div>
          <div className="stat-desc text-[9px] text-indigo-300">Ready in 2026</div>
        </div>

        <div className="stat p-3 text-center">
          <div className="stat-title text-[10px] text-slate-400">Cloud & Database</div>
          <div className="stat-value text-purple-400 text-lg sm:text-xl font-black">Supabase</div>
          <div className="stat-desc text-[9px] text-purple-300">PostgreSQL Cloud</div>
        </div>
      </div>

      {/* Interactive Quick FAQ Bot */}
      <InteractiveChat />

      {/* Action Buttons + Kudos Counter */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          onClick={copyEmail}
          className="btn btn-sm bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/40 text-indigo-200 text-xs rounded-xl font-medium gap-2 shadow-lg shadow-indigo-950/30 cursor-pointer"
        >
          <FontAwesomeIcon icon={copied ? faCheckCircle : faEnvelope} className={copied ? 'text-emerald-400' : 'text-indigo-400'} />
          <span>{copied ? 'คัดลอกอีเมลแล้ว!' : data.email}</span>
        </button>

        <a
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs rounded-xl font-medium gap-2"
        >
          <FontAwesomeIcon icon={faGithub} className="text-sm" />
          <span>GitHub</span>
        </a>

        {/* Drop Kudos Interactive Button */}
        <KudosButton />
      </div>

      {/* Certificates Section */}
      <div className="pt-2">
        <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faAward} className="text-amber-400 text-xs" />
            Certificates & Achievements
          </span>
          <span className="badge badge-xs badge-neutral text-[9px]">3 Verified</span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {data.certificates.map((cert, i) => (
            <button
              key={i}
              onClick={() => window.open(cert.file, '_blank')}
              className="group relative overflow-hidden flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/40 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 text-left cursor-pointer"
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition duration-300">
                  <FontAwesomeIcon icon={faFilePdf} className="text-xs" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-200 group-hover:text-indigo-300 transition">
                    {cert.name}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-[11px] text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition font-medium flex items-center gap-1">
                <span>View</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[9px]" />
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Header;