import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';
import { useReport } from '../../context/ReportContext';
import { staticContent } from '../../data/numerologyData';

export default function AstroCheckoutSlide() {
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

  return (
    <div className="space-y-6 pt-2">
      <motion.div
        key="checkout-form"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Cover logo illustration and brief */}
        <div className="flex flex-col sm:flex-row gap-5 items-center bg-gradient-to-br from-indigo-50/60 to-purple-50/60 p-5 rounded-3xl border border-indigo-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          {/* Cover book mockup */}
          <div style={{ perspective: '800px' }} className="z-10 shrink-0 pr-2">
            <div
              className="relative w-36 h-52 transform transition-transform duration-500 hover:rotate-y-0"
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
              <div className="absolute inset-0 bg-gradient-to-b from-[#7c2877] via-[#521c7a] to-[#260e47] rounded-l-lg rounded-r-sm shadow-[15px_15px_25px_rgba(0,0,0,0.4)] border-l-[3px] border-[#a54bc2] border-y border-white/10 flex flex-col z-10 overflow-hidden">
                {/* Spine lighting */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/30 to-transparent"></div>

                <div className="p-3 flex flex-col h-full items-center justify-center relative z-10">
                  <img src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" alt="AstroVed" className="w-12 mx-auto brightness-0 invert opacity-90" style={{ transform: 'translateZ(1px)' }} />

                  <div className="w-full h-px bg-white/20 mt-3 mb-3"></div>

                  <div className="w-8 h-8 rounded-full border border-[#e3b659] flex items-center justify-center text-[#e3b659] mb-3 bg-[#3c175c]/30" style={{ transform: 'translateZ(2px)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" /><path d="M2 12H22" /><path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" /></svg>
                  </div>

                  <p className="text-[7px] text-white font-medium mb-1 tracking-wide" style={{ transform: 'translateZ(1px)' }}>Your Personalised</p>

                  <div className="border border-white/20 bg-black/10 rounded-md w-full py-1.5 text-center mt-0.5" style={{ transform: 'translateZ(2px)' }}>
                    <h4 className="text-[10px] font-bold text-[#e3b659] tracking-widest leading-relaxed uppercase">
                      NUMEROLOGY<br />REPORT
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-center sm:text-left flex-1 z-10">
            <div className="text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                {staticContent?.checkoutSlide?.title1}
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-950 tracking-tight leading-snug">
                {staticContent?.checkoutSlide?.title2Prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 selection:text-orange-900 selection:bg-orange-200/80">{name || 'Seeker'}</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {staticContent?.checkoutSlide?.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Special Feature Points */}
        <div className="space-y-4 pt-2">
          <h3 className="font-semibold text-gray-900 mb-4">{staticContent?.checkoutSlide?.whatsIncluded}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialFeatures?.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-br from-white to-indigo-50/30 hover:from-indigo-50 hover:to-white border border-indigo-100/50 hover:border-indigo-300 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors duration-300 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-indigo-950 tracking-tight group-hover:text-indigo-700 transition-colors">{feat.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-8 flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
          <ShieldCheck className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">{staticContent?.checkoutSlide?.satisfaction?.title}</h4>
            <p className="text-xs text-blue-800/80 leading-relaxed">
              {staticContent?.checkoutSlide?.satisfaction?.desc}
            </p>
          </div>
        </div>

        {/* Interactive checkout section */}
        <form onSubmit={handleCheckout} className="space-y-5 pt-6">

          {/* Pricing Box layout */}
          {/* Premium Pricing Card */}
          <div className="relative p-6 sm:p-8 rounded-[2rem] bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-gray-800 shadow-[0_20px_50px_-12px_rgba(249,115,22,0.25)] overflow-hidden mb-6 group transition-all duration-300 hover:border-orange-500/30">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-3/4 bg-gradient-to-b from-orange-500/15 to-transparent blur-[50px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-amber-500/20 transition-all duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-5">

              {/* Discount Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold text-orange-400 uppercase tracking-widest whitespace-nowrap">
                  {staticContent?.checkoutSlide?.pricing?.discountLine1} {staticContent?.checkoutSlide?.pricing?.discountLine2}
                </span>
              </div>

              {/* Title */}
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-[0.2em]">{staticContent?.checkoutSlide?.pricing?.label}</span>

              {/* Price Row */}
              <div className="flex items-center justify-center gap-4 sm:gap-5">
                <span className="text-gray-500 line-through text-2xl sm:text-3xl font-medium">{staticContent?.checkoutSlide?.pricing?.originalPrice}</span>
                <div className="flex items-start">
                  <span className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-100 to-amber-500 drop-shadow-sm tracking-tight leading-none selection:text-amber-900 selection:bg-amber-200/80">{staticContent?.checkoutSlide?.pricing?.currentPrice}</span>
                </div>
              </div>

            </div>
          </div>

          {/* CTA action button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-orange-500/20 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-white" />
                <span>Processing Payment...</span>
              </>
            ) : (
              <span>Proceed to Pay ₹399</span>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
