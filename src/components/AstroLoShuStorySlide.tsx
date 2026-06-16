import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export default function AstroLoShuStorySlide() {
  return (
    <div className="space-y-6 pt-2">
        
        {/* Magic of Lo Shu Title */}
        <div className="text-center space-y-1" id="story-header">
          <h2 className="font-display text-2xl font-black text-[#5C3D1D] tracking-widest uppercase">
            THE MAGIC OF LO SHU
          </h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto" />
        </div>

        {/* Breathtaking Tortoise Shell Sepia Scroll Graphic (Ancient SVG Vector illustration) */}
        <div className="relative py-4 flex justify-center" id="ancient-scroll-illustration">
          <div className="w-68 bg-[#FFFDF9] border border-[#DECFBE] p-4 rounded-2xl shadow-md space-y-3 relative overflow-hidden">
            
            {/* Background texture element */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#5c3d1d_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Title */}
            <div className="text-center font-display text-xs font-normal text-[#8A643E] uppercase tracking-wider mb-1">
              Ancient Imperial Markings
            </div>

            {/* SVG Tortoise and Grid combination */}
            <div className="w-full h-44 flex items-center justify-center relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Tortoise Legs & Tail */}
                <ellipse cx="25" cy="30" rx="6" ry="12" fill="#8C7965" transform="rotate(-30 25 30)" />
                <ellipse cx="75" cy="30" rx="6" ry="12" fill="#8C7965" transform="rotate(30 75 30)" />
                <ellipse cx="25" cy="70" rx="6" ry="12" fill="#8C7965" transform="rotate(30 25 70)" />
                <ellipse cx="75" cy="70" rx="6" ry="12" fill="#8C7965" transform="rotate(-30 75 70)" />
                <path d="M 50,85 L 50,92 L 48,85 Z" fill="#8C7965" />
                
                {/* Tortoise Head */}
                <ellipse cx="50" cy="16" rx="9" ry="11" fill="#756453" />
                <circle cx="47" cy="14" r="1" fill="#FFF" />
                <circle cx="53" cy="14" r="1" fill="#FFF" />

                {/* Main Tortoise Shell */}
                <ellipse cx="50" cy="52" rx="32" ry="32" fill="#605041" stroke="#4C3E31" strokeWidth="2" />
                <ellipse cx="50" cy="52" rx="28" ry="28" fill="#AF9D83" stroke="#4C3E31" strokeWidth="1" />

                {/* The 3x3 Lo Shu Square overlay on Shell */}
                <rect x="32" y="34" width="36" height="36" fill="#F4EFEB" stroke="#4C3E31" strokeWidth="1.5" rx="3" />
                
                {/* Grid Divider Lines */}
                <line x1="44" y1="34" x2="44" y2="70" stroke="#4C3E31" strokeWidth="1" />
                <line x1="56" y1="34" x2="56" y2="70" stroke="#4C3E31" strokeWidth="1" />
                <line x1="32" y1="46" x2="68" y2="46" stroke="#4C3E31" strokeWidth="1" />
                <line x1="32" y1="58" x2="68" y2="58" stroke="#4C3E31" strokeWidth="1" />

                {/* Lo Shu Grid Numbers matching Screenshot 8 orientation: Top Row 3, 6, 9; Mid Row 2, 5, 8; Bottom Row 1, 4, 7 */}
                <text x="38" y="42" fill="#4C3E31" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">3</text>
                <text x="50" y="42" fill="#4C3E31" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">6</text>
                <text x="62" y="42" fill="#4C3E31" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">9</text>

                <text x="38" y="54" fill="#4C3E31" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">2</text>
                <text x="50" y="54" fill="#4C3E31" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">5</text>
                <text x="62" y="54" fill="#4C3E31" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">8</text>

                <text x="38" y="66" fill="#4C3E31" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">1</text>
                <text x="50" y="66" fill="#4C3E31" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">4</text>
                <text x="62" y="66" fill="#4C3E31" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">7</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Narrative Legends */}
        <div className="space-y-3.5 text-[#5C3D1D] text-xs leading-relaxed font-medium">
          <p>
            In China around 4000 years ago, <strong className="text-amber-800">Emperor Wu</strong> found a tortoise shell with strange markings on its back. The markings formed a <strong className="text-amber-800">3x3 grid</strong>, which was later called <strong className="text-amber-800">the Lo Shu Magic Square</strong> or Grid.
          </p>
          <p>
            In this grid, every row, column, and diagonal added up to 15. The number 5 was in the center, which was seen as very important.
          </p>
          <p>
            Wu and his followers were amazed by this discovery. They believed it helped Wu figure out how to stop the flooding that happened every year. The people saw this as a sign that the problem was solved.
          </p>
          <p>
            Because of this, Wu was made the emperor of China. The discovery of the Lo Shu Grid also showed how <strong className="text-amber-800">Chinese Numerology</strong> was related to other practices like <strong className="text-amber-800">Feng Shui and Trigram Therapy</strong>.
          </p>
        </div>

        {/* Report Promo banner */}
        <div className="bg-purple-100/40 border border-purple-200/50 rounded-2xl p-5 relative overflow-hidden flex items-center justify-between gap-4">
          <div className="space-y-2 max-w-[200px]">
            <div className="text-xs font-normal text-gray-950">
              Get Your <span className="text-purple-700">Complete Numerology Report</span> for Just <span className="line-through text-gray-400">₹999</span> ₹399!
            </div>
            <p className="text-[9px] text-gray-650 leading-relaxed font-normal">
              Your <strong>detailed numerology report</strong> with personal insights is ready. It contains an in-depth analysis of <strong>core numbers, life path guidance</strong>, and <strong>predictions</strong> based on your birth numbers.
            </p>
            {/* CTA action button */}
            <button 
              type="button"
              className="px-3.5 py-1.5 bg-indigo-200 hover:bg-indigo-300 rounded-lg text-[10px] font-normal text-indigo-950 cursor-not-allowed flex items-center gap-1"
            >
              <span>Download Your Report Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Book Mockup Illustration */}
          <div className="relative shrink-0 w-24 h-32 bg-gradient-to-br from-indigo-950 to-[#2A1D54] rounded-lg shadow-md border border-white/20 p-2 flex flex-col justify-between text-white overflow-hidden select-none">
            {/* Swirl element */}
            <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl" />
            <div className="text-[7px] font-normal text-orange-400 tracking-widest uppercase">ASTROVED</div>
            <div className="text-[10px] font-normal leading-tight tracking-tight text-white mt-1">Your Personalized Numerology Report</div>
            <div className="flex items-center gap-1 mt-auto border-t border-white/10 pt-1.5">
              <ShieldCheck className="w-2.5 h-2.5 text-orange-400" />
              <span className="text-[6px] text-slate-300 font-normal">PREUI V1.2</span>
            </div>
          </div>
        </div>

        {/* Next Callout box */}
        <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
          <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
            <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
          </div>
          <p className="text-indigo-950 font-normal text-xs leading-snug">
            Let’s move forward and take a look at your personal Loshu grid. Simply click on NEXT.
          </p>
        </div>

    </div>
  );
}
