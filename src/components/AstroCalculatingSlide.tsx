import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';

interface AstroCalculatingSlideProps {
  onComplete: () => void;
}

export default function AstroCalculatingSlide({ onComplete }: AstroCalculatingSlideProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(onComplete, 300);
      }
      setProgress(current);
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className="min-h-screen w-full bg-gradient-to-b from-[#0A0D1A] via-[#12162E] to-[#0A0D1A] flex flex-col justify-center items-center relative overflow-hidden"
      id="astro-cal-slide"
    >

          {/* Particle/Star Glow Elements */}
          <div className="absolute top-12 left-12 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-60" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-20 right-16 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-40" />
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full' opacity-80" />
          <div className="absolute bottom-1/3 left-16 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-30" style={{ animationDuration: '4s' }} />

          {/* Central Rotating Icon Grid (The 20-sided geometric golden polyhedral numerals die) */}
          <div className="relative w-44 h-44 flex items-center justify-center mb-10">

            {/* Subtle Outer Rotating Halo */}
            <div className="absolute inset-0 border border-amber-500/20 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
            <div className="absolute inset-2 border border-indigo-400/10 border-dashed rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />

            {/* Golden polyhedral numbered 3D-like geometric shape (using styled SVG paths for precise visual likeness to screenshot) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-28 h-28 text-amber-500 flex items-center justify-center relative drop-shadow-[0_0_15px_rgba(245,165,64,0.4)]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-450">
                {/* Central Icosahedron/Polyhedron Facets */}
                <polygon points="50,10 82,30 50,55" fill="#FFEAA7" opacity="0.9" stroke="#E59A2F" strokeWidth="1" />
                <polygon points="50,10 18,30 50,55" fill="#F9D77E" opacity="0.95" stroke="#E59A2F" strokeWidth="1" />
                <polygon points="18,30 50,55 25,80" fill="#E59A2F" opacity="0.8" stroke="#D3841C" strokeWidth="1" />
                <polygon points="82,30 50,55 75,80" fill="#F4B043" opacity="0.85" stroke="#D3841C" strokeWidth="1" />
                <polygon points="50,55 25,80 75,80" fill="#FFEAA7" opacity="0.9" stroke="#E59A2F" strokeWidth="1" />
                <polygon points="50,10 82,30 85,15" fill="#F7C06D" opacity="0.7" stroke="#D3841C" strokeWidth="1" />
                <polygon points="50,10 18,30 15,15" fill="#E59A2F" opacity="0.75" stroke="#D3841C" strokeWidth="1" />

                {/* Precise positioning of traditional single-digit Numerology numbers inside facets */}
                <text x="48" y="36" fill="#6B2901" fontSize="11" fontWeight="bold" fontFamily="monospace">6</text>
                <text x="32" y="44" fill="#6B2901" fontSize="10" fontWeight="bold" fontFamily="monospace">4</text>
                <text x="63" y="44" fill="#6B2901" fontSize="10" fontWeight="bold" fontFamily="monospace">3</text>
                <text x="38" y="70" fill="#6B2901" fontSize="10" fontWeight="bold" fontFamily="monospace">9</text>
                <text x="56" y="70" fill="#6B2901" fontSize="10" fontWeight="bold" fontFamily="monospace">8</text>
                <text x="48" y="24" fill="#6B2901" fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>
                <text x="32" y="26" fill="#6B2901" fontSize="9" fontWeight="bold" fontFamily="monospace">7</text>
                <text x="64" y="26" fill="#6B2901" fontSize="9" fontWeight="bold" fontFamily="monospace">1</text>
                <text x="48" y="52" fill="#6B2901" fontSize="11" fontWeight="bold" fontFamily="monospace">5</text>
              </svg>

              {/* Sparkle highlights on corners of die */}
              <Sparkles className="w-5 h-5 text-white absolute top-2 right-4 animate-pulse" />
              <div className="absolute top-1/2 left-3 w-4 h-4 text-amber-200 fill-white"><Star className="w-full h-full fill-white" /></div>
            </motion.div>
          </div>

          {/* Purple/Indigo loading progress bar */}
          <div className="w-full max-w-xs space-y-4">
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
              <div
                className="h-full bg-purple-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Subtitle text */}
            <p className="text-gray-300 text-sm font-normal tracking-wide text-center animate-pulse">
              Calculating your numbers....
            </p>
          </div>
    </div>
  );
}
