import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Filter } from 'lucide-react';

const JobSearch = () => {
  return (
    <section id="job-search" className="section-padding relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
            <div className="lg:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-white/60 ml-1">Search Jobs</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Role, company, or keyword"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-blue transition-colors backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-white/60 ml-1">Category</label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white appearance-none focus:outline-none focus:border-primary-blue transition-colors backdrop-blur-sm">
                  <option className="bg-navbar-bg">All Categories</option>
                  <option className="bg-navbar-bg">Development</option>
                  <option className="bg-navbar-bg">Design</option>
                  <option className="bg-navbar-bg">Marketing</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <button className="btn-gradient w-full py-4 flex items-center justify-center gap-3 text-lg font-bold">
                <Filter className="w-5 h-5" />
                Find Jobs
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <span className="text-sm text-white/40">Popular:</span>
            {['Frontend', 'Backend', 'UI/UX Design', 'Product Manager'].map((tag) => (
              <button 
                key={tag}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobSearch;
