import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft, ArrowUpRight, Compass } from 'lucide-react';
import { useReport } from '../context/ReportContext';

export default function AstroIntroSlide() {
  const { reportData } = useReport();
  const name = reportData?.personalDetails?.fullName || "Seeker";

  return (
    <div className="space-y-6 pt-2">

      {/* Hello Greeting */}
      <div className="space-y-3">
        <h2 className="font-display text-2xl sm:text-3xl font-normal text-gray-950 tracking-tight leading-none">
          Hey {name || "Seeker"},
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Welcome to your personalized numerology report! Here, we’ll look at the special meanings behind your numbers. Numerology can give you helpful info about your personality, strong points, weak points, and life path.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Numerology is best used as a guide to help you in life, along with your intuition, good choices, and common sense. It should be a tool to help you live your life better, not the only thing you depend on.
        </p>
      </div>

      {/* What We Cover */}
      <div className="space-y-3.5 bg-white/70 p-5 rounded-2xl border border-orange-100/50">
        <p className="text-gray-900 font-normal text-sm">
          We cover the following points in your numerology report:
        </p>

        <ul className="space-y-3">
          {[
            { text: "Your core numbers (life path, destiny, name, subconscious, and more)" },
            { text: "Your personality, strengths and weaknesses" },
            { text: "Magical Grid - Lo’Shu Square" },
            { text: "What’s your name number?" },
            { text: "How is your current month and upcoming year?" }
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
              <span className="text-orange-500 font-normal text-base leading-none">•</span>
              <span className="font-medium">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Callout box with violet border */}
      <div className="flex items-center gap-4 p-4 border-2 border-indigo-400 bg-indigo-50/10 rounded-2xl">
        {/* Circular Wheel Asset */}
        <div className="relative shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-100/70 rounded-full border border-indigo-200">
          <Compass className="w-6 h-6 text-indigo-600 animate-spin" style={{ animationDuration: '30s' }} />
        </div>

        <p className="text-indigo-950 font-normal text-sm leading-snug">
          Click NEXT to see your core numbers, which are the most important in numerology.
        </p>
      </div>

    </div>
  );
}
