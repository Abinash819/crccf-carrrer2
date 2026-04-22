import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Background = () => {
  const { themeMode } = useTheme();

  return (
    <div className="video-bg-container">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`video-bg ${themeMode === 'dark' ? 'opacity-0' : 'opacity-100'}`}
      >
        <source src="/assets/video/5439067-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay for glass effect / dark mode transition */}
      <div className="video-overlay" />
      
      {/* Particles or extra glass effects can be added here */}
      <AnimatePresence>
        {themeMode === 'video' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-blue-900/10 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Background;
