import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Database, 
  Users, 
  Globe 
} from 'lucide-react';

const categories = [
  {
    title: "Software Development",
    icon: <Code className="w-8 h-8 text-primary-blue" />,
    count: "45+ Openings",
    description: "Build cutting-edge applications with the latest technology stacks."
  },
  {
    title: "Design & UX",
    icon: <Palette className="w-8 h-8 text-primary-blue" />,
    count: "12+ Openings",
    description: "Shape the visual and interactive identity of modern digital products."
  },
  {
    title: "Marketing",
    icon: <TrendingUp className="w-8 h-8 text-primary-blue" />,
    count: "28+ Openings",
    description: "Drive growth and brand awareness through innovative digital strategies."
  },
  {
    title: "Data Science",
    icon: <Database className="w-8 h-8 text-primary-blue" />,
    count: "15+ Openings",
    description: "Transform raw data into meaningful insights and business value."
  },
  {
    title: "Human Resources",
    icon: <Users className="w-8 h-8 text-primary-blue" />,
    count: "8+ Openings",
    description: "Build and nurture the talent that drives our success."
  },
  {
    title: "International Ops",
    icon: <Globe className="w-8 h-8 text-primary-blue" />,
    count: "20+ Openings",
    description: "Expand our reach across borders and manage global operations."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const JobCategories = () => {
  return (
    <section id="categories" className="section-padding relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Explore by Category
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary-blue mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Find the perfect role that matches your skills and passion across our 
            diverse departments.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.4)"
              }}
              className="glass-card p-8 group border border-white/10 flex flex-col h-full bg-white/5"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-colors">
                  {category.icon}
                </div>
                <span className="px-3 py-1 text-xs font-semibold text-primary-blue bg-primary-blue/10 rounded-full border border-primary-blue/20">
                  {category.count}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
              <p className="text-white/60 flex-grow leading-relaxed">{category.description}</p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JobCategories;
