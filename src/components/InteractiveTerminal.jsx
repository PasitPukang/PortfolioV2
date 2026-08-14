import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState('developer.ts');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'developer.ts', label: 'developer.ts', lang: 'TypeScript' },
    { id: 'stack.json', label: 'stack.json', lang: 'JSON' },
    { id: 'contact.sh', label: 'contact.sh', lang: 'Bash' },
  ];

  const handleCopy = () => {
    let text = '';
    if (activeTab === 'developer.ts') {
      text = `const developer = {\n  name: "Pasit Pukang (Best)",\n  role: "Fullstack / Frontend Developer",\n  readiness: "100% Ready for Internship",\n  location: "Nakhon Pathom / Bangkok"\n};`;
    } else if (activeTab === 'stack.json') {
      text = `{\n  "frontend": ["Next.js 14", "React 19", "Tailwind CSS", "daisyUI"],\n  "backend": ["Supabase Cloud", "Node.js", "Prisma ORM", "PostgreSQL"],\n  "status": "Available for Internship"\n}`;
    } else {
      text = `curl -X POST https://portfolio.pasit.dev/hire \\\n  -H "Candidate: Pasit Pukang" \\\n  -d '{"status": "Ready to learn and deliver value!"}'`;
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="mockup-code bg-slate-950/90 border border-indigo-500/25 shadow-2xl shadow-indigo-950/40 rounded-2xl text-xs overflow-hidden relative group"
    >
      {/* Header Tabs */}
      <div className="flex items-center justify-between px-4 pb-2 border-b border-slate-800/80 -mt-2">
        <div className="flex items-center gap-1.5 pt-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="badge badge-xs badge-outline badge-primary font-mono text-[9px] hidden sm:inline-flex">
            {tabs.find((t) => t.id === activeTab)?.lang}
          </span>
          <button
            onClick={handleCopy}
            className="btn btn-ghost btn-xs text-slate-400 hover:text-indigo-300 p-1 h-6 min-h-0"
            title="Copy Code"
          >
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? 'text-emerald-400' : 'text-xs'} />
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-4 font-mono text-[11px] leading-relaxed space-y-1">
        {activeTab === 'developer.ts' && (
          <>
            <pre data-prefix="1" className="text-slate-500">
              <code><span className="text-purple-400">interface</span> <span className="text-yellow-300">Developer</span> &#123; name: <span className="text-emerald-300">string</span>; role: <span className="text-emerald-300">string</span>; &#125;</code>
            </pre>
            <pre data-prefix="2" className="text-indigo-400">
              <code><span className="text-purple-400">const</span> <span className="text-indigo-300 font-semibold">developer</span>: <span className="text-yellow-300">Developer</span> = &#123;</code>
            </pre>
            <pre data-prefix="3">
              <code>  <span className="text-slate-400">name:</span> <span className="text-emerald-300">"Pasit Pukang (Best)"</span>,</code>
            </pre>
            <pre data-prefix="4">
              <code>  <span className="text-slate-400">role:</span> <span className="text-amber-300">"Fullstack & Frontend Web Dev"</span>,</code>
            </pre>
            <pre data-prefix="5">
              <code>  <span className="text-slate-400">status:</span> <span className="text-emerald-400 font-bold">"Ready for Internship 🚀"</span>,</code>
            </pre>
            <pre data-prefix="6">
              <code>  <span className="text-slate-400">passion:</span> <span className="text-cyan-300">"Pixel-perfect UI & Cloud Systems"</span></code>
            </pre>
            <pre data-prefix="7" className="text-indigo-400">
              <code>&#125;;</code>
            </pre>
          </>
        )}

        {activeTab === 'stack.json' && (
          <>
            <pre data-prefix="{" className="text-slate-500"><code></code></pre>
            <pre data-prefix=" ">
              <code>  <span className="text-indigo-300">"frontend"</span>: [<span className="text-emerald-300">"React 19"</span>, <span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>, <span className="text-emerald-300">"daisyUI"</span>],</code>
            </pre>
            <pre data-prefix=" ">
              <code>  <span className="text-indigo-300">"backend"</span>: [<span className="text-cyan-300">"Supabase Cloud"</span>, <span className="text-cyan-300">"PostgreSQL"</span>, <span className="text-cyan-300">"Prisma ORM"</span>],</code>
            </pre>
            <pre data-prefix=" ">
              <code>  <span className="text-indigo-300">"university"</span>: <span className="text-amber-300">"Kasetsart University (Kamphaeng Saen)"</span>,</code>
            </pre>
            <pre data-prefix=" ">
              <code>  <span className="text-indigo-300">"availability"</span>: <span className="text-emerald-400 font-bold">"Immediate / Internship 2026"</span></code>
            </pre>
            <pre data-prefix="}" className="text-slate-500"><code></code></pre>
          </>
        )}

        {activeTab === 'contact.sh' && (
          <>
            <pre data-prefix="$" className="text-emerald-400">
              <code>curl -X POST https://portfolio.pasit.dev/hire \</code>
            </pre>
            <pre data-prefix=">" className="text-slate-400">
              <code>  -H <span className="text-amber-300">"Candidate: Pasit Pukang"</span> \</code>
            </pre>
            <pre data-prefix=">" className="text-slate-400">
              <code>  -d <span className="text-cyan-300">'&#123;"message": "Let us build great things together!"&#125;'</span></code>
            </pre>
            <pre data-prefix="✓" className="text-emerald-400 font-bold">
              <code>HTTP 200 OK — Candidate Connected! 📬</code>
            </pre>
          </>
        )}
      </div>
    </motion.div>
  );
}
