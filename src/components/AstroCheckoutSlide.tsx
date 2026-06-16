import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Loader2, CreditCard } from 'lucide-react';
import { useReport } from '../context/ReportContext';

export default function AstroCheckoutSlide() {
  const { reportData } = useReport();
  const fullName = reportData?.personalDetails?.fullName || "Seeker";
  const [loading, setLoading] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate interactive seamless payments logic
    setTimeout(() => {
      setLoading(false);
      setPurchased(true);
    }, 2400);
  };

  return (
    <div className="space-y-6 pt-2">

      <AnimatePresence mode="wait">
        {!purchased ? (
          <motion.div
            key="checkout-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Main Headline banner */}
            <div className="space-y-1 pb-4 border-b border-orange-100">
              <h2 className="font-display text-xl sm:text-2xl font-black text-gray-950 tracking-tight leading-snug">
                Download Your Complete Personalized Numerology Report
              </h2>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="bg-purple-100 text-purple-700 font-bold px-2.5 py-1 rounded text-[10px] uppercase tracking-wide">
                  Premium Numerology Report
                </span>
                <span className="bg-amber-100 text-amber-700 font-bold px-2.5 py-1 rounded text-[10px] uppercase tracking-wide">
                  Instant Download
                </span>
              </div>
            </div>

            {/* Cover logo illustration and brief */}
            <div className="grid grid-cols-5 gap-4 items-center bg-amber-50/20 p-4 rounded-2xl border border-orange-100/30">
              <div className="col-span-2">
                <div className="relative w-full h-36 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 rounded-xl shadow-lg border border-white/20 p-3 flex flex-col justify-between text-white overflow-hidden select-none">
                  <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-xl" />
                  <div className="text-[8px] font-semibold text-orange-400 tracking-widest uppercase">ASTROVED</div>
                  <div className="text-[11px] font-black leading-tight tracking-tight text-white mt-1">
                    Your Personalized Numerology Report
                  </div>
                  <div className="flex items-center gap-1.5 mt-auto border-t border-white/10 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-[7px] text-slate-300 font-bold">PREUI V1.2</span>
                  </div>
                </div>
              </div>

              <div className="col-span-3 space-y-1.5">
                <h3 className="font-display font-bold text-sm text-gray-900 leading-tight">What’s Prepared For You:</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                  We have successfully analyzed the date node grids of <strong>{fullName}</strong>. Your customized charts have been generated and packaged into a premium PDF.
                </p>
              </div>
            </div>

            {/* Feature Points */}
            <div className="space-y-3">
              {[
                { title: "Your Complete Core Numbers", desc: "In-depth calculation of Life Path, Destiny, Soul Urge, Secret Fears, and Subconscious archetypes." },
                { title: "Chinese Lo Shu Grid Analysis", desc: "Details of present grids, Arrows of Strength, and customized plans for active Arrows of Weakness." },
                { title: "Forecasts and Predictions", desc: "Get predictions and advice month-by-month for the upcoming cycles and years." },
                { title: "Planetary Remedies", desc: "Scientific gemstone advice, sound syllables, and rituals to balance missing numbers." }
              ].map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-xs leading-none">
                    <strong className="text-gray-950 block mb-0.5">{feat.title}</strong>
                    <span className="text-gray-500 leading-tight block">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive payment formulation form */}
            <form onSubmit={handleCheckout} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email */}
                <div className="relative col-span-1">
                  <label htmlFor="checkout-email" className="absolute -top-2 left-2.5 px-1 bg-white text-[10px] text-indigo-950 font-bold tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@domain.com"
                    className="w-full px-3 py-2.5 text-xs text-gray-800 font-medium placeholder-gray-300 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  />
                </div>

                {/* Phone */}
                <div className="relative col-span-1">
                  <label htmlFor="checkout-phone" className="absolute -top-2 left-2.5 px-1 bg-white text-[10px] text-indigo-950 font-bold tracking-wide">
                    Mobile Number
                  </label>
                  <input
                    id="checkout-phone"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-3 py-2.5 text-xs text-gray-800 font-medium placeholder-gray-300 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  />
                </div>
              </div>

              {/* Pricing Box layout */}
              <div className="bg-purple-50 border border-purple-100 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black text-purple-700 tracking-wide uppercase block">Total Price:</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-gray-950">₹399</span>
                    <span className="text-xs line-through text-gray-400 font-bold">₹999</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    SAVE 60% TODAY
                  </span>
                </div>
              </div>

              {/* Google Pay CTA action button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-purple-500/20 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Proceed to Pay ₹399</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="payment-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8 space-y-6 flex flex-col items-center"
          >
            {/* Confetti or animated success stars */}
            <div className="relative w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-emerald-200">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              <Sparkles className="w-5 h-5 text-amber-500 absolute -top-1 -right-1 animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-display text-2xl font-black text-gray-950 tracking-tight">Payment Successful!</h3>
              <p className="text-sm text-gray-505 font-medium px-4">
                Awesome! Your payment of <strong>₹399</strong> has been verified successfully. Your personalized PDF is ready.
              </p>
            </div>

            {/* Receipt details */}
            <div className="w-full bg-slate-50 border border-slate-150 p-4 rounded-xl text-left text-xs font-semibold text-gray-650 space-y-2">
              <div className="flex justify-between border-b border-slate-100 pb-1.5">
                <span className="text-gray-400">Payer Name:</span>
                <span className="text-gray-900">{fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1.5">
                <span className="text-gray-400">Order ID:</span>
                <span className="text-gray-900">VR-30294-82</span>
              </div>
              {email && (
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-gray-400">Delivery Email:</span>
                  <span className="text-gray-900">{email}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-emerald-600 uppercase font-black">Delivered</span>
              </div>
            </div>

            {/* Direct Download Button */}
            <button
              type="button"
              onClick={() => {
                // Simulate download call
                alert("Your customized AstroVed Numerology PDF report has been downloaded successfully!");
              }}
              className="w-full max-w-xs py-3.5 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-200 cursor-pointer text-sm"
            >
              Download PDF Report Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
