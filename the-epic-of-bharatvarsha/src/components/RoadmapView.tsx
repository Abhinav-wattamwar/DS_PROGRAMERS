import React, { useState } from 'react';
import { ERAS_DATA } from '../data/historyData';
import { useProgress } from '../context/ProgressContext';
import {
  GitCommit,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TreeDeciduous,
  Cpu,
  Users,
  Compass,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Scroll,
  Layers,
  Award
} from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const { progress, toggleEraCompleted, setSelectedMilestone, setActiveTab } = useProgress();
  const [expandedTransition, setExpandedTransition] = useState<string | null>('era-1');

  // Era theme configurations
  const eraColorThemes: Record<string, { badgeBg: string; border: string; accent: string; text: string; icon: string }> = {
    'era-1': { badgeBg: '#FFF7ED', border: '#EA580C', accent: '#C2410C', text: '#7C2D12', icon: '🏺' },
    'era-2': { badgeBg: '#FEF3C7', border: '#D97706', accent: '#B45309', text: '#78350F', icon: '📜' },
    'era-3': { badgeBg: '#EFF6FF', border: '#2563EB', accent: '#1D4ED8', text: '#1E3A8A', icon: '🏛️' },
    'era-4': { badgeBg: '#ECFDF5', border: '#059669', accent: '#047857', text: '#064E3B', icon: '🛕' },
    'era-5': { badgeBg: '#FFF1F2', border: '#E11D48', accent: '#BE123C', text: '#881337', icon: '🇮🇳' },
  };

  return (
    <div className="space-y-10 pb-16 max-w-5xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-[#8C2F15] font-bold font-cinzel flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8C2F15]" />
          <span>The Great Causality Chain of Bharatvarsha</span>
          <span className="w-2 h-2 rounded-full bg-[#8C2F15]" />
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#241711] tracking-tight text-balance">
          Historical Roadmap & Civilizational Drivers
        </h1>
        <p className="text-sm sm:text-base text-[#4A3528] font-serif leading-relaxed">
          History is not a ledger of isolated dates. Track the profound domino effect—how shifting monsoons, iron metallurgy, imperial centralization, and maritime trade propelled civilization from one era into the next.
        </p>
      </div>

      {/* Roadmap Progression Track */}
      <div className="relative space-y-8">
        {ERAS_DATA.map((era) => {
          const isCompleted = progress.completedEras.includes(era.id);
          const completedMilestonesInEra = era.milestones.filter(m =>
            progress.completedMilestones.includes(m.id)
          ).length;
          const isTransitionExpanded = expandedTransition === era.id;
          const theme = eraColorThemes[era.id] || eraColorThemes['era-1'];

          return (
            <div key={era.id} className="relative">
              {/* Main Era Station Node */}
              <div
                className={`rounded-3xl transition-all p-6 sm:p-8 border-2 shadow-sm ${
                  isCompleted
                    ? 'bg-[#F2F8F2] border-[#2E7D32]/60 shadow-xs'
                    : 'manuscript-card border-[#DFD2BC]'
                }`}
                style={{
                  borderLeftColor: theme.accent,
                  borderLeftWidth: '6px',
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-cinzel text-xl font-bold shrink-0 transition-colors border-2 shadow-sm ${
                        isCompleted
                          ? 'bg-[#2E7D32] text-white border-[#1B5E20]'
                          : 'bg-gradient-to-br from-[#2A1810] to-[#451B0E] text-[#FDE68A] border-[#C89D52]'
                      }`}
                    >
                      <span>{theme.icon}</span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold mb-1">
                        <span
                          className="px-2.5 py-0.5 rounded-full font-cinzel font-bold text-xs border"
                          style={{
                            backgroundColor: theme.badgeBg,
                            color: theme.accent,
                            borderColor: theme.border,
                          }}
                        >
                          Phase {era.order}
                        </span>
                        <span aria-hidden="true" className="text-[#A89685]">·</span>
                        <span className="font-mono text-[#8C2F15] bg-[#FAF4E8] px-2.5 py-0.5 rounded-md border border-[#E9C6BC]">
                          {era.epochRange}
                        </span>
                        <span aria-hidden="true" className="text-[#A89685]">·</span>
                        <span className="font-cormorant italic text-base text-[#4A3528] font-bold">
                          ॥ {era.sanskritName} ॥
                        </span>
                      </div>
                      <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-[#241711] mt-0.5">
                        {era.name}
                      </h2>
                    </div>
                  </div>

                  {/* Completion Action */}
                  <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                    <div className="text-right text-xs text-[#7D6B5C] hidden sm:block font-serif">
                      <div className="font-bold text-[#2A1810] font-mono">
                        {completedMilestonesInEra} / {era.milestones.length} nodes
                      </div>
                      <div className="text-[11px] font-semibold text-[#8C2F15]">
                        {completedMilestonesInEra === era.milestones.length ? 'Fully Mastered' : 'In Study'}
                      </div>
                    </div>

                    <button
                      onClick={() => toggleEraCompleted(era.id)}
                      className={`flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border-2 transition-all font-cinzel shadow-2xs ${
                        isCompleted
                          ? 'bg-[#2E7D32] text-white border-[#1B5E20] hover:bg-[#1B5E20]'
                          : 'bg-[#FAF4E8] text-[#3D291D] border-[#C89D52] hover:bg-[#F2E8D5]'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isCompleted ? 'Phase Mastered' : 'Mark Phase Done'}</span>
                    </button>
                  </div>
                </div>

                {/* Era Overview Tagline */}
                <p className="mt-4 text-[#3D291D] text-sm sm:text-base leading-relaxed font-serif border-l-4 border-[#C89D52] pl-4 bg-[#FAF4E8]/60 py-2 rounded-r-xl">
                  {era.tagline}
                </p>

                {/* Key Stepping Stones within this Era */}
                <div className="mt-6 pt-4 border-t border-[#EFE5D5]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#8C2F15] font-cinzel mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-[#C87A1E]" />
                      <span>Essential Historical Stepping Stones</span>
                    </div>
                    <span className="text-[11px] text-[#7D6B5C] font-serif normal-case font-normal">
                      Click any card to examine archaeological evidence
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {era.milestones.map((milestone) => {
                      const isMilestoneDone = progress.completedMilestones.includes(milestone.id);
                      return (
                        <button
                          key={milestone.id}
                          onClick={() => setSelectedMilestone(milestone)}
                          className={`text-left p-3.5 rounded-2xl border-2 text-xs transition-all flex flex-col justify-between gap-2.5 group cursor-pointer ${
                            isMilestoneDone
                              ? 'bg-[#E8F5E9] border-[#A5D6A7] text-[#1B5E20]'
                              : 'bg-[#FFFDF9] border-[#DFD2BC] text-[#3D291D] hover:border-[#C2A578] hover:bg-[#FAF4E8] shadow-2xs'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1 w-full">
                            <span className="font-bold line-clamp-1 group-hover:text-[#8C2F15] font-cinzel text-[13px]">
                              {milestone.title}
                            </span>
                            {isMilestoneDone && (
                              <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                            )}
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-[#7D6B5C] w-full font-serif">
                            <span className="truncate max-w-[140px]">{milestone.region.name}</span>
                            <span className="font-mono text-[#8C2F15] font-semibold">{milestone.yearRange.split('–')[0]}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* The Causal Transition Domino (Connecting Era N to Era N+1) */}
              {era.transitionToNext && (
                <div className="my-7 flex flex-col items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#C89D52] to-[#8C2F15] rounded-full" />

                  {/* Transition Accordion Card */}
                  <div className="w-full max-w-3xl rounded-3xl bg-[#FAF4E8] border-2 border-[#D4AF37] p-5 sm:p-7 shadow-md transition-all relative overflow-hidden">
                    <button
                      onClick={() =>
                        setExpandedTransition(isTransitionExpanded ? null : era.id)
                      }
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A1810] to-[#451B0E] border-2 border-[#C89D52] flex items-center justify-center text-[#FDE68A] font-bold shrink-0 shadow-xs">
                          <Sparkles className="w-5 h-5 text-[#FDE68A]" />
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider font-bold text-[#8C2F15] font-cinzel">
                            Causal Transformation Domino · Era {era.order} → Era {era.order + 1}
                          </div>
                          <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#2A1810] group-hover:text-[#8C2F15] transition-colors">
                            {era.transitionToNext.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-2 rounded-xl bg-white/60 text-[#7D6B5C] group-hover:text-[#8C2F15] transition-colors">
                        {isTransitionExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    {isTransitionExpanded && (
                      <div className="mt-5 pt-4 border-t border-[#DFD2BC] space-y-4 animate-fade-in text-xs sm:text-sm text-[#38261A]">
                        <p className="font-serif leading-relaxed text-[#2A1810] bg-[#FFFDF9] p-4 rounded-2xl border border-[#DFD2BC] shadow-2xs">
                          {era.transitionToNext.summaryExplanation}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                          <div className="p-4 bg-[#FFFDF9] rounded-2xl border border-[#DFD2BC] shadow-2xs space-y-1.5">
                            <div className="flex items-center gap-1.5 font-bold font-cinzel text-[#2E7D32] text-xs">
                              <TreeDeciduous className="w-4 h-4 text-[#2E7D32]" />
                              <span>1. Ecological Shift</span>
                            </div>
                            <p className="text-xs text-[#4A3528] font-serif leading-relaxed">
                              {era.transitionToNext.ecologicalFactors}
                            </p>
                          </div>

                          <div className="p-4 bg-[#FFFDF9] rounded-2xl border border-[#DFD2BC] shadow-2xs space-y-1.5">
                            <div className="flex items-center gap-1.5 font-bold font-cinzel text-[#1E3A8A] text-xs">
                              <Cpu className="w-4 h-4 text-[#1E3A8A]" />
                              <span>2. Craft & Technology</span>
                            </div>
                            <p className="text-xs text-[#4A3528] font-serif leading-relaxed">
                              {era.transitionToNext.technologicalShifts}
                            </p>
                          </div>

                          <div className="p-4 bg-[#FFFDF9] rounded-2xl border border-[#DFD2BC] shadow-2xs space-y-1.5">
                            <div className="flex items-center gap-1.5 font-bold font-cinzel text-[#8C2F15] text-xs">
                              <Users className="w-4 h-4 text-[#8C2F15]" />
                              <span>3. Social Order</span>
                            </div>
                            <p className="text-xs text-[#4A3528] font-serif leading-relaxed">
                              {era.transitionToNext.socialPoliticalEvolution}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="w-1 h-8 bg-gradient-to-b from-[#8C2F15] to-[#C89D52] rounded-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Culmination Banner */}
      <div className="p-8 sm:p-10 bg-gradient-to-r from-[#20150F] via-[#33180E] to-[#451B0E] text-[#FFF8ED] rounded-3xl border-2 border-[#C89D52] text-center space-y-4 shadow-xl relative overflow-hidden">
        <div className="text-xs uppercase tracking-widest text-[#E6C687] font-bold font-cinzel">
          ॥ सङ्कल्पः भारतस्य ॥
        </div>
        <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-royal-gradient">
          The Living Continuum of India
        </h3>
        <p className="text-sm sm:text-base text-[#E2D5C3] max-w-2xl mx-auto font-serif leading-relaxed">
          From brick drains in 2600 BCE to rock-cut cave temples in 750 CE, and the written Constitution of 1950, Indian history represents an unbroken dialogue between geography, philosophy, and adaptation.
        </p>
        <button
          onClick={() => setActiveTab('mastery')}
          className="mt-3 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B45309] to-[#8C2F15] hover:from-[#92400E] hover:to-[#6E220F] text-[#FFFBEB] rounded-xl text-xs font-bold transition-all shadow-md font-cinzel uppercase tracking-wider"
        >
          <span>Take the Era Transition Mastery Quiz</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
