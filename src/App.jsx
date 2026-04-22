import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Background from './components/Background';
import ModeToggle from './components/ModeToggle';
import Hero from './sections/Hero';
import JobSearch from './sections/JobSearch';
import CareerServices from './sections/CareerServices';
import ActiveJobs from './sections/ActiveJobs';
import JobCategories from './sections/JobCategories';
import ApplicationStatus from './sections/ApplicationStatus';
import ResumeSubmission from './sections/ResumeSubmission';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen font-sans">
        {/* Fixed Background Layer */}
        <Background />

        {/* Global Components */}
        <Navbar />
        <ModeToggle />

        {/* Page Content */}
        <main className="relative z-10">
          <Hero />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <JobSearch />
            <CareerServices />
            <ActiveJobs />
            <JobCategories />
            <ApplicationStatus />
            <ResumeSubmission />
          </div>
        </main>

        {/* Simple Footer Watermark */}
        <footer className="relative z-10 py-10 text-center opacity-40 hover:opacity-100 transition-opacity">
          <p className="text-white text-xs tracking-[0.2em] uppercase font-bold">
            Innovation • Integrity • Growth
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
