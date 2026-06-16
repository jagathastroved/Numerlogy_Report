import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { calculateDestinyNumber, reduceToNumerologyDigit } from '../utils/numerology';
import { useReport } from '../context/ReportContext';

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
          <p className="text-xs text-gray-900 font-normal uppercase tracking-wider text-center">Your Full Name</p>
          <div className="flex flex-wrap justify-center items-center gap-2 bg-pink-100/50 p-4 border border-pink-150 rounded-2xl">
            {characters.map((char, index) => (
              <React.Fragment key={index}>
                <span className="w-8 h-8 rounded-lg bg-pink-300 text-slate-800 font-normal text-sm flex items-center justify-center shadow-xs">
                  {char}
                </span>
                {index < characters.length - 1 && <span className="text-pink-300 font-normal text-xs">+</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step-by-step reduction math */}
        <div className="space-y-5">
          {/* Step 1 */}
          <div className="space-y-2">
            <p className="text-xs text-gray-650">
              <strong className="text-gray-950">Step 1</strong> Give each letter a number based on its place in the alphabet.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 bg-purple-50 p-4 border border-purple-100 rounded-2xl">
              {values.map((v, index) => (
                <React.Fragment key={index}>
                  <span className="w-8 h-8 rounded-lg bg-purple-200 text-purple-950 font-normal text-sm flex items-center justify-center shadow-xs">
                    {v}
                  </span>
                  {index < values.length - 1 && <span className="text-purple-300 font-normal text-xs">+</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <p className="text-xs text-gray-650">
              <strong className="text-gray-950">Step 2</strong> Find total for first, middle(s), and last name separately.
            </p>
            <div className="flex justify-center">
              <span className="bg-pink-100 text-pink-800 font-normal px-4 py-2 rounded-lg text-xs leading-none">
                {reductionPath}
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-3 pt-2 text-center flex flex-col items-center">
            <p className="text-xs text-gray-650">
              <strong className="text-gray-950">Step 3</strong> If multiple digits, keep adding until a single digit is reached.
            </p>

            {/* Huge badge */}
            <div className="w-24 h-24 rounded-full border-[6px] border-indigo-400 bg-indigo-50 flex items-center justify-center font-display font-normal text-4xl text-indigo-950 shadow-inner relative mt-2">
              <span>{finalDestiny}</span>
            </div>

            <p className="text-sm font-normal text-gray-900 tracking-tight uppercase">
              Your Name Number
            </p>
          </div>
        </div>

        {/* Personality text description box */}
        <div className="bg-indigo-600 border border-indigo-700 p-5 rounded-2xl text-white shadow-md">
          <h3 className="font-display font-black text-base text-orange-300 mb-2">{interpretation.title}</h3>
          <p className="text-xs text-indigo-100 leading-relaxed">
            {interpretation.desc}
          </p>
        </div>

        {/* Promotional Book Banner */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 relative overflow-hidden flex items-center justify-between gap-4">
          <div className="space-y-2 max-w-[200px]">
            <p className="text-[10px] text-gray-700 font-medium leading-relaxed">
              Those were just a few of your <strong>main core numbers</strong>. To learn more about the other important numbers too, <strong>get full access</strong> to your complete, <strong>in-depth numerology report</strong> now!
            </p>
            <div className="text-xs font-normal text-gray-950">
              Get your report now for <span className="line-through text-gray-400">₹999</span> <span className="text-purple-700">₹399</span>
            </div>
            {/* CTA action button */}
            <button
              type="button"
              className="px-3.5 py-1.5 bg-indigo-200 hover:bg-indigo-300 rounded-lg text-[10px] font-normal text-indigo-950 cursor-not-allowed flex items-center gap-1"
            >
              <span>Get Your Complete Report</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mockup Book Image illustration */}
          <div className="relative shrink-0 w-24 h-32 bg-gradient-to-br from-indigo-950 to-indigo-800 rounded-lg shadow-md border border-white/20 p-2 flex flex-col justify-between text-white overflow-hidden select-none">
            {/* Swirl element */}
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-xl" />
            <div className="text-[7px] font-normal text-orange-400 tracking-widest uppercase">ASTROVED</div>
            <div className="text-[10px] font-normal leading-tight tracking-tight text-white mt-1">Your Personalized Numerology Report</div>
            <div className="flex items-center gap-1 mt-auto border-t border-white/10 pt-1.5">
              <ShieldCheck className="w-2.5 h-2.5 text-orange-400" />
              <span className="text-[6px] text-slate-300 font-normal">PREUI V1.2</span>
            </div>
          </div>
        </div>

        {/* Next callout */}
        <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
          <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
            <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
          </div>
          <p className="text-indigo-950 font-normal text-xs leading-snug">
            Let's proceed to magical grid of numerology.
          </p>
        </div>

    </div>
  );
}
