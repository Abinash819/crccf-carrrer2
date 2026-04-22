import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Video, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ModeToggle = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full glass-card hover:scale-110 active:scale-95 shadow-2xl group transition-all duration-500"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme Mode"
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {themeMode === 'video' ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
          >
            <Moon className="w-6 h-6 text-white group-hover:text-primary-blue transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
          >
            <Video className="w-6 h-6 text-white group-hover:text-primary-blue transition-colors" />
          </motion.div>
        )}
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-sm">
        Switch to {themeMode === 'video' ? 'Dark Mode' : 'Video Mode'}
      </span>
    </motion.button>
  );
};

export default ModeToggle;
