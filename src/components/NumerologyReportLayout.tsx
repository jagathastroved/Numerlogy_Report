import React, { useState, useEffect } from 'react';
import { useReport } from '../context/ReportContext';
import {
  ArrowLeft, ArrowRight, BookOpen, Compass, RefreshCw, PanelLeftClose
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Navigate, useLocation, Outlet } from 'react-router-dom';
import CelestialBackground from './CelestialBackground';

export const REPORT_PAGES = [
  { path: '/welcome', title: 'Welcome' },
  { path: '/core-numbers', title: 'Your Core Numbers' },
  { path: '/life-path-math', title: 'Life Path Math' },
  { path: '/life-path-detail', title: 'Your Life Path Detail' },
  { path: '/name-destiny-math', title: 'Name/Destiny Math' },
  { path: '/numerology-overview', title: 'Numerology Overview' },
  { path: '/lucky-numbers', title: 'Lucky & Unlucky Numbers' },
  { path: '/month-forecast', title: 'Month Forecast' },
  { path: '/premium-deliverables', title: 'Your Premium Deliverables' }
];

export default function NumerologyReportLayout() {
  const { reportData } = useReport();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = REPORT_PAGES.findIndex(p => p.path === location.pathname);
  // If route is not found in report pages (shouldn't happen if nested correctly, but fallback to 0)
  const activeIndex = currentPage >= 0 ? currentPage : 0;

  const setPage = (idx: number) => {
    navigate(REPORT_PAGES[idx].path);
  };
  const nextPage = () => {
    if (activeIndex < REPORT_PAGES.length - 1) navigate(REPORT_PAGES[activeIndex + 1].path);
  };
  const prevPage = () => {
    if (activeIndex > 0) navigate(REPORT_PAGES[activeIndex - 1].path);
  };

  const handleResetReport = () => {
    navigate('/');
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!reportData) return <Navigate to="/" replace />;

  const handleScrollToTop = () => {
    const el = document.getElementById('report-page-scroller');
    if (el) el.scrollTop = 0;
  };

  useEffect(() => {
    handleScrollToTop();
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden relative">
      <CelestialBackground />

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Modern Collapsible Table of Contents Navigation Drawer */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 h-screen z-50 md:z-20 border-r border-slate-200 bg-white flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out ${isSidebarOpen
          ? 'translate-x-0 w-[85vw] sm:w-80 shadow-2xl md:shadow-none md:w-80 opacity-100'
          : '-translate-x-full md:translate-x-0 w-[85vw] sm:w-80 md:w-0 md:opacity-0 md:overflow-hidden'
          }`}
      >
        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center space-x-2">
            <BookOpen className="text-[var(--color-av-indigo)]" size={20} />
            <span className="font-normal text-sm uppercase tracking-wider text-slate-800">
              Report Index
            </span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-slate-500 hover:text-slate-800 p-1 transition-colors block"
            title="Collapse Sidebar"
          >
            <PanelLeftClose size={18} />
          </button>
        </div>

        {/* Scrollable checklist items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 custom-scrollbar">
          {REPORT_PAGES.map((page, idx) => {
            const isActive = idx === activeIndex;
            const isCompleted = idx < activeIndex;
            return (
              <button
                key={idx}
                onClick={() => {
                  setPage(idx);
                  handleScrollToTop();
                  if (window.innerWidth < 768) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 py-2.5 rounded-xl text-left text-xs font-normal transition-all group ${isActive
                  ? 'bg-gradient-to-r from-[var(--color-av-indigo)] to-[#5c5ce0] text-white shadow-lg shadow-[var(--color-av-indigo)]/20'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
              >
                <div className={`w-5 h-5 rounded-full mr-3 text-[10px] flex items-center justify-center font-normal border transition-colors ${isActive
                  ? 'border-white/40 bg-white/20 text-white'
                  : isCompleted
                    ? 'border-[var(--color-av-indigo)] bg-[var(--color-av-indigo)]/10 text-[var(--color-av-indigo)]'
                    : 'border-slate-200 bg-slate-50 text-slate-400'
                  }`}>
                  {idx + 1}
                </div>
                <span className="flex-1 truncate">{page.title}</span>
                {idx === REPORT_PAGES.length - 1 && (
                  <span className={`px-1.5 py-0.5 rounded text-[8px] uppercase font-black font-mono ml-2 tracking-wider ${isActive ? 'bg-[var(--color-av-orange)] text-white' : 'bg-[var(--color-av-orange)] text-white animate-pulse'
                    }`}>
                    PRO
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Exit booklet back to start form */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-center">
          <button
            onClick={handleResetReport}
            className="text-xs font-normal text-slate-600 hover:text-[var(--color-av-orange)] flex items-center space-x-1.5 transition-colors focus:outline-none"
          >
            <RefreshCw size={12} />
            <span>Enter Different Details</span>
          </button>
        </div>
      </aside>

      {/* Main Booklet container view */}
      <main className="flex-1 flex flex-col h-screen md:h-screen overflow-hidden relative">
        {/* Floating Show Index Button when Sidebar is closed */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="absolute top-4 left-4 z-30 p-2 px-3 bg-[var(--color-av-indigo)] hover:bg-[#5c5ce0] text-white text-xs font-normal rounded-lg transition-colors flex items-center shadow-lg shadow-[var(--color-av-indigo)]/30"
          >
            <BookOpen size={13} className="mr-1.5" />
            <span>Show Index</span>
          </button>
        )}

        {/* Outer PDF Page Body Grid */}
        <section
          id="report-page-scroller"
          className="flex-1 overflow-y-auto px-4 md:px-12 py-8 flex items-start justify-center custom-scrollbar"
        >
          {/* Virtual Booklet Frame centering - SOLID WHITE THEME */}
          <div className="w-full max-w-2xl bg-[#FFFFFF] shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-3xl md:rounded-[2rem] flex flex-col p-6 md:p-10 relative select-text min-h-[580px] justify-between text-slate-900 overflow-hidden border border-slate-100">

            {/* Dynamic Header Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-av-orange)] to-[#ff8c4a] rounded-r-full shadow-[0_0_10px_rgba(244,116,46,0.6)]"
                initial={{ width: 0 }}
                animate={{ width: `${((activeIndex + 1) / REPORT_PAGES.length) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>

            <div className="block flex-1 mt-2">
              {/* Header inside the booklet page */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 relative">
                {/* Left Logo */}
                <div className="flex-1 flex justify-start">
                  <img
                    src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg"
                    alt="Astroved-logo"
                    className="h-6 sm:h-8 w-auto object-contain"
                  />
                </div>

                {/* Center Section Title */}
                <div className="flex-[2] sm:flex-none flex flex-col items-center justify-center text-center px-2">
                  <div className="flex items-center mb-1 text-[var(--color-av-orange)] opacity-80">
                    <div className="hidden sm:block w-6 h-px bg-gradient-to-r from-transparent to-[var(--color-av-orange)] mr-2"></div>
                    <Compass size={14} className="animate-spin-slow" />
                    <div className="hidden sm:block w-6 h-px bg-gradient-to-l from-transparent to-[var(--color-av-orange)] ml-2"></div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-slate-800 tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center break-words">
                    {REPORT_PAGES[activeIndex].title}
                  </span>
                </div>

                {/* Right Balance Placeholder */}
                <div className="flex-1"></div>
              </div>

              {/* Render Page Contents on index */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6 text-slate-800 leading-relaxed text-sm md:text-base font-normal selection:bg-indigo-100"
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Book Navigator Buttons */}
            <footer className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
              <button
                onClick={() => {
                  prevPage();
                  handleScrollToTop();
                }}
                disabled={activeIndex === 0}
                className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm transition"
              >
                <ArrowLeft size={16} className="text-slate-700" />
              </button>

              {activeIndex < REPORT_PAGES.length - 1 && (
                <button
                  onClick={() => {
                    nextPage();
                    handleScrollToTop();
                  }}
                  className="flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--color-av-orange)] to-[#d96222] hover:opacity-90 text-white text-xs font-black shadow-lg shadow-[var(--color-av-orange)]/30 tracking-wider transition cursor-pointer"
                >
                  <span>Next</span>
                  <ArrowRight size={14} className="ml-1.5" />
                </button>
              )}
            </footer>

          </div>
        </section>
      </main>
    </div>
  );
}
