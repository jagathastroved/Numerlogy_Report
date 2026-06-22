import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';
import { useReport } from '../../context/ReportContext';
import { staticContent } from '../../data/numerologyData';

export default function CoreNumbers() {
  const { reportData } = useReport();
  
  // Safe defaults if the coreNumbers are not yet fully populated
  const coreNumbers = reportData?.coreNumbers || {
    lifePath: 7,
    destiny: 2,
    personality: 9,
    expression: 2,
    soulUrge: 2,
    subconsciousSelf: 4,
    challengeNumbers: [0, 7, 7, 7]
  };

  const {
    lifePath,
    destiny,
    personality,
    expression,
    soulUrge,
    subconsciousSelf,
    challengeNumbers
  } = coreNumbers;

  // Configuration for each core number card to give them unique, vibrant gradients
  const cardConfig = [
    { key: 'lifePath', val: lifePath, label: staticContent?.coreNumbersSlide?.labels.lifePath, grad: 'from-orange-400 to-rose-500', shadow: 'hover:shadow-[0_8px_30px_-10px_rgba(244,63,94,0.3)]' },
    { key: 'destiny', val: destiny, label: staticContent?.coreNumbersSlide?.labels.destiny, grad: 'from-violet-500 to-purple-600', shadow: 'hover:shadow-[0_8px_30px_-10px_rgba(139,92,246,0.3)]' },
    { key: 'personality', val: personality, label: staticContent?.coreNumbersSlide?.labels.personality, grad: 'from-emerald-400 to-teal-500', shadow: 'hover:shadow-[0_8px_30px_-10px_rgba(16,185,129,0.3)]' },
    { key: 'expression', val: expression, label: staticContent?.coreNumbersSlide?.labels.expression, grad: 'from-blue-400 to-indigo-500', shadow: 'hover:shadow-[0_8px_30px_-10px_rgba(59,130,246,0.3)]' },
    { key: 'soulUrge', val: soulUrge, label: staticContent?.coreNumbersSlide?.labels.soulUrge, grad: 'from-fuchsia-400 to-pink-500', shadow: 'hover:shadow-[0_8px_30px_-10px_rgba(217,70,239,0.3)]' },
    { key: 'subconsciousSelf', val: subconsciousSelf, label: staticContent?.coreNumbersSlide?.labels.subconsciousSelf, grad: 'from-amber-400 to-orange-500', shadow: 'hover:shadow-[0_8px_30px_-10px_rgba(245,158,11,0.3)]' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 pt-2"
    >

      {/* Header */}
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/30 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-purple-700">Your Cosmic Blueprint</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-950 pb-1">
            {staticContent?.coreNumbersSlide?.title}
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
            {staticContent?.coreNumbersSlide?.description}
          </p>
        </div>
      </div>

      {/* Core Numbers List */}
      <div className="grid grid-cols-1 gap-4 relative z-10">
        {cardConfig.map((card, i) => (
          <motion.div 
            key={card.key}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + (i * 0.05) }}
            className={`flex items-center justify-between bg-white rounded-2xl pl-5 p-3 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-all duration-300 hover:scale-[1.02] cursor-default group hover:border-transparent ${card.shadow}`}
          >
            <span className="font-bold text-slate-700 text-sm leading-snug group-hover:text-slate-900 transition-colors pr-2">{card.label}</span>
            <div className={`w-12 h-12 shrink-0 bg-gradient-to-br ${card.grad} rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-inner group-hover:scale-110 transition-transform`}>
              {card.val}
            </div>
          </motion.div>
        ))}

        {/* Challenge Numbers (Full Width) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-2xl p-4 sm:pl-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-all duration-300 hover:scale-[1.01] hover:border-transparent hover:shadow-[0_8px_30px_-10px_rgba(236,72,153,0.3)] cursor-default group gap-4 sm:gap-0"
        >
          <span className="font-bold text-slate-700 text-sm whitespace-pre-line group-hover:text-slate-900 transition-colors">
            {staticContent?.coreNumbersSlide?.labels.challengeNumbers}
          </span>
          <div className="flex gap-2">
            {challengeNumbers?.map((num, i) => (
              <div key={i} className="w-10 h-10 shrink-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner group-hover:-translate-y-1 transition-transform" style={{ transitionDelay: `${i * 50}ms` }}>
                {num}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Minimal Callout Box */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 bg-indigo-50/50 border border-indigo-100 rounded-2xl shadow-sm mt-8"
      >
        <div className="relative shrink-0 w-14 h-14 flex items-center justify-center bg-white rounded-2xl border border-indigo-200 shadow-sm">
          <Compass className="w-6 h-6 text-indigo-600 animate-spin" style={{ animationDuration: '30s' }} />
        </div>

        <p className="text-indigo-950 font-medium text-base leading-relaxed text-center sm:text-left mt-1 sm:mt-0">
          {staticContent?.coreNumbersSlide?.calloutText}
        </p>
      </motion.div>

    </motion.div>
  );
}
