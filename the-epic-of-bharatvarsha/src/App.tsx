/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Header } from './components/Header';
import { TimelineView } from './components/TimelineView';
import { RoadmapView } from './components/RoadmapView';
import { MapView } from './components/MapView';
import { HeritageSpotlight } from './components/HeritageSpotlight';
import { EraMasteryQuiz } from './components/EraMasteryQuiz';
import { MilestoneDetailModal } from './components/MilestoneDetailModal';
import { MobileNav } from './components/MobileNav';
import { Scroll, Sparkles } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeTab, setActiveTab, selectedMilestone, setSelectedMilestone } = useProgress();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2E7] text-[#241711] selection:bg-[#E6C687] selection:text-[#381B07]">
      {/* Top Bar compliant with 3-zone contract */}
      <Header />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 md:pb-16">
        {activeTab === 'timeline' && <TimelineView />}
        {activeTab === 'roadmap' && <RoadmapView />}
        {activeTab === 'map' && <MapView />}
        {activeTab === 'heritage' && <HeritageSpotlight />}
        {activeTab === 'mastery' && <EraMasteryQuiz />}
      </main>

      {/* Detail Inspection Modal */}
      {selectedMilestone && (
        <MilestoneDetailModal
          milestone={selectedMilestone}
          onClose={() => setSelectedMilestone(null)}
        />
      )}

      {/* Curatorial Academic Footer */}
      <footer className="border-t-2 border-[#D8C9B3] bg-[#EFE8DC] text-[#6A5749] text-xs py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#D8C9B3]">
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#2A1810] text-[#FDE68A] border border-[#C89D52] flex items-center justify-center font-bold text-base shadow-xs shrink-0">
                  <span className="font-serif">भ</span>
                </div>
                <div>
                  <span className="font-marcellus text-lg font-bold text-[#2A1810] tracking-tight block">
                    The Epic of Bharatvarsha
                  </span>
                  <span className="text-[11px] text-[#8C2F15] font-cinzel font-semibold tracking-wider block">
                    Interactive Chronology, Causality Roadmap & Heritage Explorer
                  </span>
                </div>
              </div>
              <p className="text-[#6A5749] font-serif text-xs max-w-xl pt-1">
                Built for Hackathon Problem Statement <strong>PS-20: Interactive Indian History Timeline & Learning Roadmap</strong>.
              </p>
            </div>

            {/* Quick Tab Switchers in Footer */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-cinzel font-semibold">
              <button
                onClick={() => { setActiveTab('timeline'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#8C2F15] transition-colors cursor-pointer"
              >
                Timeline
              </button>
              <span>·</span>
              <button
                onClick={() => { setActiveTab('roadmap'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#8C2F15] transition-colors cursor-pointer"
              >
                Causality Roadmap
              </button>
              <span>·</span>
              <button
                onClick={() => { setActiveTab('map'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#8C2F15] transition-colors cursor-pointer"
              >
                Civilization Map
              </button>
              <span>·</span>
              <button
                onClick={() => { setActiveTab('heritage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#8C2F15] transition-colors cursor-pointer"
              >
                Monuments
              </button>
              <span>·</span>
              <button
                onClick={() => { setActiveTab('mastery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#8C2F15] transition-colors cursor-pointer"
              >
                Mastery Quiz
              </button>
            </div>
          </div>

          {/* Sanskrit Philosophical Epigraph & Academic Corpus */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#7D6B5C] font-serif text-[11px]">
            <div className="text-center sm:text-left space-y-1">
              <div className="font-cormorant italic text-base text-[#8C2F15] font-bold">
                ॥ सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः ॥
              </div>
              <div className="text-[11px] text-[#7D6B5C]">
                &quot;Truth alone triumphs, not falsehood; by truth is paved the path divine.&quot; — <em>Mundaka Upanishad</em>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-right">
              <span className="bg-[#FAF4E8] px-2.5 py-1 rounded-md border border-[#DFD2BC]">Archaeological Survey of India (ASI)</span>
              <span className="bg-[#FAF4E8] px-2.5 py-1 rounded-md border border-[#DFD2BC]">Epigraphia Indica</span>
              <span className="bg-[#FAF4E8] px-2.5 py-1 rounded-md border border-[#DFD2BC]">UNESCO World Heritage</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Phone thumb navigation bar */}
      <MobileNav />
    </div>
  );
};

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
