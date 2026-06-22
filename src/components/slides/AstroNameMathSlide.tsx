import React from 'react';

import { Compass } from 'lucide-react';
import { reduceToNumerologyDigit } from '../../data/numerologyData';
import { useReport } from '../../context/ReportContext';
import { useNavigate } from 'react-router-dom';
import { staticContent } from '../../data/numerologyData';

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

  const cleanedName = (fullName || '').toUpperCase().replace(/[^A-Z]/g, '');
  const characters = cleanedName.split('');

  // Calculate letter values
  const values = characters?.map(char => PYTHAGOREAN_VALUE[char] || 1);
  const sum = values.reduce((acc, val) => acc + val, 0);
  const finalDestiny = reduceToNumerologyDigit(sum);

  // Reduction explanation generation
  let reductionPath = String(sum);
  if (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    const digits = String(sum).split('')?.map(Number);
    const firstSum = digits.reduce((a, b) => a + b, 0);
    reductionPath += ` => ${digits.join(' + ')} => ${firstSum}`;

    if (firstSum > 9 && firstSum !== 11 && firstSum !== 22 && firstSum !== 33) {
      const secondDigits = String(firstSum).split('')?.map(Number);
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
          {staticContent?.nameMathSlide?.title}
        </h2>
        <p className="text-gray-600 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: staticContent?.nameMathSlide?.paragraphs[0] }} />
        <p className="text-gray-600 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: staticContent?.nameMathSlide?.paragraphs[1] }} />
      </div>

      {/* Full Name letter pills */}
      <div className="space-y-4">
        <p className="text-xs text-indigo-900/60 font-bold uppercase tracking-widest text-center">{staticContent?.nameMathSlide?.fullNameLabel}</p>
        <div className="flex flex-wrap justify-center items-center gap-2 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 p-5 border border-indigo-100/50 rounded-2xl shadow-sm">
          {characters?.map((char, index) => (
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
            <strong className="text-indigo-950 font-bold">{staticContent?.nameMathSlide?.step1}</strong> {staticContent?.nameMathSlide?.step1Desc}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 bg-gradient-to-br from-purple-50/80 to-fuchsia-50/80 p-5 border border-purple-100/50 rounded-2xl shadow-sm">
            {values?.map((v, index) => (
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
            <strong className="text-indigo-950 font-bold">{staticContent?.nameMathSlide?.step2}</strong> {staticContent?.nameMathSlide?.step2Desc}
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
            <strong className="text-indigo-950 font-bold">{staticContent?.nameMathSlide?.step3}</strong> {staticContent?.nameMathSlide?.step3Desc}
          </p>

          {/* Huge badge */}
          <div className="w-28 h-28 rounded-full border-[4px] border-indigo-200/50 bg-gradient-to-br from-indigo-500 via-purple-600 to-fuchsia-600 flex items-center justify-center font-serif font-bold text-5xl text-white shadow-[0_10px_30px_rgba(99,102,241,0.4)] relative mt-3 animate-pulse">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 drop-shadow-md">{finalDestiny}</span>
          </div>

          <p className="text-sm font-bold text-indigo-950 tracking-widest uppercase mt-2">
            {staticContent?.nameMathSlide?.nameLabel}
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
      <div className="relative overflow-hidden rounded-[20px] shadow-2xl bg-gradient-to-br from-[#411b40] via-[#2d1b54] to-[#1a0b2e] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 group mt-6 border border-white/5">
        
        {/* Background Decorative Stars */}
        <div className="absolute top-4 left-1/3 text-yellow-500/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
        </div>
        <div className="absolute top-8 right-8 text-pink-400/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
        </div>

        {/* Premium Book Mockup (Left Side on Desktop, Middle on Mobile) */}
        <div className="relative z-10 shrink-0 w-36 h-52 md:order-1 order-2 mx-auto transform transition-transform duration-500 hover:scale-105">
          {/* Thick book pages effect on the right */}
          <div className="absolute right-[-10px] top-2 bottom-2 w-5 bg-[#f0f0f0] rounded-r-xl border-y border-r border-[#d0d0d0] shadow-[inset_-2px_0_4px_rgba(0,0,0,0.15)] flex flex-col justify-evenly py-1.5">
             <div className="h-px bg-gray-300/50 w-full"></div>
             <div className="h-px bg-gray-300/50 w-full"></div>
             <div className="h-px bg-gray-300/50 w-full"></div>
             <div className="h-px bg-gray-300/50 w-full"></div>
             <div className="h-px bg-gray-300/50 w-full"></div>
          </div>
          
          {/* Main Book Cover */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#7c2877] via-[#521c7a] to-[#260e47] rounded-l-md rounded-r-sm shadow-[10px_10px_20px_rgba(0,0,0,0.4)] border-l-[3px] border-[#a54bc2] border-y border-white/10 flex flex-col z-10 overflow-hidden">
            {/* Spine lighting */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/30 to-transparent"></div>
            
            <div className="p-3.5 flex flex-col h-full items-center justify-center relative z-10">
              {/* Logo */}
              <div className="flex items-center gap-1.5">
                <img src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" alt="AstroVed" className="w-12 mx-auto brightness-0 invert opacity-90" />
              </div>
              
              <div className="w-full h-px bg-white/20 mt-3 mb-3"></div>
              
              {/* Globe Icon */}
              <div className="w-8 h-8 rounded-full border border-[#e3b659] flex items-center justify-center text-[#e3b659] mb-3 bg-[#3c175c]/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M2 12H22"/><path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"/></svg>
              </div>
              
              <p className="text-[7px] text-white font-medium mb-1 tracking-wide">{staticContent?.lifeDetailSlide?.bannerBookText}</p>
              
              <div className="border border-white/20 bg-black/10 rounded-md w-full py-1.5 text-center mt-0.5">
                <h4 className="text-[10px] font-bold text-[#e3b659] tracking-widest leading-relaxed uppercase whitespace-pre-line">
                  {staticContent?.lifeDetailSlide?.bannerBookTitle}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content (Right Side on Desktop, Top on Mobile) */}
        <div className="relative z-10 flex-1 flex flex-col items-center md:items-start space-y-4 order-1 md:order-2">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#c2964b] rounded-full">
            <svg className="w-3 h-3 text-[#e3b659]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
            <span className="text-[9px] font-bold text-[#e1b971] tracking-widest uppercase">{staticContent?.lifeDetailSlide?.bannerSubLabel}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center md:text-left tracking-tight">
            {staticContent?.lifeDetailSlide?.bannerTitle}
          </h3>

          <p className="text-sm text-indigo-100/80 leading-relaxed text-center md:text-left">
            {staticContent?.lifeDetailSlide?.bannerDesc}
          </p>

          <button
            type="button"
            onClick={() => navigate('/premium-deliverables')}
            className="hidden md:block mt-2 px-6 py-3 bg-gradient-to-r from-[#e3b659] to-[#c2964b] hover:from-[#f0c366] hover:to-[#d1a55a] text-[#2a1148] text-sm font-bold rounded-xl shadow-[0_4px_15px_rgba(227,182,89,0.3)] transition-all hover:scale-105 active:scale-95"
          >
            {staticContent?.lifeDetailSlide?.bannerBtn}
          </button>
        </div>

        {/* Mobile Button - Order 3 (Bottom on Mobile) */}
        <div className="relative z-10 md:hidden w-full order-3 mt-2">
          <button
            type="button"
            onClick={() => navigate('/premium-deliverables')}
            className="w-full px-6 py-3.5 bg-gradient-to-r from-[#e3b659] to-[#c2964b] text-[#2a1148] text-sm font-bold rounded-xl shadow-[0_4px_15px_rgba(227,182,89,0.3)] active:scale-95 transition-transform"
          >
            {staticContent?.lifeDetailSlide?.bannerBtn}
          </button>
        </div>

      </div>

      {/* Next callout */}
      <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
        <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
          <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
        </div>
        <p className="text-indigo-950 font-normal text-xs leading-snug">
          {staticContent?.nameMathSlide?.calloutText}
        </p>
      </div>

    </div>
  );
}
