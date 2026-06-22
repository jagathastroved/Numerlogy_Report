import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';
import { reduceToNumerologyDigit } from '../../data/numerologyData';
import { useReport } from '../../context/ReportContext';
import { staticContent } from '../../data/numerologyData';

// Helper to generate the string of math steps for a given number
function getReductionSteps(num: number): string[] {
  if (num === 11 || num === 22 || num === 33) {
    return [num.toString()];
  }
  
  const steps: string[] = [];
  let current = num;
  
  while (current > 9) {
    const digits = current.toString().split('')?.map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    steps.push(`${digits.join(' + ')} = ${sum}`);
    current = sum;
    
    if (current === 11 || current === 22 || current === 33) {
      break;
    }
  }
  return steps;
}

export default function LifePathMath() {
  const { reportData } = useReport();
  
  // Dynamic accurate calculations based on actual user input
  const birthDay = reportData?.personalDetails?.birthDay || "10";
  const birthMonth = reportData?.personalDetails?.birthMonth || "10";
  const birthYear = reportData?.personalDetails?.birthYear || "2002";
  
  const dayVal = parseInt(birthDay, 10) || 10;
  const monthVal = parseInt(birthMonth, 10) || 10;
  const yearVal = parseInt(birthYear, 10) || 2002;

  const dayReduced = reduceToNumerologyDigit(dayVal);
  const monthReduced = reduceToNumerologyDigit(monthVal);
  const yearReduced = reduceToNumerologyDigit(yearVal);

  const rawSum = dayReduced + monthReduced + yearReduced;
  const lifePathFinal = reduceToNumerologyDigit(rawSum);

  const daySteps = getReductionSteps(dayVal);
  const monthSteps = getReductionSteps(monthVal);
  const yearSteps = getReductionSteps(yearVal);
  const finalSteps = getReductionSteps(rawSum);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
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
            <span className="text-[11px] font-bold tracking-widest uppercase text-purple-700">The Formula</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-950 pb-1">
            {staticContent?.lifeMathSlide?.title}
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
            {staticContent?.lifeMathSlide?.description}
          </p>
        </div>
      </motion.div>

      {/* Input Pills Block */}
      <motion.div variants={itemVariants} className="space-y-4 bg-white border border-slate-100 p-6 rounded-[2rem] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <p className="text-slate-500 font-bold text-xs text-center uppercase tracking-widest">
          {staticContent?.lifeMathSlide?.exactDateLabel}
        </p>

        <div className="flex justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{staticContent?.lifeMathSlide?.day}</span>
            <span className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md font-bold px-5 py-3 rounded-2xl text-xl">{dayVal}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{staticContent?.lifeMathSlide?.month}</span>
            <span className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md font-bold px-5 py-3 rounded-2xl text-xl">{monthVal}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{staticContent?.lifeMathSlide?.year}</span>
            <span className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md font-bold px-5 py-3 rounded-2xl text-xl">{yearVal}</span>
          </div>
        </div>
      </motion.div>

      {/* Math Reduction Block */}
      <motion.div variants={itemVariants} className="space-y-6">
        
        {/* Step 1 */}
        <div className="space-y-4 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-10px_rgba(139,92,246,0.15)] transition-all">
          <p className="text-sm text-slate-600 border-b border-slate-50 pb-3 font-medium">
            <strong className="text-violet-600 font-bold mr-1">{staticContent?.lifeMathSlide?.step1}</strong> {staticContent?.lifeMathSlide?.step1Desc}
          </p>
          <div className="space-y-3 text-sm text-slate-700 font-mono bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-12 text-slate-400 font-sans font-bold text-xs uppercase">{staticContent?.lifeMathSlide?.day}:</span>
              <span className="font-semibold text-slate-800">{dayVal > 9 ? daySteps?.map((step, idx) => <span key={idx}>{idx > 0 && <span className="text-violet-400 mx-1">→</span>}{step}</span>) : dayVal}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-slate-400 font-sans font-bold text-xs uppercase">{staticContent?.lifeMathSlide?.month}:</span>
              <span className="font-semibold text-slate-800">{monthVal > 9 ? monthSteps?.map((step, idx) => <span key={idx}>{idx > 0 && <span className="text-violet-400 mx-1">→</span>}{step}</span>) : monthVal}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-slate-400 font-sans font-bold text-xs uppercase">{staticContent?.lifeMathSlide?.year}:</span>
              <span className="font-semibold text-slate-800">{yearVal > 9 ? yearSteps?.map((step, idx) => <span key={idx}>{idx > 0 && <span className="text-violet-400 mx-1">→</span>}{step}</span>) : yearVal}</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-10px_rgba(249,115,22,0.15)] transition-all">
          <p className="text-sm text-slate-600 border-b border-slate-50 pb-3 font-medium">
            <strong className="text-orange-500 font-bold mr-1">{staticContent?.lifeMathSlide?.step2}</strong> {staticContent?.lifeMathSlide?.step2Desc}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 font-mono text-lg sm:text-xl text-slate-800 bg-slate-50/50 p-3 sm:p-4 rounded-2xl border border-slate-100">
            <span className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-200 font-bold shadow-sm text-indigo-900">{dayReduced}</span>
            <span className="text-slate-300">+</span>
            <span className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-200 font-bold shadow-sm text-indigo-900">{monthReduced}</span>
            <span className="text-slate-300">+</span>
            <span className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-200 font-bold shadow-sm text-indigo-900">{yearReduced}</span>
            <span className="text-slate-300">=</span>
            <span className="bg-gradient-to-r from-orange-100 to-rose-100 text-rose-700 font-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-rose-200 shadow-sm">{rawSum}</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-5 pt-4 text-center flex flex-col items-center">
          <p className="text-sm text-slate-600 font-medium">
            <strong className="text-rose-500 font-bold mr-1">{staticContent?.lifeMathSlide?.step3}</strong> {staticContent?.lifeMathSlide?.step3Desc}
          </p>

          {rawSum > 9 && rawSum !== 11 && rawSum !== 22 && rawSum !== 33 && (
            <div className="text-sm text-slate-700 font-mono bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm font-bold">
              {finalSteps?.map((step, idx) => <span key={idx}>{idx > 0 && <span className="text-rose-400 mx-2">→</span>}{step}</span>)}
            </div>
          )}

          {/* Giant Circular Output */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 mt-4 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 flex items-center justify-center font-serif font-black text-6xl text-white shadow-[0_10px_30px_-10px_rgba(249,115,22,0.5)] relative cursor-default"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay rounded-full"></div>
            <span className="relative z-10">{lifePathFinal}</span>
          </motion.div>
          
          <p className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mt-4">
            {staticContent?.lifeMathSlide?.lifePathLabel}
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
          {staticContent?.lifeMathSlide?.calloutText}
        </p>
      </motion.div>

    </motion.div>
  );
}
