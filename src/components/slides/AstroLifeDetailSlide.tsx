import { useReport } from '../../context/ReportContext';
import { useNavigate } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { staticContent } from '../../data/numerologyData';

export default function AstroLifeDetailSlide() {
  const { reportData } = useReport();
  const navigate = useNavigate();

  // Dynamic lookup with fallback
  const details = reportData?.interpretations?.lifePath;
  const lifePathNumber = reportData?.coreNumbers?.lifePath || 6;

  if (!details) return null;

  // Specific strengths/challenges default arrays if not found
  const strengths = details.strengths.slice(0, 5);
  const challenges = details.challenges.slice(0, 5);

  return (
    <div className="space-y-6 pt-2">

      {/* Headline Header */}
      <div className="flex items-center justify-between gap-4 border-b border-orange-100 pb-4">
        <h2 className="font-display text-2xl font-normal text-gray-950 tracking-tight">
          {staticContent?.lifeDetailSlide?.title}
        </h2>
        {/* Circular badge */}
        <div className="w-16 h-16 rounded-full border-[5px] border-amber-200 bg-orange-500 text-white font-display font-black text-2xl flex items-center justify-center shadow-md animate-pulse">
          {lifePathNumber}
        </div>
      </div>

      {/* Detailed Descriptions */}
      <div className="space-y-3.5 text-gray-700 text-sm leading-relaxed" id="life-path-description">
        <p className="font-normal text-gray-900 text-base">{details.subtitle}</p>
        <p>{details.description}</p>
        <p>You find your deepest motivation when you align with your cosmic archetype of <strong>{details.title}</strong>, seeking harmony in everything you build.</p>
      </div>

      {/* Strengths & Challenges Tags */}
      <div className="space-y-5 pt-2">
        {/* Strengths */}
        <div className="space-y-2">
          <h3 className="text-gray-900 font-normal text-sm uppercase tracking-wide">{staticContent?.lifeDetailSlide?.topStrengths}</h3>
          <div className="flex flex-wrap gap-2">
            {strengths?.map((str, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-emerald-500 text-white text-xs font-normal rounded-lg shadow-sm transition-transform hover:scale-105"
              >
                {str}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="space-y-2">
          <h3 className="text-gray-900 font-normal text-sm uppercase tracking-wide">{staticContent?.lifeDetailSlide?.topChallenges}</h3>
          <div className="flex flex-wrap gap-2">
            {challenges?.map((ch, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-orange-600 text-white text-xs font-normal rounded-lg shadow-sm transition-transform hover:scale-105"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Super Premium Promotional Banner Box */}
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

      {/* Callout box next-up */}
      <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
        <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
          <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
        </div>
        <p className="text-indigo-950 font-normal text-xs leading-snug">
          {staticContent?.lifeDetailSlide?.calloutText}
        </p>
      </div>

    </div>
  );
}
