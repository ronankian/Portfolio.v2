import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Projects', section: 'projects' },
    { label: 'Stacks', section: 'stacks' },
    { label: 'Certifications', section: 'certifications' },
    { label: 'About', section: 'about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-14 space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.section)}
              className="text-gray-200 hover:text-primary px-3 rounded-md text-base font-medium transition-colors font-semibold"
            >
              {link.label}
            </button>
          ))}
          {/* Center logo */}
          <button
            onClick={() => window.location.reload()}
            className="text-4xl md:text-4xl font-bold focus:outline-none hover:text-primary transition-colors"
            style={{ fontFamily: 'Damion, cursive', letterSpacing: '2px' }}
            aria-label="Refresh Site"
          >
            R
          </button>
          {navLinks.slice(2).map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.section)}
              className="text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors font-semibold"
            >
              {link.label}
            </button>
          ))}
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-2 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.section)}
                  className="text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-center"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 