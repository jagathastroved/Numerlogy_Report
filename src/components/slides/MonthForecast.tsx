import { Compass, Sparkles } from 'lucide-react';
import { reduceToNumerologyDigit } from '../../data/numerologyData';
import { useReport } from '../../context/ReportContext';
import { staticContent } from '../../data/numerologyData';
import { motion } from 'framer-motion';

export default function MonthForecast() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 pt-2 pb-12"
    >

      {/* Header */}
      <motion.div variants={itemVariants} className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/30 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-purple-700">Monthly Forecast</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-950 pb-1">
            {staticContent?.monthSlide?.title}
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
            {staticContent?.monthSlide?.subtitle}
          </p>
        </div>
      </motion.div>

      {/* Giant Number Indicator badge */}
      <motion.div variants={itemVariants} className="flex flex-col items-center justify-center space-y-2 pt-2 pb-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-400/20 blur-3xl rounded-full pointer-events-none"></div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-36 h-36 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 flex items-center justify-center font-black text-7xl leading-none text-white shadow-[0_15px_40px_-15px_rgba(249,115,22,0.6)] relative z-10 cursor-default"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay rounded-full"></div>
          <span className="relative z-10 translate-y-1">{personalMonth}</span>
        </motion.div>

        <p className="text-sm font-bold text-slate-500 tracking-[0.2em] uppercase mt-6 relative z-10">
          {staticContent?.monthSlide?.monthLabel}
        </p>
      </motion.div>

      {/* Interpretation Details */}
      <motion.div variants={itemVariants} className="relative">
        <div className="absolute -inset-1 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-[2rem] blur opacity-30"></div>
        <div className="relative bg-white border border-indigo-50 p-6 sm:p-8 rounded-[1.8rem] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
          <p className="font-bold text-indigo-950 text-xl sm:text-2xl tracking-tight mb-4">{interpretation.title}</p>
          <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
            {interpretation.desc}
          </p>
        </div>
      </motion.div>

      {/* Minimal Callout Box */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 bg-indigo-50/50 border border-indigo-100 rounded-2xl shadow-sm mt-8"
      >
        <div className="relative shrink-0 w-14 h-14 flex items-center justify-center bg-white rounded-2xl border border-indigo-200 shadow-sm">
          <Compass className="w-6 h-6 text-indigo-600 animate-spin" style={{ animationDuration: '30s' }} />
        </div>

        <p className="text-indigo-950 font-medium text-base leading-relaxed text-center sm:text-left mt-1 sm:mt-0">
          {staticContent?.monthSlide?.calloutText}
        </p>
      </motion.div>

    </motion.div>
  );
}
