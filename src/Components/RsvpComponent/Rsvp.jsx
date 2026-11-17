import { useState } from 'react';

export default function RsvpSection({ guestSide }) {
  const isGroom = guestSide === 'groom';
  const [guestName, setGuestName] = useState('');
  const [guestsCount, setGuestsCount] = useState('1');
  const [attendance, setAttendance] = useState('yes');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // رقم الواتساب المستهدف لتلقي رسائل الـ RSVP (يمكنك استبداله برقم حسام أو منة الفعلي)
  const targetWhatsAppNumber = "201000000000"; // اكتب الرقم بصيغة الدولة بدون علامة +

  const theme = isGroom
    ? {
        accent: 'text-blue-900 dark:text-blue-400',
        sectionBg: 'bg-slate-50 dark:bg-[#070b14]',
        cardBg: 'bg-white/95 dark:bg-blue-950/20 border-slate-200 dark:border-blue-500/30',
        glow: 'bg-blue-600/10',
        activePill: 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg shadow-blue-500/30 border-transparent',
        btn: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-slate-900 text-white shadow-blue-500/30 hover:shadow-blue-500/50'
      }
    : {
        accent: 'text-rose-950 dark:text-rose-400',
        sectionBg: 'bg-rose-50/30 dark:bg-[#070b14]',
        cardBg: 'bg-white/95 dark:bg-rose-950/20 border-rose-200 dark:border-rose-500/30',
        glow: 'bg-rose-600/10',
        activePill: 'bg-gradient-to-r from-rose-700 to-pink-800 text-white shadow-lg shadow-rose-500/30 border-transparent',
        btn: 'bg-gradient-to-r from-rose-700 via-pink-600 to-purple-900 text-white shadow-rose-500/30 hover:shadow-rose-500/50'
      };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSubmitted(true);

    // تجهيز رسالة واتساب تفاعلية وجاهزة للإرسال فوراً
    const statusText = attendance === 'yes' ? '🎉 مؤكد حضور الحفل (Joyfully Accepts)' : '🕊️ يعتذر عن الحضور (Regretfully Declines)';
    const message = encodeURIComponent(
      `✦ *رسالة تأكيد حضور جديدة - زفاف حسام ومنة*\n\n` +
      `👤 *اسم الضيف:* ${guestName}\n` +
      `👥 *عدد الأفراد:* ${attendance === 'yes' ? guestsCount : 'غير متاح'}\n` +
      `🎯 *الحالة:* ${statusText}\n` +
      `🎁 *جهة الدعوة:* ${isGroom ? 'طرف العريس (حسام)' : 'طرف العروسة (منة)'}`
    );

    // فتح رابط واتساب بشكل آلي ومباشر للفعالية الحقيقية
    window.open(`https://wa.me/${targetWhatsAppNumber}?text=${message}`, '_blank');
  };

  return (
    <section className={`relative py-28 px-4 transition-colors duration-500 ${theme.sectionBg} text-slate-900 dark:text-white overflow-hidden`}>
      
      {/* إضاءة خلفية ناعمة */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${theme.glow} rounded-full blur-3xl pointer-events-none`}></div>

      <div className={`max-w-xl mx-auto p-10 sm:p-14 rounded-[3rem] border ${theme.cardBg} backdrop-blur-2xl shadow-2xl relative z-10`}>
        
        {/* أيقونة قلب ملكية في الأعلى */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-500 dark:text-amber-300 text-2xl shadow-xl backdrop-blur-md">
          ♥
        </div>

        <span className={`text-[11px] uppercase tracking-[0.45em] font-bold mb-3 block ${theme.accent}`}>
          ✦ R.S.V.P ✦
        </span>
        
        <h3 className="font-serif text-3xl sm:text-5xl font-light mb-2 tracking-wide">
          Confirm Your Attendance
        </h3>
        
        <p className="text-xs sm:text-sm opacity-70 font-serif italic mb-10">
          Kindly let us know if you'll be joining our celebration.
        </p>

        {isSubmitted ? (
          <div className="py-12 px-6 rounded-[2rem] bg-current/3 border border-current/10 text-center backdrop-blur-md animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
              ✓
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-medium mb-3">
              {attendance === 'yes' ? `See You There, ${guestName}!` : `You Will Be Missed, ${guestName}`}
            </h4>
            <p className="text-xs sm:text-sm opacity-75 max-w-sm mx-auto leading-relaxed">
              {attendance === 'yes' 
                ? `Thank you! Your spot (${guestsCount} guests) has been submitted & sent via WhatsApp.` 
                : 'Thank you for updating us. We will miss you on our special night.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleRsvpSubmit} className="space-y-6 text-left">
            
            {/* أزرار اختيار الحالة */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAttendance('yes')}
                className={`py-4 px-4 rounded-2xl border text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer ${
                  attendance === 'yes' ? theme.activePill : 'border-current/20 opacity-70 hover:opacity-100 bg-white/40 dark:bg-black/20'
                }`}
              >
                ✦ Joyfully Accepts
              </button>
              <button
                type="button"
                onClick={() => setAttendance('no')}
                className={`py-4 px-4 rounded-2xl border text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer ${
                  attendance === 'no' ? theme.activePill : 'border-current/20 opacity-70 hover:opacity-100 bg-white/40 dark:bg-black/20'
                }`}
              >
                Regretfully Declines
              </button>
            </div>

            {/* حقل اسم الضيف */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] opacity-75 mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-5 py-4 rounded-2xl border border-current/20 bg-white/50 dark:bg-black/30 backdrop-blur-md focus:outline-none focus:border-current text-sm transition-all shadow-inner"
              />
            </div>

            {/* قائمة عدد الأفراد (تظهر فقط عند تأكيد الحضور) */}
            {attendance === 'yes' && (
              <div className="animate-fade-in">
                <label className="block text-[10px] uppercase tracking-[0.25em] opacity-75 mb-2 font-semibold">
                  Number of Guests
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl border border-current/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md focus:outline-none focus:border-current text-sm cursor-pointer shadow-inner"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">Family (4+ Persons)</option>
                </select>
              </div>
            )}

            {/* زر الإرسال الفعلي */}
            <button
              type="submit"
              className={`w-full py-4 rounded-2xl font-semibold uppercase text-xs tracking-[0.25em] transition-all duration-300 shadow-xl hover:scale-[1.02] cursor-pointer border border-current/10 ${theme.btn}`}
            >
              Confirm & Send via WhatsApp ✦
            </button>

          </form>
        )}
      </div>
    </section>
  );
}