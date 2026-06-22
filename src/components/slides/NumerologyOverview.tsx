import { ArrowRight, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staticContent } from '../../data/numerologyData';

export default function NumerologyOverview() {
  const navigate = useNavigate();

  const preparedItems = staticContent?.overviewSlide?.preparedItems;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 pt-2 pb-12"
    >

      {/* Header */}
      <motion.div variants={itemVariants} className="relative flex flex-col xl:flex-row items-center xl:items-start justify-between gap-6">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/30 blur-3xl rounded-full pointer-events-none"></div>

        <div className="space-y-4 relative z-10 flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-purple-700">{staticContent?.overviewSlide?.subtitle}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-950 pb-1">
            {staticContent?.overviewSlide?.title}
          </h2>
        </div>

        {/* Cover book */}
        <div style={{ perspective: '800px' }} className="flex justify-center items-center p-2 pr-4 shrink-0 mt-4 md:mt-0 relative z-10">
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
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" /><path d="M2 12H22" /><path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" /></svg>
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
      </motion.div>

      {/* Heading checklist description */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="flex items-center gap-4 before:h-px before:flex-1 before:bg-indigo-100 after:h-px after:flex-1 after:bg-indigo-100">
          <p className="text-xs text-indigo-900/60 font-bold tracking-widest uppercase text-center shrink-0">
            {staticContent?.overviewSlide?.checklistTitle}
          </p>
        </div>

        {/* Checklist Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {preparedItems?.map((item, idx) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={idx}
              className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-10px_rgba(99,102,241,0.2)] hover:border-indigo-200 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-indigo-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 transition-colors duration-500"></div>

              {/* Check circle */}
              <div className="relative z-10 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 transition-colors duration-300 shadow-sm border border-indigo-100/50">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="space-y-1 relative z-10">
                <h3 className="text-[15px] font-bold text-indigo-950 tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial Card */}
      <motion.div variants={itemVariants} className="bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 rounded-[2rem] space-y-4 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-colors duration-700"></div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white font-bold text-lg shadow-lg border border-orange-300/50">
            {staticContent?.overviewSlide?.testimonial.initials}
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide">{staticContent?.overviewSlide?.testimonial.name}</h4>
            <p className="text-xs text-indigo-200/80 uppercase tracking-widest font-bold mt-0.5">{staticContent?.overviewSlide?.testimonial.role}</p>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 ml-auto bg-black/20 px-3 py-1.5 rounded-full border border-white/5">
            {[1, 2, 3, 4, 5]?.map((s) => (
              <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
            ))}
          </div>
        </div>

        <p className="text-sm sm:text-[15px] text-indigo-100/90 italic leading-relaxed relative z-10 font-medium">
          "{staticContent?.overviewSlide?.testimonial.text}"
        </p>
      </motion.div>

      {/* Direct Checkout Button */}
      <motion.div variants={itemVariants} className="pt-4">
        <button
          onClick={() => navigate('/premium-deliverables')}
          type="button"
          className="w-full py-5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 active:scale-[0.98] text-white font-bold rounded-2xl shadow-[0_10px_30px_-10px_rgba(244,63,94,0.6)] transition-all duration-300 text-lg flex items-center justify-center gap-3 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
          <span className="relative z-10 tracking-wide">{staticContent?.overviewSlide?.checkoutBtn}</span>
          <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>

    </motion.div>
  );
}
