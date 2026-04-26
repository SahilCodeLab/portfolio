import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import brandLogo from '../assets/brand_logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 md:top-8 left-0 right-0 z-50 px-0 md:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-0">
        
        {/* Logo Container */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-2xl border border-gray-100 rounded-2xl px-6 py-4 shadow-xl pointer-events-auto flex items-center gap-3"
        >
          <img src={brandLogo} alt="SahilCodeLab Logo" className="w-10 h-10 object-contain rounded-lg" />
          <div className="text-xl font-black tracking-tighter uppercase hidden sm:block">
            Sahil<span className="text-orange-500">CodeLab</span>
          </div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pointer-events-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/80 backdrop-blur-2xl border border-gray-100 rounded-2xl p-4 shadow-xl text-gray-900"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-2 pointer-events-auto"
        >
          <div className="bg-white/80 backdrop-blur-2xl border border-gray-100 rounded-2xl p-2 flex gap-1">
            {['Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all active:scale-95">
            Hire Me
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-3xl border border-gray-100 rounded-[2.5rem] p-8 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {['Projects', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-6 rounded-2xl text-lg font-black uppercase tracking-widest text-gray-900 bg-gray-50 hover:bg-orange-500 hover:text-white transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
