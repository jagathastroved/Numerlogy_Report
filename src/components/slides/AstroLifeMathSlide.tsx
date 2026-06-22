import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
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

export default function AstroLifeMathSlide() {
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
      className="space-y-6 pt-2 pb-12"
    >

      {/* Header Title */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h2 className="font-serif text-2xl font-normal text-slate-900 tracking-tight">
          {staticContent?.lifeMathSlide?.title}
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          {staticContent?.lifeMathSlide?.description}
        </p>
      </motion.div>

      {/* Input Pills Block */}
      <motion.div variants={itemVariants} className="space-y-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-sm">
        <p className="text-slate-800 font-medium text-xs text-center uppercase tracking-wider">
          {staticContent?.lifeMathSlide?.exactDateLabel}
        </p>

        <div className="flex justify-center gap-4">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{staticContent?.lifeMathSlide?.day}</span>
            <span className="bg-white border border-emerald-200 text-emerald-800 shadow-sm font-semibold px-4 py-2 rounded-xl text-lg">{dayVal}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{staticContent?.lifeMathSlide?.month}</span>
            <span className="bg-white border border-emerald-200 text-emerald-800 shadow-sm font-semibold px-4 py-2 rounded-xl text-lg">{monthVal}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{staticContent?.lifeMathSlide?.year}</span>
            <span className="bg-white border border-emerald-200 text-emerald-800 shadow-sm font-semibold px-4 py-2 rounded-xl text-lg">{yearVal}</span>
          </div>
        </div>
      </motion.div>

      {/* Math Reduction Block */}
      <motion.div variants={itemVariants} className="space-y-6">
        
        {/* Step 1 */}
        <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-600 border-b border-slate-50 pb-2">
            <strong className="text-indigo-600 font-semibold mr-1">{staticContent?.lifeMathSlide?.step1}</strong> {staticContent?.lifeMathSlide?.step1Desc}
          </p>
          <div className="space-y-2 text-sm text-slate-700 font-mono bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-12 text-slate-400 font-sans text-xs uppercase">{staticContent?.lifeMathSlide?.day}:</span>
              <span>{dayVal > 9 ? daySteps?.map((step, idx) => <span key={idx}>{idx > 0 && ' → '}{step}</span>) : dayVal}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-slate-400 font-sans text-xs uppercase">{staticContent?.lifeMathSlide?.month}:</span>
              <span>{monthVal > 9 ? monthSteps?.map((step, idx) => <span key={idx}>{idx > 0 && ' → '}{step}</span>) : monthVal}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-slate-400 font-sans text-xs uppercase">{staticContent?.lifeMathSlide?.year}:</span>
              <span>{yearVal > 9 ? yearSteps?.map((step, idx) => <span key={idx}>{idx > 0 && ' → '}{step}</span>) : yearVal}</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-600 border-b border-slate-50 pb-2">
            <strong className="text-indigo-600 font-semibold mr-1">{staticContent?.lifeMathSlide?.step2}</strong> {staticContent?.lifeMathSlide?.step2Desc}
          </p>
          <div className="flex justify-center items-center gap-3 font-mono text-lg text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="bg-white px-3 py-1 rounded-lg border border-slate-200">{dayReduced}</span>
            <span className="text-slate-400">+</span>
            <span className="bg-white px-3 py-1 rounded-lg border border-slate-200">{monthReduced}</span>
            <span className="text-slate-400">+</span>
            <span className="bg-white px-3 py-1 rounded-lg border border-slate-200">{yearReduced}</span>
            <span className="text-slate-400">=</span>
            <span className="bg-indigo-50 text-indigo-700 font-bold px-3 py-1 rounded-lg border border-indigo-200">{rawSum}</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4 pt-2 text-center flex flex-col items-center">
          <p className="text-sm text-slate-600">
            <strong className="text-indigo-600 font-semibold mr-1">{staticContent?.lifeMathSlide?.step3}</strong> {staticContent?.lifeMathSlide?.step3Desc}
          </p>

          {rawSum > 9 && rawSum !== 11 && rawSum !== 22 && rawSum !== 33 && (
            <div className="text-sm text-slate-700 font-mono bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              {finalSteps?.map((step, idx) => <span key={idx}>{idx > 0 && ' → '}{step}</span>)}
            </div>
          )}

          {/* Giant Circular Output */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-28 h-28 mt-4 rounded-full border-[8px] border-indigo-400 bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center font-serif font-semibold text-5xl text-indigo-900 shadow-lg relative"
          >
            {lifePathFinal}
          </motion.div>
          
          <p className="text-sm font-semibold text-indigo-900 tracking-widest uppercase mt-2">
            {staticContent?.lifeMathSlide?.lifePathLabel}
          </p>
        </div>
      </motion.div>

      {/* Callout box */}
      <motion.div variants={itemVariants} className="mt-8">
        <div className="flex items-center gap-4 p-4 border border-indigo-200 bg-indigo-50/50 rounded-2xl shadow-sm transition-all hover:shadow-md hover:bg-indigo-50/80 cursor-pointer">
          <div className="relative shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-full border border-indigo-100 shadow-sm">
            <Compass className="w-6 h-6 text-indigo-600 animate-spin" style={{ animationDuration: '30s' }} />
          </div>
          <p className="text-indigo-950 font-medium text-sm leading-snug">
            {staticContent?.lifeMathSlide?.calloutText}
          </p>
        </div>
      </motion.div>

    </motion.div>
  );
}
