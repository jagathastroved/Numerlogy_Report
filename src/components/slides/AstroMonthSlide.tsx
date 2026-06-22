
import { Compass } from 'lucide-react';
import { reduceToNumerologyDigit } from '../../data/numerologyData';
import { useReport } from '../../context/ReportContext';
import { staticContent } from '../../data/numerologyData';

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

  const interpretation = staticContent?.monthSlide?.interpretations[personalMonth as keyof typeof staticContent.monthSlide.interpretations] || staticContent?.monthSlide?.interpretations[1];

  return (
    <div className="space-y-6 pt-2">

      {/* Header */}
      <div className="space-y-1">
        <h2 className="font-display text-2xl sm:text-3xl font-normal text-gray-950 tracking-tight leading-none">
          {staticContent?.monthSlide?.title}
        </h2>
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
          {staticContent?.monthSlide?.subtitle}
        </p>
      </div>

      {/* Giant Number Indicator badge */}
      <div className="flex flex-col items-center justify-center space-y-2 pt-4">
        <div className="w-24 h-24 rounded-full border-[6px] border-indigo-400 bg-indigo-50 flex items-center justify-center font-display font-bold text-4xl text-indigo-950 shadow-inner relative">
          <span>{personalMonth}</span>
        </div>
        <p className="text-sm font-semibold text-indigo-900 tracking-widest uppercase mt-4 text-center">
          {staticContent?.monthSlide?.monthLabel}
        </p>
      </div>

      {/* Interpretation Details based on calculated Personal Month */}
      <div className="space-y-3.5 text-gray-750 text-sm leading-relaxed pt-2" id="prediction-text">
        <p className="font-bold text-gray-950 text-base">{interpretation.title}</p>
        <p>
          {interpretation.desc}
        </p>
      </div>

      {/* Next callout */}
      <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
        <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
          <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
        </div>
        <p className="text-indigo-950 font-normal text-xs leading-snug">
          {staticContent?.monthSlide?.calloutText}
        </p>
      </div>

    </div>
  );
}
