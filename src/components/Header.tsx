'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/10 backdrop-blur-2xl shadow-2xl border-b border-white/5'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <div className="flex items-center relative">
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-wider">
                Francisco&nbsp;
              </span>
              <div className="flex">
                <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent transition-all duration-300 group-hover:translate-y-[-2px]">
                  Tulcán
                </span>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 opacity-50 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 mr-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-lg font-medium group text-white/90 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full opacity-80 group-hover:opacity-100" />
                </Link>
              ))}
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="px-3 py-1.5 rounded-full text-sm font-semibold bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-black/20 backdrop-blur-xl transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 transition-all duration-300 bg-white/80 ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`} />
                <span className={`block w-8 h-0.5 transition-all duration-300 bg-white/80 ${
                  isOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block w-8 h-0.5 transition-all duration-300 bg-white/80 ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/25 backdrop-blur-3xl rounded-2xl shadow-2xl mt-2 border border-white/10">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Glassmorphism Effect */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10" />
    </header>
  );
};

export default Header;
