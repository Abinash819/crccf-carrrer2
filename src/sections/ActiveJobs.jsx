import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Briefcase, MapPin, DollarSign, Calendar } from 'lucide-react';

const jobs = [
  {
    title: "Senior Full Stack Developer",
    company: "InnovateTech",
    location: "Remote / New York",
    salary: "$140k - $180k",
    type: "Full-time",
    category: "Development",
    posted: "2 days ago",
    description: "Lead the development of our core platform using React, Node.js, and cloud-native architectures."
  },
  {
    title: "UX/UI Product Designer",
    company: "Studio Bloom",
    location: "San Francisco, CA",
    salary: "$110k - $150k",
    type: "Full-time",
    category: "Design",
    posted: "1 day ago",
    description: "Craft beautiful, intuitive user experiences for our suite of premium digital products."
  },
  {
    title: "Backend Engineer (Go)",
    company: "DataStream",
    location: "Austin, TX",
    salary: "$130k - $170k",
    type: "Contract",
    category: "Development",
    posted: "3 days ago",
    description: "Scale our real-time data processing pipelines using Go and distributed systems."
  },
  {
    title: "Growth Marketing Lead",
    company: "ScaleUp",
    location: "Remote",
    salary: "$100k - $140k",
    type: "Full-time",
    category: "Marketing",
    posted: "5 hours ago",
    description: "Drive multi-channel user acquisition strategies and optimize conversion funnels."
  }
];

const ActiveJobs = () => {
  return (
    <section id="active-jobs" className="section-padding relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Active Job Openings
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary-blue mx-auto rounded-full mb-6"
          />
          <p className="text-white/60 max-w-2xl mx-auto">
            Join our mission-driven team and build the next generation of digital tools. 
            We're looking for passionate individuals to help us grow.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative glass-card p-8 border border-white/10 overflow-hidden flex flex-col h-full bg-white/5"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-primary-blue bg-primary-blue/10 rounded-full border border-primary-blue/20 uppercase mb-3 inline-block">
                    {job.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-blue transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-white/40 font-medium">{job.company}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white/90">{job.salary}</div>
                  <div className="text-xs text-white/30 flex items-center justify-end gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    {job.posted}
                  </div>
                </div>
              </div>

              <p className="text-white/60 mb-8 leading-relaxed flex-grow">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-6 items-center pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-primary-blue" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
                  <Briefcase className="w-4 h-4 text-primary-blue" />
                  {job.type}
                </div>
                
                <button className="ml-auto btn-gradient py-2.5 px-6 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-primary-blue/20 group-hover:shadow-primary-blue/40 transition-all">
                  Apply Now
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-blue/10 rounded-full blur-3xl group-hover:bg-primary-blue/20 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveJobs;
