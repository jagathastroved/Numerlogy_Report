import React from 'react';
import { useReport } from '../context/ReportContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export default function CoreNumbers() {
  const { reportData } = useReport();
  const navigate = useNavigate();

  // Safe defaults if the coreNumbers are not yet fully populated
  const coreNumbers = reportData?.coreNumbers || {
    lifePath: 7,
    destiny: 2,
    personality: 9,
    expression: 2,
    soulUrge: 2,
    subconsciousSelf: 4,
    challengeNumbers: [0, 7, 7, 7]
  };

  const {
    lifePath,
    destiny,
    personality,
    expression,
    soulUrge,
    subconsciousSelf,
    challengeNumbers
  } = coreNumbers;

  return (
    <div className="space-y-6 pt-2">

      {/* Header */}
      <div className="space-y-2">
        <h2 className="font-display text-2xl sm:text-3xl font-normal text-gray-950 tracking-tight leading-none">
          Your Core Numbers
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Your core numbers in numerology are like pieces of a puzzle that make up who you are. There are main numbers that create your personality profile. To really understand yourself, you need to look at how all these numbers work together.
        </p>
      </div>

      {/* Core Numbers List */}
      <div className="space-y-4">
        {/* Life Path Number */}
        <div className="flex items-center justify-between bg-amber-100 rounded-2xl pl-5 p-2 shadow-sm border border-amber-200/60 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
          <span className="font-normal text-amber-900 text-sm">Your Life Path Number</span>
          <div className="w-12 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner">
            {lifePath}
          </div>
        </div>

        {/* Destiny Number */}
        <div className="flex items-center justify-between bg-emerald-100 rounded-2xl pl-5 p-2 shadow-sm border border-emerald-200/60 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
          <span className="font-normal text-emerald-900 text-sm">Your Destiny Number</span>
          <div className="w-12 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner">
            {destiny}
          </div>
        </div>

        {/* Personality Number */}
        <div className="flex items-center justify-between bg-indigo-200 rounded-2xl pl-5 p-2 shadow-sm border border-indigo-300/60 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
          <span className="font-normal text-indigo-900 text-sm">Your Personality Number</span>
          <div className="w-12 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner">
            {personality}
          </div>
        </div>

        {/* Expression Number */}
        <div className="flex items-center justify-between bg-lime-100 rounded-2xl pl-5 p-2 shadow-sm border border-lime-200/60 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
          <span className="font-normal text-lime-900 text-sm">Your Expression Number</span>
          <div className="w-12 h-10 bg-lime-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner">
            {expression}
          </div>
        </div>

        {/* Soul Urge Number */}
        <div className="flex items-center justify-between bg-orange-200 rounded-2xl pl-5 p-2 shadow-sm border border-orange-300/60 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
          <span className="font-normal text-orange-900 text-sm">Your Soul Urge Number</span>
          <div className="w-12 h-10 bg-orange-700 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner">
            {soulUrge}
          </div>
        </div>

        {/* Subconscious Self Number */}
        <div className="flex items-center justify-between bg-slate-200 rounded-2xl pl-5 p-2 shadow-sm border border-slate-300/60 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
          <span className="font-normal text-slate-800 text-sm">Your Subconscious Self Number</span>
          <div className="w-12 h-10 bg-slate-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner">
            {subconsciousSelf}
          </div>
        </div>

        {/* Challenge Numbers */}
        <div className="flex items-center justify-between bg-fuchsia-200 rounded-2xl pl-5 p-2 shadow-sm border border-fuchsia-300/60 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
          <span className="font-normal text-fuchsia-900 text-sm">Your Challenge<br />Numbers</span>
          <div className="flex gap-1.5 pr-1">
            {challengeNumbers?.map((num, i) => (
              <div key={i} className="w-9 h-10 bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-inner">
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Callout box for Next */}
      <div className="mt-8 flex items-center gap-4 p-4 border border-indigo-200 bg-indigo-50/50 rounded-2xl shadow-sm transition-all hover:shadow-md hover:bg-indigo-50/80 cursor-pointer">
        <div className="relative shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-full border border-indigo-100 shadow-sm">
          <Compass className="w-6 h-6 text-indigo-600 animate-spin" style={{ animationDuration: '30s' }} />
        </div>
        <p className="text-indigo-950 font-medium text-sm leading-snug">
          Let's check out your life path number. Click NEXT to see it.
        </p>
      </div>

    </div>
  );
}
