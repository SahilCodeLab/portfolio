import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, Activity, Mail, Globe, Smartphone, Briefcase, Code } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import Certifications from './components/Certifications';
import Services from './components/Services';
import TechnicalArsenal from './components/TechnicalArsenal';
import Skills from './components/Skills';
import GithubActivity from './components/GithubActivity';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Loader from './components/Loader';
import './index.css';

// Import Assets
import profilePic from './assets/profile_pic.jpg';
import allAppsEcosystem from './assets/all_apps_ecosystem.jpg';
import brandLogo from './assets/brand_logo.jpg';
import undrawCoding from './assets/undraw_coding.svg';
import undrawContactUs from './assets/undraw_contact_us.svg';

const StatsCounter = ({ value, label, suffix = "", icon: Icon }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) {
      setCount(end);
      return;
    }
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
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center md:items-start group">
      {Icon && (
        <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 rounded-xl md:rounded-2xl flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      )}
      <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{count}{suffix}</div>
      <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">{label}</div>
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
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[99] w-14 h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-gray-900 transition-all group"
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
        
        {/* About Sahil Raza Section - Mobile Optimized */}
        <section id="about" className="py-24 md:py-40 bg-gray-50 relative overflow-hidden">
          <div className="container-tight">
            <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">
                <div className="relative group mx-auto max-w-[400px] lg:max-w-none">
                  <motion.div className="relative z-10 overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-2xl aspect-square">
                    <img src={profilePic} alt="Sahil Raza" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  </motion.div>
                  <div className="absolute -bottom-10 -right-10 w-60 h-60 md:w-80 md:h-80 bg-orange-500/10 rounded-full blur-[80px] md:blur-[100px]"></div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="absolute -top-6 -left-6 md:-top-10 md:-left-10 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl z-20 flex items-center gap-3 md:gap-4 border border-gray-50"
                  >
                    <div className="relative">
                        <Activity className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                    </div>
                    <div>
                        <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Live Status</div>
                        <div className="text-[10px] md:text-xs font-black text-gray-900 uppercase">Available for Hire</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-8 md:w-10 h-[2px] bg-orange-500" />
                    <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase">The Expert</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.9]">
                  Sahil Raza <br/> <span className="text-gray-300 italic">Software Engineer.</span>
                </h2>
                <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-medium max-w-2xl mx-auto lg:mx-0 text-left">
                  <p>
                    With <span className="text-gray-900 font-black">4+ years in Web</span> and <span className="text-gray-900 font-black">1+ year in Android</span> engineering, I approach software logically—architecting workflows and drawing logic before writing a single line of code.
                  </p>
                  <p>
                    I don't just copy UIs; I build entirely unique products. Apps like <span className="text-orange-500 font-bold">PocketID, Wrapify</span>, and <span className="text-orange-500 font-bold">MasterDex</span> are original concepts filling untouched market gaps.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-10 border-t border-gray-200">
                  <StatsCounter value="4" label="Web Exp" suffix="Y+" icon={Globe} />
                  <StatsCounter value="1" label="App Exp" suffix="Y+" icon={Smartphone} />
                  <StatsCounter value="20" label="Projects" suffix="+" icon={Briefcase} />
                  <StatsCounter value="82" label="Repos" suffix="+" icon={Code} />
                </div>
                <div className="mt-12 flex justify-center lg:justify-start">
                  <div className="p-6 bg-orange-50/50 rounded-[2rem] border border-orange-100/50 w-full max-w-sm">
                    <img src={undrawCoding} alt="Coding Illustration" className="w-full h-auto drop-shadow-xl" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 text-center mt-4">unDraw Test Illustration</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Skills />
        {/* <GithubActivity /> */}

        <TechnicalArsenal />

        <Services />

        <section className="py-20 md:py-24 bg-white relative">
            <div className="container-tight px-4 md:px-6">
                <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                    <img src={allAppsEcosystem} alt="SahilCodeLab Ecosystem" className="w-full h-auto" />
                </div>
            </div>
        </section>
        
        <ProjectGallery />
        <Certifications />
        <Testimonials />

        <section id="contact" className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="container-tight px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16 flex flex-col items-center">
              <span className="text-orange-500 font-black tracking-widest text-[9px] md:text-[10px] uppercase mb-4 block">Get in Touch</span>
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
                Let's <br className="block sm:hidden" /><span className="text-orange-500 italic">Create.</span>
              </h2>
              <div className="w-full max-w-[200px] md:max-w-[250px] mb-8">
                <img src={undrawContactUs} alt="Contact Us Illustration" className="w-full h-auto drop-shadow-md opacity-90" />
              </div>
              <p className="text-white/40 text-base md:text-lg font-medium max-w-xl mx-auto">
                Have a project in mind? Let's build something exceptional together.
              </p>
            </motion.div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="py-20 md:py-24 bg-white border-t border-gray-100">
        <div className="container-tight px-4 md:px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mb-16 md:mb-20">
            <div className="max-w-sm mx-auto md:mx-0">
              <div className="flex items-center gap-4 mb-6 md:mb-8 justify-center md:justify-start">
                <img src={brandLogo} alt="SahilCodeLab Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl" />
                <div className="text-xl md:text-2xl font-black tracking-tighter uppercase">Sahil<span className="text-orange-500">CodeLab</span></div>
              </div>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium mb-8">Precision engineered in India for a global developer community.</p>
              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/sahil-razaofficial" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/SahilCodeLab" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.instagram.com/clipztar" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <FaInstagram size={20} />
                </a>
                <a href="mailto:contact.sahilraza@gmail.com"
                  className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-6">Quick Links</div>
              <div className="flex flex-col gap-3">
                {['Projects', 'About', 'Certifications', 'Contact'].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold text-gray-400 hover:text-orange-500 transition-colors">{link}</a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-6">Contact</div>
              <a href="mailto:contact.sahilraza@gmail.com" className="text-sm font-bold text-gray-400 hover:text-orange-500 transition-colors block mb-3">contact.sahilraza@gmail.com</a>
              <a href="https://www.linkedin.com/in/sahil-razaofficial" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 hover:text-orange-500 transition-colors block">LinkedIn Profile</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10 md:pt-12 border-t border-gray-100">
            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-300">© 2026 SAHIL RAZA // SOFTWARE ENGINEER</div>
            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">SahilCodeLab // India</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
