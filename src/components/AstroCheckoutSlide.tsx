import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, CreditCard, Loader2 } from 'lucide-react';
import { useReport } from '../context/ReportContext';

export default function AstroCheckoutSlide() {
  const { reportData } = useReport();
  const fullName = reportData?.personalDetails?.fullName || "Seeker";
  const [loading, setLoading] = useState(false);

  const specialFeatures = [
    {
      title: "Analysis of Your Core Numbers",
      desc: "Explore the deep significance of your Destiny, Soul Urge, and Expression numbers."
    },
    {
      title: "Your Life Path Number",
      desc: "Discover your primary purpose, strengths, and the path you are destined to walk."
    },
    {
      title: "Business Name Number",
      desc: "Find out the most prosperous and lucky numerological vibration for your business or brand."
    },
    {
      title: "Suitable Business Fields",
      desc: "Identify the specific industries and career paths most aligned with your cosmic energy."
    },
    {
      title: "Mobile Number Selection Guide",
      desc: "Learn how to choose a lucky phone number that attracts success, wealth, and positive connections."
    },
    {
      title: "Vehicle Number Selection",
      desc: "Ensure safe, smooth, and fortunate travels by choosing the right vehicle registration number."
    },
    {
      title: "Your Future Predictions",
      desc: "Get personalized forecasts and guidance for the coming months and years ahead."
    },
    {
      title: "Favorable Calendar Dates",
      desc: "Discover your most lucky and auspicious dates for making important life decisions."
    },
    {
      title: "Temples to Visit",
      desc: "Spiritual remedies and specific temples recommended to enhance your cosmic alignment."
    }
  ];

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
        {/* Main Headline banner */}
        <div className="space-y-2 pb-5 border-b border-indigo-100/50">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-indigo-950 tracking-tight leading-tight">
            Unlock Your Complete Personalized Numerology Report
          </h2>
          <p className="text-sm text-indigo-900/60 font-bold tracking-widest uppercase">
            Your cosmic blueprint is ready, {fullName}
          </p>
        </div>

        {/* Cover logo illustration and brief */}
        <div className="flex flex-col sm:flex-row gap-5 items-center bg-gradient-to-br from-indigo-50/60 to-purple-50/60 p-5 rounded-3xl border border-indigo-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          {/* Cover book mockup */}
          <div className="relative w-32 h-44 shrink-0 bg-gradient-to-br from-[#5b2488] to-[#3b1a66] rounded-r-xl rounded-l-sm shadow-xl border-l-[4px] border-[#a855f7] border-t border-r border-b border-white/20 p-3 flex flex-col justify-between text-white overflow-hidden select-none z-10">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-white/20 to-transparent"></div>
            <div className="text-[7px] font-medium text-white tracking-[0.2em] uppercase text-center mt-1">ASTROVED</div>
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div className="text-[12px] font-black leading-tight tracking-tight text-[#facc15] font-serif mt-1 drop-shadow-md">
                Numerology<br />Report
              </div>
            </div>
            <div className="flex justify-between items-end pb-0.5 border-b border-white/10 mt-auto">
              <div className="text-[6px] text-white/50 font-medium tracking-widest">VOL. 1</div>
            </div>
          </div>

          <div className="space-y-3 text-center sm:text-left flex-1 z-10">
            <span className="bg-gradient-to-r from-amber-200 to-amber-100 text-amber-800 font-black px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider inline-block shadow-sm border border-amber-200">
              Premium Report Prepared
            </span>
            <h3 className="font-display font-black text-xl text-indigo-950 leading-snug">Numerology Report For {fullName}</h3>
            <p className="text-xs text-indigo-950/70 leading-relaxed font-medium">
              We have successfully analyzed your birth data and computed your numbers. Everything you need to understand your life's purpose and make lucky choices is waiting for you.
            </p>
          </div>
        </div>

        {/* Special Feature Points */}
        <div className="space-y-4 pt-2">
          <h3 className="font-bold text-indigo-900 text-sm tracking-widest uppercase border-l-4 border-amber-500 pl-3">
            What's Included In Your Report
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialFeatures.map((feat, idx) => (
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

        {/* Interactive checkout section */}
        <form onSubmit={handleCheckout} className="space-y-5 pt-6">

          {/* Pricing Box layout */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 p-5 rounded-2xl flex items-center justify-between shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10">
              <span className="text-[11px] font-black text-emerald-800 tracking-wider uppercase block mb-1">Total Order Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-emerald-950 tracking-tight">₹399</span>
                <span className="text-sm line-through text-emerald-600/50 font-bold">₹999</span>
              </div>
            </div>

            <div className="relative z-10 text-right flex flex-col items-end gap-2">
              <span className="text-[11px] font-black text-white bg-emerald-500 px-4 py-2 rounded-full shadow-md drop-shadow-sm animate-pulse">
                SAVE 60% TODAY
              </span>
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
