import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Search, ArrowRight } from 'lucide-react';

const ApplicationStatus = () => {
  return (
    <section id="app-status" className="section-padding relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex p-4 rounded-3xl bg-primary-blue/10 mb-6"
          >
            <Activity className="w-10 h-10 text-primary-blue" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Check Application Status
          </motion.h2>
          <p className="text-white/60">
            Already applied? Enter your unique Application ID below to see the current 
            stage of your recruitment process.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 border border-white/10 text-center"
        >
          <div className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white/60 flex justify-start ml-1">Application ID</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input 
                  type="text" 
                  placeholder="e.g. APP-2024-8890"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-blue transition-colors backdrop-blur-sm tracking-widest uppercase font-mono"
                />
              </div>
            </div>

            <button className="btn-gradient w-full py-4 flex items-center justify-center gap-3 text-lg font-bold group">
              View Status
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-white/30 pt-4">
              Lost your Application ID? Check your confirmation email or <br />
              <button className="text-primary-blue hover:underline">contact our support team</button>.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-blue/5 rounded-full blur-[160px] -z-10" />
    </section>
  );
};

export default ApplicationStatus;
