import { useState, useEffect } from 'react';

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-6 right-6 z-50 p-3 rounded-full border border-amber-500/30 bg-white/80 dark:bg-slate-900/80 text-amber-600 dark:text-amber-400 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
      title="تغيير وضع الإضاءة"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}