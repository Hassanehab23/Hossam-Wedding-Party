import { useEffect } from 'react';

export default function AutoScrollButton() {

useEffect(() => {
    const ScrollDelay = 50;
    const ScroolStep=2;
    const ScrollInterval = setInterval(() => {
      window.scrollBy({top:ScroolStep,behavior:"smooth"})
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        clearInterval(ScrollInterval);}}, ScrollDelay);
    return () => clearInterval(ScrollInterval);
  }, []);
}