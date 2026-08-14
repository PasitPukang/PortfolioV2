import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faGraduationCap, faMapMarkerAlt, faEnvelope, faTerminal, faCheckCircle, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { data } from '../../contents/header';
import { motion } from 'framer-motion';
import avatarPic from '../../assets/Pasit Pukang.svg';

const Header = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">

      {/* Profile Avatar & Name Header */}
      <div className="space-y-4">

        {/* Avatar Image + Status Badge */}
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/20 bg-slate-900 shrink-0 group cursor-pointer"
          >
            <img 
              src={avatarPic} 
              alt={data.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>พร้อมฝึกงาน</span>
            </span>

            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight leading-snug">
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


      {/* Interactive Developer Code Card */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="rounded-2xl bg-slate-950/80 border border-indigo-500/20 p-4 font-mono text-[11px] text-slate-300 shadow-xl relative overflow-hidden group"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className="text-[10px] text-slate-500 ml-2 flex items-center gap-1">
              <FontAwesomeIcon icon={faTerminal} className="text-[9px]" /> developer.js
            </span>
          </div>
          <span className="text-[10px] text-indigo-400 font-semibold">ES6+</span>
        </div>

        <div className="space-y-1 text-slate-300 leading-relaxed">
          <div><span className="text-purple-400">const</span> <span className="text-indigo-300">developer</span> = &#123;</div>
          <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"{data.englishName}"</span>,</div>
          <div className="pl-4"><span className="text-slate-400">focus:</span> <span className="text-amber-300">"Frontend & UI/UX"</span>,</div>
          <div className="pl-4"><span className="text-slate-400">stack:</span> [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Tailwind"</span>, <span className="text-cyan-300">"Vite"</span>],</div>
          <div className="pl-4"><span className="text-slate-400">passion:</span> <span className="text-emerald-300">"Pixel-perfect UIs"</span></div>
          <div>&#125;;</div>
        </div>
      </motion.div>

      {/* Caption / Quote */}
      <div className="space-y-2">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {data.caption}
        </p>

        <div className="flex items-center gap-2 text-xs italic text-indigo-300/80 pt-1">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-500/60 text-xs" />
          <span>"{data.quote}"</span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      {data.stats && (
        <div className="grid grid-cols-3 gap-2 py-1">
          {data.stats.map((st, i) => (
            <div key={i} className="px-3 py-2 rounded-xl bg-slate-800/40 border border-slate-800 text-center hover:border-indigo-500/30 transition">
              <div className="text-sm sm:text-base font-black text-indigo-300">{st.value}</div>
              <div className="text-[10px] text-slate-400 font-medium">{st.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Contact & Action Buttons */}
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/10 cursor-pointer"
        >
          <FontAwesomeIcon icon={copied ? faCheckCircle : faEnvelope} className={copied ? "text-emerald-400" : ""} />
          <span>{copied ? "คัดลอกอีเมลเรียบร้อย!" : data.email}</span>
        </button>

        <a
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/60 text-slate-300 hover:text-white text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
        >
          <FontAwesomeIcon icon={faGithub} className="text-sm" />
          <span>GitHub</span>
        </a>
      </div>

      {/* Certificates Section */}
      <div className="pt-1">
        <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2.5 flex items-center gap-2">
          <span>Certificates & Achievements</span>
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 gap-2">
          {data.certificates.map((cert, i) => (
            <button
              key={i}
              onClick={() => window.open(cert.file, "_blank")}
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

              <div className="relative z-10 text-[11px] text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition font-medium">
                View ↗
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Header
