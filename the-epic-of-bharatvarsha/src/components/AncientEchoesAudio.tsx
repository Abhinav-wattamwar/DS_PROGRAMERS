import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

export const AncientEchoesAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [showControls, setShowControls] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const intervalRef = useRef<number | null>(null);

  // Initialize and start audio synthesis
  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 1.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Low pass filter for warm, ancient wood/string resonance
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(480, ctx.currentTime);
      filter.Q.setValueAtTime(3, ctx.currentTime);
      filter.connect(masterGain);

      // Procedural Tanpura Drone frequencies (Root Sa = C#3 / 138.59 Hz, Pa = G#3 / 207.65 Hz)
      const baseFreqs = [
        138.59,         // Sa (Fundamental)
        138.59 * 1.002, // Subtle chorusing detune
        207.65,         // Pa (Fifth)
        277.18,         // High Sa (Octave)
        69.30,          // Sub-bass rumble
      ];

      oscillatorsRef.current = [];

      baseFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Warm saw & triangle blend
        osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Low volume per voice
        const voiceGain = idx === 0 ? 0.35 : idx === 4 ? 0.2 : 0.18;
        oscGain.gain.setValueAtTime(voiceGain, ctx.currentTime);

        // LFO for breathing drone shimmer
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.08, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(oscGain.gain);
        lfo.start();

        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        oscillatorsRef.current.push(osc);
      });

      // Periodic gentle temple singing bell chime every ~12 seconds
      const playTempleBell = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        const now = ctx.currentTime;
        const bellOsc = ctx.createOscillator();
        const bellGain = ctx.createGain();

        bellOsc.type = 'sine';
        // Tibetan / temple bell harmonic (approx 880Hz or 587Hz / Re)
        const bellFreq = [554.37, 659.25, 830.61][Math.floor(Math.random() * 3)];
        bellOsc.frequency.setValueAtTime(bellFreq, now);

        bellGain.gain.setValueAtTime(0, now);
        bellGain.gain.linearRampToValueAtTime(0.08, now + 0.04);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        bellOsc.connect(bellGain);
        bellGain.connect(masterGain);

        bellOsc.start(now);
        bellOsc.stop(now + 4.6);
      };

      intervalRef.current = window.setInterval(playTempleBell, 11000);
      playTempleBell(); // First soft chime

      setIsPlaying(true);
    } catch {
      // Audio context might fail if blocked; gracefully ignore
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      setTimeout(() => {
        oscillatorsRef.current.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        oscillatorsRef.current = [];
        setIsPlaying(false);
      }, 850);
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(val, audioCtxRef.current.currentTime);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      oscillatorsRef.current.forEach(osc => {
        try {
          osc.stop();
        } catch {
          // ignore
        }
      });
    };
  }, []);

  return (
    <div className="relative inline-flex items-center">
      <div className="flex items-center gap-1.5 bg-[#FAF3E3] hover:bg-[#F3E7CC] border border-[#C89D52]/60 px-3 py-1.5 rounded-full text-xs font-cinzel transition-all shadow-xs group">
        <button
          onClick={togglePlayback}
          className="flex items-center gap-2 text-[#6A4E23] hover:text-[#8C2F15] focus:outline-hidden"
          title={isPlaying ? 'Pause Ambient Sound' : 'Play Ancient Tanpura & Temple Bells'}
          aria-label={isPlaying ? 'Pause Ambient Sound' : 'Play Ancient Tanpura & Temple Bells'}
        >
          {isPlaying ? (
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B45309]"></span>
            </span>
          ) : (
            <Music className="w-3.5 h-3.5 text-[#B45309] group-hover:rotate-12 transition-transform" />
          )}

          <span className="font-semibold hidden sm:inline text-[11px] tracking-wide">
            {isPlaying ? 'Ancient Echoes (Playing)' : 'Ancient Echoes'}
          </span>
        </button>

        {isPlaying && (
          <button
            onClick={() => setShowControls(!showControls)}
            className="text-[#8C5E2D] hover:text-[#2A1810] p-0.5 rounded-sm"
            title="Adjust volume"
            aria-label="Adjust volume"
          >
            {volume === 0 ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
        )}
      </div>

      {/* Floating Volume Slider Popover */}
      {showControls && isPlaying && (
        <div className="absolute right-0 top-full mt-2 z-50 bg-[#FFFDF9] border border-[#C89D52] p-3 rounded-xl shadow-xl w-48 text-xs space-y-2 animate-fade-in">
          <div className="flex justify-between items-center text-[#6A4E23] font-cinzel text-[11px] font-bold">
            <span>Tanpura & Chime</span>
            <span>{Math.round(volume * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="0.6"
            step="0.02"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full accent-[#B45309] cursor-pointer"
          />
          <div className="text-[10px] text-[#8C7560] font-serif italic text-center">
            Procedural Sa-Pa harmonic resonance
          </div>
        </div>
      )}
    </div>
  );
};
