import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import brandLogo from '../assets/brand_logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Projects', 'About', 'Contact'];

  return (
    <nav className="fixed top-0 md:top-8 left-0 right-0 z-50 px-2 md:px-6 pointer-events-none transition-all duration-500">
      <div className={`max-w-7xl mx-auto flex items-center justify-between p-2 md:p-0 ${scrolled ? 'md:scale-95' : 'md:scale-100'} transition-transform duration-500`}>
        
        {/* Logo Container - Visible on All Screens */}
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

        {/* Unified Navigation - Desktop Style on Mobile */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 md:gap-4 pointer-events-auto"
        >
          <div className="bg-white/90 backdrop-blur-3xl border border-gray-100 rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 flex gap-0.5 md:gap-1 shadow-2xl">
            {navItems.map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-3 py-2 md:px-6 md:py-3 rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 hover:text-orange-500 transition-all group overflow-hidden"
              >
                <span className="relative z-10">{item}</span>
                {/* Premium Hover Background Effect */}
                <motion.div 
                    className="absolute inset-0 bg-orange-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg origin-center"
                />
                <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-1/2 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
          
          <a href="#contact" className="hidden sm:block bg-orange-500 text-white px-8 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-orange-500/20 hover:bg-gray-900 transition-all active:scale-95">
            Hire Me
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
