import { useState } from 'react';
import heroVideo from '../../assets/Hero.mp4'; 

export default function Hero({ guestSide }) {
  const isGroom = guestSide === 'groom';
  const [activeVibe, setActiveVibe] = useState(false);

  // الألوان والتصميمات المخصصة لكل فريق
  const theme = isGroom
    ? {
        badgeBg: 'bg-blue-950/60 border-blue-400/30 text-blue-200 shadow-blue-950/40',
        buttonStyle: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-slate-900 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] border-blue-400/30',
        accentGlow: 'bg-blue-600/20',
        quote: '“Behind every successful man is a woman keeping him in check... and tonight, Hossam gets officially locked in!”',
        vibeText: '✨ Royal Blue Mode Activated ✨',
        defaultBtnText: '✦ The Gentleman Journey ✦',
        ringColor: 'from-transparent via-blue-400/60 to-transparent'
      }
    : {
        badgeBg: 'bg-rose-950/60 border-rose-400/30 text-rose-200 shadow-rose-950/40',
        buttonStyle: 'bg-gradient-to-r from-rose-700 via-pink-600 to-purple-900 hover:shadow-[0_0_35px_rgba(225,29,72,0.5)] border-rose-400/30',
        accentGlow: 'bg-rose-600/20',
        quote: '“A fairytale in the making. Get ready to celebrate the absolute queen of the night, Menna!”',
        vibeText: '✨ Rose Gold Magic Activated ✨',
        defaultBtnText: '✦ The Fairytale Begins ✦',
        ringColor: 'from-transparent via-rose-400/60 to-transparent'
      };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden text-slate-100">
      
      {/* 1. خلفية الفيديو الاحترافية بوضوح أعلى */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover filter brightness-[0.65] contrast-[1.1]"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* طبقات تظليل خفيفة جداً وشفافة عشان الفيديو يظهر بوضوح والنصوص تبقى مقروءة */}
        <div className={`absolute inset-0 transition-all duration-700 ${theme.accentGlow} backdrop-blur-[0.5px] mix-blend-overlay`}></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* 2. المحتوى الرئيسي فوق الفيديو */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* شارة الضيف المميزة */}
        <div className={`inline-flex items-center gap-2.5 px-6 py-2 rounded-full border text-xs uppercase tracking-[0.35em] font-medium backdrop-blur-xl mb-6 shadow-2xl transition-all duration-500 ${theme.badgeBg}`}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{isGroom ? "Groom's VIP Guest 🤵‍♂️" : "Bride's VIP Guest 👰‍♀️"}</span>
        </div>

        {/* تاريخ الفرح */}
        <p className="text-xs uppercase tracking-[0.5em] text-amber-300 font-semibold mb-4 drop-shadow-md">
          Thursday • December 17, 2026
        </p>

        {/* الأسماء بتصميم Editorial فخم */}
        <div className="my-2 relative">
          <h1 className="font-script text-7xl sm:text-9xl md:text-[10rem] text-white leading-none tracking-tight drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all">
            Hossam
          </h1>
          
          <div className="flex items-center justify-center gap-6 my-2">
            <span className={`h-px w-20 sm:w-32 bg-linear-to-r ${theme.ringColor}`}></span>
            <span className="font-serif italic text-3xl sm:text-5xl text-amber-400 font-light">&amp;</span>
            <span className={`h-px w-20 sm:w-32 bg-linear-to-l ${theme.ringColor}`}></span>
          </div>

          <h1 className="font-script text-7xl sm:text-9xl md:text-[10rem] text-white leading-none tracking-tight drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all">
            Menna
          </h1>
        </div>

        {/* الاقتباس */}
        <p className="text-sm sm:text-lg text-slate-100 max-w-xl mx-auto leading-relaxed font-serif italic mt-6 mb-10 drop-shadow-md">
          {theme.quote}
        </p>

        {/* الزرار التفاعلي */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setActiveVibe(!activeVibe)}
            className={`px-8 py-4 rounded-2xl text-xs uppercase tracking-[0.25em] font-bold text-white transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-xl shadow-2xl ${theme.buttonStyle}`}
          >
            {activeVibe ? theme.vibeText : theme.defaultBtnText}
          </button>
        </div>

        {/* تفاصيل المكان المصغرة أسفل الهيرو */}
        <div className="mt-16 pt-8 border-t border-white/20 flex items-center justify-center gap-6 sm:gap-8 text-xs tracking-widest uppercase text-slate-200 font-serif drop-shadow">
          <span>Baron Halls</span>
          <span>•</span>
          <span>Qalyubia, Egypt</span>
          <span>•</span>
          <span>7:00 PM</span>
        </div>

      </div>

    </section>
  );
}