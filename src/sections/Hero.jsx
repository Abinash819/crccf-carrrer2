import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="z-10 px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-primary-blue text-sm font-semibold tracking-wide uppercase mb-6 border border-white/20">
            Grow your future with us
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-accent-blue to-white font-bold">Career With Us</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore opportunities, apply for jobs, and grow your future in a specialized 
            environment crafting immersive digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              className="btn-gradient w-full sm:w-auto flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('active-jobs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Jobs
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button 
              className="glass px-8 py-3 rounded-full text-white font-medium hover:bg-white hover:text-primary-blue transition-all border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('resume-submission')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Submit Resume
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>

      {/* Subtle overlay elements */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
