import React from 'react';

export default function EditorialNavbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 sm:px-10 border-b-[1.5px] border-[#1C1D20]/15 select-none relative no-print">
      {/* Brand Name */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="cursor-pointer group"
      >
        <span className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-wider text-[#1C1D20] group-hover:opacity-75 transition">
          PASIT PUKANG
        </span>
        <span className="text-[10px] font-mono block text-[#1C1D20]/60 -mt-1 tracking-widest uppercase">
          Fullstack & Frontend Dev
        </span>
      </div>

      {/* Right Status Badge */}
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#1C1D20]/20 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#1C1D20] bg-white/50 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available 2026</span>
        </div>
      </div>
    </nav>
  );
}
