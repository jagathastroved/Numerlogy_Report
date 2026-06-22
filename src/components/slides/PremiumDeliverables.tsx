import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Loader2, Sparkles, Lock } from 'lucide-react';
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

        {/* Cover book mockup */}
        <div style={{ perspective: '800px' }} className="z-10 shrink-0 pr-2 mt-2 md:mt-0 order-2 md:order-1">
          <motion.div
            whileHover={{ rotateY: 0, scale: 1.05 }}
            className="relative w-40 h-56 transform transition-transform duration-500 cursor-default"
            style={{ transform: 'rotateY(-20deg) rotateX(10deg)', transformStyle: 'preserve-3d' }}
          >
            {/* Thick book pages effect on the right */}
            <div className="absolute right-[-10px] top-2 bottom-2 w-5 bg-[#f0f0f0] rounded-r-xl border-y border-r border-[#d0d0d0] shadow-[inset_-2px_0_4px_rgba(0,0,0,0.15)] flex flex-col justify-evenly py-1" style={{ transform: 'translateZ(-1px)' }}>
              <div className="h-px bg-gray-300/50 w-full"></div>
              <div className="h-px bg-gray-300/50 w-full"></div>
              <div className="h-px bg-gray-300/50 w-full"></div>
              <div className="h-px bg-gray-300/50 w-full"></div>
              <div className="h-px bg-gray-300/50 w-full"></div>
            </div>

            {/* Main Book Cover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#7c2877] via-[#521c7a] to-[#260e47] rounded-l-lg rounded-r-sm shadow-[15px_15px_30px_rgba(0,0,0,0.4)] border-l-[3px] border-[#a54bc2] border-y border-white/10 flex flex-col z-10 overflow-hidden">
              {/* Spine lighting */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/30 to-transparent"></div>

              <div className="p-3 flex flex-col h-full items-center justify-center relative z-10">
                <img src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" alt="AstroVed" className="w-14 mx-auto brightness-0 invert opacity-90" style={{ transform: 'translateZ(1px)' }} />

                <div className="w-full h-px bg-white/20 mt-4 mb-4"></div>

                <div className="w-10 h-10 rounded-full border border-[#e3b659] flex items-center justify-center text-[#e3b659] mb-4 bg-[#3c175c]/30 shadow-inner" style={{ transform: 'translateZ(2px)' }}>
                  <Sparkles className="w-5 h-5 text-[#e3b659]" />
                </div>

                <p className="text-[8px] text-indigo-200 font-bold mb-1.5 tracking-widest uppercase" style={{ transform: 'translateZ(1px)' }}>Your Personalised</p>

                <div className="border border-white/20 bg-black/20 rounded-md w-full py-2 text-center shadow-inner" style={{ transform: 'translateZ(2px)' }}>
                  <h4 className="text-[11px] font-black text-[#e3b659] tracking-[0.2em] leading-relaxed uppercase">
                    NUMEROLOGY<br />REPORT
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4 text-center xl:text-left flex-1 z-10 order-1 xl:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-700">{staticContent?.checkoutSlide?.title1}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-indigo-950 tracking-tight leading-snug">
            {staticContent?.checkoutSlide?.title2Prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">{name || 'Seeker'}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
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

      {/* Guarantee Section */}
      <motion.div variants={itemVariants} className="flex items-start gap-4 p-5 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-blue-200 shadow-sm shrink-0">
          <ShieldCheck className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h4 className="font-bold text-blue-950 text-[15px] mb-1 tracking-tight">{staticContent?.checkoutSlide?.satisfaction?.title}</h4>
          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            {staticContent?.checkoutSlide?.satisfaction?.desc}
          </p>
        </div>
      </motion.div>

      {/* Interactive checkout section */}
      <motion.div variants={itemVariants}>
        <form onSubmit={handleCheckout} className="space-y-6 pt-4">

          {/* Pricing Box layout */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 border border-emerald-400 rounded-2xl p-6 shadow-[0_8px_30px_-10px_rgba(16,185,129,0.4)] flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col relative z-10">
              <span className="text-[11px] font-black text-emerald-100 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-1.5">
                <Lock className="w-3 h-3" />
                {staticContent?.checkoutSlide?.pricing?.label}
              </span>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-emerald-200 line-through text-xl sm:text-2xl font-bold decoration-emerald-400/50 decoration-2">{staticContent?.checkoutSlide?.pricing?.originalPrice}</span>
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">{staticContent?.checkoutSlide?.pricing?.currentPrice}</span>
              </div>
            </div>

            {/* Discount Badge */}
            <div className="mt-5 sm:mt-0 bg-white text-emerald-700 text-xs font-black uppercase px-5 py-2.5 rounded-xl shadow-lg relative z-10 flex flex-col items-center border border-white/50">
              <span className="tracking-widest">{staticContent?.checkoutSlide?.pricing?.discountLine1}</span>
              <span className="text-emerald-500 text-[10px]">{staticContent?.checkoutSlide?.pricing?.discountLine2}</span>
            </div>
          </div>

          {/* CTA action button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-black text-lg sm:text-xl tracking-wide rounded-2xl shadow-[0_10px_30px_-10px_rgba(244,63,94,0.6)] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 relative overflow-hidden group border border-orange-400/50"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
            {loading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin text-white relative z-10" />
                <span className="relative z-10">{staticContent?.checkoutSlide?.pricing?.processing || "Processing..."}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
                <span className="relative z-10">{staticContent?.checkoutSlide?.pricing?.btnText || "Proceed to Pay ₹399"}</span>
              </>
            )}
          </button>

          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1.5 mt-4">
            <Lock className="w-3.5 h-3.5" /> 100% Secure Checkout
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
