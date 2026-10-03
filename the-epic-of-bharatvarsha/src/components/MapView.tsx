import React, { useState } from 'react';
import { MAP_LOCATIONS, ERAS_DATA } from '../data/historyData';
import { MapLocation } from '../types/history';
import { useProgress } from '../context/ProgressContext';
import {
  MapPin,
  Layers,
  Compass,
  BookOpen,
  Sparkles,
  ExternalLink,
  Info,
  Scroll
} from 'lucide-react';

export const MapView: React.FC = () => {
  const { setSelectedMilestone, setActiveTab } = useProgress();
  const [selectedEraFilter, setSelectedEraFilter] = useState<string>('all');
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(MAP_LOCATIONS[0]);

  // Coordinate projector from (lat, lng) to SVG viewBox (0, 0, 800, 850)
  // India bounds approx: Lat: 7.5°N to 35.5°N, Lng: 67°E to 91.5°E
  const projectCoords = (lat: number, lng: number): { x: number; y: number } => {
    const minLat = 7.5;
    const maxLat = 35.5;
    const minLng = 67.0;
    const maxLng = 91.5;

    const normX = (lng - minLng) / (maxLng - minLng);
    const normY = (maxLat - lat) / (maxLat - minLat); // Invert Y for SVG coordinates

    const svgWidth = 800;
    const svgHeight = 850;

    return {
      x: Math.round(50 + normX * (svgWidth - 100)),
      y: Math.round(40 + normY * (svgHeight - 80)),
    };
  };

  const filteredLocations = selectedEraFilter === 'all'
    ? MAP_LOCATIONS
    : MAP_LOCATIONS.filter(loc => loc.eraId === selectedEraFilter);

  const eraColors: Record<string, string> = {
    'era-1': '#C2410C', // Rich Terracotta
    'era-2': '#D97706', // Saffron Ochre
    'era-3': '#1E40AF', // Classical Royal Blue
    'era-4': '#047857', // Vijayanagara Emerald
    'era-5': '#BE123C', // Swaraj Ruby
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#D8C9B3] pb-5">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#8C2F15] font-bold font-cinzel mb-1 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#8C2F15]" />
            <span>Archaeological Cartography of Jambudvipa</span>
          </div>
          <h1 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#241711] tracking-tight">
            Geographic Settlements & Excavation Sites
          </h1>
          <p className="text-sm text-[#4A3528] font-serif max-w-2xl mt-1 leading-relaxed">
            Explore South Asia’s civilizational settlements from the alluvial Indus delta to the sacred Gangetic plain and peninsular Deccan river basins.
          </p>
        </div>

        {/* Era Layer Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedEraFilter('all')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap font-cinzel ${
              selectedEraFilter === 'all'
                ? 'bg-gradient-to-r from-[#2A1810] to-[#451B0E] text-[#FDE68A] border border-[#C89D52] shadow-sm'
                : 'bg-[#FFFDF9] border border-[#DFD2BC] text-[#4A3528] hover:bg-[#FAF4E8]'
            }`}
          >
            All Eras
          </button>
          {ERAS_DATA.map(era => (
            <button
              key={era.id}
              onClick={() => setSelectedEraFilter(era.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap flex items-center gap-2 font-cinzel ${
                selectedEraFilter === era.id
                  ? 'bg-gradient-to-r from-[#2A1810] to-[#451B0E] text-[#FDE68A] border border-[#C89D52] shadow-sm'
                  : 'bg-[#FFFDF9] border border-[#DFD2BC] text-[#4A3528] hover:bg-[#FAF4E8]'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                style={{ backgroundColor: eraColors[era.id] }}
              />
              <span>{era.name.split('&')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive Cartographic Map + Inspector Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Cartographic Canvas */}
        <div className="lg:col-span-8 bg-[#F4EFE6] border-2 border-[#D8C9B3] rounded-3xl p-4 sm:p-6 shadow-md relative overflow-hidden">
          {/* Subtle Cartographic Compass Rose */}
          <div className="absolute top-5 right-5 flex items-center gap-1.5 text-[#8C2F15] text-xs font-cinzel font-bold bg-[#FAF4E8]/90 px-3 py-1.5 rounded-xl border border-[#C89D52]/60 shadow-xs">
            <Compass className="w-5 h-5 text-[#C87A1E] animate-pulse" />
            <span>उत्तरम् (NORTH)</span>
          </div>

          {/* SVG Map of Ancient India with terrain contours & rivers */}
          <div className="w-full aspect-[800/850] max-h-[640px] relative flex items-center justify-center">
            <svg
              viewBox="0 0 800 850"
              className="w-full h-full select-none"
              style={{ filter: 'drop-shadow(0 4px 10px rgba(60,40,20,0.08))' }}
            >
              {/* Background Subcontinent Landmass Silhouette */}
              <defs>
                <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EDE4D3" />
                  <stop offset="50%" stopColor="#E5DAC5" />
                  <stop offset="100%" stopColor="#DFD2BC" />
                </linearGradient>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D8CEBD" strokeWidth="0.75" strokeOpacity="0.4" />
                </pattern>
              </defs>

              {/* Grid Lines for Cartographic Feel */}
              <rect width="800" height="850" fill="url(#grid)" />

              {/* Ocean Tint */}
              <rect width="800" height="850" fill="#EAF2F8" fillOpacity="0.45" />

              {/* Subcontinent Landmass Polygon Geometry */}
              <path
                d="M 120 180 
                   Q 220 70 420 80 
                   Q 600 90 730 220 
                   Q 720 280 660 320 
                   Q 620 400 640 480 
                   Q 560 620 460 760 
                   Q 440 820 420 830 
                   Q 400 820 380 760 
                   Q 300 600 240 460 
                   Q 160 410 120 370 
                   Q 90 320 120 180 Z"
                fill="url(#landGradient)"
                stroke="#C2B29B"
                strokeWidth="2.5"
              />

              {/* Major Sacred River Systems */}
              {/* Indus River (NW) */}
              <path
                d="M 330 90 Q 260 110 210 160 Q 170 230 160 300 Q 140 370 180 400"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.85"
              />
              <text x="140" y="270" fill="#1D4ED8" fontSize="11" fontFamily="serif" fontStyle="italic" fontWeight="bold">
                Sindhu (Indus)
              </text>

              {/* Ganges & Yamuna Rivers (Gangetic Plain) */}
              <path
                d="M 320 160 Q 400 220 480 250 Q 560 270 650 320"
                fill="none"
                stroke="#2563EB"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.9"
              />
              <path
                d="M 310 180 Q 380 230 450 255"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.8"
              />
              <text x="460" y="235" fill="#1E3A8A" fontSize="11" fontFamily="serif" fontStyle="italic" fontWeight="bold">
                Ganga & Yamuna
              </text>

              {/* Narmada River (Dividing North & Deccan) */}
              <path
                d="M 440 350 Q 340 360 220 375"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.8"
              />
              <text x="280" y="360" fill="#1D4ED8" fontSize="10" fontFamily="serif" fontStyle="italic">
                Narmada
              </text>

              {/* Godavari & Krishna Rivers (Deccan) */}
              <path
                d="M 270 420 Q 370 430 520 470"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M 280 490 Q 380 510 500 550"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.8"
              />
              <text x="350" y="440" fill="#1D4ED8" fontSize="10" fontFamily="serif" fontStyle="italic">
                Godavari
              </text>

              {/* Kaveri River (Deep South) */}
              <path
                d="M 330 670 Q 400 680 470 700"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.8"
              />
              <text x="360" y="695" fill="#1D4ED8" fontSize="10" fontFamily="serif" fontStyle="italic">
                Kaveri
              </text>

              {/* Regional Geological Labels */}
              <text x="110" y="420" fill="#8C7D68" fontSize="11" fontFamily="serif" fontStyle="italic" letterSpacing="1.5">
                Sindhu-Sagara (Arabian Sea)
              </text>
              <text x="590" y="520" fill="#8C7D68" fontSize="11" fontFamily="serif" fontStyle="italic" letterSpacing="1.5">
                Ganga-Sagara (Bay of Bengal)
              </text>
              <text x="310" y="115" fill="#5A4736" fontSize="12" fontFamily="serif" fontWeight="bold" letterSpacing="3">
                H I M A V A T   ( H I M A L A Y A S )
              </text>
              <text x="330" y="475" fill="#6A5749" fontSize="11" fontFamily="serif" letterSpacing="2.5" fontWeight="bold">
                D E C C A N   P L A T E A U
              </text>

              {/* Settlement Location Markers */}
              {filteredLocations.map((loc) => {
                const { x, y } = projectCoords(loc.lat, loc.lng);
                const isSelected = activeLocation?.id === loc.id;
                const markerColor = eraColors[loc.eraId] || '#8C2F15';

                return (
                  <g
                    key={loc.id}
                    className="cursor-pointer transition-transform group"
                    onClick={() => setActiveLocation(loc)}
                  >
                    {/* Pulsing ring on selected */}
                    {isSelected && (
                      <circle
                        cx={x}
                        cy={y}
                        r="16"
                        fill="none"
                        stroke={markerColor}
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className="animate-spin"
                        style={{ animationDuration: '8s' }}
                      />
                    )}

                    {/* Outer glow target */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? "10" : "7"}
                      fill={isSelected ? markerColor : "#FFFDF9"}
                      stroke={markerColor}
                      strokeWidth={isSelected ? "3" : "2"}
                      className="transition-all duration-200 group-hover:scale-125 shadow-md"
                    />

                    {/* Center core */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? "4" : "3"}
                      fill={isSelected ? "#FFFDF9" : markerColor}
                    />

                    {/* Site Name Label */}
                    <text
                      x={x + 11}
                      y={y + 4}
                      fill={isSelected ? "#2A1810" : "#4A3528"}
                      fontSize={isSelected ? "13" : "11"}
                      fontWeight={isSelected ? "800" : "600"}
                      fontFamily="Cinzel, serif"
                      className="transition-all pointer-events-none drop-shadow-sm"
                    >
                      {loc.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-[#7D6B5C] font-mono">
            <span>Coordinates: 7.5°N–35.5°N / 67.0°E–91.5°E</span>
            <span className="text-[#8C2F15] font-cinzel font-semibold">Click any site to examine archaeological records</span>
          </div>
        </div>

        {/* Selected Settlement Inspector Card */}
        <div className="lg:col-span-4 space-y-4">
          {activeLocation ? (
            <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#DFD2BC] p-6 shadow-md space-y-5 animate-fade-in relative overflow-hidden"
                 style={{ borderLeftColor: eraColors[activeLocation.eraId], borderLeftWidth: '5px' }}>
              <div className="border-b border-[#E8DCC8] pb-3.5">
                <div className="flex items-center gap-2 text-xs text-[#7D6B5C] mb-1 font-semibold">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: eraColors[activeLocation.eraId] }}
                  />
                  <span className="font-cinzel text-[#8C2F15]">
                    {ERAS_DATA.find(e => e.id === activeLocation.eraId)?.name}
                  </span>
                </div>
                <h2 className="font-cinzel text-2xl font-bold text-[#2A1810]">
                  {activeLocation.name}
                </h2>
                {activeLocation.ancientName && (
                  <div className="text-xs text-[#8C2F15] font-serif italic mt-0.5 font-medium">
                    Ancient / Epigraphical Name: <span className="font-bold">{activeLocation.ancientName}</span>
                  </div>
                )}
              </div>

              {/* Geographic Details */}
              <div className="space-y-2 text-xs text-[#4A3528] bg-[#FAF4E8] p-4 rounded-2xl border border-[#DFD2BC]">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#2A1810] font-cinzel">Modern Region:</span>
                  <span className="text-[#2A1810] font-serif font-medium">{activeLocation.state}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#2A1810] font-cinzel">Coordinates:</span>
                  <span className="font-mono text-[#8C2F15] font-bold">{activeLocation.lat}° N, {activeLocation.lng}° E</span>
                </div>
              </div>

              {/* Significance */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#8C2F15] font-cinzel mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C87A1E]" />
                  <span>Historical & Strategic Significance</span>
                </h3>
                <p className="text-[#3D291D] text-sm leading-relaxed font-serif">
                  {activeLocation.significance}
                </p>
              </div>

              {/* Excavation and Epigraphy */}
              <div className="space-y-3 pt-3 border-t border-[#E8DCC8] text-xs">
                <div>
                  <span className="font-bold text-[#2A1810] font-cinzel block mb-0.5">Archaeological Excavation:</span>
                  <span className="text-[#4A3528] font-serif">{activeLocation.keyExcavation}</span>
                </div>
                <div>
                  <span className="font-bold text-[#2A1810] font-cinzel block mb-0.5 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#8C2F15]" />
                    <span>Primary Reference:</span>
                  </span>
                  <span className="text-[#7D6B5C] italic font-serif">{activeLocation.primarySource}</span>
                </div>
              </div>

              {/* Jump to Timeline Button */}
              <button
                onClick={() => {
                  const linkedMilestone = ERAS_DATA.flatMap(e => e.milestones).find(
                    m => m.region.name.toLowerCase().includes(activeLocation.name.toLowerCase()) ||
                         activeLocation.name.toLowerCase().includes(m.region.name.toLowerCase())
                  );
                  if (linkedMilestone) {
                    setSelectedMilestone(linkedMilestone);
                  } else {
                    setActiveTab('timeline');
                  }
                }}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#2A1810] to-[#451B0E] hover:from-[#1C0F0A] hover:to-[#38160B] text-[#FDE68A] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border border-[#C89D52] font-cinzel uppercase tracking-wider shadow-sm cursor-pointer"
              >
                <span>Read Full Milestone Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="p-8 text-center bg-[#FFFDF9] rounded-3xl border border-[#DFD2BC] text-[#7D6B5C] text-sm font-serif">
              Click any site on the map to inspect its archaeological and historical findings.
            </div>
          )}

          {/* Quick Settlement Directory */}
          <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#DFD2BC] p-5 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C2F15] font-cinzel mb-3 flex items-center justify-between">
              <span>Settlement Directory</span>
              <span className="font-mono text-[#7D6B5C]">({filteredLocations.length})</span>
            </h4>
            <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 scrollbar-none">
              {filteredLocations.map(loc => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocation(loc)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                    activeLocation?.id === loc.id
                      ? 'bg-[#FAF4E8] font-bold text-[#8C2F15] border border-[#C89D52]/60 shadow-2xs'
                      : 'text-[#4A3528] hover:bg-[#FAF4E8] hover:text-[#2A1810]'
                  }`}
                >
                  <span className="truncate font-cinzel font-semibold">{loc.name}</span>
                  <span className="text-[11px] text-[#7D6B5C] shrink-0 font-mono ml-2">
                    {loc.state.split(',')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
