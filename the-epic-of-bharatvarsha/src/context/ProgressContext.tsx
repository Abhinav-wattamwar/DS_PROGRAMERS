import React, { createContext, useContext, useState, useEffect } from 'react';
import { ERAS_DATA } from '../data/historyData';
import { Milestone, UserProgress } from '../types/history';

interface ProgressContextType {
  progress: UserProgress;
  toggleMilestoneCompleted: (id: string) => void;
  toggleEraCompleted: (eraId: string) => void;
  toggleBookmark: (id: string) => void;
  recordQuizAnswer: (questionId: string, isCorrect: boolean) => void;
  resetAllProgress: () => void;
  
  // Navigation & inspection state
  activeTab: 'timeline' | 'roadmap' | 'map' | 'heritage' | 'mastery';
  setActiveTab: (tab: 'timeline' | 'roadmap' | 'map' | 'heritage' | 'mastery') => void;
  selectedMilestone: Milestone | null;
  setSelectedMilestone: (m: Milestone | null) => void;
  selectedEraId: string;
  setSelectedEraId: (eraId: string) => void;

  // Stats
  totalMilestonesCount: number;
  completedMilestonesCount: number;
  completionPercentage: number;
}

const STORAGE_KEY = 'itihasa_history_progress_v1';

const defaultProgress: UserProgress = {
  completedMilestones: ['m1-mehrgarh'], // 1 pre-unlocked to guide the user!
  completedEras: [],
  bookmarkedMilestones: [],
  quizScores: {},
  lastViewedMilestoneId: null,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse progress from localStorage', e);
    }
    return defaultProgress;
  });

  const [activeTab, setActiveTab] = useState<'timeline' | 'roadmap' | 'map' | 'heritage' | 'mastery'>('timeline');
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [selectedEraId, setSelectedEraId] = useState<string>('era-1');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to persist progress to localStorage', e);
    }
  }, [progress]);

  const allMilestones = ERAS_DATA.flatMap(e => e.milestones);
  const totalMilestonesCount = allMilestones.length;
  const completedMilestonesCount = progress.completedMilestones.length;
  const completionPercentage = Math.round((completedMilestonesCount / totalMilestonesCount) * 100);

  const toggleMilestoneCompleted = (id: string) => {
    setProgress(prev => {
      const isCompleted = prev.completedMilestones.includes(id);
      const nextCompleted = isCompleted
        ? prev.completedMilestones.filter(mId => mId !== id)
        : [...prev.completedMilestones, id];

      // Auto-check if all milestones in the milestone's era are now completed
      const milestone = allMilestones.find(m => m.id === id);
      let nextEras = [...prev.completedEras];

      if (milestone) {
        const era = ERAS_DATA.find(e => e.id === milestone.eraId);
        if (era) {
          const allInEraDone = era.milestones.every(m => nextCompleted.includes(m.id));
          if (allInEraDone && !nextEras.includes(era.id)) {
            nextEras.push(era.id);
          } else if (!allInEraDone && nextEras.includes(era.id)) {
            nextEras = nextEras.filter(eId => eId !== era.id);
          }
        }
      }

      return {
        ...prev,
        completedMilestones: nextCompleted,
        completedEras: nextEras,
      };
    });
  };

  const toggleEraCompleted = (eraId: string) => {
    const era = ERAS_DATA.find(e => e.id === eraId);
    if (!era) return;

    setProgress(prev => {
      const isEraCompleted = prev.completedEras.includes(eraId);
      let nextEras: string[];
      let nextMilestones = [...prev.completedMilestones];

      if (isEraCompleted) {
        nextEras = prev.completedEras.filter(id => id !== eraId);
      } else {
        nextEras = [...prev.completedEras, eraId];
        // Mark all milestones in this era as completed as well
        era.milestones.forEach(m => {
          if (!nextMilestones.includes(m.id)) {
            nextMilestones.push(m.id);
          }
        });
      }

      return {
        ...prev,
        completedEras: nextEras,
        completedMilestones: nextMilestones,
      };
    });
  };

  const toggleBookmark = (id: string) => {
    setProgress(prev => {
      const isBookmarked = prev.bookmarkedMilestones.includes(id);
      return {
        ...prev,
        bookmarkedMilestones: isBookmarked
          ? prev.bookmarkedMilestones.filter(mId => mId !== id)
          : [...prev.bookmarkedMilestones, id],
      };
    });
  };

  const recordQuizAnswer = (questionId: string, isCorrect: boolean) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [questionId]: isCorrect ? 1 : 0,
      },
    }));
  };

  const resetAllProgress = () => {
    setProgress({
      completedMilestones: [],
      completedEras: [],
      bookmarkedMilestones: [],
      quizScores: {},
      lastViewedMilestoneId: null,
    });
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        toggleMilestoneCompleted,
        toggleEraCompleted,
        toggleBookmark,
        recordQuizAnswer,
        resetAllProgress,
        activeTab,
        setActiveTab,
        selectedMilestone,
        setSelectedMilestone,
        selectedEraId,
        setSelectedEraId,
        totalMilestonesCount,
        completedMilestonesCount,
        completionPercentage,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
