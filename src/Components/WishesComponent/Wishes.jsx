import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';

// 1. حط إعدادات الفايربيس بتاعت مشروعك هنا
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// تهيئة الفايربيس
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function  hesSection({ guestSide }) {
  const isGroom = guestSide === 'groom';
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // جلب الأماني من قاعدة البيانات والاصغاء للتحديثات لحظياً (Real-time)
  useEffect(() => {
    const q = query(collection(db, "wedding_wishes"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const wishesArray = [];
      querySnapshot.forEach((doc) => {
        wishesArray.push({ id: doc.id, ...doc.data() });
      });
      setWishes(wishesArray);
    }, (error) => {
      console.error("Error fetching wishes: ", error);
    });

    return () => unsubscribe();
  }, []);

  const theme = isGroom
    ? {
        accent: 'text-blue-900 dark:text-blue-400',
        sectionBg: 'bg-slate-50 dark:bg-[#070b14]',
        cardBg: 'bg-white/95 dark:bg-blue-950/20 border-slate-200 dark:border-blue-500/30',
        glow: 'bg-blue-600/10',
        btn: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-slate-900 text-white shadow-blue-500/30 hover:shadow-blue-500/50'
      }
    : {
        accent: 'text-rose-950 dark:text-rose-400',
        sectionBg: 'bg-rose-50/30 dark:bg-[#070b14]',
        cardBg: 'bg-white/95 dark:bg-rose-950/20 border-rose-200 dark:border-rose-500/30',
        glow: 'bg-rose-600/10',
        btn: 'bg-gradient-to-r from-rose-700 via-pink-600 to-purple-900 text-white shadow-rose-500/30 hover:shadow-rose-500/50'
      };

  const handleAddWish = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // إرسال التعليق لقاعدة البيانات السحابية مع وقت الإرسال
      await addDoc(collection(db, "wedding_wishes"), {
        name: name.trim(),
        message: message.trim(),
        createdAt: serverTimestamp()
      });
      setName('');
      setMessage('');
    } catch (error) {
      console.error("Error adding wish: ", error);
      alert("حدث خطأ أثناء إرسال الأمنية، يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`relative py-28 px-4 transition-colors duration-500 ${theme.sectionBg} text-slate-900 dark:text-white overflow-hidden`}>
      
      {/* إضاءة خلفية ناعمة */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${theme.glow} rounded-full blur-3xl pointer-events-none`}></div>

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* عنوان القسم */}
        <div className="text-center mb-12">
          <span className={`text-[11px] uppercase tracking-[0.45em] font-bold mb-3 block ${theme.accent}`}>
            ✦ Wishes &amp; Blessings ✦
          </span>
          <h3 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mb-3">
            Send Your Love
          </h3>
          <p className="text-xs sm:text-sm opacity-75 font-serif italic max-w-md mx-auto">
            Leave a warm note for Hossam & Menna as they start their forever.
          </p>
        </div>

        {/* نموذج كتابة الأمنية */}
        <form onSubmit={handleAddWish} className={`p-8 sm:p-10 rounded-[3rem] border ${theme.cardBg} backdrop-blur-2xl shadow-2xl text-left mb-12 space-y-6 relative`}>
          
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-500 dark:text-amber-300 text-xl shadow-lg backdrop-blur-md">
            ♥
          </div>

          <div className="pt-2">
            <label className="block text-[10px] uppercase tracking-[0.25em] opacity-75 mb-2 font-semibold">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-5 py-4 rounded-2xl border border-current/20 bg-white/50 dark:bg-black/30 backdrop-blur-md text-sm focus:outline-none focus:border-current shadow-inner transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.25em] opacity-75 mb-2 font-semibold">
              Your Wish
            </label>
            <textarea
              required
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a warm congratulation..."
              className="w-full px-5 py-4 rounded-2xl border border-current/20 bg-white/50 dark:bg-black/30 backdrop-blur-md text-sm focus:outline-none focus:border-current shadow-inner transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-2xl font-semibold uppercase text-xs tracking-[0.25em] transition-all duration-300 shadow-xl hover:scale-[1.02] cursor-pointer border border-current/10 ${theme.btn} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Posting...' : 'Post Blessing ✦'}
          </button>
        </form>

        {/* قائمة الأماني والتهاني المرتبطة بقاعدة البيانات */}
        <div className="space-y-4 text-left">
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] opacity-60 text-center mb-6">
            Global Wishes ({wishes.length})
          </h4>

          {wishes.length === 0 ? (
            <p className="text-center text-xs opacity-50 font-serif italic py-6">
              No wishes yet. Be the first to bless Hossam & Menna! ✨
            </p>
          ) : (
            wishes.map((wish) => (
              <div 
                key={wish.id} 
                className={`p-6 sm:p-8 rounded-[2rem] border ${theme.cardBg} backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-[1.01]`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className={`font-serif text-lg font-semibold tracking-wide ${theme.accent}`}>
                    {wish.name}
                  </h5>
                  <span className="text-[10px] opacity-50 tracking-widest uppercase font-serif">
                    Live
                  </span>
                </div>
                <p className="opacity-85 text-sm sm:text-base font-serif italic leading-relaxed">
                  "{wish.message}"
                </p>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}