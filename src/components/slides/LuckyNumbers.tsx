import { motion } from 'framer-motion';
import { AlertCircle, Sparkles, Star } from 'lucide-react';
import { staticContent } from '../../data/numerologyData';

interface NumberRowProps {
  label: string;
  numbers?: number[];
  color: 'emerald' | 'blue';
  intensity?: string;
}

function NumberRow({ label, numbers, color }: NumberRowProps) {
  const colorStyles: Record<string, string> = {
    emerald: "bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-[0_4px_10px_rgba(16,185,129,0.3)] border-emerald-300/20",
    blue: "bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-[0_4px_10px_rgba(59,130,246,0.3)] border-blue-300/20"
  };
  return (
    <div className="flex items-center justify-between p-3.5 bg-white/60 rounded-2xl border border-white/80 shadow-sm hover:shadow-md transition-shadow">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <div className="flex gap-2">
        {numbers?.map((n: number) => (
          <span key={n} className={`w-9 h-9 flex items-center justify-center rounded-xl font-bold text-sm border transition-transform hover:-translate-y-0.5 ${colorStyles[color]}`}>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function LuckyNumbers() {
  const veryLucky = [2, 3];
  const lucky = [1, 5, 7];
  const neutral = [9];
  const unlucky = [4, 8];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
            <span className="text-[11px] font-bold tracking-widest uppercase text-purple-700">Your Fortunes</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-950 pb-1">
            {staticContent?.luckyNumbersSlide?.title}
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
            {staticContent?.luckyNumbersSlide?.subtitle}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">

        {/* ================= LUCKY NUMBERS ================= */}
        <motion.div variants={itemVariants} className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-[2.5rem] blur opacity-20"></div>
          <div className="relative bg-white border border-emerald-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_30px_-10px_rgba(16,185,129,0.15)] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex items-center gap-3 border-b border-emerald-50 pb-4 mb-5 relative z-10">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 shadow-sm">
                <Star className="w-5 h-5 text-emerald-600 fill-emerald-500" />
              </div>
              <h3 className="font-bold text-emerald-900 text-lg tracking-tight uppercase">{staticContent?.luckyNumbersSlide?.lucky?.title}</h3>
            </div>
            <div className="space-y-3 relative z-10">
              <NumberRow label={staticContent?.luckyNumbersSlide?.lucky?.veryLucky} numbers={veryLucky} color="emerald" intensity="strong" />
              <NumberRow label={staticContent?.luckyNumbersSlide?.lucky?.supportive} numbers={lucky} color="emerald" intensity="medium" />
              <NumberRow label={staticContent?.luckyNumbersSlide?.lucky?.moderate} numbers={neutral} color="emerald" intensity="light" />
              <NumberRow label={staticContent?.luckyNumbersSlide?.lucky?.caution} numbers={unlucky} color="emerald" intensity="weak" />
            </div>
          </div>
        </motion.div>

        {/* ================= FRIENDLY NUMBERS ================= */}
        <motion.div variants={itemVariants} className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-[2.5rem] blur opacity-20"></div>
          <div className="relative bg-white border border-blue-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex items-center gap-3 border-b border-blue-50 pb-4 mb-5 relative z-10">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 shadow-sm">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="font-bold text-blue-900 text-lg tracking-tight uppercase">{staticContent?.luckyNumbersSlide?.friendly.title}</h3>
            </div>
            <div className="space-y-3 relative z-10">
              <NumberRow label={staticContent?.luckyNumbersSlide?.friendly.mostFriendly} numbers={veryLucky} color="blue" intensity="strong" />
              <NumberRow label={staticContent?.luckyNumbersSlide?.friendly.friendly} numbers={lucky} color="blue" intensity="medium" />
              <NumberRow label={staticContent?.luckyNumbersSlide?.friendly.neutral} numbers={neutral} color="blue" intensity="light" />
              <NumberRow label={staticContent?.luckyNumbersSlide?.friendly.notFriendly} numbers={unlucky} color="blue" intensity="weak" />
            </div>
          </div>
        </motion.div>

        {/* ================= UNLUCKY NUMBERS ================= */}
        <motion.div variants={itemVariants} className="space-y-5">
          <div className="flex items-start gap-4 bg-white p-6 rounded-[2rem] border border-rose-100 shadow-[0_8px_30px_-10px_rgba(244,63,94,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(244,63,94,0.2)] transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md">
              8
            </div>
            <div>
              <h4 className="text-base font-bold text-rose-950 mb-1">{staticContent?.luckyNumbersSlide?.unlucky?.saturnEnergy}</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">{staticContent?.luckyNumbersSlide?.unlucky?.saturnDesc}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-white border border-rose-200 rounded-[2rem] p-6 sm:p-8 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rose-400 to-red-600"></div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 px-3 py-1 rounded-full shadow-sm">{staticContent?.luckyNumbersSlide?.unlucky?.warningLabel}</span>
                </div>
                <h4 className="text-base font-bold text-rose-950 mb-2">{staticContent?.luckyNumbersSlide?.unlucky?.warningTitle}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-5">
                  {staticContent?.luckyNumbersSlide?.unlucky?.warningDesc}
                </p>
                
                <div className="bg-white border border-rose-100 rounded-2xl p-4 shadow-sm">
                  <p className="text-[11px] font-bold text-rose-400 uppercase tracking-widest mb-3">{staticContent?.luckyNumbersSlide?.unlucky?.examplesTitle}:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {['13 (1+3=4)', '17 (1+7=8)', '22 (2+2=4)', '26 (2+6=8)', '31 (3+1=4)', '...etc'].map((ex, i) => (
                      <span key={i} className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100 shadow-sm">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
