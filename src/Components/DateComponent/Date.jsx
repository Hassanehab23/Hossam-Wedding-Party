export default function DateSection({ guestSide }) {
  const isGroom = guestSide === 'groom';
  
  const theme = isGroom
    ? {
        accent: 'text-blue-900 dark:text-blue-400',
        sectionBg: 'bg-slate-50 dark:bg-[#070b14]',
        cardBg: 'bg-white/95 dark:bg-blue-950/20 border-slate-200 dark:border-blue-500/30',
        glow: 'bg-blue-600/10',
        activeDay: 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-500/40 scale-110 ring-4 ring-blue-400/30'
      }
    : {
        accent: 'text-rose-950 dark:text-rose-400',
        sectionBg: 'bg-rose-50/30 dark:bg-[#070b14]',
        cardBg: 'bg-white/95 dark:bg-rose-950/20 border-rose-200 dark:border-rose-500/30',
        glow: 'bg-rose-600/10',
        activeDay: 'bg-gradient-to-br from-rose-600 to-pink-700 text-white shadow-xl shadow-rose-500/40 scale-110 ring-4 ring-rose-400/30'
      };

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  const calendarDays = [
    '', '', '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19',
    '20', '21', '22', '23', '24', '25', '26',
    '27', '28', '29', '30', '31', '', ''
  ];

  return (
    <section className={`relative py-28 px-4 text-center transition-colors duration-500 ${theme.sectionBg} text-slate-900 dark:text-white overflow-hidden`}>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${theme.glow} rounded-full blur-3xl pointer-events-none`}></div>

      <div className={`max-w-xl mx-auto p-10 sm:p-14 rounded-[3rem] border ${theme.cardBg} backdrop-blur-2xl shadow-2xl relative z-10`}>
        
        {/* أيقونة قلب ملكية في الأعلى */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-500 dark:text-amber-300 text-2xl shadow-xl backdrop-blur-md">
          ♥
        </div>

        <span className={`text-[11px] uppercase tracking-[0.45em] font-bold mb-3 block ${theme.accent}`}>
          ✦ Save The Date ✦
        </span>
        
        <h3 className="font-serif text-4xl sm:text-5xl font-light mb-2 tracking-wide">
          December 2026
        </h3>
        
        <div className="flex items-center justify-center gap-3 mb-8 opacity-80 font-serif italic text-base">
          <span>Thursday, Dec 17</span>
          <span className="text-amber-500">✦</span>
          <span>7:00 PM</span>
        </div>

        {/* تصميم الكلايندر العصري الأنيق */}
        <div className="p-6 rounded-[2rem] bg-current/2 border border-current/10 max-w-sm mx-auto shadow-inner backdrop-blur-md">
          
          <div className="grid grid-cols-7 gap-1 mb-3">
            {daysOfWeek.map((d, i) => (
              <div key={`header-${i}`} className="text-[11px] uppercase font-bold tracking-widest opacity-50 py-1">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => {
              const isTargetDay = day === '17';
              return (
                <div
                  key={index}
                  className={`h-10 w-10 mx-auto flex flex-col items-center justify-center rounded-2xl text-sm font-serif transition-all duration-300 relative ${
                    isTargetDay
                      ? theme.activeDay
                      : day
                      ? 'hover:bg-current/10 opacity-75 hover:opacity-100 cursor-pointer'
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <span className={isTargetDay ? 'font-bold' : ''}>{day}</span>
                  {isTargetDay && (
                    <span className="absolute -top-2 -right-2 text-[11px] animate-bounce">
                      ♥
                    </span>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        <p className="text-xs sm:text-sm opacity-70 font-serif max-w-sm mx-auto mt-8 leading-relaxed">
          Mark this day on your calendar as the beginning of an unforgettable celebration.
        </p>
      </div>
    </section>
  );
}