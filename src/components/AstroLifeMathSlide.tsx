import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { reduceToNumerologyDigit } from '../utils/numerology';
import { useReport } from '../context/ReportContext';

export default function AstroLifeMathSlide() {
  const { reportData } = useReport();
  const birthDay = reportData?.personalDetails?.birthDay || "10";
  const birthMonth = reportData?.personalDetails?.birthMonth || "10";
  const birthYear = reportData?.personalDetails?.birthYear || "2002";
  
  // Dynamic accurate calculations
  const dayVal = parseInt(birthDay, 10) || 10;
  const monthVal = parseInt(birthMonth, 10) || 10;
  const yearVal = parseInt(birthYear, 10) || 2002;

  const dayReduced = reduceToNumerologyDigit(dayVal);
  const monthReduced = reduceToNumerologyDigit(monthVal);
  const yearReduced = reduceToNumerologyDigit(yearVal);

  const rawSum = dayReduced + monthReduced + yearReduced;
  const lifePathFinal = reduceToNumerologyDigit(rawSum);

  // Month names helper for displaying Month MM
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthStr = monthNames[monthVal - 1] || 'October';

  return (
    <div className="space-y-6 pt-2">

        {/* Header Title */}
        <div className="space-y-2">
          <h2 className="font-display text-2xl font-normal text-gray-950 tracking-tight">
            What is a Life Path Number?
          </h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            Your Life Path Number reveals the most about your personality and the kind of life you might lead. It indicates your life’s purpose and the direction you are likely to take.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed">
            It also provides insight into the experiences you may encounter and the lessons you might learn as you journey through life.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed">
            Some people also call the Life Path Number the Ruling Number, Birth Number, Birth Path, or Birth Force Number. In Chaldean numerology, it’s known as the Destiny Number.
          </p>
        </div>

        {/* Input Pills Block */}
        <div className="space-y-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl">
          <p className="text-gray-800 font-normal text-xs text-center uppercase tracking-wide">
            Take your birth date (day/month/year).
          </p>

          <div className="flex justify-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] text-gray-400 font-normal uppercase">DD</span>
              <span className="bg-emerald-300 text-slate-800 font-normal px-4 py-2 rounded-lg text-sm">{dayVal}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] text-gray-400 font-normal uppercase">MM</span>
              <span className="bg-emerald-300 text-slate-800 font-normal px-4 py-2 rounded-lg text-sm">{monthVal}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] text-gray-400 font-normal uppercase">YYYY</span>
              <span className="bg-emerald-300 text-slate-800 font-normal px-4 py-2 rounded-lg text-sm">{yearVal}</span>
            </div>
          </div>
        </div>

        {/* Math Reduction Block */}
        <div className="space-y-5">
          {/* Step 1 */}
          <div className="space-y-2">
            <p className="text-xs text-gray-600">
              <strong className="text-gray-950">Step 1</strong> Reduce numbers to two digits. Keep master numbers (11, 22, 33) as is.
            </p>
            <div className="flex justify-center items-center gap-2">
              <span className="bg-teal-100 text-teal-800 font-normal px-3 py-1.5 rounded-lg text-sm">{dayReduced}</span>
              <span className="text-gray-400 font-normal">+</span>
              <span className="bg-teal-100 text-teal-800 font-normal px-3 py-1.5 rounded-lg text-sm">{monthReduced}</span>
              <span className="text-gray-400 font-normal">+</span>
              <span className="bg-teal-100 text-teal-800 font-normal px-3 py-1.5 rounded-lg text-sm">{yearReduced}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <p className="text-xs text-gray-600">
              <strong className="text-gray-950">Step 2</strong> Add all birthdate numbers. If result is two digits, add those too.
            </p>
            <div className="flex justify-center">
              <span className="bg-teal-100 text-teal-800 font-normal px-4 py-2 rounded-lg text-sm">{rawSum}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-3 pt-2 text-center flex flex-col items-center">
            <p className="text-xs text-gray-600">
              <strong className="text-gray-950">Step 3</strong> Add digits to get a single number, unless it is master numbers (11, 22, or 33).
            </p>

            {/* Giant Circular Output */}
            <div className="w-24 h-24 rounded-full border-[6px] border-indigo-400 bg-indigo-50 flex items-center justify-center font-display font-normal text-4xl text-indigo-950 shadow-inner relative mt-2">
              <span>{lifePathFinal}</span>
            </div>
            
            <p className="text-sm font-normal text-gray-900 tracking-tight uppercase">
              Your Life Path Number
            </p>
          </div>
        </div>

        {/* Violet Border Callout box */}
        <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
          <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
            <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
          </div>
          <p className="text-indigo-950 font-normal text-xs leading-snug">
            Let’s keep going and find out your Life Path Number. We’ll also look at what it says about your personality, strengths, and weaknesses.
          </p>
        </div>

    </div>
  );
}
