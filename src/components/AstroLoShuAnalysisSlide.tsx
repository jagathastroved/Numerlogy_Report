import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { useReport } from '../context/ReportContext';

export default function AstroLoShuAnalysisSlide() {
  const { reportData } = useReport();
  const birthDay = reportData?.personalDetails?.birthDay || "10";
  const birthMonth = reportData?.personalDetails?.birthMonth || "10";
  const birthYear = reportData?.personalDetails?.birthYear || "2002";
  
  // Dynamic parsing and counting of digits '1' to '9'
  const dobDigits = `${birthDay}${birthMonth}${birthYear}`.replace(/[^1-9]/g, '').split('');
  const digitCounts: Record<number, number> = {};
  for (let n = 1; n <= 9; n++) {
    digitCounts[n] = dobDigits.filter(d => d === String(n)).length;
  }

  const isAbsent = (num: number) => (digitCounts[num] || 0) === 0;

  // Track weakness arrows
  const activeArrows: Array<{
    id: string;
    title: string;
    targetNums: number[];
    descParagraphs: string[];
    bgHighlight: string;
  }> = [];

  if (isAbsent(3) && isAbsent(5) && isAbsent(7)) {
    activeArrows.push({
      id: "skepticism",
      title: "Skepticism",
      targetNums: [3, 5, 7],
      descParagraphs: [
        "Your Lo Shu Grid reveals the presence of Skepticism, which is one of your Arrows of Weakness.",
        "The arrow of Skepticism is made up of spaces where the numbers 3, 5, and 7 would appear. People with this combination in their charts like to see things demonstrated or proven, rather than accepting things on trust.",
        "They usually have a conservative approach to religion and are likely to deeply accept the beliefs of their parents without questioning them in any way.",
        "These people are loving, honest, and fair, but frequently find it difficult to express these feelings to others.",
        "They are idealists and have strong visionary capabilities that can make them highly intuitive."
      ],
      bgHighlight: "red"
    });
  }

  if (isAbsent(3) && isAbsent(6) && isAbsent(9)) {
    activeArrows.push({
      id: "poor-memory",
      title: "Poor Memory",
      targetNums: [3, 6, 9],
      descParagraphs: [
        "Your Lo Shu Grid reveals the presence of Poor Memory, which is one of your Arrows of Weakness.",
        "The absence of the mental numbers does not indicate a low intellect. In fact, the opposite is frequently the case and many people with this combination have been very quick and witty.",
        "What it means is that the mental faculties tend to fade as the person gets older. This comes out as forgetfulness and absent-mindedness.",
        "People with this arrow usually learn slowly as children, but catch up later on. Then, in later life, their intellect gradually deserts them. This can be averted if they keep themselves mentally alert and stimulated with a variety of hobbies and interests."
      ],
      bgHighlight: "indigo"
    });
  }

  if (isAbsent(4) && isAbsent(5) && isAbsent(6)) {
    activeArrows.push({
      id: "frustrations",
      title: "Frustrations",
      targetNums: [4, 5, 6],
      descParagraphs: [
        "Your Lo Shu Grid reveals the presence of Frustrations, which is one of your Arrows of Weakness.",
        "This arrow is made from the absence of the numbers 4, 5, and 6 in the chart. This effectively divides the chart in two, with numbers on both sides but nothing in the middle.",
        "People with this arrow experience more than their fair share of setbacks, disappointments, and frustrations.",
        "This is usually their own fault as they expect more from others than they should. Until they learn to accept other people as they are, they are doomed to continual frustrations and disillusionment."
      ],
      bgHighlight: "green"
    });
  }

  if (isAbsent(7) && isAbsent(8) && isAbsent(9)) {
    activeArrows.push({
      id: "hesitation",
      title: "Hesitation",
      targetNums: [7, 8, 9],
      descParagraphs: [
        "Your Lo Shu Grid reveals the presence of Hesitation, which is one of your Arrows of Weakness.",
        "This arrow is made from the absence of the numbers 7, 8, and 9 in the chart. Consequently, nobody born in the twentieth century is able to have this arrow, but it will occur again shortly.",
        "People with this arrow lack motivation, are disorganized in their thinking, and fail to make plans. Because of this, they seldom achieve much until they learn self-discipline and set some worthwhile goals for themselves.",
        "Once they do this, they can then become pioneers and innovators. Their lateral thinking skills, original ideas, and dedication can open the doorways to new advances."
      ],
      bgHighlight: "yellow"
    });
  }

  // Fallback if none are calculated
  if (activeArrows.length === 0) {
    activeArrows.push({
      id: "all-clear",
      title: "No Major Weaknesses",
      targetNums: [],
      descParagraphs: [
        "Congratulations! Your Lo Shu Grid displays a balanced energetic layout with no major active Arrows of Weakness.",
        "You possess a highly stable personal square with excellent horizontal and diagonal alignments. This provides strength, confidence, and natural resilience against common career gridlocks."
      ],
      bgHighlight: "green"
    });
  }

  return (
    <div className="space-y-6 pt-2">

        {/* Title */}
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-normal text-gray-950 tracking-tight text-center">
            Analysis of Lo Shu Grid
          </h2>
          <div className="w-12 h-0.5 bg-orange-450 mx-auto" />
        </div>

        {/* Analysis arrow list cards */}
        <div className="space-y-6">
          {activeArrows.map((arrow) => (
            <div 
              key={arrow.id}
              className="p-5 bg-white border border-red-200 rounded-2xl space-y-4 shadow-xs"
              id={`arrow-analysis-${arrow.id}`}
            >
              {/* Header block with red label container */}
              <div className="border border-red-300 bg-red-50/40 p-3 rounded-xl text-center">
                <span className="text-xs font-black text-red-700 tracking-tight block">
                  Your Lo Shu Grid reveals the presence of {arrow.title}, which is one of your Arrows of Weakness.
                </span>
              </div>

              {/* Graphic mini indicators and descriptions layout */}
              <div className="flex gap-4 items-start">
                
                {/* Mini diagrammatic 3x3 indicator */}
                {arrow.targetNums.length > 0 && (
                  <div className="w-20 bg-slate-50 border border-slate-100 p-1.5 rounded-lg shrink-0 select-none">
                    <div className="grid grid-cols-3 gap-1">
                      {[3, 6, 9, 2, 5, 8, 1, 4, 7].map((cellNum) => {
                        const isTarget = arrow.targetNums.includes(cellNum);
                        return (
                          <div 
                            key={cellNum} 
                            className={`w-5 h-5 rounded-xs flex items-center justify-center font-normal text-[8px] border ${
                              isTarget 
                                ? 'bg-red-400 border-red-500 text-white shadow-xs' 
                                : 'bg-slate-200/50 border-slate-200 text-slate-400'
                            }`}
                          >
                            {cellNum}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Paragraphs */}
                <div className="space-y-2.5 flex-1">
                  {arrow.descParagraphs.slice(1).map((p, pIdx) => (
                    <p key={pIdx} className="text-xs text-gray-700 leading-relaxed font-normal">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promotional Banner Card */}
        <div className="bg-purple-100/40 border border-purple-200/50 rounded-2xl p-5 relative overflow-hidden flex items-center justify-between gap-4">
          <div className="space-y-2 max-w-[200px]">
            <div className="text-xs font-normal text-gray-950">
              Get Your <span className="text-purple-700">Complete Numerology Report</span> for Just <span className="line-through text-gray-400">₹999</span> ₹399!
            </div>
            <p className="text-[9px] text-gray-650 leading-relaxed font-normal">
              Gain comprehensive breakdowns of remedies, trigrams, elements, and daily advice compiled in your custom report.
            </p>
            {/* CTA action button */}
            <button 
              type="button"
              className="px-3.5 py-1.5 bg-indigo-200 hover:bg-indigo-300 rounded-lg text-[10px] font-normal text-indigo-950 cursor-not-allowed flex items-center gap-1"
            >
              <span>Download Your Report Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Book Illustration */}
          <div className="relative shrink-0 w-24 h-32 bg-gradient-to-br from-indigo-950 to-[#2A1D54] rounded-lg shadow-md border border-white/20 p-2 flex flex-col justify-between text-white overflow-hidden select-none">
            <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl" />
            <div className="text-[7px] font-normal text-orange-400 tracking-widest uppercase">ASTROVED</div>
            <div className="text-[10px] font-normal leading-tight tracking-tight text-white mt-1">Your Personalized Numerology Report</div>
            <div className="flex items-center gap-1 mt-auto border-t border-white/10 pt-1.5">
              <ShieldCheck className="w-2.5 h-2.5 text-orange-400" />
              <span className="text-[6px] text-slate-300 font-normal">PREUI V1.2</span>
            </div>
          </div>
        </div>

        {/* Next up bottom callout */}
        <div className="flex items-center gap-4 p-4 border-2 border-indigo-300 bg-indigo-50/10 rounded-2xl">
          <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100/75 rounded-full border border-indigo-200">
            <Compass className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '40s' }} />
          </div>
          <p className="text-indigo-950 font-normal text-xs leading-snug">
            After discovering your insights, let's move forward to see how this month will be for you.
          </p>
        </div>

    </div>
  );
}
