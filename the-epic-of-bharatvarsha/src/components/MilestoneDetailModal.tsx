import React, { useEffect } from 'react';
import { Milestone } from '../types/history';
import { ERAS_DATA } from '../data/historyData';
import { useProgress } from '../context/ProgressContext';
import {
  X,
  CheckCircle2,
  Bookmark,
  MapPin,
  Calendar,
  BookOpen,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Scroll
} from 'lucide-react';

interface MilestoneDetailModalProps {
  milestone: Milestone;
  onClose: () => void;
}

export const MilestoneDetailModal: React.FC<MilestoneDetailModalProps> = ({
  milestone,
  onClose,
}) => {
  const { progress, toggleMilestoneCompleted, toggleBookmark } = useProgress();
  const isCompleted = progress.completedMilestones.includes(milestone.id);
  const isBookmarked = progress.bookmarkedMilestones.includes(milestone.id);

  const era = ERAS_DATA.find(e => e.id === milestone.eraId);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#160E0A]/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#FFFDF9] rounded-3xl shadow-2xl border-2 border-[#C89D52] flex flex-col overflow-hidden text-[#241711]"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Ornate Gold Line */}
        <div className="h-1.5 bg-gradient-to-r from-[#8C2F15] via-[#D4AF37] to-[#8C2F15]" />

        {/* Header Ribbon */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#E8DCC8] bg-[#FAF4E8] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#7D6B5C] mb-1.5 font-semibold">
              <span className="text-[#8C2F15] font-cinzel font-bold">{era?.name}</span>
              <span aria-hidden="true" className="text-[#C8B8A5]">·</span>
              <span className="font-mono text-[#8C2F15] bg-[#FAECE7] px-2.5 py-0.5 rounded-md border border-[#E9C6BC] font-semibold">
                {milestone.yearRange}
              </span>
            </div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-[#241711] text-balance">
              {milestone.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#8A7665] hover:text-[#2A1810] hover:bg-[#EAE0D0] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6">
          {/* Geographic Location & Artifact Definition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 bg-[#FAF4E8] rounded-2xl text-xs border border-[#DFD2BC]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#8C2F15] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2A1810] font-cinzel block">Excavated Region</span>
                <span className="text-[#4A3528] font-serif font-medium">{milestone.region.name}</span>
                <span className="text-[#7D6B5C] block">({milestone.region.modernState})</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#C87A1E] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2A1810] font-cinzel block">Signature Artifact</span>
                <span className="text-[#4A3528] font-serif font-medium">{milestone.keyArtifactOrFeature}</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative with Drop Cap */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#8C2F15] font-cinzel mb-2 flex items-center gap-1.5">
              <Scroll className="w-3.5 h-3.5 text-[#8C2F15]" />
              <span>Historical Context & Archaeological Findings</span>
            </h3>
            <p className="historical-dropcap text-[#38261A] leading-relaxed text-sm sm:text-base font-serif">
              {milestone.detailedExplanation}
            </p>
          </div>

          {/* Causality Bridge: How this event shaped what came next */}
          <div className="p-4 sm:p-5 bg-[#FAF4E8] border-l-4 border-[#C87A1E] rounded-r-2xl border-y border-r border-[#E8DCC8] space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C2F15] font-cinzel">
              <ArrowRight className="w-4 h-4 text-[#C87A1E]" />
              <span>Historical Succession & Causality Chain</span>
            </div>
            <p className="text-xs sm:text-sm text-[#38261A] leading-relaxed font-serif">
              {milestone.causalImpact}
            </p>
          </div>

          {/* Named Sources (Academic & Primary Inscriptions) */}
          <div className="pt-2 border-t border-[#EFE5D5]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#8C2F15] font-cinzel flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#8C2F15]" />
                <span>Primary Epigraphy & Excavation Memoirs</span>
              </h3>
              <span className="text-xs text-[#8A7665] font-mono">Peer-Verified</span>
            </div>

            <div className="space-y-3">
              {milestone.sources.map((source, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#FFFDF9] rounded-2xl border border-[#DFD2BC] text-xs shadow-2xs space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[#2A1810] font-cinzel text-xs">{source.title}</span>
                    <span className="text-[#8C2F15] font-mono text-[11px] bg-[#FAECE7] px-2 py-0.5 rounded-full border border-[#E9C6BC] font-semibold">{source.type}</span>
                  </div>
                  <div className="text-[#6A5749] text-[11px] font-serif">
                    <span>{source.authorOrAttribution}</span>
                    <span aria-hidden="true" className="mx-1">·</span>
                    <span>{source.periodOrPublication}</span>
                  </div>
                  <blockquote className="italic text-[#38261A] border-l-3 border-[#C89D52] pl-3 py-0.5 font-serif">
                    &ldquo;{source.citationSnippet}&rdquo;
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#E8DCC8] bg-[#FAF4E8] flex items-center justify-between gap-3">
          <button
            onClick={() => toggleBookmark(milestone.id)}
            className={`flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all cursor-pointer font-cinzel ${
              isBookmarked
                ? 'bg-[#FAECE7] border-[#E9C6BC] text-[#8C2F15]'
                : 'bg-[#FFFDF9] border-[#DFD2BC] text-[#4A3528] hover:text-[#2A1810]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[#8C2F15] text-[#8C2F15]' : ''}`} />
            <span>{isBookmarked ? 'Saved to Bookmarks' : 'Bookmark Node'}</span>
          </button>

          <button
            onClick={() => toggleMilestoneCompleted(milestone.id)}
            className={`flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer font-cinzel ${
              isCompleted
                ? 'bg-[#2E7D32] text-white hover:bg-[#1B5E20]'
                : 'bg-gradient-to-r from-[#2A1810] to-[#451B0E] text-[#FDE68A] hover:from-[#1C0F0A] hover:to-[#38160B] border border-[#C89D52]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Marked as Learned' : 'Mark as Learned'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
