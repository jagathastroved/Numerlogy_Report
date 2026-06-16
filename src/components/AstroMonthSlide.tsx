import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { reduceToNumerologyDigit } from '../utils/numerology';
import { useReport } from '../context/ReportContext';

export default function AstroMonthSlide() {
  const { reportData } = useReport();
  const birthDay = reportData?.personalDetails?.birthDay || "10";
  const birthMonth = reportData?.personalDetails?.birthMonth || "10";
  
  // Dynamic accurate calculations
  const dayVal = parseInt(birthDay, 10) || 10;
  const monthVal = parseInt(birthMonth, 10) || 10;

  const dayReduced = reduceToNumerologyDigit(dayVal);
  const monthReduced = reduceToNumerologyDigit(monthVal);
  const currentYearReduced = reduceToNumerologyDigit(2026); // 2026 = 2+0+2+6 = 10 = 1

  // Personal Year = Birth Day + Birth Month + Current Year (reduced)
  const personalYear = reduceToNumerologyDigit(dayReduced + monthReduced + currentYearReduced);

  // June 2026: Month = 6
  const juneMonthVal = 6;
  const personalMonth = reduceToNumerologyDigit(personalYear + juneMonthVal);

  return (
    <div className="space-y-6 pt-2">

        {/* Header title */}
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-normal text-gray-950 tracking-tight">
            June Month Prediction
          </h2>
          <p className="text-gray-450 text-xs">A comprehensive layout of energies active in June 2026</p>
        </div>

        {/* Calculation formula block */}
        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-3.5">
          <p className="text-gray-800 font-normal text-xs uppercase tracking-wider text-center">
            How is your June Month predicted?
          </p>

          {/* Formulas */}
          <div className="space-y-4 text-xs font-normal text-gray-700">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <span>Personal Year:</span>
              <span className="bg-emerald-100 text-teal-800 px-3 py-1 rounded-lg">
                Day({dayReduced}) + Month({monthReduced}) + 2026(1) = {personalYear}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span>Personal Month (June):</span>
              <span className="bg-emerald-100 text-teal-800 px-3 py-1 rounded-lg">
                Personal Year({personalYear}) + June(6) = {personalMonth}
              </span>
            </div>
          </div>
        </div>

        {/* Giant Number Indicator badge */}
        <div className="flex flex-col items-center justify-center space-y-2 pt-2">
          <div className="w-24 h-24 rounded-full border-[6px] border-indigo-400 bg-indigo-50 flex items-center justify-center font-display font-normal text-4xl text-indigo-950 shadow-inner relative">
            <span>{personalMonth}</span>
          </div>
          <p className="text-xs font-normal text-gray-900 uppercase tracking-wide">
            Your Personal Month Number for June 2026
          </p>
        </div>

        {/* Interpretation Details based on calculated Personal Month */}
        <div className="space-y-3.5 text-gray-750 text-sm leading-relaxed" id="prediction-text">
          <p className="font-normal text-gray-950 text-base">The Frequency of Termination & New Seed-planting</p>
          <p>
            A Personal Month of <strong>{personalMonth}</strong> is a highly karmic time of endings, completion, and reflection. As the final cycle of the base numbers, it holds a powerful frequency of cleaning out the old to make room for the new. You are encouraged to let go of associations, items, or jobs that no longer serve your core life path purpose.
          </p>
          <p>
            This is not a month to start completely brand-new ventures. Rather, use this time to tie up loose ends, pay off debts, forgive mistakes, and set your inner alignments straight. It is a period for sharing, giving back, and celebrating the successes you have built over past months.
          </p>
        </div>

        {/* Next callout box bottom */}
        <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
          <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
            <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
          </div>
          <p className="text-indigo-950 font-normal text-xs leading-snug">
            That was the prediction for this month. Now let's see what’s inside your full report, prices, and how you can get it for yourself.
          </p>
        </div>

    </div>
  );
}
