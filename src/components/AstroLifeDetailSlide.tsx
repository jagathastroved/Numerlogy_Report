import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { useReport } from '../context/ReportContext';

export default function AstroLifeDetailSlide() {
  const { reportData } = useReport();
  
  // Dynamic lookup with fallback
  const details = reportData?.interpretations?.lifePath;
  const lifePathNumber = reportData?.coreNumbers?.lifePath || 6;

  if (!details) return null;

  // Specific strengths/challenges default arrays if not found
  const strengths = details.strengths.slice(0, 5);
  const challenges = details.challenges.slice(0, 5);

  return (
    <div className="space-y-6 pt-2">

        {/* Headline Header */}
        <div className="flex items-center justify-between gap-4 border-b border-orange-100 pb-4">
          <h2 className="font-display text-2xl font-normal text-gray-950 tracking-tight">
            Your Life Path Number
          </h2>
          {/* Circular badge */}
          <div className="w-16 h-16 rounded-full border-[5px] border-amber-200 bg-orange-500 text-white font-display font-black text-2xl flex items-center justify-center shadow-md animate-pulse">
            {lifePathNumber}
          </div>
        </div>

        {/* Detailed Descriptions */}
        <div className="space-y-3.5 text-gray-700 text-sm leading-relaxed" id="life-path-description">
          <p className="font-normal text-gray-900 text-base">{details.subtitle}</p>
          <p>{details.description}</p>
          <p>You find your deepest motivation when you align with your cosmic archetype of <strong>{details.title}</strong>, seeking harmony in everything you build.</p>
        </div>

        {/* Strengths & Challenges Tags */}
        <div className="space-y-5 pt-2">
          {/* Strengths */}
          <div className="space-y-2">
            <h3 className="text-gray-900 font-normal text-sm uppercase tracking-wide">Top 5 Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {strengths.map((str, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1.5 bg-emerald-500 text-white text-xs font-normal rounded-lg shadow-sm transition-transform hover:scale-105"
                >
                  {str}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="space-y-2">
            <h3 className="text-gray-900 font-normal text-sm uppercase tracking-wide">Top 5 Challenges</h3>
            <div className="flex flex-wrap gap-2">
              {challenges.map((ch, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1.5 bg-orange-600 text-white text-xs font-normal rounded-lg shadow-sm transition-transform hover:scale-105"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Promotional Banner Box */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 relative overflow-hidden flex items-center justify-between gap-4">
          <div className="space-y-2 max-w-[200px]">
            <p className="text-[10px] text-gray-700 font-medium leading-relaxed">
              That was just a quick overview of your <strong>life path number</strong>. If you want to learn more details, click the link below to get your <strong>full numerology report</strong>.
            </p>
            <div className="text-xs font-normal text-gray-950">
              Get your report now for <span className="line-through text-gray-400">₹999</span> <span className="text-purple-700">₹399</span>
            </div>
            {/* CTA action button */}
            <button 
              type="button"
              className="px-3.5 py-1.5 bg-indigo-200 hover:bg-indigo-300 rounded-lg text-[10px] font-normal text-indigo-950 cursor-not-allowed flex items-center gap-1"
            >
              <span>Download Your Report Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mockup Book Image illustration */}
          <div className="relative shrink-0 w-24 h-32 bg-gradient-to-br from-indigo-950 to-indigo-800 rounded-lg shadow-md border border-white/20 p-2 flex flex-col justify-between text-white overflow-hidden select-none">
            {/* Swirl element */}
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-xl" />
            <div className="text-[7px] font-normal text-orange-400 tracking-widest uppercase">ASTROVED</div>
            <div className="text-[10px] font-normal leading-tight tracking-tight text-white mt-1">Your Personalized Numerology Report</div>
            <div className="flex items-center gap-1 mt-auto border-t border-white/10 pt-1.5">
              <ShieldCheck className="w-2.5 h-2.5 text-orange-400" />
              <span className="text-[6px] text-slate-300 font-normal">PREUI V1.2</span>
            </div>
          </div>
        </div>

        {/* Callout box next-up */}
        <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
          <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
            <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
          </div>
          <p className="text-indigo-950 font-normal text-xs leading-snug">
            Now let’s look at your second main or most important number, which will be your name number.
          </p>
        </div>

    </div>
  );
}
