import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { useReport } from '../context/ReportContext';

export default function AstroLoShuSignificanceSlide() {
  const { reportData } = useReport();
  const birthDay = reportData?.personalDetails?.birthDay || "10";
  const birthMonth = reportData?.personalDetails?.birthMonth || "10";
  const birthYear = reportData?.personalDetails?.birthYear || "2002";
  
  // Count counts to mark presence
  const dobDigits = `${birthDay}${birthMonth}${birthYear}`.replace(/[^1-9]/g, '').split('');
  const digitCounts: Record<number, number> = {};
  for (let n = 1; n <= 9; n++) {
    digitCounts[n] = dobDigits.filter(d => d === String(n)).length;
  }

  const significanceList = [
    {
      num: 3,
      element: "Hard Wood 🪵",
      merit: "Health, family, social connections, imagination",
      planet: "Jupiter",
      color: "bg-blue-500",
      presenceColor: "text-blue-700 bg-blue-50",
      missingColor: "text-gray-500 bg-gray-100"
    },
    {
      num: 6,
      element: "Hard Metal ⚔️",
      merit: "Friends, travelling, fatherly connection, safety",
      planet: "Venus",
      color: "bg-pink-500",
      presenceColor: "text-pink-700 bg-pink-50",
      missingColor: "text-gray-500 bg-gray-100"
    },
    {
      num: 9,
      element: "Fire 🔥",
      merit: "Prosperity, fame, social reputation, human relations",
      planet: "Mars",
      color: "bg-emerald-500",
      presenceColor: "text-emerald-700 bg-emerald-50",
      missingColor: "text-gray-500 bg-gray-100"
    },
    {
      num: 2,
      element: "Earth 🗺️",
      merit: "Marriage, love life, empathy, sensitivity",
      planet: "Moon",
      color: "bg-purple-500",
      presenceColor: "text-purple-700 bg-purple-50",
      missingColor: "text-gray-500 bg-gray-100"
    },
    {
      num: 5,
      element: "Earth 🗺️",
      merit: "Balance, stability, fortune, intellectual strength",
      planet: "Mercury",
      color: "bg-yellow-500",
      presenceColor: "text-yellow-700 bg-yellow-50",
      missingColor: "text-gray-500 bg-gray-100"
    },
    {
      num: 8,
      element: "Earth 🗺️",
      merit: "Knowledge, studies, motivation, intuition",
      planet: "Saturn",
      color: "bg-slate-500",
      presenceColor: "text-slate-700 bg-slate-50",
      missingColor: "text-gray-500 bg-gray-100"
    },
    {
      num: 1,
      element: "Water 💧",
      merit: "Career, individuality, voice, luck",
      planet: "Sun",
      color: "bg-teal-500",
      presenceColor: "text-teal-700 bg-teal-50",
      missingColor: "text-gray-500 bg-gray-100"
    },
    {
      num: 4,
      element: "Soft Wood 🪵",
      merit: "Luck, money, high wealth, self-worth",
      planet: "Rahu",
      color: "bg-sky-500",
      presenceColor: "text-sky-700 bg-sky-50",
      missingColor: "text-gray-500 bg-gray-100"
    },
    {
      num: 7,
      element: "Soft Metal ⚔️",
      merit: "Children, creativity, details, future goals",
      planet: "Ketu",
      color: "bg-rose-500",
      presenceColor: "text-rose-700 bg-[#FFF0F2]",
      missingColor: "text-gray-500 bg-gray-100"
    }
  ];

  return (
    <div className="space-y-6 pt-2">
        
        {/* Title */}
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-extrabold text-gray-950 tracking-tight text-center">
            Significance of the Lo Shu Grid
          </h2>
          <div className="w-12 h-0.5 bg-orange-400 mx-auto" />
        </div>

        {/* Dynamic Significance Scroll List */}
        <div className="space-y-5">
          {significanceList.map((item) => {
            const count = digitCounts[item.num] || 0;
            const hasDigit = count > 0;
            
            return (
              <div 
                key={item.num}
                className="p-5 bg-white border border-gray-150 rounded-2xl flex gap-4 hover:border-orange-200 transition-colors duration-200"
              >
                {/* Number logo circle indicator */}
                <div className={`w-12 h-12 rounded-full ${item.color} text-white font-display font-black text-xl flex items-center justify-center shrink-0 shadow-sm shadow-black/10`}>
                  {item.num}
                </div>

                <div className="space-y-2 flex-1">
                  {/* Presence indicator line */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {hasDigit ? (
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md ${item.presenceColor}`}>
                        Present in Lo Shu Grid ({count === 1 ? '1 time' : `${count} times`})
                      </span>
                    ) : (
                      <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md ${item.missingColor}`}>
                        Missing in Lo Shu Grid
                      </span>
                    )}
                  </div>

                  {/* Grid details */}
                  <div className="grid grid-cols-2 gap-y-1 text-xs border-t border-slate-50 pt-2 text-gray-650">
                    <div>
                      <span className="font-extrabold text-gray-400">Element:</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{item.element}</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-gray-400">Merit:</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 leading-tight block">{item.merit}</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-gray-400">Planet:</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{item.planet}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Promotional Card */}
        <div className="bg-purple-100/40 border border-purple-200/50 rounded-2xl p-5 relative overflow-hidden flex items-center justify-between gap-4">
          <div className="space-y-2 max-w-[200px]">
            <div className="text-xs font-bold text-gray-950">
              Get Your <span className="text-purple-700">Complete Numerology Report</span> for Just <span className="line-through text-gray-400">₹999</span> ₹399!
            </div>
            <p className="text-[9px] text-gray-650 leading-relaxed font-semibold">
              Get future forecasts, planetary alignments, trigrams and remedies aligned to your natal chart.
            </p>
            {/* CTA action button */}
            <button 
              type="button"
              className="px-3.5 py-1.5 bg-indigo-200 hover:bg-indigo-300 rounded-lg text-[10px] font-bold text-indigo-950 cursor-not-allowed flex items-center gap-1"
            >
              <span>Download Your Report Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Book Illustration */}
          <div className="relative shrink-0 w-24 h-32 bg-gradient-to-br from-indigo-950 to-[#2A1D54] rounded-lg shadow-md border border-white/20 p-2 flex flex-col justify-between text-white overflow-hidden select-none">
            <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl animate-pulse" />
            <div className="text-[7px] font-semibold text-orange-400 tracking-widest uppercase">ASTROVED</div>
            <div className="text-[10px] font-extrabold leading-tight tracking-tight text-white mt-1">Your Personalized Numerology Report</div>
            <div className="flex items-center gap-1 mt-auto border-t border-white/10 pt-1.5">
              <ShieldCheck className="w-2.5 h-2.5 text-orange-400" />
              <span className="text-[6px] text-slate-300 font-bold">PREUI V1.2</span>
            </div>
          </div>
        </div>

    </div>
  );
}
