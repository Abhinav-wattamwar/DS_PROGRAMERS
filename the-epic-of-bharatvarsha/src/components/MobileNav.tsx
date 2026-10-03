import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { Clock, GitFork, Map, Landmark, Award } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { activeTab, setActiveTab } = useProgress();

  const navItems = [
    { id: 'timeline' as const, label: 'Timeline', icon: Clock },
    { id: 'roadmap' as const, label: 'Roadmap', icon: GitFork },
    { id: 'map' as const, label: 'Map', icon: Map },
    { id: 'heritage' as const, label: 'Heritage', icon: Landmark },
    { id: 'mastery' as const, label: 'Quiz', icon: Award },
  ];

  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F7F2E7]/95 backdrop-blur-md border-t-2 border-[#D8C9B3] py-1.5 px-2 flex items-center justify-around shadow-2xl"
      style={{ minHeight: '56px' }}
    >
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center min-w-[56px] min-h-[46px] py-1 px-2 rounded-xl transition-all cursor-pointer ${
              isActive
                ? 'text-[#8C2F15] font-bold bg-[#FAF4E8] border border-[#C89D52]/50 shadow-2xs'
                : 'text-[#7D6B5C] hover:text-[#2A1810]'
            }`}
          >
            <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-[#8C2F15]' : 'text-[#8A7665]'}`} />
            <span className="text-[10px] tracking-tight font-cinzel font-semibold">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
