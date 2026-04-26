import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 1, ease: [0.85, 0, 0.15, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center text-white p-6"
    >
      <div className="relative overflow-hidden mb-12 flex flex-col items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="text-2xl md:text-4xl font-black tracking-[0.5em] uppercase mb-2"
        >
          Sahil<span className="text-orange-500">Raza</span>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
          className="text-[10px] font-black uppercase tracking-[1em] text-gray-500"
        >
          Crafting Extraordinary
        </motion.div>
      </div>

      <div className="w-full max-w-[300px] h-[1px] bg-white/5 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: `${counter}%` }}
        />
      </div>
      
      <div className="mt-8 flex justify-between w-full max-w-[300px] font-mono text-[10px] text-gray-600">
        <span className="uppercase tracking-widest">Synergy Protocol</span>
        <span>{counter}%</span>
      </div>

      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 text-[10px] font-black uppercase tracking-[0.5em] text-orange-500/40"
      >
        Initializing Digital Identity
      </motion.div>
    </motion.div>
  );
};

export default Loader;
