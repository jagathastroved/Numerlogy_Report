import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AstroOverviewSlide() {
  const navigate = useNavigate();

  const preparedItems = [
    {
      title: "Your Core Numbers",
      desc: "Learn which numbers impact you most, such as your Life Path, Destiny, Soul Urge, and Expression numbers. Understand how they influence who you are and your potential."
    },
    {
      title: "Your Life Path Number",
      desc: "This number reveals your primary purpose. It comes from your birth date."
    },
    {
      title: "The Day You Were Born",
      desc: "See what your birthday shows about your true self, work, traits, and love life. Gain insight into your inborn qualities."
    },
    {
      title: "The Magical Lo Shu Grid",
      desc: "A traditional number pattern energy in your life. Discover your personal Chinese Lo Shu Grid. Also, find out how Western numerology interprets this Eastern idea."
    },
    {
      title: "Analysis of Your Core Numbers",
      desc: "Explore the significance of your core numbers, like Life Path, Destiny, Challenge, Personality, Expression, Soul Urge, Subconscious Self numbers. Grasp how they interconnect in your life."
    },
    {
      title: "Your Future Predictions",
      desc: "Your personal months and years ahead say a lot. Get future forecasts and advice month-by-month for the coming months and years."
    }
  ];

  return (
    <div className="space-y-6 pt-2">

        {/* Headline Header + Book Cover illustration */}
        <div className="flex items-start justify-between gap-4 border-b border-orange-100 pb-5">
          <div className="space-y-1">
            <h2 className="font-display text-xl sm:text-2xl font-black text-gray-950 tracking-tight leading-snug">
              Here We Have Prepared Your In-Depth Personalized Numerology Report
            </h2>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">
              Your Personal Numerology Report Is Here
            </p>
          </div>

          {/* Cover book */}
          <div className="relative shrink-0 w-20 h-28 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 rounded-lg shadow-md border border-white/20 p-2 flex flex-col justify-between text-white overflow-hidden select-none">
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-xl" />
            <div className="text-[6px] font-semibold text-orange-400 tracking-widest uppercase">ASTROVED</div>
            <div className="text-[8px] font-extrabold leading-tight tracking-tight text-white mt-1">Your Personalized Numerology Report</div>
            <div className="flex items-center gap-1 mt-auto border-t border-white/10 pt-1">
              <ShieldCheck className="w-2 h-2 text-orange-400" />
              <span className="text-[5px] text-slate-300 font-bold">PREUI V1.2</span>
            </div>
          </div>
        </div>

        {/* Heading checklist description */}
        <p className="text-xs text-gray-900 font-extrabold tracking-wide uppercase">
          What You'll Find Inside -
        </p>

        {/* Checklist Rows */}
        <div className="space-y-4">
          {preparedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-4 bg-white hover:bg-orange-50/20 border border-gray-100 rounded-2xl transition-colors duration-200"
            >
              {/* Check circle */}
              <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-sm font-extrabold text-gray-950 tracking-tight">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="bg-white border border-gray-200 p-5 rounded-2xl space-y-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-extrabold text-sm border border-orange-200">
              AS
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-900">Anjali Sharma</h4>
              <p className="text-[10px] text-gray-400">Teacher</p>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-0.5 ml-auto">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-600 italic leading-relaxed">
            "The numerology report is very insightful and easy to understand. It explains the meanings of numbers in a straightforward manner. The personalized recommendations are practical and helpful. I highly recommend this numerology report to anyone seeking guidance and clarity in life."
          </p>
        </div>

        {/* Direct Checkout Button */}
        <div className="pt-2">
          <button
            onClick={() => navigate('/report/6')}
            type="button"
            className="w-full py-4 bg-purple-500 hover:bg-purple-600 active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-lg shadow-purple-500/20 transition-all duration-200 cursor-pointer text-sm flex items-center justify-center gap-2"
          >
            <span>Get Your Numerology Report Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

    </div>
  );
}
