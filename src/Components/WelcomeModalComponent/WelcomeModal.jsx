import { useState } from 'react';

export default function WelcomeModal({ onOpenInvitation }) {
  const [selectedSide, setSelectedSide] = useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070b14]/90 backdrop-blur-lg transition-all duration-500">
      
      {/* الكارت الرئيسي للمودال */}
      <div className="relative w-full max-w-md p-8 sm:p-10 text-center rounded-3xl border border-amber-500/30 bg-[#111827] text-stone-100 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* إضاءة خلفية تتغير حسب الاختيار */}
        <div className={`absolute -top-24 -left-24 w-56 h-56 rounded-full blur-3xl transition-colors duration-700 pointer-events-none ${
          selectedSide === 'groom' ? 'bg-blue-600/20' : selectedSide === 'bride' ? 'bg-rose-500/20' : 'bg-amber-500/15'
        }`}></div>

        <div className="relative z-10">
          <p className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-semibold mb-3">
            Exclusive Wedding Invitation
          </p>

          <h1 className="font-script text-5xl sm:text-6xl text-white my-2 drop-shadow">
            Hossam
            <span className="block sm:inline mx-3 text-3xl sm:text-4xl text-amber-400 font-serif italic">&amp;</span>
            Menna
          </h1>

          <div className="my-6 text-xs sm:text-sm font-serif tracking-[0.25em] text-slate-300 border-y border-white/10 py-2.5 uppercase">
            Thursday • December 17, 2026
          </div>

          <p className="text-sm text-slate-400 mb-6 font-serif italic">
            Choose your side to unlock your personalized experience:
          </p>

          {/* أزرار الاختيار مع Hover احترافي */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* زرار العريس (رجالي فخم) */}
            <button
              onClick={() => setSelectedSide('groom')}
              className={`group relative py-4 px-4 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                selectedSide === 'groom'
                  ? 'bg-linear-to-br from-slate-800 to-blue-950 border-blue-400 text-white shadow-[0_0_25px_rgba(59,130,246,0.3)] scale-[1.03]'
                  : 'border-white/15 bg-white/5 text-slate-300 hover:border-blue-400/60 hover:bg-blue-950/40 hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              <span className="text-2xl block mb-1 transition-transform duration-300 group-hover:scale-110">🤵‍♂️</span>
              <span className="font-serif font-semibold text-sm block tracking-wide">Team Hossam</span>
              <span className="text-[10px] uppercase tracking-widest text-blue-300/80 mt-0.5 block">Groom's Squad</span>
            </button>

            {/* زرار العروسة (ناعم وأنيق) */}
            <button
              onClick={() => setSelectedSide('bride')}
              className={`group relative py-4 px-4 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                selectedSide === 'bride'
                  ? 'bg-linear-to-br from-rose-950 to-pink-900 border-rose-400 text-white shadow-[0_0_25px_rgba(244,63,94,0.3)] scale-[1.03]'
                  : 'border-white/15 bg-white/5 text-slate-300 hover:border-rose-400/60 hover:bg-rose-950/40 hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              <span className="text-2xl block mb-1 transition-transform duration-300 group-hover:scale-110">👰‍♀️</span>
              <span className="font-serif font-semibold text-sm block tracking-wide">Team Menna</span>
              <span className="text-[10px] uppercase tracking-widest text-rose-300/80 mt-0.5 block">Bride's Tribe</span>
            </button>
          </div>

          {/* زرار فتح الدعوة مع Hover ديناميكي */}
          <button
            onClick={() => onOpenInvitation(selectedSide)}
            disabled={!selectedSide}
            className={`w-full py-4 rounded-2xl font-semibold tracking-[0.2em] transition-all duration-300 uppercase text-xs flex items-center justify-center gap-2 ${
              selectedSide === 'groom'
                ? 'bg-linear-to-r from-blue-700 to-slate-800 text-white border border-blue-400/40 hover:from-blue-600 hover:to-slate-700 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 cursor-pointer'
                : selectedSide === 'bride'
                ? 'bg-linear-to-r from-rose-600 to-pink-700 text-white border border-rose-300/40 hover:from-rose-500 hover:to-pink-600 hover:shadow-[0_10px_30px_rgba(225,29,72,0.4)] hover:-translate-y-0.5 cursor-pointer'
                : 'bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed'
            }`}
          >
            <span>Open Invitation</span>
            <span className="text-base">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}