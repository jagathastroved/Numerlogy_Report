import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Sparkles, Lock } from 'lucide-react';
import { useReport } from '../../context/ReportContext';
import { staticContent } from '../../data/numerologyData';

export default function PremiumDeliverables() {
  const { reportData } = useReport();
  const name = reportData?.personalDetails?.fullName;
  const [loading, setLoading] = useState(false);

  const specialFeatures = staticContent?.checkoutSlide?.specialFeatures;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clicking the button, but do not navigate or redirect to a success page.
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

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
      {/* Cover logo illustration and brief */}
      <motion.div variants={itemVariants} className="relative flex flex-col xl:flex-row items-center xl:items-start gap-8">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-300/30 blur-3xl rounded-full pointer-events-none"></div>

        {/* Cover book (Desktop) */}
        <div className="hidden xl:flex justify-center items-center shrink-0 relative z-10 order-1 w-44 animate-float-straight cursor-pointer group">
          <img
            src="/images/Numerology_Book.png"
            alt="Numerology Report"
            className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content Block */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left flex-1 z-10 order-2 gap-4">

          {/* Label */}
          <div className="order-1 inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-700">{staticContent?.checkoutSlide?.title1}</span>
          </div>

          {/* Title */}
          <h2 className="order-2 font-display text-2xl sm:text-4xl font-extrabold text-indigo-950 tracking-tight leading-snug">
            {staticContent?.checkoutSlide?.title2Prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 capitalize">{name || 'Seeker'}</span>
          </h2>

          {/* Cover book (Mobile) */}
          <div className="order-3 xl:hidden flex justify-center items-center shrink-0 relative z-10 w-48 sm:w-56 animate-float-straight cursor-pointer group py-2">
            <img
              src="/images/Numerology_Book.png"
              alt="Numerology Report"
              className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Description */}
          <p className="order-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
            {staticContent?.checkoutSlide?.desc}
          </p>
        </div>
      </motion.div>

      {/* Special Feature Points */}
      <motion.div variants={itemVariants} className="space-y-5 pt-4">
        <h3 className="font-bold text-xl text-indigo-950 tracking-tight flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          {staticContent?.checkoutSlide?.whatsIncluded}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {specialFeatures?.map((feat, idx) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={idx}
              className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-10px_rgba(99,102,241,0.2)] hover:border-indigo-200 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-indigo-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 transition-colors duration-500"></div>

              <div className="relative z-10 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 transition-colors duration-300 shadow-sm border border-indigo-100/50">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="space-y-1 relative z-10">
                <h3 className="text-[15px] font-bold text-indigo-950 tracking-tight">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive checkout section */}
      <motion.div variants={itemVariants}>
        <form onSubmit={handleCheckout} className="space-y-6 pt-4">

          {/* Pricing Box layout */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 border border-emerald-400 rounded-xl p-3 sm:p-5 shadow-[0_4px_20px_-10px_rgba(16,185,129,0.4)] flex flex-row flex-nowrap justify-between items-center gap-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col relative z-10 shrink-0">
              <span className="text-[9px] sm:text-[11px] font-black text-emerald-100 uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-0.5 sm:mb-1 flex items-center gap-1 sm:gap-1.5">
                <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                {staticContent?.checkoutSlide?.pricing?.label}
              </span>
              <div className="flex items-center gap-1.5 sm:gap-3">
                <span className="text-emerald-200 line-through text-base sm:text-xl font-bold decoration-emerald-400/50 decoration-2">{staticContent?.checkoutSlide?.pricing?.originalPrice}</span>
                <span className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">{staticContent?.checkoutSlide?.pricing?.currentPrice}</span>
              </div>
            </div>

            {/* Discount Badge */}
            <div className="bg-white text-emerald-700 text-[8px] sm:text-[10px] font-black uppercase px-2 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md relative z-10 flex flex-col items-center border border-white/50 text-center shrink-0">
              <span className="tracking-wide sm:tracking-wider">{staticContent?.checkoutSlide?.pricing?.discountLine1}</span>
              <span className="text-emerald-500 text-[7px] sm:text-[9px] mt-0.5">{staticContent?.checkoutSlide?.pricing?.discountLine2}</span>
            </div>
          </div>

          {/* CTA action button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-black text-sm sm:text-lg tracking-wide rounded-xl shadow-[0_8px_20px_-10px_rgba(244,63,94,0.6)] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 sm:gap-3 relative overflow-hidden group border border-orange-400/50"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-white relative z-10" />
                <span className="relative z-10">{staticContent?.checkoutSlide?.pricing?.processing || "Processing..."}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:scale-110" />
                <span className="relative z-10">{staticContent?.checkoutSlide?.pricing?.btnText || "Proceed to Pay ₹399"}</span>
              </>
            )}
          </button>

          <p className="text-center text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1 sm:gap-1.5 mt-2 sm:mt-3">
            <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> 100% Secure Checkout
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
