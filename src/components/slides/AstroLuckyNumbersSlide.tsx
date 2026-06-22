import { motion } from 'motion/react';

import { AlertCircle } from 'lucide-react';
import { staticContent } from '../../data/numerologyData';

interface NumberRowProps {
  label: string;
  numbers?: number[];
  color: 'emerald' | 'blue';
  intensity?: string;
}

function NumberRow({ label, numbers, color }: NumberRowProps) {
  const colorStyles: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100"
  };
  return (
    <div className="flex items-center justify-between p-3 bg-white/50 rounded-xl border border-white/50">
      <span className="text-xs font-semibold text-gray-600">{label}</span>
      <div className="flex gap-2">
        {numbers?.map((n: number) => (
          <span key={n} className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm border ${colorStyles[color]}`}>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AstroLuckyNumbersSlide() {
  const veryLucky = [2, 3];
  const lucky = [1, 5, 7];
  const neutral = [9];
  const unlucky = [4, 8];
  return (
    <div className="space-y-8 pt-2 pb-10">

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1 mb-8"
      >
        <h2 className="font-display text-2xl font-normal text-gray-950 tracking-tight leading-snug">
          {staticContent?.luckyNumbersSlide?.title}
        </h2>
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
          {staticContent?.luckyNumbersSlide?.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">

        {/* ================= LUCKY NUMBERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white rounded-[1.5rem] p-5 sm:p-6 border border-emerald-100 shadow-sm"
        >
          <div className="flex items-center gap-2 border-b border-emerald-100 pb-3 mb-4">
            <span className="text-xl">✨</span>
            <h3 className="font-semibold text-emerald-900 text-sm tracking-wide uppercase">{staticContent?.luckyNumbersSlide?.lucky?.title}</h3>
          </div>
          <div className="space-y-4">
            <NumberRow label={staticContent?.luckyNumbersSlide?.lucky?.veryLucky} numbers={veryLucky} color="emerald" intensity="strong" />
            <NumberRow label={staticContent?.luckyNumbersSlide?.lucky?.supportive} numbers={lucky} color="emerald" intensity="medium" />
            <NumberRow label={staticContent?.luckyNumbersSlide?.lucky?.moderate} numbers={neutral} color="emerald" intensity="light" />
            <NumberRow label={staticContent?.luckyNumbersSlide?.lucky?.caution} numbers={unlucky} color="emerald" intensity="weak" />
          </div>
        </motion.div>

        {/* ================= FRIENDLY NUMBERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-indigo-50 via-blue-50/50 to-white rounded-[1.5rem] p-5 sm:p-6 border border-indigo-100 shadow-sm"
        >
          <div className="flex items-center gap-2 border-b border-blue-100 pb-3 mb-4">
            <span className="text-xl">🤝</span>
            <h3 className="font-semibold text-blue-900 text-sm tracking-wide uppercase">{staticContent?.luckyNumbersSlide?.friendly.title}</h3>
          </div>
          <div className="space-y-4">
            <NumberRow label={staticContent?.luckyNumbersSlide?.friendly.mostFriendly} numbers={veryLucky} color="blue" intensity="strong" />
            <NumberRow label={staticContent?.luckyNumbersSlide?.friendly.friendly} numbers={lucky} color="blue" intensity="medium" />
            <NumberRow label={staticContent?.luckyNumbersSlide?.friendly.neutral} numbers={neutral} color="blue" intensity="light" />
            <NumberRow label={staticContent?.luckyNumbersSlide?.friendly.notFriendly} numbers={unlucky} color="blue" intensity="weak" />
          </div>
        </motion.div>

        {/* ================= UNLUCKY NUMBERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-rose-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 font-bold flex items-center justify-center shrink-0 border border-rose-200">
              8
            </div>
            <div>
              <h4 className="text-sm font-semibold text-rose-900 mb-1">{staticContent?.luckyNumbersSlide?.unlucky?.saturnEnergy}</h4>
              <p className="text-xs text-rose-700/80 leading-relaxed">{staticContent?.luckyNumbersSlide?.unlucky?.saturnDesc}</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-100 px-2 py-0.5 rounded text-center">{staticContent?.luckyNumbersSlide?.unlucky?.warningLabel}</span>
                </div>
                <h4 className="text-sm font-bold text-red-900 mb-2">{staticContent?.luckyNumbersSlide?.unlucky?.warningTitle}</h4>
                <p className="text-xs text-red-800/80 leading-relaxed mb-4">
                  {staticContent?.luckyNumbersSlide?.unlucky?.warningDesc}
                </p>
                
                <div className="bg-white border border-red-100 rounded-xl p-3">
                  <p className="text-[10px] font-semibold text-red-400 uppercase tracking-wider mb-2">{staticContent?.luckyNumbersSlide?.unlucky?.examplesTitle}:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">13 (1+3=4)</span>
                    <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">17 (1+7=8)</span>
                    <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">22 (2+2=4)</span>
                    <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">26 (2+6=8)</span>
                    <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">31 (3+1=4)</span>
                    <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">...etc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
