import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Brands', href: '#brands' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-primary/95 py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="Meera Enterprises" className="h-10 w-auto object-contain" />
            <span className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <span className="text-accent">Meera</span> Enterprises
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
                {link.name}
              </a>
            ))}
            <a href="#book" className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold hover:bg-accent-hover transition-colors shadow-sm cursor-pointer">
              Book Service
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-primary hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex justify-center bg-accent text-white px-4 py-3 rounded-md font-bold shadow-sm"
              >
                Book Service
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
