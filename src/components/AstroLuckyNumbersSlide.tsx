import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, HeartHandshake, Sparkles, AlertTriangle, AlertCircle } from 'lucide-react';

export default function AstroLuckyNumbersSlide() {
  return (
    <div className="space-y-8 pt-2 pb-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1 pb-4 border-b border-indigo-100/50"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-black text-indigo-950 tracking-tight leading-tight">
          Your Core Vibrations
        </h2>
        <p className="text-sm text-indigo-900/60 font-bold tracking-widest uppercase mt-1">
          The lucky, friendly, and unlucky numbers in your life
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">

        {/* ================= LUCKY NUMBERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white rounded-[1.5rem] p-5 sm:p-6 border border-emerald-100 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-emerald-400/20 transition-colors duration-700"></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-black text-2xl text-emerald-950 tracking-tight">Your Lucky Numbers</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
            {/* Very Lucky */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-emerald-100/50 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                Very Lucky
              </span>
              <div className="flex gap-2 justify-center">
                <span className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-display text-xl font-black shadow-lg shadow-emerald-500/30">2</span>
                <span className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-display text-xl font-black shadow-lg shadow-emerald-500/30">3</span>
              </div>
            </div>

            {/* Supportive */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-teal-100/50 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-2">Supportive</span>
              <div className="flex gap-2 justify-center">
                {[1, 5, 7].map(num => (
                  <span key={num} className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-lg border border-teal-100 shadow-sm">{num}</span>
                ))}
              </div>
            </div>

            {/* Moderate */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-gray-100 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Moderate</span>
              <span className="w-10 h-10 rounded-2xl bg-gray-50 text-gray-700 flex items-center justify-center font-bold text-lg border border-gray-200 shadow-sm">9</span>
            </div>

            {/* Caution */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-amber-100/50 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                Caution <AlertTriangle className="w-3 h-3" />
              </span>
              <div className="flex gap-2 justify-center">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-lg border border-amber-200 shadow-sm">4</span>
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-lg border border-amber-200 shadow-sm">8</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= FRIENDLY NUMBERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-indigo-50 via-blue-50/50 to-white rounded-[1.5rem] p-5 sm:p-6 border border-indigo-100 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-indigo-400/20 transition-colors duration-700"></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-black text-2xl text-indigo-950 tracking-tight">Friendly Numbers</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-emerald-100/50 shadow-sm hover:shadow-md transition-all flex items-center justify-between">
              <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Most Friendly
              </span>
              <div className="flex gap-2">
                <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 font-display font-black text-lg flex items-center justify-center border border-emerald-200">2</span>
                <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 font-display font-black text-lg flex items-center justify-center border border-emerald-200">3</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-indigo-100/50 shadow-sm hover:shadow-md transition-all flex items-center justify-between">
              <span className="text-[11px] font-black text-indigo-700 uppercase tracking-widest flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                Friendly
              </span>
              <div className="flex gap-1.5">
                {[1, 5, 7].map(num => (
                  <span key={num} className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 font-display font-black text-sm flex items-center justify-center border border-indigo-100">{num}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between">
              <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                Neutral
              </span>
              <span className="w-10 h-10 rounded-full bg-gray-50 text-gray-700 font-display font-black text-lg flex items-center justify-center border border-gray-200">9</span>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-rose-100/50 shadow-sm hover:shadow-md transition-all flex items-center justify-between">
              <span className="text-[11px] font-black text-rose-600 uppercase tracking-widest flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                Not Friendly
              </span>
              <span className="w-10 h-10 rounded-full bg-rose-50 text-rose-700 font-display font-black text-lg flex items-center justify-center border border-rose-200">6</span>
            </div>

          </div>
        </motion.div>

        {/* ================= UNLUCKY NUMBERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-rose-50 via-red-50/50 to-white rounded-[1.5rem] p-5 sm:p-6 border border-rose-100 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-rose-400/20 transition-colors duration-700"></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-black text-2xl text-rose-950 tracking-tight">Unlucky Numbers to Avoid</h3>
          </div>

          <div className="space-y-4 relative z-10">

            {/* The individual numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-md border border-rose-100 rounded-2xl p-4 flex gap-4 items-center shadow-sm">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-rose-100 text-rose-700 font-display font-black text-2xl flex items-center justify-center">
                  4
                </div>
                <div>
                  <h4 className="text-xs font-bold text-rose-900 uppercase tracking-widest mb-0.5">Rahu Energy</h4>
                  <p className="text-xs text-rose-700/80 leading-relaxed font-medium">May create sudden confusion, illusion, and unexpected changes.</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-md border border-rose-100 rounded-2xl p-4 flex gap-4 items-center shadow-sm">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-rose-100 text-rose-700 font-display font-black text-2xl flex items-center justify-center">
                  8
                </div>
                <div>
                  <h4 className="text-xs font-bold text-rose-900 uppercase tracking-widest mb-0.5">Saturn Energy</h4>
                  <p className="text-xs text-rose-700/80 leading-relaxed font-medium">Associated with karmic lessons, delays, and sudden obstacles.</p>
                </div>
              </div>
            </div>

            {/* The combinations & examples */}
            <div className="bg-gradient-to-r from-rose-100/50 to-red-100/30 border border-rose-200 rounded-2xl p-5 space-y-4 shadow-sm overflow-hidden">
              <div>
                <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Critical Warning
                </span>
                <h4 className="font-bold text-rose-950 mb-1">Avoid 4 + 8 Combinations</h4>
                <p className="text-xs text-rose-800 leading-relaxed font-medium">
                  Numbers that reduce to 4 or 8, or combinations containing both, should be strictly avoided for important events.
                </p>
              </div>

              <div className="bg-white border border-rose-100 rounded-xl p-4 w-full">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-3">Examples to avoid</span>
                <div className="flex flex-wrap gap-2.5 text-xs font-bold text-rose-600">
                  {['13', '17', '22', '26', '31', '35', '40', '44', '53'].map(num => (
                    <span key={num} className="px-3 py-1.5 bg-rose-50 rounded-lg border border-rose-100/50">{num}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
