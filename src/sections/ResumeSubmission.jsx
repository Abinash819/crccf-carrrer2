import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Briefcase, GitBranch, MessageSquare, FileUp } from 'lucide-react';

const ResumeSubmission = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Submit Resume
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary-blue mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Don't see a perfect fit? Submit your resume to our general talent pool 
            and we'll reach out when a suitable position becomes available.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8">HR Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-primary-blue/10 rounded-2xl group-hover:bg-primary-blue/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Talent Acquisition</p>
                    <p className="text-lg text-white font-medium">careers@innovatetech.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-primary-blue/10 rounded-2xl group-hover:bg-primary-blue/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">HR Helpline</p>
                    <p className="text-lg text-white font-medium">+1 (555) JOBS-CORE</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-primary-blue/10 rounded-2xl group-hover:bg-primary-blue/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Global HQ</p>
                    <p className="text-lg text-white font-medium">Innovation District, Tech City 10101</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">Stay Connected</p>
                <div className="flex gap-4">
                  {[Briefcase, GitBranch, MessageSquare].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -5, backgroundColor: "rgba(37, 99, 235, 0.2)" }}
                      className="p-3 glass rounded-xl border border-white/10 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Submission Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            id="resume-submission"
          >
            <form className="glass-card p-10 border border-white/10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/60 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-blue transition-colors backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/60 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-blue transition-colors backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/60 ml-1">Area of Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-primary-blue transition-colors backdrop-blur-sm appearance-none">
                  <option className="bg-navbar-bg">Engineering</option>
                  <option className="bg-navbar-bg">Design</option>
                  <option className="bg-navbar-bg">Product Management</option>
                  <option className="bg-navbar-bg">Marketing</option>
                  <option className="bg-navbar-bg">Operations</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/60 ml-1">Upload Resume (PDF/DOCX)</label>
                <div className="relative group/file">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full bg-white/5 border border-dashed border-white/20 rounded-xl px-5 py-8 text-center group-hover/file:border-primary-blue group-hover/file:bg-white/10 transition-all flex flex-col items-center gap-3">
                    <FileUp className="w-8 h-8 text-white/40 group-hover/file:text-primary-blue transition-colors" />
                    <span className="text-sm text-white/40">Drag and drop or click to upload</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/60 ml-1">Additional Comments</label>
                <textarea 
                  rows="3"
                  placeholder="Tell us about yourself..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-blue transition-colors backdrop-blur-sm resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gradient w-full py-4 flex items-center justify-center gap-3 text-lg font-bold"
              >
                Submit Application
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 py-10 border-t border-white/10 text-center relative z-10">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Career Portal. All rights reserved. 
          Built with React, Tailwind and Framer Motion.
        </p>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-blue/5 rounded-full blur-[160px] -z-10" />
    </section>
  );
};

export default ResumeSubmission;
