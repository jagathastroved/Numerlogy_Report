import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { useReport } from '../context/ReportContext';

export default function AstroLoShuGridSlide() {
  const { reportData } = useReport();
  const birthDay = reportData?.personalDetails?.birthDay || "10";
  const birthMonth = reportData?.personalDetails?.birthMonth || "10";
  const birthYear = reportData?.personalDetails?.birthYear || "2002";
  
  // Dynamic parsing and counting of digits '1' to '9'
  const dobDigits = `${birthDay}${birthMonth}${birthYear}`.replace(/[^1-9]/g, '').split('');
  
  const digitCounts: Record<number, number> = {};
  for (let n = 1; n <= 9; n++) {
    digitCounts[n] = dobDigits.filter(d => d === String(n)).length;
  }

  // Calculate missing numbers
  const missingNumbers: number[] = [];
  for (let n = 1; n <= 9; n++) {
    if (digitCounts[n] === 0) {
      missingNumbers.push(n);
    }
  }

  // Calculate Arrows of Weakness dynamically based on layout
  // Top Row: 3, 6, 9
  // Mid Row: 2, 5, 8
  // Bottom Row: 1, 4, 7
  const isAbsent = (num: number) => digitCounts[num] === 0;

  const arrowsOfWeakness: string[] = [];
  if (isAbsent(3) && isAbsent(5) && isAbsent(7)) arrowsOfWeakness.push("Skepticism");
  if (isAbsent(3) && isAbsent(6) && isAbsent(9)) arrowsOfWeakness.push("Poor Memory");
  if (isAbsent(4) && isAbsent(5) && isAbsent(6)) arrowsOfWeakness.push("Frustrations");
  if (isAbsent(7) && isAbsent(8) && isAbsent(9)) arrowsOfWeakness.push("Hesitation");

  // If no arrows are calculated, show None
  if (arrowsOfWeakness.length === 0) {
    arrowsOfWeakness.push("None");
  }

  // Define styling and color schema for grid cells based on original 3x3 layout:
  // Slot 3: Blue, Slot 6: Pink/Red, Slot 9: Light Green
  // Slot 2: Purple, Slot 5: Yellow, Slot 8: Grey/Slate
  // Slot 1: Grey/Slate, Slot 4: Blue, Slot 7: Pink/Red
  const gridConfig = [
    { num: 3, bg: "bg-blue-100", activeBg: "bg-blue-300", border: "border-blue-200", textCol: "text-blue-900" },
    { num: 6, bg: "bg-pink-100", activeBg: "bg-pink-300", border: "border-pink-200", textCol: "text-pink-900" },
    { num: 9, bg: "bg-emerald-100", activeBg: "bg-emerald-300", border: "border-emerald-200", textCol: "text-emerald-900" },
    { num: 2, bg: "bg-purple-100", activeBg: "bg-purple-300", border: "border-purple-200", textCol: "text-purple-900" },
    { num: 5, bg: "bg-yellow-50", activeBg: "bg-yellow-200", border: "border-yellow-200", textCol: "text-yellow-900" },
    { num: 8, bg: "bg-slate-100", activeBg: "bg-slate-300", border: "border-slate-200", textCol: "text-slate-900" },
    { num: 1, bg: "bg-slate-100", activeBg: "bg-slate-400", border: "border-slate-200", textCol: "text-slate-900" },
    { num: 4, bg: "bg-blue-100", activeBg: "bg-blue-300", border: "border-blue-200", textCol: "text-blue-900" },
    { num: 7, bg: "bg-pink-150", activeBg: "bg-pink-300", border: "border-pink-200", textCol: "text-pink-900" }
  ];

  return (
    <div className="space-y-6 pt-2">

        {/* Header title */}
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-normal text-gray-950 tracking-tight">
            Your Lo Shu Grid
          </h2>
          <p className="text-gray-400 text-xs">Based on birth digits from {birthDay}/{birthMonth}/{birthYear}</p>
        </div>

        {/* Large 3x3 Lo Shu Grid Container */}
        <div className="flex justify-center items-center py-2" id="interactive-grid-display">
          <div className="grid grid-cols-3 gap-3.5 w-68 h-68 p-2 bg-white rounded-2xl border border-orange-100 shadow-md">
            {gridConfig.map((cell) => {
              const count = digitCounts[cell.num] || 0;
              const hasDigit = count > 0;
              
              return (
                <div 
                  key={cell.num}
                  className={`relative flex items-center justify-center rounded-xl border ${cell.border} ${hasDigit ? cell.activeBg : cell.bg} h-20 transition-all duration-300 shadow-xs overflow-hidden`}
                >
                  {/* If missing, show Crossed Style */}
                  {!hasDigit ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Diagonal cross marks 'X' */}
                      <svg viewBox="0 0 100 100" className="w-full h-full stroke-red-400/25 stroke-[1.5] absolute inset-0">
                        <line x1="0" y1="0" x2="100" y2="100" />
                        <line x1="100" y1="0" x2="0" y2="100" />
                      </svg>
                      {/* Grayed Circle containing crossed letter */}
                      <div className="w-10 h-10 rounded-full border border-gray-300/40 bg-white/50 text-gray-400 font-display font-black text-lg flex items-center justify-center shadow-inner select-none">
                        {cell.num}
                      </div>
                    </div>
                  ) : (
                    /* If present, show styled repeating numbers */
                    <div className="flex flex-wrap justify-center items-center gap-1.5 p-1 select-none">
                      {Array.from({ length: count }).map((_, i) => (
                        <span 
                          key={i} 
                          className={`w-7 h-7 rounded-lg bg-white ${cell.textCol} font-normal text-sm flex items-center justify-center shadow-sm border border-black/5`}
                        >
                          {cell.num}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats metrics block */}
        <div className="space-y-4 pt-1">
          {/* Arrow of Strength */}
          <div className="flex items-center justify-between text-xs font-normal text-gray-700 bg-white p-3 rounded-xl border border-gray-100">
            <span>Arrow of Strength:</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg">None</span>
          </div>

          {/* Arrow of Weakness */}
          <div className="flex items-center justify-between text-xs font-normal text-gray-700 bg-white p-3 rounded-xl border border-gray-100">
            <span>Arrow of Weakness:</span>
            <div className="flex flex-wrap gap-1.5 justify-end max-w-[200px]">
              {arrowsOfWeakness.map((arrow, idx) => (
                <span 
                  key={idx} 
                  className={`px-3 py-1 rounded-lg ${arrow === "None" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}
                >
                  {arrow}
                </span>
              ))}
            </div>
          </div>

          {/* Strong Plane */}
          <div className="flex items-center justify-between text-xs font-normal text-gray-700 bg-white p-3 rounded-xl border border-gray-100">
            <span>Strong Plane:</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg">None</span>
          </div>

          {/* Missing Numbers */}
          <div className="flex items-center justify-between text-xs font-normal text-gray-700 bg-white p-3 rounded-xl border border-gray-100">
            <span>Missing Numbers:</span>
            <div className="flex items-center gap-1">
              {missingNumbers.map(n => (
                <span key={n} className="w-6 h-6 rounded-lg bg-gray-500 text-white font-normal text-xxs flex items-center justify-center shadow-xs">
                  {n}
                </span>
              ))}
              {missingNumbers.length === 0 && <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg">None</span>}
            </div>
          </div>
        </div>

        {/* Promotional Banner Row */}
        <div className="bg-purple-100/40 border border-purple-200/50 rounded-2xl p-5 relative overflow-hidden flex items-center justify-between gap-4">
          <div className="space-y-2 max-w-[200px]">
            <div className="text-xs font-normal text-gray-950">
              Get Your <span className="text-purple-700">Complete Numerology Report</span> for Just <span className="line-through text-gray-400">₹999</span> ₹399!
            </div>
            <p className="text-[9px] text-gray-650 leading-relaxed font-normal">
              Your <strong>detailed numerology report</strong> is ready with full analysis of <strong>Loshu Grid, Arrows, elements</strong> and <strong>merits</strong> based on birth numbers.
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
            <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl" />
            <div className="text-[7px] font-normal text-orange-400 tracking-widest uppercase">ASTROVED</div>
            <div className="text-[10px] font-normal leading-tight tracking-tight text-white mt-1">Your Personalized Numerology Report</div>
            <div className="flex items-center gap-1 mt-auto border-t border-white/10 pt-1.5">
              <ShieldCheck className="w-2.5 h-2.5 text-orange-400" />
              <span className="text-[6px] text-slate-300 font-normal">PREUI V1.2</span>
            </div>
          </div>
        </div>

        {/* Next callout explanation card */}
        <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
          <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
            <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
          </div>
          <p className="text-indigo-950 font-normal text-xs leading-snug">
            Next, find out what each box in the Loshu Grid means.
          </p>
        </div>

    </div>
  );
}
