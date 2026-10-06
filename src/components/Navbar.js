import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', section: 'home' },
  { label: 'Projects', section: 'projects' },
  { label: 'Stacks', section: 'stacks' },
  { label: 'Certifications', section: 'certifications' },
  { label: 'About', section: 'about' },
];

const desktopLinks = navLinks.filter((link) => link.section !== 'home');

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.section);
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const Logo = ({ className = 'text-4xl' }) => (
    <button
      onClick={() => scrollToSection('home')}
      className={`${className} font-bold focus:outline-none hover:text-primary transition-colors`}
      style={{ fontFamily: 'Damion, cursive', letterSpacing: '2px' }}
      aria-label="Go to home"
    >
      R
    </button>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: links around centered logo */}
          <div className="hidden md:flex justify-center items-center h-14 space-x-8">
            {desktopLinks.slice(0, 2).map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.section)}
                className="text-gray-200 hover:text-primary px-3 rounded-md text-base font-medium transition-colors font-semibold"
              >
                {link.label}
              </button>
            ))}
            <Logo />
            {desktopLinks.slice(2).map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.section)}
                className="text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors font-semibold"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile: burger left, logo center */}
          <div className="md:hidden relative flex items-center justify-center h-14">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="absolute left-0 p-2 text-white hover:text-primary transition-colors"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            <Logo />
          </div>
        </div>
      </nav>

      {/* Full-screen mobile sidebar, matching the tourism overlay pattern */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <aside
          className={`absolute inset-y-0 left-0 w-full max-w-full bg-gray-950 flex flex-col transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-end h-14 px-4">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <div className="flex justify-center mb-8">
            <Logo className="text-6xl" />
          </div>

          <nav className="px-5 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.section)}
                  className={`w-full text-left px-5 py-3 rounded-lg text-lg font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
