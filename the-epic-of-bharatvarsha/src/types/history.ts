export interface HistoricalSource {
  title: string;
  type: 'Primary Epigraphy' | 'Archaeological Report' | 'Ancient Text' | 'Academic Monograph' | 'Travelogue';
  authorOrAttribution: string;
  periodOrPublication: string;
  citationSnippet: string;
}

export interface Milestone {
  id: string;
  eraId: string;
  title: string;
  yearRange: string;
  region: {
    name: string;
    modernState: string;
    coordinates?: [number, number]; // approx [lat, lng] for map
  };
  shortSummary: string;
  detailedExplanation: string;
  causalImpact: string; // How this event triggered what came next
  keyArtifactOrFeature: string;
  sources: HistoricalSource[];
  imageUrl?: string;
  tags: string[];
}

export interface TransitionBridge {
  fromEraId: string;
  toEraId: string;
  title: string;
  ecologicalFactors: string;
  technologicalShifts: string;
  socialPoliticalEvolution: string;
  summaryExplanation: string;
}

export interface Era {
  id: string;
  order: number;
  name: string;
  sanskritName: string;
  timeSpan: string;
  epochRange: string; // e.g. "c. 3300 BCE – 1300 BCE"
  tagline: string;
  overview: string;
  dominantGeographies: string[];
  civilizationAttributes: string[];
  themeColor: {
    primary: string;
    badgeBg: string;
    border: string;
    accent: string;
    glow: string;
  };
  transitionToNext?: TransitionBridge;
  milestones: Milestone[];
}

export interface HeritageSite {
  id: string;
  name: string;
  district: string;
  modernState: string;
  eraId: string;
  historicalPeriod: string;
  unescoDesignationYear?: number;
  description: string;
  architecturalStyle: string;
  keyHighlights: string[];
  historicalContext: string;
  archaeologicalFindings: string[];
  conservationBody: string;
  primarySources: HistoricalSource[];
  coordinates: [number, number];
  visitingSignificance: string;
}

export interface MapLocation {
  id: string;
  name: string;
  ancientName?: string;
  eraId: string;
  lat: number;
  lng: number;
  state: string;
  significance: string;
  keyExcavation: string;
  primarySource: string;
}

export interface QuizQuestion {
  id: string;
  eraId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UserProgress {
  completedMilestones: string[];
  completedEras: string[];
  bookmarkedMilestones: string[];
  quizScores: Record<string, number>;
  lastViewedMilestoneId: string | null;
}
