import React, { useState } from 'react';
import { PRIMARY_HERITAGE_SITE, ADDITIONAL_HERITAGE_SITES, ERAS_DATA } from '../data/historyData';
import { HeritageSite } from '../types/history';
import {
  Landmark,
  MapPin,
  Calendar,
  Layers,
  BookOpen,
  Award,
  ShieldCheck,
  Compass,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Scroll
} from 'lucide-react';

export const HeritageSpotlight: React.FC = () => {
  const allSites: HeritageSite[] = [PRIMARY_HERITAGE_SITE, ...ADDITIONAL_HERITAGE_SITES];
  const [selectedSiteId, setSelectedSiteId] = useState<string>(PRIMARY_HERITAGE_SITE.id);

  const activeSite = allSites.find(s => s.id === selectedSiteId) || PRIMARY_HERITAGE_SITE;
  const isPrimary = activeSite.id === PRIMARY_HERITAGE_SITE.id;
  const linkedEra = ERAS_DATA.find(e => e.id === activeSite.eraId);

  return (
    <div className="space-y-8 pb-16 max-w-6xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#D8C9B3] pb-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#8C2F15] font-bold font-cinzel mb-1 flex items-center gap-1.5">
            <Landmark className="w-4 h-4 text-[#8C2F15]" />
            <span>Dedicated Regional Heritage Spotlight</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#241711] tracking-tight">
            Monuments of Civilizational Eminence
          </h1>
          <p className="text-sm sm:text-base text-[#4A3528] font-serif max-w-2xl mt-1 leading-relaxed">
            In-depth architectural, epigraphical, and archaeological study of premier local heritage sites preserved across Indian districts.
          </p>
        </div>

        {/* Site Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {allSites.map(site => (
            <button
              key={site.id}
              onClick={() => setSelectedSiteId(site.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all flex items-center gap-2 font-cinzel cursor-pointer ${
                selectedSiteId === site.id
                  ? 'bg-gradient-to-r from-[#2A1810] to-[#451B0E] text-[#FDE68A] border border-[#C89D52] shadow-sm'
                  : 'bg-[#FFFDF9] border border-[#DFD2BC] text-[#4A3528] hover:bg-[#FAF4E8]'
              }`}
            >
              <span>{site.name.split(':')[0]}</span>
              {site.id === PRIMARY_HERITAGE_SITE.id && (
                <span className="text-[10px] text-[#C87A1E] font-mono uppercase bg-[#C87A1E]/10 px-1.5 py-0.5 rounded border border-[#C87A1E]/30">
                  Featured
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Feature Canvas */}
      <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#DFD2BC] shadow-md overflow-hidden">
        {/* Visual Header Banner */}
        <div className="bg-gradient-to-r from-[#1C0F0A] via-[#2A150D] to-[#421609] text-[#FFF8ED] p-6 sm:p-10 relative overflow-hidden border-b-2 border-[#C89D52]/60">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Antique corner accents */}
          <div className="absolute top-3 left-3 text-[#D4AF37]/40 text-xs">✦</div>
          <div className="absolute top-3 right-3 text-[#D4AF37]/40 text-xs">✦</div>

          <div className="relative z-10 max-w-3xl space-y-3.5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#E6C687] font-semibold">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <MapPin className="w-3.5 h-3.5 text-[#E6C687]" />
                {activeSite.district}, {activeSite.modernState}
              </span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="font-mono text-[#FDE68A] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                {activeSite.historicalPeriod}
              </span>
              {activeSite.unescoDesignationYear && (
                <>
                  <span aria-hidden="true" className="text-white/40">·</span>
                  <span className="flex items-center gap-1.5 text-[#FFE8D6] font-bold bg-[#C89D52]/25 px-3 py-1 rounded-full border border-[#C89D52]/60">
                    <Award className="w-3.5 h-3.5 text-[#FDE68A]" />
                    UNESCO World Heritage ({activeSite.unescoDesignationYear})
                  </span>
                </>
              )}
            </div>

            <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-royal-gradient">
              {activeSite.name}
            </h2>

            <p className="text-sm sm:text-base text-[#E2D5C3] font-serif leading-relaxed">
              {activeSite.description}
            </p>
          </div>
        </div>

        {/* Deep Dive Content Grid */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Quick Metric Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#FAF4E8] rounded-2xl border border-[#DFD2BC] text-xs">
            <div>
              <span className="text-[#7D6B5C] font-semibold block mb-1 font-cinzel">Architectural Tradition</span>
              <span className="text-[#2A1810] font-cinzel text-xs font-bold">{activeSite.architecturalStyle}</span>
            </div>
            <div>
              <span className="text-[#7D6B5C] font-semibold block mb-1 font-cinzel">Conservation Custodian</span>
              <span className="text-[#2A1810] font-serif font-medium">{activeSite.conservationBody}</span>
            </div>
            <div>
              <span className="text-[#7D6B5C] font-semibold block mb-1 font-cinzel">Civilizational Era</span>
              <span className="text-[#8C2F15] font-cinzel font-bold">{linkedEra?.name}</span>
            </div>
          </div>

          {/* Architectural Breakdown & Highlights */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#241711] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#8C2F15]" />
              <span>Architectural Marvels & Engineering Feats</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeSite.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FAF4E8] border border-[#DFD2BC] text-xs sm:text-sm text-[#38261A] leading-relaxed flex items-start gap-3.5 shadow-2xs hover:border-[#C2A578] transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2A1810] to-[#451B0E] text-[#FDE68A] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#C89D52]">
                    {idx + 1}
                  </span>
                  <span className="font-serif">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* If Kailash Ellora is selected: Show interactive monolithic structural schematic! */}
          {isPrimary && (
            <div className="p-6 sm:p-8 bg-gradient-to-br from-[#1C0F0A] via-[#26130B] to-[#361509] text-[#FFF8ED] rounded-3xl border-2 border-[#C89D52] space-y-4 shadow-xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#C89D52]/40 pb-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#E6C687] font-bold font-cinzel flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
                    <span>Monolithic Basalt Excavation Strategy</span>
                  </div>
                  <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFF8ED]">
                    Top-Down Mountain Carving (Charanandri Basalt Ridge)
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#FDE68A] bg-[#2A1810] px-3 py-1 rounded-full border border-[#C89D52]/60 self-start sm:self-auto">
                  Zero Scaffolding · 200,000 Tons
                </span>
              </div>

              {/* Monolithic Visual Diagram */}
              <div className="p-4 bg-[#120B07] rounded-2xl border border-[#8C4A28]/40 text-xs space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-[11px]">
                  <div className="p-4 bg-[#241711] rounded-xl border border-[#8C4A28]/50">
                    <span className="text-[#FDE68A] block font-bold font-cinzel text-xs mb-1">1. Trench Quarrying</span>
                    <span className="text-[#D8C7B5] font-serif leading-relaxed">Three deep trenches chiseled 32m into the cliff face to isolate central stone monolith.</span>
                  </div>
                  <div className="p-4 bg-[#241711] rounded-xl border border-[#8C4A28]/50">
                    <span className="text-[#FDE68A] block font-bold font-cinzel text-xs mb-1">2. Shikhara First</span>
                    <span className="text-[#D8C7B5] font-serif leading-relaxed">Carved the highest vimana finial downwards before any foundation was touched.</span>
                  </div>
                  <div className="p-4 bg-[#241711] rounded-xl border border-[#8C4A28]/50">
                    <span className="text-[#FDE68A] block font-bold font-cinzel text-xs mb-1">3. Mandapa & Cloisters</span>
                    <span className="text-[#D8C7B5] font-serif leading-relaxed">Carved 16 pillars, side porches, and life-size rock elephants out of living mountain core.</span>
                  </div>
                  <div className="p-4 bg-[#241711] rounded-xl border border-[#8C4A28]/50">
                    <span className="text-[#FDE68A] block font-bold font-cinzel text-xs mb-1">4. Drainage Ducts</span>
                    <span className="text-[#D8C7B5] font-serif leading-relaxed">Concealed water runoff channels to prevent rainwater ponding inside the pit.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#E6C687] font-cormorant italic text-base pt-1">
                <span>« कथमहो मयैतन्निर्मितम् » — &quot;Even the architect was astonished, saying &apos;How indeed could I have crafted this?&apos;&quot;</span>
              </div>
            </div>
          )}

          {/* Historical Narrative */}
          <div className="space-y-2">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#241711]">
              Historical Epoch & Royal Patronage
            </h3>
            <p className="text-[#4A3528] leading-relaxed text-sm font-serif">
              {activeSite.historicalContext}
            </p>
          </div>

          {/* Archaeological Findings & Discoveries */}
          <div className="space-y-3">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#241711]">
              Archaeological Evidence on Site
            </h3>
            <div className="space-y-2">
              {activeSite.archaeologicalFindings.map((finding, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#38261A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                  <span className="font-serif">{finding}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Epigraphical & Primary Historical Sources */}
          <div className="pt-4 border-t border-[#EFE5D5] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#8C2F15] font-cinzel flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#8C2F15]" />
                <span>Primary Epigraphy & Archival Records</span>
              </h3>
              <span className="text-xs text-[#8A7665] font-mono">ASI Verified Corpus</span>
            </div>

            <div className="space-y-3">
              {activeSite.primarySources.map((source, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#FAF4E8] rounded-2xl border border-[#DFD2BC] text-xs space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[#2A1810] font-cinzel text-sm">{source.title}</span>
                    <span className="text-[#8C2F15] font-mono text-[11px] bg-[#FAECE7] px-2.5 py-0.5 rounded-full border border-[#E9C6BC] font-semibold">
                      {source.type}
                    </span>
                  </div>
                  <div className="text-[#6A5749] text-xs font-serif">
                    <span>{source.authorOrAttribution}</span>
                    <span aria-hidden="true" className="mx-1.5">·</span>
                    <span>{source.periodOrPublication}</span>
                  </div>
                  <blockquote className="italic text-[#38261A] border-l-4 border-[#8C2F15] pl-3.5 py-1 font-serif text-sm">
                    &ldquo;{source.citationSnippet}&rdquo;
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Visiting & Educational Significance */}
          <div className="p-5 bg-[#FAF4E8] rounded-2xl border-2 border-[#C89D52] text-xs sm:text-sm text-[#38261A] flex items-start gap-3.5 shadow-xs">
            <Compass className="w-6 h-6 text-[#8C2F15] shrink-0 mt-0.5" />
            <div>
              <span className="font-cinzel font-bold text-[#2A1810] block mb-1 text-sm">Educational Significance & Visiting Guide:</span>
              <p className="leading-relaxed font-serif text-[#4A3528]">{activeSite.visitingSignificance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
