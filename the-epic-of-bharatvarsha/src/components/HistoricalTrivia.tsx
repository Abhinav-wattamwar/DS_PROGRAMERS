import React, { useState } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, BookOpen, Scroll, Award } from 'lucide-react';

interface TriviaItem {
  id: number;
  tag: string;
  eraName: string;
  themeColor: string;
  title: string;
  fact: string;
  epigraphQuote?: string;
  source: string;
}

const TRIVIA_DATA: TriviaItem[] = [
  {
    id: 1,
    tag: 'Sanitation Marvel',
    eraName: 'Indus Valley',
    themeColor: '#C2410C',
    title: 'World\'s First Flush Toilets & Under-street Sewers (2600 BCE)',
    fact: 'Four and a half millennia ago, houses in Mohenjo-daro had terracotta flush latrines connecting via chutes into covered brick gutters along the street, featuring sediment traps for inspection—technology Europe wouldn\'t match until the 19th century.',
    epigraphQuote: '« सिन्धु-तीरे महातीर्थम् »',
    source: 'Archaeological Survey of India (ASI) Memoir No. 41'
  },
  {
    id: 2,
    tag: 'Mathematical Genius',
    eraName: 'Classical Antiquity',
    themeColor: '#1E3A8A',
    title: 'Zero, Negative Numbers & Earth\'s True Rotation',
    fact: 'In 499 CE at Kusumapura (Patna), 23-year-old Aryabhata calculated π to 3.1416 and stated that day and night are caused by the spherical Earth rotating on its own axis, centuries before Copernicus.',
    epigraphQuote: '« अनुलोमगतिर्नौस्थः पश्यत्यचलं विलोमगं यद्वत्। अचलानि भानि तद्वत् समपश्चिमगानि लङ्कायाम् ॥ »',
    source: 'Aryabhatiya, Gola-pada Verse 9'
  },
  {
    id: 3,
    tag: 'Monolithic Feat',
    eraName: 'Medieval Zenith',
    themeColor: '#047857',
    title: '200,000 Tons Carved from the Top Down at Ellora',
    fact: 'The Kailash Temple (Cave 16) was not built by stacking blocks; an entire basalt mountain was carved from apex down into a multi-story cathedral with 30-meter stone pillars and life-sized elephants, with zero room for a single chisel mistake.',
    epigraphQuote: '« कथमहो मयैतन्निर्मितम् » (Even the celestial builder was astonished)',
    source: 'Baroda Copper Plate Inscription of Karka II (812 CE)'
  },
  {
    id: 4,
    tag: 'Global Knowledge',
    eraName: 'Classical Antiquity',
    themeColor: '#B45309',
    title: 'Nalanda: 9-Story Library & 10,000 Resident Scholars',
    fact: 'Founded in 427 CE, Nalanda Mahavihara admitted scholars from China, Korea, Persia, and Tibet. Its library, Dharmaganja, housed hundreds of thousands of Sanskrit manuscripts across three massive multi-story pavilions.',
    epigraphQuote: '« विद्या ददाति विनयं विनयाद्याति पात्रताम् »',
    source: 'Xuanzang (Hiuen Tsang) Records of the Western Regions (645 CE)'
  },
  {
    id: 5,
    tag: 'Maritime Superpower',
    eraName: 'Medieval Zenith',
    themeColor: '#4338CA',
    title: 'The Chola Blue-Water Navy Across the Indian Ocean',
    fact: 'Under Rajendra Chola I (1025 CE), the Chola imperial armada sailed across 2,000 nautical miles of open ocean to defeat the Srivijaya maritime empire in Sumatra and the Malacca Strait, securing free trade routes with Song Dynasty China.',
    epigraphQuote: '« समुद्रं पारं गत्वा जयध्वजं संस्थाप्य »',
    source: 'Thanjavur Brihadisvara Temple Epigraphical Prasasti'
  },
  {
    id: 6,
    tag: 'Metallurgy Marvel',
    eraName: 'Classical Antiquity',
    themeColor: '#9A3412',
    title: 'The Rust-Proof Iron Pillar of Delhi (400 CE)',
    fact: 'Standing for over 1,600 years under monsoons and heat, this 6-ton pure wrought-iron pillar of Chandragupta II has not rusted due to a high phosphorus, passive protective iron-hydrogen-phosphate film developed by Gupta metallurgists.',
    epigraphQuote: '« कीर्त्या यश्च दिगन्तराणि जयिनो बाह्वोः स्वयोः पार्थिवः »',
    source: 'Mehrauli Inscription of King Chandra'
  },
];

export const HistoricalTrivia: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(prevIdx => (prevIdx === 0 ? TRIVIA_DATA.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex(prevIdx => (prevIdx === TRIVIA_DATA.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TRIVIA_DATA[currentIndex];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2A1810] via-[#3B1F13] to-[#25140C] text-[#FFF8ED] border-2 border-[#C89D52]/60 shadow-xl p-5 sm:p-7">
      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-2 left-2 text-[#C89D52]/40 select-none text-xs font-serif">✦</div>
      <div className="absolute top-2 right-2 text-[#C89D52]/40 select-none text-xs font-serif">✦</div>
      <div className="absolute bottom-2 left-2 text-[#C89D52]/40 select-none text-xs font-serif">✦</div>
      <div className="absolute bottom-2 right-2 text-[#C89D52]/40 select-none text-xs font-serif">✦</div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 border-b border-[#C89D52]/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#C89D52]/20 border border-[#C89D52]/50 text-[#F5C26B]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#E6C687] font-cinzel font-bold">
              Jewels of Bharatvarsha · Historical Discoveries
            </div>
            <div className="text-xs text-[#D8C7B5] font-serif">
              Curated epigraphical & archaeological facts that amaze historians
            </div>
          </div>
        </div>

        {/* Counter and Carousel buttons */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs font-mono text-[#E8C282]">
            {currentIndex + 1} / {TRIVIA_DATA.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={prev}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFF8ED] transition-colors border border-white/10"
              aria-label="Previous fact"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={next}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFF8ED] transition-colors border border-white/10"
              aria-label="Next fact"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span
            className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-cinzel text-white shadow-xs"
            style={{ backgroundColor: current.themeColor }}
          >
            {current.eraName}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#C89D52]/20 text-[#FCE7B8] border border-[#C89D52]/40 font-serif">
            {current.tag}
          </span>
          {current.epigraphQuote && (
            <span className="text-[#F3D39B] font-cormorant italic text-sm">
              {current.epigraphQuote}
            </span>
          )}
        </div>

        <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFF8ED] tracking-tight">
          {current.title}
        </h3>

        <p className="text-sm text-[#E2D5C3] font-serif leading-relaxed">
          {current.fact}
        </p>

        <div className="text-[11px] text-[#C2A584] font-serif flex items-center gap-1.5 pt-1">
          <Scroll className="w-3 h-3 text-[#D4AF37]" />
          <span>Attribution: {current.source}</span>
        </div>
      </div>
    </div>
  );
};
