import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import brandLogo from '../assets/brand_logo.jpg';
import resume from '../assets/Resume.pdf';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Desktop nav items
  const desktopNav = [
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certifications' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: resume, download: true },
  ];

  // Mobile menu items (full labels)
  const mobileNav = [
    { label: 'Projects', href: '#projects' },
    { label: 'App Development', href: '#app-development' },
    { label: 'UI / UX Design', href: '#ui-ux-design' },
    { label: 'Certificates', href: '#certifications' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Download Resume', href: resume, download: true },
  ];

  return (
    <>
      <nav className="fixed top-0 md:top-6 left-0 right-0 z-50 px-2 md:px-6 pointer-events-none transition-all duration-500">
        <div className={`max-w-7xl mx-auto flex items-center justify-between p-2 md:p-0 ${scrolled ? 'md:scale-[0.97]' : 'md:scale-100'} transition-transform duration-500`}>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-3xl border border-gray-100 rounded-2xl md:rounded-[2rem] px-4 py-2.5 md:px-6 md:py-4 shadow-2xl pointer-events-auto flex items-center gap-2 md:gap-3"
          >
            <img src={brandLogo} alt="SahilCodeLab Logo" className="w-7 h-7 md:w-10 md:h-10 object-contain rounded-lg shadow-inner" />
            <div className="text-sm md:text-xl font-black tracking-tighter uppercase whitespace-nowrap">
              Sahil<span className="text-orange-500">CodeLab</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-4 pointer-events-auto"
          >
            <div className="bg-white/90 backdrop-blur-3xl border border-gray-100 rounded-[2rem] p-2 flex gap-1 shadow-2xl">
              {desktopNav.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 hover:text-orange-500 transition-all group overflow-hidden"
                  download={item.download ? "Sahil_Raza_Resume.pdf" : undefined}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div className="absolute inset-0 bg-orange-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg origin-center" />
                  <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-1/2 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
            <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-orange-500/20 hover:bg-gray-900 transition-all active:scale-95">
              Hire Me
            </a>
          </motion.div>

          {/* Mobile Right: Hire Me + Hamburger */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex md:hidden items-center gap-2 pointer-events-auto"
          >
            <a href="#contact" className="bg-orange-500 text-white px-4 py-2.5 rounded-2xl text-[7px] font-black uppercase tracking-[0.2em] shadow-lg shadow-orange-500/20 hover:bg-gray-900 transition-all">
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white/90 backdrop-blur-3xl border border-gray-100 rounded-2xl w-10 h-10 flex items-center justify-center shadow-2xl text-gray-700 hover:text-orange-500 transition-colors"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-2 right-2 z-40 bg-white/95 backdrop-blur-3xl border border-gray-100 rounded-[2rem] shadow-2xl p-4 pointer-events-auto"
          >
            <div className="flex flex-col gap-1">
              {mobileNav.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl text-gray-700 font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-500/10 hover:text-orange-500 transition-all group"
                  download={item.download ? "Sahil_Raza_Resume.pdf" : undefined}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500/30 group-hover:bg-orange-500 transition-colors flex-shrink-0"></span>
                  {item.label}
                </motion.a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
              <div className="text-[8px] font-black uppercase tracking-widest text-gray-300">SahilCodeLab © 2026</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
