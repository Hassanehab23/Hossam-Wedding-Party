import { useState } from 'react';
import DarkModeButton from "./Components/DarkModeComponent/DarkMode";
import Hero from "./Components/HeroComponent/Hero";
import CountdownSection from "./Components/CountdownComponent/Countdown";
import DateSection from "./Components/DateComponent/Date";
import VenueSection from "./Components/VenueComponent/Venue";
// import RsvpSection from "./Components/RsvpComponent/Rsvp";
import WishesSection from "./Components/WishesComponent/Wishes";
import Footer from "./Components/FooterComponent/Footer";
import WelcomeModal from "./Components/WelcomeModalComponent/WelcomeModal";
import GallerySection from './Components/GallaryComponent/Gallary';
import MusicPlayer from './Components/MusicPlayerComponent/MusicPlayer';
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestSide, setGuestSide] = useState(null);

  const handleOpenInvitation = (side) => {
    setGuestSide(side);
    setIsOpen(true);
  };

  const handleResetSide = () => {
    setIsOpen(false);
    setGuestSide(null);
  };

  return (
    <main className="relative min-h-screen bg-[#faf7f2] dark:bg-[#080b14] text-slate-900 dark:text-stone-100 transition-colors duration-500 selection:bg-amber-500 selection:text-white">
      
      {!isOpen && (
        <WelcomeModal onOpenInvitation={handleOpenInvitation} />
      )}

      {isOpen && (
        <>
          {/* مشغل الموسيقى (يظهر ويفعل الأغنية بمجرد فتح الدعوة) */}
          <MusicPlayer guestSide={guestSide} />

          <DarkModeButton />

          <button
            onClick={handleResetSide}
            className="fixed top-6 left-6 z-40 px-4 py-2.5 rounded-full border border-amber-500/30 bg-white/80 dark:bg-slate-900/80 text-amber-600 dark:text-amber-400 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer text-xs uppercase tracking-widest flex items-center gap-2"
            title="Switch Side"
          >
            <span>←</span>
            <span>Switch Side</span>
          </button>
          
          <Hero guestSide={guestSide} />
          <CountdownSection guestSide={guestSide} />
          <DateSection guestSide={guestSide} />
          <VenueSection guestSide={guestSide} />
          <GallerySection guestSide={guestSide} />
          {/* <RsvpSection guestSide={guestSide} /> تم تفعيل قسم الحضور وربطه بواتساب */}
          <WishesSection guestSide={guestSide} />
          <Footer guestSide={guestSide} />
        </>
      )}

    </main>
  );
}

export default App;