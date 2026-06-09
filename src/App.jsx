import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, Activity, Mail, Globe, Smartphone, Briefcase, Code, ArrowUpRight } from 'lucide-react';
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
import Features from './components/Features';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import './index.css';

// Import Assets
import profilePic from './assets/profile_pic.jpg';
import allAppsEcosystem from './assets/all_apps_ecosystem.jpg';
import undrawCoding from './assets/undraw_coding.svg';
import undrawContactUs from './assets/undraw_contact_us.svg';
import googleQr from './assets/google_qr.png';

const brandLogo = '/sahilcodelab-brand.ico';

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
        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-surface transition-all duration-300 shadow-sm">
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      )}
      <div className="text-4xl md:text-5xl font-black text-on-surface mb-2">{count}{suffix}</div>
      <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-primary">{label}</div>
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
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[99] w-14 h-14 md:w-16 md:h-16 bg-primary text-surface rounded-2xl shadow-2xl flex items-center justify-center hover:bg-on-surface transition-all group"
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
    <div className="bg-surface selection:bg-primary/20 selection:text-primary font-sans relative overflow-x-hidden text-on-surface">
      <CustomCursor />
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <BackToTop />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[9999] origin-left" style={{ scaleX }} />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Sahil Raza Section - Mobile Optimized */}
        <section id="about" className="py-20 md:py-40 bg-gray-50/50 relative overflow-hidden">
          <div className="container-tight px-4">
            <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">
                <div className="relative group mx-auto max-w-full md:max-w-[500px] lg:max-w-none">
                  <motion.div className="relative z-10 overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl aspect-square">
                    <img src={profilePic} alt="Sahil Raza" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  </motion.div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-80 md:h-80 bg-primary/10 rounded-full blur-[60px] md:blur-[100px] hidden md:block"></div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="absolute -top-4 -left-4 md:-top-10 md:-left-10 bg-surface p-3 md:p-6 rounded-xl md:rounded-3xl shadow-2xl z-20 flex items-center gap-2 md:gap-4 border border-white/5"
                  >
                    <div className="relative">
                        <Activity className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                        <div className="absolute top-0 right-0 w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full border-2 border-surface animate-pulse" />
                    </div>
                    <div>
                        <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-on-surface/30 mb-0.5">Live Status</div>
                        <div className="text-[9px] md:text-xs font-black text-on-surface uppercase">Available for Hire</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 text-center lg:text-left w-full">
                <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-6 md:w-10 h-[2px] bg-primary" />
                    <span className="text-primary font-black tracking-widest text-[9px] md:text-[10px] uppercase">The Expert</span>
                </div>
                <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-6 md:mb-10 leading-[0.9]">
                  Sahil Raza <br/> <span className="text-on-surface/20 italic">Software Engineer.</span>
                </h2>
                <div className="space-y-4 md:space-y-6 text-on-surface/40 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 font-medium max-w-2xl mx-auto lg:mx-0 text-left">
                  <p>
                    With <span className="text-on-surface font-black">4+ years in Web</span> and <span className="text-on-surface font-black">1+ year in Android</span> engineering, I approach software logically—architecting workflows and drawing logic before writing a single line of code.
                  </p>
                  <p>
                    I don't just copy UIs; I build entirely unique products. Apps like <span className="text-primary font-bold">PocketID, Wrapify</span>, and <span className="text-primary font-bold">MasterDex</span> are original concepts filling untouched market gaps.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 md:pt-10 border-t border-gray-100">
                  <StatsCounter value="4" label="Web Exp" suffix="Y+" icon={Globe} />
                  <StatsCounter value="1" label="App Exp" suffix="Y+" icon={Smartphone} />
                  <StatsCounter value="20" label="Projects" suffix="+" icon={Briefcase} />
                  <StatsCounter value="82" label="Repos" suffix="+" icon={Code} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Skills />
        <GithubActivity />
        <TechnicalArsenal />
        <Services />
        <Features />

        <section className="py-20 md:py-24 bg-surface relative">
            <div className="container-tight px-4 md:px-6">
                <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/5">
                    <img src={allAppsEcosystem} alt="SahilCodeLab Ecosystem" className="w-full h-auto hover:scale-[1.02] transition-all duration-1000" />
                </div>
            </div>
        </section>
        
        <ProjectGallery />
        <Certifications />
        <Testimonials />

        <section id="contact" className="py-24 md:py-32 bg-surface text-on-surface relative overflow-hidden w-full">
          <div className="container-tight px-4 relative z-10 w-full">
            <div className="text-center mb-12 md:mb-16 flex flex-col items-center w-full">
              <span className="text-primary font-black tracking-widest text-[9px] md:text-[10px] uppercase mb-4 block">Get in Touch</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-tight uppercase max-w-full break-words">
                Let's <br className="block sm:hidden" /><span className="text-primary italic">Create.</span>
              </h2>
              <div className="w-full max-w-[200px] md:max-w-[250px] mb-8">
                <img src={undrawContactUs} alt="Contact Us Illustration" className="w-full h-auto drop-shadow-md opacity-90 hover:scale-105 transition-all duration-500" />
              </div>
              <p className="text-on-surface/40 text-base md:text-lg font-medium max-w-xl mx-auto">
                Have a project in mind? Let's build something exceptional together.
              </p>
            </div>
            <ContactForm />

            {/* Google Maps Location Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 md:mt-32"
            >
              <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  {/* Map Side */}
                  <div className="w-full lg:w-2/3 h-[300px] md:h-[500px] relative">
                    <iframe 
                      title="SahilCodeLab Location"
                      src="https://maps.google.com/maps?q=SahilCodeLab&t=&z=5&ie=UTF8&iwloc=B&output=embed" 
                      className="absolute inset-0 w-full h-full border-0 transition-all duration-700"
                      allowFullScreen="" 
                      loading="lazy" 
                    ></iframe>
                  </div>
                  
                  {/* Info Side */}
                  <div className="w-full lg:w-1/3 p-10 md:p-16 flex flex-col justify-center bg-white">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-[10px] uppercase tracking-widest mb-8 w-fit">
                      <Globe size={14} />
                      <span>Physical Presence</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-none">Global <br/> <span className="text-primary italic">Headquarters.</span></h3>
                    <p className="text-on-surface/40 text-sm md:text-lg font-medium mb-10 leading-relaxed">
                      Strategically located in the heart of India, serving developers and enterprises across the globe with precision software.
                    </p>
                    <a 
                      href="https://www.google.com/maps/place/SahilCodeLab/@22.467086,61.4513135,4.46z/data=!4m14!1m7!3m6!1s0x21620bfdf86287bd:0xa6015bcc8e41aaea!2sSahilCodeLab!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11zb5yz9m4!3m5!1s0x21620bfdf86287bd:0xa6015bcc8e41aaea!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11zb5yz9m4?entry=ttu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-primary font-black text-xs uppercase tracking-widest group"
                    >
                      Open in Google Maps
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 md:py-24 bg-surface border-t border-white/5">
        <div className="container-tight px-4 md:px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mb-16 md:mb-20">
            <div className="max-w-sm mx-auto md:mx-0">
              <div className="flex items-center gap-4 mb-6 md:mb-8 justify-center md:justify-start">
                <img src={brandLogo} alt="SahilCodeLab Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl" />
                <div className="text-xl md:text-2xl font-black tracking-tighter uppercase text-on-surface">Sahil<span className="text-primary">CodeLab</span></div>
              </div>
              <p className="text-on-surface/40 text-xs md:text-sm leading-relaxed font-medium mb-8">Precision engineered in India for a global developer community.</p>
              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/sahil-razaofficial" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-on-surface/40 hover:bg-primary hover:text-surface transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/SahilCodeLab" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-on-surface/40 hover:bg-on-surface hover:text-surface transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.instagram.com/clipztar" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-on-surface/40 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <FaInstagram size={20} />
                </a>
                <a href="mailto:contact.sahilraza@gmail.com"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-on-surface/40 hover:bg-primary hover:text-surface transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Verified on Google Badge */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="mt-10 p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] shadow-xl max-w-[200px] mx-auto md:mx-0 group cursor-pointer overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-2 bg-primary/5 rounded-bl-2xl">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <a href="https://share.google/T7XulMOxTsOuHCC5M" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3">
                    <img src={googleQr} alt="Verified on Google" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110" />
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface group-hover:text-primary transition-colors">Verified Presence</div>
                    <div className="text-[8px] font-bold text-on-surface/20 uppercase tracking-widest text-center">Check us out on Google</div>
                </a>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/20 mb-6">Quick Links</div>
              <div className="flex flex-col gap-3">
                {['Projects', 'About', 'Certifications', 'Contact'].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold text-on-surface/40 hover:text-primary transition-colors">{link}</a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/20 mb-6">Contact</div>
              <a href="mailto:contact.sahilraza@gmail.com" className="text-sm font-bold text-on-surface/40 hover:text-primary transition-colors block mb-3">contact.sahilraza@gmail.com</a>
              <a href="https://www.linkedin.com/in/sahil-razaofficial" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-on-surface/40 hover:text-primary transition-colors block">LinkedIn Profile</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10 md:pt-12 border-t border-white/5">
            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-on-surface/20">© 2026 SAHIL RAZA // SOFTWARE ENGINEER</div>
            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/20">SahilCodeLab // India</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
