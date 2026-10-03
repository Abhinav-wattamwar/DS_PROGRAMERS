import React, { useState } from 'react';
import { ERAS_DATA } from '../data/historyData';
import { Milestone, Era } from '../types/history';
import { useProgress } from '../context/ProgressContext';
import { HistoricalTrivia } from './HistoricalTrivia';
import {
  CheckCircle2,
  Bookmark,
  MapPin,
  Calendar,
  ArrowRight,
  BookOpen,
  Filter,
  Layers,
  Sparkles,
  ChevronRight,
  Search,
  X,
  Compass,
  Scroll,
  Award
} from 'lucide-react';

export const TimelineView: React.FC = () => {
  const {
    progress,
    toggleMilestoneCompleted,
    toggleEraCompleted,
    toggleBookmark,
    setSelectedMilestone,
    setActiveTab,
  } = useProgress();

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'uncompleted' | 'completed' | 'bookmarked'>('all');
  const [activeEraId, setActiveEraId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Filter eras based on selected era
  const displayedEras = activeEraId === 'all'
    ? ERAS_DATA
    : ERAS_DATA.filter(era => era.id === activeEraId);

  // Era visual badges and icons
  const eraBadges: Record<string, { label: string; icon: string; sanskrit: string; gradient: string }> = {
    'era-1': {
      label: 'Indus Urbanism',
      icon: '🏺',
      sanskrit: 'सिन्धु-सरस्वती',
      gradient: 'from-[#7A2E0E] via-[#9A3412] to-[#C2410C]'
    },
    'era-2': {
      label: 'Vedic Philosophy',
      icon: '📜',
      sanskrit: 'वैदिक-महाजनपद',
      gradient: 'from-[#9A3412] via-[#B45309] to-[#D97706]'
    },
    'era-3': {
      label: 'Classical Antiquity',
      icon: '🏛️',
      sanskrit: 'मौर्य-गुप्त स्वर्णयुग',
      gradient: 'from-[#1E3A8A] via-[#1E40AF] to-[#2563EB]'
    },
    'era-4': {
      label: 'Medieval Zenith',
      icon: '🛕',
      sanskrit: 'चोल-विजयनगर',
      gradient: 'from-[#064E3B] via-[#047857] to-[#059669]'
    },
    'era-5': {
      label: 'Modern Sovereignty',
      icon: '🇮🇳',
      sanskrit: 'स्वराज-गणराज्य',
      gradient: 'from-[#881337] via-[#9F1239] to-[#BE123C]'
    },
  };

  // Popular subject tags
  const popularTags = ['All Topics', 'Architecture', 'Urbanism', 'Philosophy', 'Science', 'Maritime', 'Epigraphy'];

  return (
    <div className="space-y-8 pb-16">
      {/* Majestic Royal Exhibition Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1C0F0A] via-[#2A150D] to-[#3E1609] text-[#FFF8ED] p-6 sm:p-10 border-2 border-[#C89D52]/60 shadow-2xl">
        {/* Ornate Background Mandala/Aura Glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-[#D4AF37]/20 via-[#B45309]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#8C2F15]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative corner runes */}
        <div className="absolute top-3 left-3 text-[#D4AF37]/40 text-sm select-none">✦</div>
        <div className="absolute top-3 right-3 text-[#D4AF37]/40 text-sm select-none">✦</div>
        <div className="absolute bottom-3 left-3 text-[#D4AF37]/40 text-sm select-none">✦</div>
        <div className="absolute bottom-3 right-3 text-[#D4AF37]/40 text-sm select-none">✦</div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#C89D52]/20 border border-[#C89D52]/60 text-[#FDE68A] font-cinzel font-bold tracking-widest uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E5B842] animate-pulse" />
              <span>The Epic of Bharatvarsha</span>
            </span>
            <span className="text-[#E6C687] font-serif italic text-sm">
              ॥ यतो धर्मस्ततो जयः ॥ 5000+ Years of Living Civilization
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-royal-gradient text-balance">
            Chronology of the Indian Subcontinent
          </h1>

          <p className="text-sm sm:text-base text-[#E2D5C3] leading-relaxed max-w-2xl font-serif">
            From the baked-brick citadels of the Indus to the profound Upanishadic debates of the Gangetic plains, the mathematical breakthroughs of Aryabhata, the monolithic temple cathedrals of Ellora, and the dawn of a sovereign republic. Discover not only <span className="text-[#FDE68A] font-semibold italic">when events transpired</span>, but <span className="text-[#FDE68A] font-semibold italic">the great civilizational forces that forged them</span>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-serif">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#FFF8ED] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] shadow-xs" />
              <span className="font-cinzel font-semibold">5 Grand Eras</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#FFF8ED] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-xs" />
              <span className="font-cinzel font-semibold">17 Excavation Nodes</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#FFF8ED] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] shadow-xs" />
              <span className="font-cinzel font-semibold">Primary Epigraphical Records</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fascinating Historical Discoveries & Curiosities Widget */}
      <HistoricalTrivia />

      {/* Interactive Controls & Filters */}
      <div className="space-y-3.5">
        {/* Search & Era Selector Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-3.5 bg-[#EFE8DC] rounded-2xl border-2 border-[#D8C9B3] shadow-xs">
          {/* Era Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveEraId('all')}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all font-cinzel ${
                activeEraId === 'all'
                  ? 'bg-gradient-to-r from-[#2A1810] to-[#451B0E] text-[#FDE68A] border border-[#C89D52] shadow-sm'
                  : 'text-[#6A5749] hover:text-[#2A1810] hover:bg-[#E5DBCB]'
              }`}
            >
              All Eras
            </button>
            {ERAS_DATA.map((era) => {
              const badge = eraBadges[era.id];
              const isSelected = activeEraId === era.id;
              return (
                <button
                  key={era.id}
                  onClick={() => setActiveEraId(era.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all flex items-center gap-2 font-cinzel ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#2A1810] to-[#451B0E] text-[#FDE68A] border border-[#C89D52] shadow-sm'
                      : 'text-[#6A5749] hover:text-[#2A1810] hover:bg-[#E5DBCB]'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                    style={{ backgroundColor: era.themeColor.primary }}
                  />
                  <span>{badge?.icon}</span>
                  <span className="truncate max-w-[120px]">{era.name.split('&')[0]}</span>
                  {progress.completedEras.includes(era.id) && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Live Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-[#8A7665] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rulers, cities, artifacts..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-[#FFFDF9] border border-[#D8C9B3] rounded-xl text-[#2A1810] placeholder-[#8A7665] focus:outline-hidden focus:border-[#8C2F15] focus:ring-1 focus:ring-[#8C2F15] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A7665] hover:text-[#2A1810]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Milestone Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
          <div className="text-xs text-[#7D6B5C] font-serif flex items-center gap-1.5">
            <Scroll className="w-3.5 h-3.5 text-[#8C2F15]" />
            <span>Select filter status or topic to refine chronological nodes</span>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1 text-xs rounded-lg font-cinzel font-semibold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#2A1810] text-[#FDE68A] border border-[#C89D52]/60 shadow-xs'
                  : 'bg-[#FFFDF9] text-[#7D6B5C] border border-[#DFD2BC] hover:text-[#2A1810]'
              }`}
            >
              All Nodes
            </button>
            <button
              onClick={() => setSelectedFilter('uncompleted')}
              className={`px-3 py-1 text-xs rounded-lg font-cinzel font-semibold transition-all ${
                selectedFilter === 'uncompleted'
                  ? 'bg-[#2A1810] text-[#FDE68A] border border-[#C89D52]/60 shadow-xs'
                  : 'bg-[#FFFDF9] text-[#7D6B5C] border border-[#DFD2BC] hover:text-[#2A1810]'
              }`}
            >
              To Study
            </button>
            <button
              onClick={() => setSelectedFilter('completed')}
              className={`px-3 py-1 text-xs rounded-lg font-cinzel font-semibold transition-all ${
                selectedFilter === 'completed'
                  ? 'bg-[#2A1810] text-[#FDE68A] border border-[#C89D52]/60 shadow-xs'
                  : 'bg-[#FFFDF9] text-[#7D6B5C] border border-[#DFD2BC] hover:text-[#2A1810]'
              }`}
            >
              Mastered
            </button>
            <button
              onClick={() => setSelectedFilter('bookmarked')}
              className={`px-3 py-1 text-xs rounded-lg font-cinzel font-semibold transition-all ${
                selectedFilter === 'bookmarked'
                  ? 'bg-[#2A1810] text-[#FDE68A] border border-[#C89D52]/60 shadow-xs'
                  : 'bg-[#FFFDF9] text-[#7D6B5C] border border-[#DFD2BC] hover:text-[#2A1810]'
              }`}
            >
              Bookmarked
            </button>
          </div>
        </div>
      </div>

      {/* Main Era Timeline Containers */}
      <div className="space-y-16">
        {displayedEras.map((era) => {
          const isEraDone = progress.completedEras.includes(era.id);
          const badge = eraBadges[era.id];

          const filteredMilestones = era.milestones.filter((m) => {
            // Apply filter pill
            if (selectedFilter === 'completed' && !progress.completedMilestones.includes(m.id)) return false;
            if (selectedFilter === 'uncompleted' && progress.completedMilestones.includes(m.id)) return false;
            if (selectedFilter === 'bookmarked' && !progress.bookmarkedMilestones.includes(m.id)) return false;

            // Apply search query
            if (searchQuery.trim()) {
              const q = searchQuery.toLowerCase();
              const matchTitle = m.title.toLowerCase().includes(q);
              const matchRegion = m.region.name.toLowerCase().includes(q) || m.region.modernState.toLowerCase().includes(q);
              const matchArtifact = m.keyArtifactOrFeature.toLowerCase().includes(q);
              const matchText = m.shortSummary.toLowerCase().includes(q) || m.detailedExplanation.toLowerCase().includes(q);
              const matchTag = m.tags.some(t => t.toLowerCase().includes(q));
              if (!matchTitle && !matchRegion && !matchArtifact && !matchText && !matchTag) {
                return false;
              }
            }

            return true;
          });

          // If search active and no milestones in this era, skip rendering empty era
          if (searchQuery.trim() && filteredMilestones.length === 0) {
            return null;
          }

          return (
            <section key={era.id} className="relative scroll-mt-20">
              {/* Ornate Era Header Banner with Rich Thematic Jewels */}
              <div
                className="mb-8 p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border-2 border-[#DFD2BC] shadow-md relative overflow-hidden transition-all"
                style={{
                  borderLeftColor: era.themeColor.primary,
                  borderLeftWidth: '6px',
                }}
              >
                {/* Subtle ornamental top accent */}
                <div
                  className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r opacity-90"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${era.themeColor.primary}, #D4AF37, ${era.themeColor.primary})`,
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                      <span
                        className="px-3 py-1 rounded-full font-bold font-cinzel text-xs border shadow-xs"
                        style={{
                          backgroundColor: era.themeColor.badgeBg,
                          color: era.themeColor.primary,
                          borderColor: era.themeColor.border,
                        }}
                      >
                        Phase {era.order} · {badge?.icon} {era.timeSpan}
                      </span>
                      <span aria-hidden="true" className="text-[#C8B8A5]">·</span>
                      <span className="font-cormorant italic text-lg text-[#8C2F15] font-semibold">
                        ॥ {era.sanskritName} ॥
                      </span>
                      <span aria-hidden="true" className="text-[#C8B8A5]">·</span>
                      <span className="font-mono text-[#7D6B5C] bg-[#FAF4E8] px-2 py-0.5 rounded-md border border-[#E8DCC8]">
                        {era.epochRange}
                      </span>
                    </div>

                    <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#2A1810] tracking-tight">
                      {era.name}
                    </h2>

                    <p className="text-[#4A3528] text-sm max-w-3xl leading-relaxed font-serif pt-1">
                      {era.overview}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => toggleEraCompleted(era.id)}
                      className={`flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border-2 transition-all shadow-xs font-cinzel ${
                        isEraDone
                          ? 'bg-[#E8F5E9] border-[#2E7D32] text-[#1B5E20] hover:bg-[#C8E6C9]'
                          : 'bg-[#FAF4E8] border-[#C89D52] text-[#2A1810] hover:border-[#8C2F15] hover:bg-[#F2E8D5]'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${isEraDone ? 'text-[#2E7D32]' : 'text-[#8A7665]'}`} />
                      <span>{isEraDone ? 'Era Mastered' : 'Mark Era Complete'}</span>
                    </button>
                  </div>
                </div>

                {/* Cultural Attributes ribbon */}
                <div className="mt-5 pt-4 border-t border-[#EFE5D5] flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-bold text-[#2A1810] font-cinzel text-xs flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C87A1E]" />
                    <span>Defining Features:</span>
                  </span>
                  {era.civilizationAttributes.map((attr, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-[#FAF4E8] border border-[#E5D7C3] text-[#4A3528] font-serif text-[11px]"
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline Spine & Milestones */}
              {filteredMilestones.length === 0 ? (
                <div className="p-8 text-center bg-[#FAF4E8] rounded-2xl border border-dashed border-[#DFD2BC] text-[#7D6B5C] text-sm font-serif">
                  No chronological nodes found matching your current filter in this phase.
                </div>
              ) : (
                <div className="relative pl-6 sm:pl-9 border-l-2 border-[#D8C9B3] ml-4 sm:ml-6 space-y-8">
                  {filteredMilestones.map((milestone) => {
                    const isDone = progress.completedMilestones.includes(milestone.id);
                    const isSaved = progress.bookmarkedMilestones.includes(milestone.id);

                    return (
                      <div
                        key={milestone.id}
                        className="relative group transition-transform duration-200"
                      >
                        {/* Timeline Node Pin on Spine (Ornamental Wax Seal) */}
                        <div
                          className="absolute -left-[31px] sm:-left-[43px] top-6 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all bg-[#FFFDF9] shadow-md"
                          style={{
                            borderColor: isDone ? '#2E7D32' : era.themeColor.primary,
                            color: isDone ? '#2E7D32' : era.themeColor.primary,
                          }}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                          ) : (
                            <span
                              className="w-3 h-3 rounded-full shadow-inner"
                              style={{ backgroundColor: era.themeColor.primary }}
                            />
                          )}
                        </div>

                        {/* Milestone Interactive Manuscript Card */}
                        <div
                          onClick={() => setSelectedMilestone(milestone)}
                          className="cursor-pointer manuscript-card rounded-2xl p-5 sm:p-7 transition-all space-y-3.5 group/card relative overflow-hidden"
                          style={{
                            borderLeftColor: era.themeColor.primary,
                            borderLeftWidth: '4px',
                          }}
                        >
                          {/* Corner antique motifs */}
                          <div className="absolute top-2 right-2 text-[#C89D52]/20 font-serif text-xs select-none">✦</div>

                          {/* Card Top: Date, Era badge & Location */}
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#7D6B5C]">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className="font-mono font-bold px-2.5 py-0.5 rounded-md text-xs border shadow-2xs"
                                style={{
                                  backgroundColor: era.themeColor.badgeBg,
                                  color: era.themeColor.primary,
                                  borderColor: era.themeColor.border,
                                }}
                              >
                                {milestone.yearRange}
                              </span>
                              <span aria-hidden="true" className="text-[#C8B8A5]">·</span>
                              <span className="flex items-center gap-1.5 text-[#4A3528] font-serif font-medium">
                                <MapPin className="w-3.5 h-3.5" style={{ color: era.themeColor.primary }} />
                                {milestone.region.name} ({milestone.region.modernState})
                              </span>
                            </div>

                            {/* Card action buttons */}
                            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => toggleBookmark(milestone.id)}
                                title={isSaved ? 'Remove Bookmark' : 'Bookmark for Review'}
                                className={`p-1.5 rounded-lg hover:bg-[#F2E8D5] transition-colors ${
                                  isSaved ? 'text-[#C87A1E]' : 'text-[#8A7665] hover:text-[#2A1810]'
                                }`}
                              >
                                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#C87A1E] text-[#C87A1E]' : ''}`} />
                              </button>
                              <button
                                onClick={() => toggleMilestoneCompleted(milestone.id)}
                                title={isDone ? 'Mark as Unlearned' : 'Mark as Completed'}
                                className={`p-1.5 rounded-lg hover:bg-[#F2E8D5] transition-colors ${
                                  isDone ? 'text-[#2E7D32]' : 'text-[#8A7665] hover:text-[#2A1810]'
                                }`}
                              >
                                <CheckCircle2 className={`w-4 h-4 ${isDone ? 'fill-[#E8F5E9] text-[#2E7D32]' : ''}`} />
                              </button>
                            </div>
                          </div>

                          {/* Title */}
                          <div>
                            <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-[#2A1810] group-hover/card:text-[#8C2F15] transition-colors">
                              {milestone.title}
                            </h3>
                            <p className="mt-2 text-sm text-[#4A3528] leading-relaxed font-serif">
                              {milestone.shortSummary}
                            </p>
                          </div>

                          {/* Signature Artifact Tag */}
                          <div className="flex items-center gap-2 text-xs text-[#7D6B5C] font-serif bg-[#FAF4E8] p-2.5 rounded-xl border border-[#E8DCC8]">
                            <Sparkles className="w-4 h-4 text-[#C87A1E] shrink-0" />
                            <span className="font-semibold text-[#2A1810] font-cinzel">Signature Artifact:</span>
                            <span className="italic text-[#4A3528]">{milestone.keyArtifactOrFeature}</span>
                          </div>

                          {/* Causality Indicator ("How it led forward") */}
                          <div
                            className="text-xs text-[#3D291D] flex items-start gap-2.5 bg-[#FFFDF9] p-3 rounded-xl border-y border-r border-[#E8DCC8]"
                            style={{
                              borderLeftColor: era.themeColor.primary,
                              borderLeftWidth: '3.5px',
                            }}
                          >
                            <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" style={{ color: era.themeColor.primary }} />
                            <div>
                              <span className="font-bold text-[#2A1810] font-cinzel">Historical Succession: </span>
                              <span className="font-serif leading-relaxed">{milestone.causalImpact}</span>
                            </div>
                          </div>

                          {/* Sources & Inspection Footer */}
                          <div className="pt-2 border-t border-[#EFE5D5] flex items-center justify-between text-xs text-[#7D6B5C]">
                            <div className="flex items-center gap-1.5 truncate max-w-[70%]">
                              <BookOpen className="w-3.5 h-3.5 text-[#8C2F15] shrink-0" />
                              <span className="truncate italic font-serif">Source: {milestone.sources[0]?.title}</span>
                            </div>
                            <span
                              className="font-bold flex items-center gap-1 group-hover/card:translate-x-1 transition-transform font-cinzel text-xs"
                              style={{ color: era.themeColor.primary }}
                            >
                              <span>Examine Evidence</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Era Bridge: The Great Transition Matrix */}
              {era.transitionToNext && (
                <div className="mt-10 ml-4 sm:ml-6 pl-6 sm:pl-9 border-l-2 border-dashed border-[#C89D52]">
                  <div className="bg-[#FAF4E8] border-2 border-[#D4AF37]/60 rounded-3xl p-5 sm:p-8 space-y-4 shadow-sm relative overflow-hidden">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#8C2F15] font-cinzel">
                      <Sparkles className="w-4 h-4 text-[#C87A1E]" />
                      <span>The Transition Matrix · How {era.name.split('&')[0]} Birthed Era {era.order + 1}</span>
                    </div>

                    <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#2A1810]">
                      {era.transitionToNext.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#3D291D] leading-relaxed font-serif">
                      {era.transitionToNext.summaryExplanation}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2 text-xs">
                      <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-[#DFD2BC] shadow-2xs">
                        <span className="font-cinzel font-bold text-[#2E7D32] block mb-1.5 text-xs">
                          1. Environmental Force
                        </span>
                        <span className="text-[#4A3528] font-serif leading-relaxed">
                          {era.transitionToNext.ecologicalFactors}
                        </span>
                      </div>
                      <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-[#DFD2BC] shadow-2xs">
                        <span className="font-cinzel font-bold text-[#1E3A8A] block mb-1.5 text-xs">
                          2. Metallurgy & Craft
                        </span>
                        <span className="text-[#4A3528] font-serif leading-relaxed">
                          {era.transitionToNext.technologicalShifts}
                        </span>
                      </div>
                      <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-[#DFD2BC] shadow-2xs">
                        <span className="font-cinzel font-bold text-[#8C2F15] block mb-1.5 text-xs">
                          3. Socio-Political Shift
                        </span>
                        <span className="text-[#4A3528] font-serif leading-relaxed">
                          {era.transitionToNext.socialPoliticalEvolution}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};
