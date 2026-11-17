export default function Footer({ guestSide }) {
  const isGroom = guestSide === 'groom';
  
  const theme = isGroom
    ? {
        accent: 'text-blue-300 dark:text-blue-400',
        lineGradient: 'from-transparent via-blue-500/40 to-transparent'
      }
    : {
        accent: 'text-rose-300 dark:text-rose-400',
        lineGradient: 'from-transparent via-rose-500/40 to-transparent'
      };

  return (
    <footer className="relative py-16 px-4 bg-slate-950 text-slate-200 text-center border-t border-white/10 overflow-hidden transition-colors duration-500">
      
      {/* إضاءة خلفية خافتة وناعمة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-md mx-auto relative z-10 space-y-4">
        
        {/* شارة رقيقة هادئة */}
        <span className={`text-[10px] uppercase tracking-[0.4em] font-medium block ${theme.accent}`}>
          Hossam & Menna
        </span>

        {/* الأسماء بستايل أنيق وناعم */}
        <h2 className="font-script text-4xl sm:text-6xl text-white tracking-wide">
          Forever Begins
        </h2>

        {/* فاصل أنيق ناعم */}
        <div className="flex items-center justify-center gap-3 my-2">
          <span className={`h-px w-12 bg-linear-to-r ${theme.lineGradient}`}></span>
          <span className="text-amber-400/80 text-xs">♥</span>
          <span className={`h-px w-12 bg-linear-to-l ${theme.lineGradient}`}></span>
        </div>

        {/* تاريخ وقاعة بستايل مجلة راقي ومضغوط */}
        <p className="text-[11px] sm:text-xs text-slate-400 font-serif tracking-[0.25em] uppercase">
          December 17, 2026 • Baron Halls
        </p>

      </div>
    </footer>
  );
}