import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AstroOverviewSlide() {
  const navigate = useNavigate();

  const preparedItems = [
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
        <div className="relative shrink-0 w-24 h-32 bg-gradient-to-br from-[#5b2488] to-[#3b1a66] rounded-r-lg rounded-l-sm shadow-md border-l-[3px] border-[#a855f7] border-t border-r border-b border-white/20 p-2 flex flex-col justify-between text-white overflow-hidden select-none">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 to-transparent"></div>
          <div className="text-[5px] font-medium text-white tracking-[0.2em] uppercase text-center mt-1">ASTROVED</div>
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h4 className="text-[10px] font-serif font-bold text-[#facc15] leading-tight">Numerology<br/>Report</h4>
            <p className="text-[4px] text-indigo-200 uppercase tracking-widest mt-1">Personalized Blueprint</p>
          </div>
          <div className="flex justify-between items-end pb-0.5 border-b border-white/10 mt-auto">
            <div className="text-[5px] text-white/50 font-medium">Vol. 1</div>
            <ShieldCheck className="w-2.5 h-2.5 text-[#facc15]" />
          </div>
        </div>
      </div>

      {/* Heading checklist description */}
      <p className="text-xs text-indigo-900/60 font-bold tracking-widest uppercase text-center">
        What You'll Find Inside
      </p>

      {/* Checklist Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {preparedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 bg-gradient-to-br from-white to-indigo-50/30 hover:from-indigo-50 hover:to-white border border-indigo-100/50 hover:border-indigo-300 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
          >
            {/* Check circle */}
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 transition-colors duration-300 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-indigo-950 tracking-tight group-hover:text-indigo-700 transition-colors">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Card */}
      <div className="bg-white border border-gray-200 p-5 rounded-2xl space-y-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-normal text-sm border border-orange-200">
            AS
          </div>
          <div>
            <h4 className="text-xs font-normal text-gray-900">Anjali Sharma</h4>
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
          onClick={() => navigate('/premium-deliverables')}
          type="button"
          className="w-full py-4 bg-purple-500 hover:bg-purple-600 active:scale-[0.98] text-white font-normal rounded-2xl shadow-lg shadow-purple-500/20 transition-all duration-200 cursor-pointer text-sm flex items-center justify-center gap-2"
        >
          <span>Get Your Numerology Report Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
