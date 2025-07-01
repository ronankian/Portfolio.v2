import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Stacks from './components/Stacks';
import Certifications from './components/Certifications';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <Hero />
      <Project />
      <Stacks />
      <Certifications />
      <About />
      <Footer />
    </div>
  );
}

export default App; 