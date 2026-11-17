import { useState, useRef, useEffect } from 'react';
import weddingSong from '../../assets/Song.mp3';

export default function MusicPlayer({ guestSide }) {
  const isGroom = guestSide === 'groom';
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const theme = isGroom
    ? {
        btnBg: 'bg-blue-900/80 border-blue-500/30 text-white hover:bg-blue-800',
        glow: 'shadow-blue-500/20'
      }
    : {
        btnBg: 'bg-rose-950/80 border-rose-500/30 text-white hover:bg-rose-900',
        glow: 'shadow-rose-500/20'
      };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={weddingSong} loop preload="auto" />

      <button
        onClick={togglePlay}
        className={`flex items-center gap-2.5 px-4 py-3 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 ${theme.btnBg} ${theme.glow}`}
        title={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      >
        <span className="relative flex h-3 w-3">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? 'bg-amber-400' : 'bg-slate-400'}`}></span>
        </span>

        <span className="text-xs font-serif uppercase tracking-widest">
          {isPlaying ? "♫ Playing Music" : "▶ Play Music"}
        </span>
      </button>
    </div>
  );
}