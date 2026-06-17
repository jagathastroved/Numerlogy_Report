import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { calculateDestinyNumber, reduceToNumerologyDigit } from '../utils/numerology';
import { useReport } from '../context/ReportContext';
import { useNavigate } from 'react-router-dom';

const PYTHAGOREAN_VALUE: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9
};

export default function AstroNameMathSlide() {
  const navigate = useNavigate();
  const { reportData } = useReport();
  const fullName = reportData?.personalDetails?.fullName;

  const cleanedName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  const characters = cleanedName.split('');

  // Calculate letter values
  const values = characters.map(char => PYTHAGOREAN_VALUE[char] || 1);
  const sum = values.reduce((acc, val) => acc + val, 0);
  const finalDestiny = reduceToNumerologyDigit(sum);

  // Reduction explanation generation
  let reductionPath = String(sum);
  if (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    const digits = String(sum).split('').map(Number);
    const firstSum = digits.reduce((a, b) => a + b, 0);
    reductionPath += ` => ${digits.join(' + ')} => ${firstSum}`;

    if (firstSum > 9 && firstSum !== 11 && firstSum !== 22 && firstSum !== 33) {
      const secondDigits = String(firstSum).split('').map(Number);
      const secondSum = secondDigits.reduce((a, b) => a + b, 0);
      reductionPath += ` => ${secondDigits.join(' + ')} => ${secondSum}`;
    }
  }

  const interpretation = reportData?.interpretations?.destiny || { title: "The Independent Trailblazer", desc: "..." };

  return (
    <div className="space-y-6 pt-2">

      {/* Title details */}
      <div className="space-y-2">
        <h2 className="font-display text-2xl font-normal text-gray-950 tracking-tight">
          Your Name/ Destiny Number
        </h2>
        <p className="text-gray-600 text-xs leading-relaxed">
          Your <strong className="text-gray-950">Name/ Destiny Number</strong>, also called your <strong className="text-gray-950">Minor Expression Number</strong>, comes from the first and last name you use every day. It might be a shorter version of your birth name or a new name if you got married, or changed it for another reason.
        </p>
        <p className="text-gray-600 text-xs leading-relaxed">
          This number shows the energy you put out into the world when you use that name. It’s like your <strong className="text-gray-950">"energetic signature"</strong> that adds to your personality, strengths, lessons, experiences, and opportunities based on your other numbers.
        </p>
      </div>

      {/* Full Name letter pills */}
      <div className="space-y-4">
        <p className="text-xs text-indigo-900/60 font-bold uppercase tracking-widest text-center">Your Full Name</p>
        <div className="flex flex-wrap justify-center items-center gap-2 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 p-5 border border-indigo-100/50 rounded-2xl shadow-sm">
          {characters.map((char, index) => (
            <React.Fragment key={index}>
              <span className="w-10 h-10 rounded-xl bg-white text-indigo-900 font-bold text-lg flex items-center justify-center shadow-sm border border-indigo-50 transition-transform hover:scale-110 hover:-translate-y-1">
                {char}
              </span>
              {index < characters.length - 1 && <span className="text-indigo-300 font-medium text-sm">+</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step-by-step reduction math */}
      <div className="space-y-5">
        {/* Step 1 */}
        <div className="space-y-3">
          <p className="text-xs text-indigo-900/70">
            <strong className="text-indigo-950 font-bold">Step 1</strong> Give each letter a number based on its place in the alphabet.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 bg-gradient-to-br from-purple-50/80 to-fuchsia-50/80 p-5 border border-purple-100/50 rounded-2xl shadow-sm">
            {values.map((v, index) => (
              <React.Fragment key={index}>
                <span className="w-10 h-10 rounded-xl bg-white text-purple-900 font-bold text-base flex items-center justify-center shadow-sm border border-purple-50 transition-transform hover:scale-110 hover:-translate-y-1">
                  {v}
                </span>
                {index < values.length - 1 && <span className="text-purple-300 font-medium text-sm">+</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-3">
          <p className="text-xs text-indigo-900/70">
            <strong className="text-indigo-950 font-bold">Step 2</strong> Find total for first, middle(s), and last name separately.
          </p>
          <div className="flex justify-center">
            <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-900 shadow-sm border border-indigo-200 px-6 py-3 rounded-xl font-mono text-sm font-semibold tracking-wide">
              {reductionPath}
            </span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4 pt-3 text-center flex flex-col items-center">
          <p className="text-xs text-indigo-900/70">
            <strong className="text-indigo-950 font-bold">Step 3</strong> If multiple digits, keep adding until a single digit is reached.
          </p>

          {/* Huge badge */}
          <div className="w-28 h-28 rounded-full border-[4px] border-indigo-200/50 bg-gradient-to-br from-indigo-500 via-purple-600 to-fuchsia-600 flex items-center justify-center font-serif font-bold text-5xl text-white shadow-[0_10px_30px_rgba(99,102,241,0.4)] relative mt-3 animate-pulse">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 drop-shadow-md">{finalDestiny}</span>
          </div>

          <p className="text-sm font-bold text-indigo-950 tracking-widest uppercase mt-2">
            Your Name Number
          </p>
        </div>
      </div>

      {/* Personality text description box */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/30 p-6 rounded-2xl text-white shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <p className="text-sm text-indigo-100/90 leading-relaxed relative z-10">
          Your name number is <strong className="text-[#facc15] font-bold text-base">{finalDestiny}</strong>. Every time you use this name, you give off the vibe of a "{interpretation.title}". {interpretation.desc}
        </p>
      </div>

      {/* Super Premium Promotional Banner Box */}
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#382b93] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 group mt-6">

        {/* Content */}
        <div className="relative z-10 flex-1 space-y-4">
          <div className="inline-flex px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">Premium Insight</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug">
            Master Your <span className="text-[#facc15] font-bold">Name Number</span>
          </h3>

          <p className="text-sm text-indigo-100/90 leading-relaxed max-w-sm"> Do you want to discover all the hidden secrets, opportunities, and deep meanings behind your Name Number? Book your complete, in-depth numerology report now!
          </p>

          <div className="pt-3 flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/premium-deliverables')}
              className="px-5 py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-orange-950 text-sm font-bold rounded-lg shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Book Your Report Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-sm font-medium">
              <span className="text-indigo-200/70 line-through mr-2">₹999</span>
              <br className="hidden md:block" />
              <span className="text-[#4ade80] font-bold">₹399 Only</span>
            </div>
          </div>
        </div>

        {/* Premium Book Mockup */}
        <div className="relative z-10 shrink-0 group-hover:scale-105 transition-transform duration-500 ease-out ml-4 md:ml-0 md:mr-8">
          <div className="w-36 h-48 bg-gradient-to-br from-[#5b2488] to-[#3b1a66] rounded-r-lg rounded-l-sm shadow-[10px_10px_20px_rgba(0,0,0,0.3)] border-l-[3px] border-[#a855f7] border-t border-r border-b border-white/10 flex flex-col relative overflow-hidden">
            {/* Book Spine Highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-white/20 to-transparent"></div>

            {/* Premium Book Cover Design */}
            <div className="flex-1 p-4 flex flex-col relative z-10 h-full">
              <div className="text-center mt-2">
                <div className="text-[7px] font-medium text-white tracking-[0.2em] uppercase">ASTROVED</div>
                <div className="w-6 h-px bg-white mx-auto my-2"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-1">
                <h4 className="text-lg font-serif font-bold text-[#facc15] leading-tight">
                  Numerology<br />Report
                </h4>
                <p className="text-[6px] text-indigo-200 uppercase tracking-widest mt-2">Personalized Blueprint</p>
              </div>

              <div className="flex justify-between items-end pb-1 border-b border-white/10 mt-auto">
                <div className="text-[7px] text-white/50 font-medium">Vol. 1</div>
                <ShieldCheck className="w-3.5 h-3.5 text-[#facc15]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next callout */}
      <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
        <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
          <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
        </div>
        <p className="text-indigo-950 font-normal text-xs leading-snug">
          Let's proceed to Depth Personalized Numerology Report Overview.
        </p>
      </div>

    </div>
  );
}
