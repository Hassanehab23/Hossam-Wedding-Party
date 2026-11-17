import { useState } from 'react';
import imgone from "../../assets/1.jpeg";
import imgtwo from "../../assets/2.png";
import imgthree from "../../assets/3.png";
import imgfour from "../../assets/4.jpeg";

export default function GallerySection({ guestSide }) {
  const isGroom = guestSide === 'groom';
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 1, url: imgone, title: "The Beginning" },
    { id: 2, url: imgtwo, title: "Unforgettable Moments" },
    { id: 3, url: imgthree, title: "Pure Joy" },
    { id: 4, url: imgfour, title: "Forever Together" }
  ];

  const theme = isGroom
    ? {
        accent: 'text-blue-900 dark:text-blue-400',
        sectionBg: 'bg-slate-50 dark:bg-[#070b14]',
        cardBorder: 'border-blue-500/20 hover:border-blue-500/60',
        badge: 'bg-blue-950/20 text-blue-800 dark:text-blue-300 border-blue-500/20',
      }
    : {
        accent: 'text-rose-950 dark:text-rose-400',
        sectionBg: 'bg-rose-50/30 dark:bg-[#070b14]',
        cardBorder: 'border-rose-500/20 hover:border-rose-500/60',
        badge: 'bg-rose-950/20 text-rose-800 dark:text-rose-300 border-rose-500/20',
      };

  return (
    <section className={`relative py-20 sm:py-28 px-4 sm:px-6 transition-colors duration-500 ${theme.sectionBg} text-slate-900 dark:text-white overflow-hidden`}>
      
      {/* إضاءة خلفية ناعمة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* عنوان السكشن */}
        <span className={`inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] font-bold mb-3 px-4 py-1.5 rounded-full border ${theme.badge}`}>
          ♥ Our Love Story Gallery ♥
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-light mb-12 sm:mb-16 tracking-tight">
          Captured Moments
        </h2>

        {/* شبكة الصور */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo.url)}
              className={`group relative h-80 sm:h-96 rounded-[2rem] overflow-hidden border ${theme.cardBorder} bg-black/40 backdrop-blur-md shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex items-center justify-center p-4 ${
                index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              {/* الصورة بالكامل بوضوح تام ومن غير قص (object-contain) */}
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105 drop-shadow-md"
              />

              {/* طبقة التظليل والعنوان عند الهوفر */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="text-amber-400 text-lg mb-1">♥</span>
                <h4 className="font-serif text-white text-lg sm:text-xl font-medium tracking-wide">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-slate-300 uppercase tracking-widest mt-1">
                  Click to view full image
                </p>
              </div>

              {/* شعار قلب صغير في ركن الكارت */}
              <div className="absolute top-4 right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 text-xs shadow-md z-10">
                ♥
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* مودال لعرض الصورة بحجمها الكامل بوضوح عند الضغط عليها */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
}