import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const textReveal = {
    hidden: { y: "100%" },
    show: { 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-12 md:py-20 px-4 md:px-6 overflow-hidden relative perspective-1000">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/10 rounded-full blur-[100px] md:blur-[150px]"
        />
      </div>

      <div className="container-tight text-center relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          
          <motion.div className="flex justify-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gray-900 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-2xl">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-orange-500 animate-pulse" />
                <span>Founder of SahilCodeLab</span>
            </div>
          </motion.div>
          
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="overflow-hidden h-[4.5rem] md:h-[13rem]">
                <motion.h1 variants={textReveal} className="text-6xl md:text-[14rem] font-black tracking-tighter text-gray-900 leading-none">
                Sahil
                </motion.h1>
            </div>
            <div className="overflow-hidden h-[4.5rem] md:h-[13rem]">
                <motion.h1 variants={textReveal} className="text-6xl md:text-[14rem] font-black tracking-tighter text-orange-500 leading-none">
                Raza.
                </motion.h1>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 md:mt-12"
          >
            <p className="text-lg md:text-3xl text-gray-400 max-w-4xl mx-auto mb-16 md:mb-20 leading-tight tracking-tight font-medium px-4">
                The mind behind <span className="text-gray-900 font-black">SahilCodeLab</span>. 
                Engineering premium Android source code and high-performance software architectures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 px-4">
                <button 
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto bg-orange-500 text-white px-12 md:px-16 py-6 md:py-8 rounded-[1.5rem] md:rounded-[2rem] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm hover:bg-gray-900 transition-all shadow-xl active:scale-95"
                >
                    Explore Projects
                </button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
