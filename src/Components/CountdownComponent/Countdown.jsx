import { useState, useEffect } from 'react';

export default function CountdownSection({ guestSide }) {
  const isGroom = guestSide === 'groom';
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-12-17T20:00:00").getTime();
    const timer = setInterval(() => {
      const distance = targetDate - new Date().getTime();
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const theme = isGroom
    ? {
        accent: 'text-blue-900 dark:text-blue-300',
        numberColor: 'text-blue-600 dark:text-blue-400',
        sectionBg: 'bg-slate-100 dark:bg-[#050811]',
        cardBg: 'bg-white/95 dark:bg-blue-950/30 border-blue-500/30 shadow-blue-500/10',
        heartGlow: 'bg-blue-500/15'
      }
    : {
        accent: 'text-rose-950 dark:text-rose-300',
        numberColor: 'text-rose-600 dark:text-rose-400',
        sectionBg: 'bg-rose-50/50 dark:bg-[#050811]',
        cardBg: 'bg-white/95 dark:bg-rose-950/30 border-rose-500/30 shadow-rose-500/10',
        heartGlow: 'bg-rose-500/15'
      };

  return (
    <section className={`relative py-28 px-4 text-center transition-colors duration-500 ${theme.sectionBg} text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 overflow-hidden`}>
      
      {/* إضاءة خلفية ناعمة */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${theme.heartGlow} rounded-full blur-3xl pointer-events-none`}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <span className={`text-[11px] uppercase tracking-[0.4em] font-bold mb-3 block ${theme.accent}`}>
          ♥ The Clock is Ticking ♥
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-light mb-16">
          Counting Down To Forever
        </h2>

        {/* شبكة القلوب والأرقام الواضحة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-[2.5rem] border ${theme.cardBg} backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 group`}
            >
              {/* أيقونة قلب عروة في أعلى الكارت */}
              <div className="absolute -top-3 w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-500 text-xs shadow-md">
                ♥
              </div>

              <span className={`font-serif text-5xl sm:text-6xl font-normal ${theme.numberColor} drop-shadow-sm transition-transform group-hover:scale-110 my-2`}>
                {String(item.value).padStart(2, '0')}
              </span>
              
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] opacity-80 font-semibold mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}