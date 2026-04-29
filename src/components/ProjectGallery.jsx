import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layout, Smartphone, Code } from 'lucide-react';

// Import Logos
import pocketIdLogo from '../assets/pocketid_logo.png';
import masterDexLogo from '../assets/masterdex_logo.png';
import warpifyLogo from '../assets/warpify_logo.png';
import auraNotesLogo from '../assets/aura_notes_logo.webp';
import undrawApp from '../assets/undraw_app_installation.svg';

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

import uiCoaching from '../assets/ui_coaching.jpg';
import uiBeauty from '../assets/ui_beauty.jpg';
import uiSeller from '../assets/ui_seller.jpg';
import uiMotor from '../assets/ui_motor.jpg';
import dashboardMain from '../assets/dashboard_ui_design.jpg';

const coreApps = [
  { 
    id: 'pocketid', 
    title: "PocketID", 
    desc: "Military-grade secure vault implementation with biometric authentication and real-time cloud synchronization. Focus on end-to-end encryption.", 
    logo: pocketIdLogo,
    screenshots: [pocketId1, pocketId3, pocketId4, pocketId5, pocketIdCert],
    tech: ["Kotlin", "Firebase", "Security"],
    category: "Security Solution",
    color: "#4f46e5",
    liveLink: "https://sahilcodelab.github.io/PocketID/"
  },
  { 
    id: 'wrapify', 
    title: "Wrapify", 
    desc: "Performance-optimized landing page suite with deep Razorpay integration and automated conversion tracking for premium digital services.", 
    logo: warpifyLogo,
    screenshots: [wrapify1, wrapify2, wrapify4, wrapify5, wrapify6, wrapifyBanner],
    tech: ["Next.js", "Razorpay", "Analytics"],
    category: "Web Platform",
    color: "#f59e0b",
    liveLink: "https://com-sahilcodelab-wrapify.en.uptodown.com/android"
  },
  { 
    id: 'masterdex', 
    title: "Master Dex", 
    desc: "A high-performance Pokémon encyclopedia featuring a custom low-latency audio engine and high-fidelity UI transitions. Designed for speed and reliability.", 
    logo: masterDexLogo,
    screenshots: [masterDex1, masterDexSplash, masterDex2, masterDex3, masterDex4, masterDex5, masterDex6],
    tech: ["React Native", "Audio Engine", "Framer Motion"],
    category: "Mobile App",
    color: "#ff3d00"
  },
  { 
    id: 'auranotes', 
    title: "Aura Notes", 
    desc: "Next-generation note management system with AI-driven categorization and seamless cross-platform syncing. Currently in advanced development.", 
    logo: auraNotesLogo,
    screenshots: [auraNotesLogo],
    tech: ["React", "Node.js", "AI"],
    category: "Productivity",
    color: "#8b5cf6",
    isComingSoon: true,
    liveLink: "https://www.palmplaystore.com/detail/com.razatech.auranotes?country=IN"
  },
];

const uiSuites = [
  { 
    id: 'dashboard', 
    title: "Nexus Dashboard UI", 
    desc: "A premium suite of administrative dashboards and business management interfaces. Designed for clarity, data visualization, and seamless user workflow.", 
    logo: null, 
    icon: <Layout className="w-10 h-10 text-orange-500" />,
    screenshots: [dashboardMain, uiCoaching, uiBeauty, uiSeller, uiMotor],
    tech: ["React", "Tailwind CSS", "Data Viz"],
    category: "Admin Suite",
    color: "#10b981",
    isUI: true
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

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="container-tight px-4 md:px-6">
        {/* Apps Section */}
        <div id="app-development" className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center md:text-left"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full text-orange-600 font-bold text-[10px] uppercase tracking-widest mb-6">
                    <Smartphone className="w-3 h-3" />
                    <span>Featured Applications</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                  Full-Stack <span className="text-gray-300">Solutions.</span>
                </h2>
              </div>
              <div className="w-full max-w-[250px] lg:max-w-[300px]">
                <img src={undrawApp} alt="App Development Illustration" className="w-full h-auto drop-shadow-xl" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-32 md:space-y-40">
            {coreApps.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* UI Section */}
        <div id="ui-ux-design" className="pt-24 border-t border-gray-100">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-6">
                <Layout className="w-3 h-3" />
                <span>Interface Design Architecture</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
              UI/UX <span className="text-gray-300 italic">Ecosystems.</span>
            </h2>
          </motion.div>

          <div className="space-y-32 md:space-y-40">
            {uiSuites.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Micro Projects Section */}
        <div className="pt-24 mt-24 border-t border-gray-100">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-purple-600 font-bold text-[10px] uppercase tracking-widest mb-6">
                <Code className="w-3 h-3" />
                <span>Open Source & Micro-Apps</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
              Utility <span className="text-gray-300 italic">Ecosystem.</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0 font-medium">
              A collection of lightweight, single-purpose web utilities and open-source tools I've built.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {microProjects.map((proj, i) => (
              <motion.a 
                key={i}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col justify-between p-6 md:p-8 rounded-[2rem] bg-gray-50 hover:bg-orange-500 transition-colors duration-500 border border-gray-100 hover:border-orange-500"
              >
                <div>
                  <span className="text-[9px] font-black tracking-widest text-gray-400 group-hover:text-orange-200 uppercase block mb-3">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-white tracking-tighter mb-8">
                    {proj.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-orange-500 group-hover:text-white font-bold text-[10px] uppercase tracking-widest">
                  View Project <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-12 md:gap-16"
    >
      {/* Header Info */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-end justify-between">
        <div className="max-w-2xl text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl p-2 shadow-xl border border-gray-100 flex items-center justify-center"
                >
                {project.logo ? (
                    <img src={project.logo} className="w-full h-full object-contain" />
                ) : (
                    project.icon
                )}
                </motion.div>
                <div className="text-center md:text-left">
                    <span className="text-orange-500 font-black tracking-widest text-[9px] md:text-[10px] uppercase block mb-1">
                        {project.category}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                        {project.title}
                    </h3>
                </div>
            </div>
            <p className="text-gray-500 text-base md:text-xl leading-relaxed mx-auto md:mx-0">
            {project.desc}
            </p>
        </div>
        
        <div className="flex flex-col gap-6 items-center md:items-end w-full md:w-auto">
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {project.tech.map(t => (
                <span key={t} className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-50 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-bold text-gray-400 border border-gray-100 uppercase tracking-widest">
                {t}
                </span>
            ))}
            </div>
            <motion.a 
                href={project.liveLink || "#contact"}
                target={project.liveLink ? "_blank" : undefined}
                rel={project.liveLink ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 md:gap-4 group"
            >
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] group-hover:text-orange-500 transition-colors">
                    {project.liveLink ? "Live App" : "Request Demo"}
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border-2 border-gray-100 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </div>
            </motion.a>
        </div>
      </div>

      {/* Screenshot Grid - Optimized Sizing */}
      <div className="w-full bg-gray-50 rounded-[2.5rem] md:rounded-[4rem] p-3 md:p-12 border border-gray-100/50">
        <div className={`grid ${project.isUI ? 'grid-cols-1 md:grid-cols-2 gap-4 md:gap-8' : 'grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'}`}>
          {project.screenshots.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative group rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl border-2 md:border-4 border-white ${project.isUI ? 'max-w-[100%]' : ''}`}
            >
              <img 
                src={img} 
                className={`w-full h-auto ${project.isUI ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                alt={`${project.title} screenshot ${i + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectGallery;
