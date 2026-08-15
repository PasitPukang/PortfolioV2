import React from 'react';

export default function MarqueeTicker({ text = "MY WORKS", separator = "✕" }) {
  const items = Array(12).fill(null);

  return (
    <div className="w-full border-y-[2px] border-[#1C1D20] py-3 sm:py-4 overflow-hidden bg-[#ECEAE5] select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {items.map((_, i) => (
          <div key={i} className="flex items-center mx-4 sm:mx-6">
            <span className="text-xl sm:text-2xl md:text-3xl font-black font-display tracking-widest text-[#1C1D20] uppercase">
              {text}
            </span>
            <span className="mx-6 sm:mx-8 text-sm sm:text-base font-light text-[#1C1D20]/70">
              {separator}
            </span>
          </div>
        ))}
        {/* Duplicated for seamless infinite loop */}
        {items.map((_, i) => (
          <div key={`dup-${i}`} className="flex items-center mx-4 sm:mx-6">
            <span className="text-xl sm:text-2xl md:text-3xl font-black font-display tracking-widest text-[#1C1D20] uppercase">
              {text}
            </span>
            <span className="mx-6 sm:mx-8 text-sm sm:text-base font-light text-[#1C1D20]/70">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
