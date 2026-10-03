import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { AncientEchoesAudio } from './AncientEchoesAudio';
import { RotateCcw } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    completionPercentage,
    completedMilestonesCount,
    resetAllProgress,
  } = useProgress();

  return (
    <header className="sticky top-0 z-40 bg-[#F7F2E7]/95 backdrop-blur-md border-b-2 border-[#D8C9B3] shadow-xs transition-colors">
      {/* Ornate Gold Accent Top Edge */}
      <div className="h-1 bg-gradient-to-r from-[#8C2F15] via-[#D4AF37] to-[#8C2F15]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('timeline')}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-hidden"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2A1810] to-[#451B0E] text-[#E8C282] border-2 border-[#C89D52] flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105 shrink-0">
              <span className="font-serif text-xl text-[#FDE68A]">भ</span>
            </div>
            <div>
              <span className="font-marcellus text-base sm:text-xl font-bold tracking-tight text-[#2A1810] group-hover:text-[#8C2F15] transition-colors whitespace-nowrap block">
                The Epic of Bharatvarsha
              </span>
              <span className="text-[10px] text-[#8C2F15] font-cinzel font-semibold tracking-widest hidden sm:block -mt-1">
                ॥ इतिहासः भारतवर्षस्य ॥
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#6A5749]">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`transition-colors hover:text-[#2A1810] pb-1 font-cinzel ${
              activeTab === 'timeline'
                ? 'text-[#8C2F15] font-bold border-b-2 border-[#8C2F15]'
                : 'text-[#6A5749]'
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`transition-colors hover:text-[#2A1810] pb-1 font-cinzel ${
              activeTab === 'roadmap'
                ? 'text-[#8C2F15] font-bold border-b-2 border-[#8C2F15]'
                : 'text-[#6A5749]'
            }`}
          >
            Era Roadmap
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`transition-colors hover:text-[#2A1810] pb-1 font-cinzel ${
              activeTab === 'map'
                ? 'text-[#8C2F15] font-bold border-b-2 border-[#8C2F15]'
                : 'text-[#6A5749]'
            }`}
          >
            Civilization Map
          </button>
          <button
            onClick={() => setActiveTab('heritage')}
            className={`transition-colors hover:text-[#2A1810] pb-1 font-cinzel ${
              activeTab === 'heritage'
                ? 'text-[#8C2F15] font-bold border-b-2 border-[#8C2F15]'
                : 'text-[#6A5749]'
            }`}
          >
            Heritage Spotlight
          </button>
          <button
            onClick={() => setActiveTab('mastery')}
            className={`transition-colors hover:text-[#2A1810] pb-1 font-cinzel ${
              activeTab === 'mastery'
                ? 'text-[#8C2F15] font-bold border-b-2 border-[#8C2F15]'
                : 'text-[#6A5749]'
            }`}
          >
            Mastery Quiz
          </button>
        </nav>

        {/* Zone 3: Actions & Audio */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Ambient Procedural Sound */}
          <AncientEchoesAudio />

          {/* Unboxed progress indicator */}
          <div className="flex items-center gap-2 text-xs text-[#6A5749] font-medium pl-1 sm:pl-2 border-l border-[#D8C9B3]">
            <div className="w-16 sm:w-24 h-2 bg-[#E2D5C3] rounded-full overflow-hidden border border-[#D0C0AC]/70">
              <div
                className="h-full bg-gradient-to-r from-[#B45309] to-[#8C2F15] transition-all duration-500 rounded-full"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <span className="tabular-nums font-mono font-bold text-[#8C2F15]">
              {completionPercentage}%
            </span>
          </div>

          {/* Quick reset progress button */}
          {completedMilestonesCount > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Reset your study progress?')) {
                  resetAllProgress();
                }
              }}
              title="Reset progress"
              className="p-1.5 text-[#8A7665] hover:text-[#8C2F15] hover:bg-[#EAE0D0] rounded-lg transition-colors"
              aria-label="Reset progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
