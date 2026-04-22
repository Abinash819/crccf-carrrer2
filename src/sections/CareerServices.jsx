import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  FileText, 
  PlusCircle, 
  Monitor, 
  Megaphone, 
  Activity, 
  FileUp,
  Users
} from 'lucide-react';

const services = [
  {
    title: "Job Vacancy",
    badge: "NEW",
    icon: <ClipboardCheck className="w-8 h-8 text-primary-blue" />,
    description: "Browse latest available positions and career opportunities."
  },
  {
    title: "Recruitment Rules",
    icon: <FileText className="w-8 h-8 text-primary-blue" />,
    description: "Understand our hiring policies and compliance guidelines."
  },
  {
    title: "Post Vacancy",
    badge: "Members Only",
    icon: <PlusCircle className="w-8 h-8 text-primary-blue" />,
    description: "Exclusive section for department heads to request new talent."
  },
  {
    title: "Online Application",
    icon: <Monitor className="w-8 h-8 text-primary-blue" />,
    description: "Step-by-step digital application process for candidate ease."
  },
  {
    title: "Recruitment Ads",
    icon: <Megaphone className="w-8 h-8 text-primary-blue" />,
    description: "Official bulletins and media announcements for new roles."
  },
  {
    title: "Application Status",
    icon: <Activity className="w-8 h-8 text-primary-blue" />,
    description: "Track your real-time progress through the hiring stages."
  },
  {
    title: "Submit Resume",
    icon: <FileUp className="w-8 h-8 text-primary-blue" />,
    description: "Send your CV directly to our HR database for future matching."
  },
  {
    title: "Talent Community",
    icon: <Users className="w-8 h-8 text-primary-blue" />,
    description: "Join our network and get notified about future opportunities."
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

const CareerServices = () => {
  return (
    <section id="career-services" className="section-padding relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Career Services
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
            A comprehensive suite of tools and resources designed to streamline your 
            recruitment journey.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(255, 255, 255, 0.4)"
              }}
              className="glass-card p-8 group border border-white/10 flex flex-col h-full bg-white/5 relative overflow-hidden"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 px-2 py-1 text-[10px] font-bold tracking-widest text-white bg-primary-blue/80 rounded-md backdrop-blur-md">
                  {service.badge}
                </span>
              )}
              
              <div className="mb-6 p-4 rounded-2xl bg-primary-blue/10 w-fit group-hover:bg-primary-blue/20 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="mt-auto pt-4 flex items-center text-primary-blue text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareerServices;
