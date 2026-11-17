export default function VenueSection({ guestSide }) {
  const isGroom = guestSide === 'groom';
  const mapsUrl = "https://maps.app.goo.gl/ePcbJGXemWvCTFn49?g_st=iw7";
  
  const theme = isGroom
    ? {
        accent: 'text-blue-900 dark:text-blue-400',
        sectionBg: 'bg-slate-100 dark:bg-[#070b14]',
        cardBg: 'bg-white/95 dark:bg-blue-950/20 border-slate-200 dark:border-blue-500/30',
        glow: 'bg-blue-600/10',
        badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20',
        pinBg: 'bg-blue-600 shadow-blue-500/50',
        btn: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-slate-900 text-white shadow-blue-500/30 hover:shadow-blue-500/50 border-blue-400/30'
      }
    : {
        accent: 'text-rose-950 dark:text-rose-400',
        sectionBg: 'bg-rose-50/30 dark:bg-[#070b14]',
        cardBg: 'bg-white/95 dark:bg-rose-950/20 border-rose-200 dark:border-rose-500/30',
        glow: 'bg-rose-600/10',
        badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/20',
        pinBg: 'bg-rose-600 shadow-rose-500/50',
        btn: 'bg-gradient-to-r from-rose-700 via-pink-600 to-purple-900 text-white shadow-rose-500/30 hover:shadow-rose-500/50 border-rose-400/30'
      };

  return (
    <section className={`relative py-28 px-4 text-center transition-colors duration-500 ${theme.sectionBg} text-slate-900 dark:text-white overflow-hidden`}>
      
      {/* إضاءة خلفية ناعمة */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${theme.glow} rounded-full blur-3xl pointer-events-none`}></div>

      <div className={`max-w-xl mx-auto p-10 sm:p-14 rounded-[3rem] border ${theme.cardBg} backdrop-blur-2xl shadow-2xl relative z-10`}>
        
        {/* أيقونة اللوكيشن النابضة في الأعلى */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-500 dark:text-amber-300 text-2xl shadow-xl backdrop-blur-md">
          📍
        </div>

        <span className={`text-[11px] uppercase tracking-[0.45em] font-bold mb-3 block ${theme.accent}`}>
          ✦ The Location ✦
        </span>
        
        <h3 className="font-serif text-4xl sm:text-6xl font-light mb-2 tracking-wide">
          Baron Halls
        </h3>
        
        <p className="opacity-75 font-serif italic text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
          Qalyubia, Egypt • Join us as we celebrate our special night.
        </p>

        {/* تصميم "بطاقة الخريطة المصغرة" (Mini Map Card) الاحترافي */}
        <div className="relative p-6 mb-8 rounded-[2rem] bg-current/2 border border-current/10 max-w-sm mx-auto shadow-inner overflow-hidden group">
          
          {/* تأثير خطوط شبكة الخرائط في الخلفية */}
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#64748b_1px,transparent_1px)] bg-size-[16px_16px]"></div>

          <div className="relative z-10 flex flex-col items-center gap-3">
            
            {/* مؤشر الموقع (Pin) مع تأثير النابض */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-current/10 bg-white/50 dark:bg-black/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.pinBg} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${theme.pinBg}`}></span>
              </span>
              <span className="text-[11px] font-serif tracking-widest uppercase font-semibold">
                GPS Location Verified
              </span>
            </div>

            <p className="text-xs font-serif opacity-75">
              Baron Halls - قاعات بارون، القليوبية
            </p>

          </div>
        </div>

        {/* زرار الاتجاهات الفخم */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold uppercase text-xs tracking-[0.25em] transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer backdrop-blur-xl border ${theme.btn}`}
        >
          <span>Get Directions (Google Maps)</span>
          <span>↗</span>
        </a>

      </div>
    </section>
  );
}