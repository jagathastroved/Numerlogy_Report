import { motion } from 'framer-motion';
import { Sparkles, Star, Palette } from 'lucide-react';
import { staticContent, fallbackReport } from '../../data/numerologyData';
import { useReport } from '../../context/ReportContext';

// Helper to map color names to actual hex values for styling
const colorMap: Record<string, string> = {
  "green": "#22c55e",
  "light green": "#86efac",
  "parrot green": "#84cc16",
  "yellow": "#eab308",
  "saffron": "#f97316",
  "gold": "#fbbf24",
  "dark blue": "#1e3a8a",
  "blue": "#3b82f6",
  "red": "#ef4444",
  "white": "#f1f5f9",
  "black": "#0f172a",
  "orange": "#f97316",
  "purple": "#a855f7",
  "pink": "#ec4899"
};

// Helper to determine if a color needs dark or light text
const getTextColor = (colorName: string) => {
  const lightColors = ["light green", "yellow", "gold", "white", "parrot green"];
  return lightColors.includes(colorName.toLowerCase()) ? "#0f172a" : "#ffffff";
};

export default function LuckyTraits() {
  const { reportData } = useReport();

  const luckyTraits = reportData?.lucky_traits || fallbackReport.lucky_traits;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-fuchsia-300/30 blur-3xl rounded-full pointer-events-none"></div>

        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-fuchsia-100 to-pink-100 border border-fuchsia-200 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-fuchsia-600" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-fuchsia-700">Cosmic Alignments</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 pb-1">
            {staticContent?.luckyTraitsSlide?.title}
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
            {staticContent?.luckyTraitsSlide?.subtitle}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-10">
        {/* ================= LUCKY NUMBERS ================= */}
        <motion.div variants={itemVariants} className="relative group">
          <div className="relative bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-[2rem] p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-white/80">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-50 to-transparent rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-50 to-transparent rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center border border-emerald-200 text-emerald-600">
                <Star className="w-7 h-7 fill-emerald-500" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-2xl tracking-tight">{staticContent?.luckyTraitsSlide?.numbersTitle}</h3>
            </div>

            <p className="text-slate-600 text-[15px] leading-relaxed font-medium mb-8 relative z-10 max-w-lg">
              {staticContent?.luckyTraitsSlide?.numbersDesc}
            </p>

            <div className="flex flex-wrap gap-4 relative z-10">
              {luckyTraits.lucky_numbers?.map((num: number, index: number) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.08 + 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-[1.25rem] font-black text-2xl sm:text-3xl text-emerald-700 bg-emerald-50 border border-emerald-200 cursor-default"
                >
                  <span className="relative z-10">{num}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= LUCKY COLORS ================= */}
        <motion.div variants={itemVariants} className="relative group">
          <div className="relative bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-[2rem] p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-white/80">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center border border-blue-200 text-blue-600">
                <Palette className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-2xl tracking-tight">{staticContent?.luckyTraitsSlide?.colorsTitle}</h3>
            </div>

            <p className="text-slate-600 text-[15px] leading-relaxed font-medium mb-8 relative z-10 max-w-lg">
              {staticContent?.luckyTraitsSlide?.colorsDesc}
            </p>

            <div className="flex flex-wrap gap-4 relative z-10">
              {luckyTraits.lucky_colors?.map((color: string, index: number) => {
                const hexColor = colorMap[color.toLowerCase()] || "#94a3b8"; // Fallback to slate
                const textColor = getTextColor(color);
                const formattedColor = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();

                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, delay: index * 0.1 + 0.4 }}
                    style={{ '--theme-color': hexColor, '--text-color': textColor, borderColor: hexColor } as React.CSSProperties}
                    className="relative px-6 py-4 flex items-center justify-center rounded-2xl font-bold text-sm sm:text-base border-2 cursor-default tracking-wide transition-all duration-300 overflow-hidden group/color shadow-md hover:shadow-lg bg-white/40 backdrop-blur-sm"
                  >
                    {/* The Fill Background - Active by default, empties on hover */}
                    <div className="absolute inset-0 bg-[var(--theme-color)] transition-transform duration-500 ease-in-out origin-right scale-x-100 group-hover/color:scale-x-0"></div>

                    <span className="relative z-10 text-[var(--text-color)] group-hover/color:text-[var(--theme-color)] transition-colors duration-500">
                      {formattedColor}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
