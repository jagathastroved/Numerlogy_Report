import { motion } from 'framer-motion';
import { Compass, CheckCircle2, Sparkles } from 'lucide-react';
import { useReport } from '../../context/ReportContext';
import { staticContent } from '../../data/numerologyData';

export default function Welcome() {
  const { reportData } = useReport();
  const name = reportData?.personalDetails?.fullName || "Seeker";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 pt-2"
    >
      {/* Hello Greeting Header */}
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/30 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-300/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-purple-700">Your Journey Begins</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
            <span className="text-slate-800">{staticContent?.introSlide?.greeting} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 drop-shadow-sm capitalize">
              {name || "Seeker"}
            </span>
          </h2>

          <div className="pt-2 space-y-3">
            {staticContent?.introSlide?.paragraphs?.map((p, idx) => (
              <p key={idx} className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* What We Cover - Colorful Grid */}
      <div className="relative z-10 space-y-5">
        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-3">
          <span className="w-8 h-1.5 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full shadow-sm"></span>
          {staticContent?.introSlide?.whatWeCoverTitle}
        </h3>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {staticContent?.introSlide?.whatWeCoverItems?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="flex items-start gap-3 p-4 sm:p-5 bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-2xl hover:shadow-xl hover:bg-white/80 hover:border-purple-200 transition-all duration-300 cursor-default group"
            >
              <div className="mt-0.5 w-8 h-8 rounded-full bg-gradient-to-br from-violet-100 to-fuchsia-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                <CheckCircle2 className="w-5 h-5 text-violet-600" />
              </div>
              <span className="font-bold text-slate-700 leading-snug">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Minimal Callout Box */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 bg-indigo-50/60 backdrop-blur-md border border-indigo-100/60 rounded-2xl shadow-md mt-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative shrink-0 w-14 h-14 flex items-center justify-center bg-white rounded-2xl border border-indigo-200 shadow-sm">
          <Compass className="w-6 h-6 text-indigo-600 animate-spin" style={{ animationDuration: '30s' }} />
        </div>

        <p className="text-indigo-950 font-medium text-base leading-relaxed text-center sm:text-left mt-1 sm:mt-0">
          {staticContent?.introSlide?.calloutText}
        </p>
      </motion.div>

    </motion.div>
  );
}
