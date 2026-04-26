import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, Activity } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import Certifications from './components/Certifications';
import Services from './components/Services';
import TechnicalArsenal from './components/TechnicalArsenal';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Loader from './components/Loader';
import './index.css';

// Import Assets
import profilePic from './assets/profile_pic.jpg';
import allAppsEcosystem from './assets/all_apps_ecosystem.jpg';
import brandLogo from './assets/brand_logo.jpg';

const StatsCounter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;
    let totalMiliseconds = 2000;
    let incrementTime = (totalMiliseconds / end);
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
      <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{count}{suffix}</div>
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">{label}</div>
    </motion.div>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
          className="fixed bottom-10 right-10 z-[99] w-16 h-16 bg-orange-500 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-gray-900 transition-all group"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white selection:bg-orange-100 selection:text-orange-600 font-sans relative overflow-x-hidden">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <BackToTop />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-[9999] origin-left" style={{ scaleX }} />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Sahil Raza Section */}
        <section id="about" className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="container-tight">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">
                <div className="relative group">
                  <motion.div className="relative z-10 overflow-hidden rounded-[4rem] shadow-2xl">
                    <img src={profilePic} alt="Sahil Raza" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  </motion.div>
                  <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]"></div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-gray-50"
                  >
                    <div className="relative">
                        <Activity className="w-8 h-8 text-orange-500" />
                        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                    </div>
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Live Status</div>
                        <div className="text-xs font-black text-gray-900 uppercase">Available for Hire</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1">
                <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-10 h-[2px] bg-orange-500" />
                    <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase">The Expert</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">
                  Sahil Raza: <br/> <span className="text-gray-300 italic">Software Engineer.</span>
                </h2>
                <p className="text-gray-500 text-xl leading-relaxed mb-8 font-medium">
                  Founder of <span className="text-gray-900 font-black">SahilCodeLab</span>. Delivering world-class software architectures and premium engineering solutions.
                </p>
                <div className="grid grid-cols-2 gap-12 pt-10 border-t border-gray-200">
                  <StatsCounter value="20" label="Global Deployments" suffix="+" />
                  <StatsCounter value="4" label="Years Experience" suffix="+" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Skills /> {/* The Sliding Tech Marquee */}

        <TechnicalArsenal />

        <Services />

        <section className="py-24 bg-white relative">
            <div className="container-tight">
                <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                    <img src={allAppsEcosystem} alt="SahilCodeLab Ecosystem" className="w-full h-auto" />
                </div>
            </div>
        </section>
        
        <ProjectGallery />
        <Certifications />
        <Testimonials />

        <section id="contact" className="py-40 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0,transparent_70%)]"></div>
          <div className="container-tight text-center relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-none uppercase">
                Let's <span className="text-orange-500 italic">Create.</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                    <a href="mailto:hello@sahilcodelab.com" className="w-full sm:w-auto bg-orange-500 text-white px-16 py-8 rounded-[2rem] font-black uppercase tracking-[0.3em] text-sm shadow-xl hover:bg-white hover:text-orange-500 transition-all">
                        Get in Touch
                    </a>
                </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-24 bg-white border-t border-gray-100">
        <div className="container-tight text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
            <div className="max-w-sm mx-auto md:mx-0">
              <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                <img src={brandLogo} alt="SahilCodeLab Logo" className="w-14 h-14 object-contain rounded-xl" />
                <div className="text-2xl font-black tracking-tighter uppercase">Sahil<span className="text-orange-500">CodeLab</span></div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">Precision engineered in India for a global developer community.</p>
            </div>
          </div>
          <div className="text-center pt-12 border-t border-gray-100">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">© 2026 SAHIL RAZA // SOFTWARE ENGINEER</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
