import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { useReport } from '../context/ReportContext';
import { useNavigate } from 'react-router-dom';

export default function AstroLifeDetailSlide() {
  const { reportData } = useReport();
  const navigate = useNavigate();

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

      {/* Super Premium Promotional Banner Box */}
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#382b93] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 group">

        {/* Content */}
        <div className="relative z-10 flex-1 space-y-4">
          <div className="inline-flex px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">Premium Insight</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug">
            Unlock Your Full <span className="text-[#facc15] font-bold">Numerology<br />Destiny</span>
          </h3>

          <p className="text-sm text-indigo-100/90 leading-relaxed max-w-sm">
            You've only seen a glimpse of your life path. Discover your complete cosmic blueprint with our deeply personalized guide.
          </p>

          <div className="pt-3 flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/premium-deliverables')}
              className="px-5 py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-orange-950 text-sm font-bold rounded-lg shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Book Your Report Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-sm font-medium">
              <span className="text-indigo-200/70 line-through mr-2">₹999</span>
              <br />
              <span className="text-[#4ade80] font-bold">₹399 Only</span>
            </div>
          </div>
        </div>

        {/* Premium Book Mockup */}
        <div className="relative z-10 shrink-0 group-hover:scale-105 transition-transform duration-500 ease-out ml-4 md:ml-0 md:mr-8">
          <div className="w-36 h-48 bg-gradient-to-br from-[#5b2488] to-[#3b1a66] rounded-r-lg rounded-l-sm shadow-[10px_10px_20px_rgba(0,0,0,0.3)] border-l-[3px] border-[#a855f7] border-t border-r border-b border-white/10 flex flex-col relative overflow-hidden">
            {/* Book Spine Highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-white/20 to-transparent"></div>

            {/* Premium Book Cover Design */}
            <div className="flex-1 p-4 flex flex-col relative z-10 h-full">
              <div className="text-center mt-2">
                <div className="text-[7px] font-medium text-white tracking-[0.2em] uppercase">ASTROVED</div>
                <div className="w-6 h-px bg-white mx-auto my-2"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-1">
                <h4 className="text-lg font-serif font-semibold text-[#facc15] leading-tight">
                  Numerology<br />Report
                </h4>
                <p className="text-[6px] text-indigo-200 uppercase tracking-widest mt-2">Personalized Blueprint</p>
              </div>

              <div className="flex justify-between items-end pb-1 border-b border-white/10 mt-auto">
                <div className="text-[7px] text-white/50 font-medium">Vol. 1</div>
                <ShieldCheck className="w-3.5 h-3.5 text-[#facc15]" />
              </div>
            </div>
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
