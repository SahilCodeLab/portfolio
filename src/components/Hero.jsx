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
    <section className="min-h-screen flex items-center justify-center bg-white py-20 px-6 overflow-hidden relative perspective-1000">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container-tight text-center relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          
          <motion.div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gray-900 text-white font-bold text-[10px] uppercase tracking-[0.4em] shadow-2xl">
                <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                <span>Founder of SahilCodeLab</span>
            </div>
          </motion.div>
          
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden h-[8rem] md:h-[13rem]">
                <motion.h1 variants={textReveal} className="text-7xl md:text-[14rem] font-black tracking-tighter text-gray-900 leading-none">
                Sahil
                </motion.h1>
            </div>
            <div className="overflow-hidden h-[8rem] md:h-[13rem]">
                <motion.h1 variants={textReveal} className="text-7xl md:text-[14rem] font-black tracking-tighter text-orange-500 leading-none">
                Raza.
                </motion.h1>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12"
          >
            <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-20 leading-tight tracking-tight font-medium">
                The mind behind <span className="text-gray-900 font-black">SahilCodeLab</span>. 
                Engineering premium Android source code and high-performance software architectures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button 
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto bg-orange-500 text-white px-16 py-8 rounded-[2rem] font-black uppercase tracking-[0.3em] text-sm hover:bg-gray-900 transition-all shadow-xl"
                >
                    View SahilCodeLab Projects
                </button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
