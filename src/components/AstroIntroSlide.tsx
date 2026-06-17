import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';
import { useReport } from '../context/ReportContext';

export default function AstroIntroSlide() {
  const { reportData } = useReport();
  const name = reportData?.personalDetails?.fullName || "Seeker";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pt-2"
    >

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
      <div className="space-y-4 bg-white shadow-sm p-6 rounded-2xl border border-slate-100">
        <p className="text-gray-900 font-medium text-sm">
          We cover the following points in your numerology report:
        </p>

        <ul className="space-y-3">
          {[
            { text: "Your core numbers (life path, destiny, name, and more)" },
            { text: "Your personality, strengths and weaknesses" },
            { text: "Detailed Birth Number calculation and personality analysis" },
            { text: "Unlock your Name Destiny and numerology insights" },
            { text: "Get personalized Monthly Forecast and future guidance" }
          ].map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-2.5 text-sm text-gray-800"
            >
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span className="font-medium text-gray-700">{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Callout box with violet border */}
      <div className="flex items-center gap-4 p-4 border border-indigo-200 bg-indigo-50/50 rounded-2xl shadow-sm transition-all hover:shadow-md hover:bg-indigo-50/80">
        {/* Circular Wheel Asset */}
        <div className="relative shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-full border border-indigo-100 shadow-sm">
          <Compass className="w-6 h-6 text-indigo-600 animate-spin" style={{ animationDuration: '30s' }} />
        </div>

        <p className="text-indigo-950 font-medium text-sm leading-snug">
          Click NEXT to see your core numbers, which are the most important in numerology.
        </p>
      </div>

    </motion.div>
  );
}
