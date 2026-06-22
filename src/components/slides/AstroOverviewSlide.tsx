
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { staticContent } from '../../data/numerologyData';

export default function AstroOverviewSlide() {
  const navigate = useNavigate();

  const preparedItems = staticContent?.overviewSlide?.preparedItems;

  return (
    <div className="space-y-6 pt-2">

      {/* Headline Header + Book Cover illustration */}
      <div className="flex items-start justify-between gap-4 border-b border-orange-100 pb-5">
        <div className="space-y-1">
          <h2 className="font-display text-xl sm:text-2xl font-black text-gray-950 tracking-tight leading-snug">
            {staticContent?.overviewSlide?.title}
          </h2>
          <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">
            {staticContent?.overviewSlide?.subtitle}
          </p>
        </div>

        {/* Cover book */}
        <div style={{ perspective: '800px' }} className="flex justify-center items-center p-2 pr-4">
          <div 
            className="relative shrink-0 w-28 h-40 transform transition-transform duration-500 hover:rotate-y-0"
            style={{ transform: 'rotateY(-20deg) rotateX(10deg)', transformStyle: 'preserve-3d' }}
          >
            {/* Thick book pages effect on the right */}
            <div className="absolute right-[-8px] top-1.5 bottom-1.5 w-4 bg-[#f0f0f0] rounded-r-xl border-y border-r border-[#d0d0d0] shadow-[inset_-2px_0_4px_rgba(0,0,0,0.15)] flex flex-col justify-evenly py-1" style={{ transform: 'translateZ(-1px)' }}>
              <div className="h-px bg-gray-300/50 w-full"></div>
              <div className="h-px bg-gray-300/50 w-full"></div>
              <div className="h-px bg-gray-300/50 w-full"></div>
              <div className="h-px bg-gray-300/50 w-full"></div>
              <div className="h-px bg-gray-300/50 w-full"></div>
            </div>
            
            {/* Main Book Cover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#7c2877] via-[#521c7a] to-[#260e47] rounded-l-md rounded-r-sm shadow-[15px_15px_25px_rgba(0,0,0,0.4)] border-l-[3px] border-[#a54bc2] border-y border-white/10 flex flex-col z-10 overflow-hidden">
              {/* Spine lighting */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/30 to-transparent"></div>
              
              <div className="p-2.5 flex flex-col h-full items-center justify-center relative z-10">
                <img src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" alt="AstroVed" className="w-10 mx-auto brightness-0 invert opacity-90" style={{ transform: 'translateZ(1px)' }} />
                
                <div className="w-full h-px bg-white/20 mt-2 mb-2"></div>
                
                <div className="w-6 h-6 rounded-full border border-[#e3b659] flex items-center justify-center text-[#e3b659] mb-2 bg-[#3c175c]/30" style={{ transform: 'translateZ(2px)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M2 12H22"/><path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"/></svg>
                </div>
                
                <p className="text-[6px] text-white font-medium mb-1 tracking-wide" style={{ transform: 'translateZ(1px)' }}>{staticContent?.overviewSlide?.bookLabel}</p>
                
                <div className="border border-white/20 bg-black/10 rounded-md w-full py-1 text-center mt-0.5" style={{ transform: 'translateZ(2px)' }}>
                  <h4 className="text-[8px] font-bold text-[#e3b659] tracking-widest leading-relaxed uppercase whitespace-pre-line">
                    {staticContent?.overviewSlide?.bookTitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heading checklist description */}
      <p className="text-xs text-indigo-900/60 font-bold tracking-widest uppercase text-center">
        {staticContent?.overviewSlide?.checklistTitle}
      </p>

      {/* Checklist Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {preparedItems?.map((item, idx) => (
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
            {staticContent?.overviewSlide?.testimonial.initials}
          </div>
          <div>
            <h4 className="text-xs font-normal text-gray-900">{staticContent?.overviewSlide?.testimonial.name}</h4>
            <p className="text-[10px] text-gray-400">{staticContent?.overviewSlide?.testimonial.role}</p>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-0.5 ml-auto">
            {[1, 2, 3, 4, 5]?.map((s) => (
              <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-600 italic leading-relaxed">
          {staticContent?.overviewSlide?.testimonial.text}
        </p>
      </div>

      {/* Direct Checkout Button */}
      <div className="pt-2">
        <button
          onClick={() => navigate('/premium-deliverables')}
          type="button"
          className="w-full py-4 bg-purple-500 hover:bg-purple-600 active:scale-[0.98] text-white font-normal rounded-2xl shadow-lg shadow-purple-500/20 transition-all duration-200 cursor-pointer text-sm flex items-center justify-center gap-2"
        >
          <span>{staticContent?.overviewSlide?.checkoutBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
