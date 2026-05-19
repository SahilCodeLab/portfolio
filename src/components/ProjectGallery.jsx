import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Smartphone, Code, ArrowUpRight } from 'lucide-react';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// Import Logos
import pocketIdLogo from '../assets/pocketid_logo.png';
import masterDexLogo from '../assets/masterdex_logo.png';
import warpifyLogo from '../assets/warpify_logo.png';
import auraNotesLogo from '../assets/aura_notes_logo.webp';

// Import Screenshots
import masterDex1 from '../assets/masterdex_homepage_1.jpg';
import masterDexSplash from '../assets/masterdex_splash_screenshot.jpg';
import masterDex2 from '../assets/masterdex_2nd.jpg';
import masterDex3 from '../assets/masterdex_3rd.jpg';
import masterDex4 from '../assets/masterdex_4th.jpg';
import masterDex5 from '../assets/masterdex_5th.jpg';
import masterDex6 from '../assets/masterdex_6th.jpg';

import pocketId1 from '../assets/pocket_id_1_ss.jpg';
import pocketId3 from '../assets/pocket_id_3rd_ss.jpg';
import pocketId4 from '../assets/pocket_id_4rd_ss.jpg';
import pocketId5 from '../assets/pocket_id_5rd_ss.jpg';
import pocketIdCert from '../assets/pocket_id_subscription_certificate.jpg';

import wrapify1 from '../assets/warpify_screenshot_Slice_1.jpg';
import wrapify2 from '../assets/slice_2.jpg';
import wrapify4 from '../assets/slice_4.jpg';
import wrapify5 from '../assets/slice_5.jpg';
import wrapify6 from '../assets/slice_6.jpg';
import wrapifyBanner from '../assets/warpify_banner.jpg';

const coreApps = [
  { 
    id: 'pocketid', 
    title: "PocketID", 
    desc: "Military-grade secure vault implementation with biometric authentication and real-time cloud synchronization. Focus on end-to-end encryption.", 
    logo: pocketIdLogo,
    screenshots: [pocketId1, pocketId3, pocketId4, pocketId5, pocketIdCert],
    tech: ["Kotlin", "Firebase", "Security"],
    category: "Security Solution",
    liveLink: "https://global.app.mi.com/details?lo=IN&la=en_US&id=com.sahilcodelab.pocketid",
    policyLink: "https://sahilcodelab.github.io/PocketID/"
  },
  { 
    id: 'wrapify', 
    title: "Wrapify", 
    desc: "Performance-optimized landing page suite with deep Razorpay integration and automated conversion tracking for premium digital services.", 
    logo: warpifyLogo,
    screenshots: [wrapify1, wrapify2, wrapify4, wrapify5, wrapify6, wrapifyBanner],
    tech: ["Next.js", "Razorpay", "Analytics"],
    category: "Web Platform",
    liveLink: "https://com-sahilcodelab-wrapify.en.uptodown.com/android"
  },
  { 
    id: 'masterdex', 
    title: "Master Dex", 
    desc: "A high-performance Pokémon encyclopedia featuring a custom low-latency audio engine and high-fidelity UI transitions. Designed for speed and reliability.", 
    logo: masterDexLogo,
    screenshots: [masterDex1, masterDexSplash, masterDex2, masterDex3, masterDex4, masterDex5, masterDex6],
    tech: ["React Native", "Audio Engine", "Framer Motion"],
    category: "Mobile App"
  },
  { 
    id: 'auranotes', 
    title: "Aura Notes", 
    desc: "Next-generation note management system with AI-driven categorization and seamless cross-platform syncing. Currently in advanced development.", 
    logo: auraNotesLogo,
    screenshots: [auraNotesLogo],
    tech: ["React", "Node.js", "AI"],
    category: "Productivity",
    isComingSoon: true,
    liveLink: "https://www.palmplaystore.com/detail/com.razatech.auranotes?country=IN"
  },
];

const microProjects = [
  { title: "Resume Craft", category: "Utility", link: "https://sahilcodelab.github.io/resume-craft/" },
  { title: "Budget Planner", category: "Finance", link: "https://sahilcodelab.github.io/Budget-Planner/" },
  { title: "CurrencyX", category: "Utility", link: "https://sahilcodelab.github.io/CurrencyX/" },
  { title: "AI Meal Planner", category: "AI Tool", link: "https://sahilcodelab.github.io/AI-Meal-Planner-/" },
  { title: "Mailora", category: "Communication", link: "https://sahilcodelab.github.io/Mailora/" },
  { title: "Digital Tool Kit", category: "Utility Suite", link: "https://sahilcodelab.github.io/digital-tool-kit/" },
  { title: "CultuChat AI", category: "AI Chat", link: "https://sahilcodelab.github.io/CultuChat-AI/" },
  { title: "RazaWorks", category: "Portfolio", link: "https://sahilcodelab.github.io/RazaWorks/" },
  { title: "Bill Boutique", category: "Finance", link: "https://sahilcodelab.github.io/bill-boutique/" },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/5 rounded-[3rem] md:rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="relative bg-gray-50 border border-gray-100 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-12 overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl">
        
        {/* Header Info */}
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
                <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 bg-white rounded-2xl p-2 shadow-2xl flex items-center justify-center border border-white/10"
                >
                {project.logo && <img src={project.logo} className="w-full h-full object-contain" alt="" />}
                </motion.div>
                <div>
                    <span className="text-primary font-black tracking-widest text-[10px] uppercase block mb-1">
                        {project.category}
                    </span>
                    <h3 className="text-3xl md:text-6xl font-black tracking-tighter leading-none text-on-surface">
                        {project.title}
                    </h3>
                </div>
            </div>
            <p className="text-on-surface/50 text-base md:text-xl leading-relaxed font-medium">
            {project.desc}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 items-start lg:items-end w-full lg:w-auto">
              <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
              {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-bold text-on-surface/40 border border-white/5 uppercase tracking-widest group-hover:border-primary/30 group-hover:text-primary transition-all">
                  {t}
                  </span>
              ))}
              </div>
              <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
                <motion.a 
                    href={project.liveLink || "#contact"}
                    target={project.liveLink ? "_blank" : undefined}
                    rel={project.liveLink ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-4 bg-primary text-surface px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:bg-on-surface hover:text-surface transition-all"
                >
                    {project.id === 'pocketid' ? "Get on GetApps" : (project.liveLink ? "Explore App" : "Request Demo")}
                    <ArrowUpRight size={18} />
                </motion.a>
                {project.policyLink && (
                  <motion.a 
                      href={project.policyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-4 border-2 border-gray-100 text-on-surface/40 px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
                  >
                      Privacy Policy
                      <ExternalLink size={14} />
                  </motion.a>
                )}
              </div>
          </div>
        </div>

        {/* Swiper 3D Screenshot Showcase */}
        <div className="w-full mt-10 md:mt-16 pb-10">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-10 project-swiper"
          >
            {project.screenshots.map((img, index) => (
              <SwiperSlide key={index} className="!w-[140px] sm:!w-[160px] md:!w-[220px]">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-black/5 aspect-[9/19.5] bg-white group">
                  <img src={img} alt={`${project.title} ss ${index + 1}`} className="w-full h-full object-contain pointer-events-none" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24 md:py-40 bg-surface relative overflow-hidden text-on-surface">
      <div className="container-tight px-4 md:px-6">
        
        {/* Core Apps Section */}
        <div className="relative mb-24 md:mb-32">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Product Showcase</span>
                <h2 className="text-5xl md:text-9xl font-black mb-0 tracking-tighter leading-none uppercase">
                  Featured <br/> <span className="text-on-surface/10 italic outline-text">Applications.</span>
                </h2>
            </motion.div>
        </div>
        
        <div className="space-y-24 md:space-y-40 mb-40">
          {coreApps.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Micro Projects Section */}
        <div className="pt-24 md:pt-40 border-t border-gray-100">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-10"
          >
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-[10px] uppercase tracking-widest mb-6">
                    <Code size={14} />
                    <span>Micro-Apps Ecosystem</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-0 leading-none">
                  Utility <span className="text-on-surface/20 italic">Arsenal.</span>
                </h2>
            </div>
            <p className="text-on-surface/40 text-base md:text-xl max-w-sm font-medium">
              A curated collection of lightweight, single-purpose web utilities and open-source tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {microProjects.map((proj, i) => (
              <motion.a 
                key={i}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-primary transition-all duration-500 hover:border-primary shadow-xl hover:-translate-y-2"
              >
                <div>
                  <span className="text-[9px] font-black tracking-widest text-on-surface/40 group-hover:text-surface/60 uppercase block mb-3">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-on-surface group-hover:text-surface tracking-tighter mb-10 leading-none">
                    {proj.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-primary group-hover:text-surface font-black text-[10px] uppercase tracking-widest">
                  Explore Project <ArrowUpRight size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Premium Call to Action */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-40 p-10 md:p-24 bg-white/[0.02] border border-white/5 rounded-[3rem] md:rounded-[5rem] text-center relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[100px]" />
            <div className="relative z-10">
                <h3 className="text-4xl md:text-7xl font-black text-on-surface mb-10 tracking-tighter uppercase leading-none">Ready to Build Your <br/> <span className="text-primary italic">Next Big Idea?</span></h3>
                <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-6 bg-primary text-surface px-10 md:px-16 py-5 md:py-8 rounded-full text-sm md:text-lg font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:bg-on-surface hover:text-surface transition-all"
                >
                    Start a Project
                    <ExternalLink size={24} />
                </motion.a>
            </div>
        </motion.div>
      </div>

      <style>{`
        /* Swiper Custom Styles for Project Cards */
        
        .project-swiper .swiper-slide {
          transition: opacity 0.5s ease;
        }
        
        /* Remove blur, just slightly fade inactive slides so they are still clear */
        .project-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.8;
        }

        .project-swiper .swiper-pagination-bullet {
          background-color: var(--color-on-surface);
          opacity: 0.2;
        }
        .project-swiper .swiper-pagination-bullet-active {
          background-color: var(--color-primary);
          opacity: 1;
        }
        .project-swiper .swiper-3d .swiper-slide-shadow-left,
        .project-swiper .swiper-3d .swiper-slide-shadow-right {
          background-image: none !important;
        }
      `}</style>
    </section>
  );
};

export default ProjectGallery;
