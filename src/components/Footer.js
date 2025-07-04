import React from 'react';

const socialLinks = [
  {
    href: 'https://github.com/ronankian',
    label: 'GitHub',
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/mangubat-ronan-kian-a76467358',
    label: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/ronankian.mangubat/',
    label: 'Facebook',
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
      </svg>
    ),
  },
];

const Footer = () => {
  const currentYear = 2025;
  return (
    <footer className="bg-gray-900 w-full py-12 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Footer Image */}
      <img 
        src="assets/images/footer.png" 
        alt="Footer Decoration" 
        className="hidden md:block absolute right-0 top-0 h-full object-contain opacity-30 pointer-events-none select-none z-0"
        style={{ maxWidth: '60%', minWidth: '300px' }}
      />
      {/* R Icon (styled like Navbar) */}
      <div
        className="text-5xl md:text-6xl font-bold mb-2 z-10"
        style={{ fontFamily: 'Damion, cursive', letterSpacing: '2px', color: 'white' }}
        aria-label="Site Logo"
      >
        R
      </div>
      {/* Copyright */}
      <div className="text-center mb-6 z-10">
        <p className="text-white text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>© {currentYear} Ronan Kian Mangubat.</p>
        <p className="text-gray-300 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>All Rights Reserved.</p>
      </div>
      {/* Social Buttons */}
      <div className="flex space-x-2 mb-2 z-10">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold text-sm transition-colors duration-200 shadow"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
      {/* Tech Icons */}
      <div className="flex space-x-2 mt-2 z-10">
        <i className="devicon-react-original text-3xl"></i>
        <i className="devicon-typescript-plain text-3xl"></i>
        <i className="devicon-tailwindcss-plain text-3xl"></i>
      </div>
    </footer>
  );
};

export default Footer; 