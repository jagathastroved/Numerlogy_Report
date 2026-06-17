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

  const PERSONAL_MONTH_INTERPRETATIONS: Record<number, { title: string; desc: string }> = {
    1: { title: "New Beginnings & Action", desc: "A Personal Month of 1 is a time of fresh starts and new opportunities. This is the perfect month to plant new seeds, start new projects, and take the initiative. Your independence and leadership skills are highlighted. Trust your instincts and move forward with confidence." },
    2: { title: "Cooperation & Patience", desc: "A Personal Month of 2 focuses on relationships, harmony, and teamwork. It's a time to be patient and let the seeds you planted last month grow. Diplomacy and cooperation will bring you success. Listen to others and nurture your partnerships." },
    3: { title: "Creativity & Self-Expression", desc: "A Personal Month of 3 is vibrant, social, and communicative. Your creative energies are flowing, making it a great time for writing, speaking, or artistic pursuits. Enjoy yourself, connect with friends, and let your authentic voice be heard." },
    4: { title: "Hard Work & Foundation", desc: "A Personal Month of 4 requires discipline, organization, and practical effort. It's time to get down to business and build a solid foundation for your future. Focus on the details, handle administrative tasks, and work diligently toward your goals." },
    5: { title: "Change & Freedom", desc: "A Personal Month of 5 brings shifts, adventure, and new experiences. Expect the unexpected and be ready to adapt. This is an excellent time for travel, networking, and embracing change. Break free from routine and explore new horizons." },
    6: { title: "Home & Responsibility", desc: "A Personal Month of 6 centers around family, home, and duty. You may find yourself caring for others or focusing on domestic matters. It's a period for healing, resolving conflicts, and bringing beauty and harmony into your living space." },
    7: { title: "Introspection & Spiritual Growth", desc: "A Personal Month of 7 is a time for inner work, study, and spiritual reflection. Step back from the hustle and bustle to recharge. Focus on learning, research, and connecting with your higher self. Trust your intuition above all else." },
    8: { title: "Power & Financial Gains", desc: "A Personal Month of 8 is focused on career, finances, and material success. Your manifestation power is high. Step into your authority, make important business decisions, and take charge of your financial future. Hard work pays off now." },
    9: { title: "Termination & New Seed-planting", desc: "A Personal Month of 9 is a highly karmic time of endings, completion, and reflection. Clean out the old to make room for the new. Let go of associations or jobs that no longer serve your core path. Tie up loose ends and prepare for a new cycle." },
    11: { title: "Intuition & Illumination", desc: "A Master Personal Month of 11 brings heightened sensitivity and spiritual insights. Your intuition is incredibly sharp right now. Use this time for inspiration, spiritual teaching, and connecting with higher frequencies." },
    22: { title: "Master Builder", desc: "A Master Personal Month of 22 challenges you to turn your grandest dreams into practical reality. The potential for large-scale success is immense if you combine your vision with disciplined, organized effort." }
  };

  const interpretation = PERSONAL_MONTH_INTERPRETATIONS[personalMonth] || PERSONAL_MONTH_INTERPRETATIONS[reduceToNumerologyDigit(personalMonth)] || PERSONAL_MONTH_INTERPRETATIONS[1];

  return (
    <div className="space-y-6 pt-2">

      {/* Header title */}
      <div className="space-y-1">
        <h2 className="font-display text-2xl font-normal text-gray-950 tracking-tight">
          June Month Prediction
        </h2>
        <p className="text-gray-450 text-xs">A comprehensive layout of energies active in June 2026</p>
      </div>

      {/* Giant Number Indicator badge */}
      <div className="flex flex-col items-center justify-center space-y-2 pt-4">
        <div className="w-24 h-24 rounded-full border-[6px] border-indigo-400 bg-indigo-50 flex items-center justify-center font-display font-bold text-4xl text-indigo-950 shadow-inner relative">
          <span>{personalMonth}</span>
        </div>
        <p className="text-xs font-normal text-gray-900 uppercase tracking-wide mt-2">
          Your Personal Month Number
        </p>
      </div>

      {/* Interpretation Details based on calculated Personal Month */}
      <div className="space-y-3.5 text-gray-750 text-sm leading-relaxed pt-2" id="prediction-text">
        <p className="font-bold text-gray-950 text-base">{interpretation.title}</p>
        <p>
          {interpretation.desc}
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
