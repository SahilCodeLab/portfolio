import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { SiExpressdotcom } from 'react-icons/si';
import resume from '../assets/Resume.pdf';

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
    <section className="min-h-screen flex items-center justify-center bg-surface pt-32 pb-12 md:pt-48 md:pb-20 px-4 md:px-6 overflow-hidden relative perspective-1000">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px]"
        />
      </div>

      <div className="container-tight text-center relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          
          <motion.div className="flex justify-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gray-100 text-on-surface font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-sm">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
                <span>Founder of SahilCodeLab</span>
            </div>
          </motion.div>
          
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="overflow-hidden h-[5.5rem] md:h-[13.5rem]">
                <motion.h1 variants={textReveal} className="text-7xl md:text-[14rem] font-sans font-black tracking-tighter text-on-surface leading-none">
                Sahil
                </motion.h1>
            </div>
            <div className="overflow-hidden h-[5.5rem] md:h-[13.5rem]">
                <motion.h1 variants={textReveal} className="text-7xl md:text-[14rem] font-sans font-black tracking-tighter text-transparent leading-none" style={{ WebkitTextStroke: '3px var(--color-primary)' }}>
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
                The mind behind <span className="text-on-surface font-black">SahilCodeLab</span>. 
                Engineering premium Android source code and high-performance software architectures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 px-4">
                <button 
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto bg-primary text-surface px-12 md:px-16 py-6 md:py-8 rounded-[1.5rem] md:rounded-[2rem] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm hover:bg-on-surface transition-all shadow-xl active:scale-95"
                >
                    Explore Projects
                </button>
                <a 
                    href={resume}
                    download="Sahil_Raza_Resume.pdf"
                    className="w-full sm:w-auto border-4 border-white/10 text-on-surface px-12 md:px-16 py-6 md:py-8 rounded-[1.5rem] md:rounded-[2rem] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm hover:bg-primary hover:border-primary hover:text-surface transition-all shadow-xl active:scale-95 flex items-center justify-center"
                >
                    Download CV
                </a>
            </div>

            {/* Adobix-Inspired Stats Counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-24 md:mt-32 pt-12 border-t border-gray-100">
                {[
                    { label: "Apps Published", value: "12+" },
                    { label: "Digital Products", value: "05+" },
                    { label: "Response Time", value: "24h" },
                    { label: "Custom Approach", value: "100%" }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + (i * 0.1) }}
                        className="text-center"
                    >
                        <h4 className="text-3xl md:text-5xl font-black text-on-surface mb-2">{stat.value}</h4>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-on-surface/30 font-bold">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
 