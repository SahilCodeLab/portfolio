import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import brandLogo from '../assets/brand_logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 md:top-8 left-0 right-0 z-50 px-0 md:px-6 pointer-events-none transition-all duration-500">
      <div className={`max-w-7xl mx-auto flex items-center justify-between p-4 md:p-0 ${scrolled ? 'md:scale-95' : 'md:scale-100'} transition-transform duration-500`}>
        
        {/* Logo Container */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/90 backdrop-blur-3xl border border-gray-100 rounded-2xl md:rounded-[2rem] px-5 py-3 md:px-6 md:py-4 shadow-2xl pointer-events-auto flex items-center gap-3"
        >
          <img src={brandLogo} alt="SahilCodeLab Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg shadow-inner" />
          <div className="text-lg md:text-xl font-black tracking-tighter uppercase block sm:block">
            Sahil<span className="text-orange-500">Code</span>
          </div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pointer-events-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/90 backdrop-blur-3xl border border-gray-100 rounded-2xl p-4 shadow-2xl text-gray-900 active:scale-90 transition-transform"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-4 pointer-events-auto"
        >
          <div className="bg-white/90 backdrop-blur-3xl border border-gray-100 rounded-[2rem] p-2 flex gap-1 shadow-2xl">
            {['Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-orange-500/20 hover:bg-gray-900 transition-all active:scale-95">
            Hire Me
          </button>
        </motion.div>
      </div>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm md:hidden pointer-events-auto z-[-1]"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-3xl border border-gray-100 rounded-[3rem] p-10 shadow-[0_50px_100px_rgba(0,0,0,0.2)] pointer-events-auto"
            >
              <div className="flex flex-col gap-6">
                <div className="text-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-500">Navigation</span>
                </div>
                {['Projects', 'About', 'Contact'].map((item, idx) => (
                  <motion.a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-6 rounded-2xl text-xl font-black uppercase tracking-[0.2em] text-gray-900 bg-gray-50 flex items-center justify-between group active:bg-orange-500 active:text-white transition-all"
                  >
                    <span>{item}</span>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-active:border-white">
                        →
                    </div>
                  </motion.a>
                ))}
                <button className="mt-4 bg-gray-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs">
                    Start a Project
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
