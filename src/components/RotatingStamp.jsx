import React from 'react';

export default function RotatingStamp({ text = "• CURRENTLY OPEN FOR INTERNSHIP • READY TO WORK •", size = 110, color = "#10B981" }) {
  return (
    <div 
      className="relative flex items-center justify-center select-none pointer-events-none"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* SVG Rotating Circular Text */}
      <svg
        className="w-full h-full animate-spin-slow"
        viewBox="0 0 120 120"
      >
        <path
          id="circlePath"
          d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
          fill="none"
        />
        <text
          fill={color}
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="2.2"
          className="uppercase font-mono"
        >
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Indicator Dot */}
      <div 
        className="absolute w-3 h-3 rounded-full flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#ECEAE5]" />
      </div>
    </div>
  );
}
