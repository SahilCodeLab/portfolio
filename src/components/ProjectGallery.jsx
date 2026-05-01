import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    id: 'crochet-city', 
    title: "The Crochet City", 
    desc: "A boutique artisan storefront featuring a mindful, ambient design system and deep WhatsApp integration for bespoke ordering experiences.", 
    logo: null, 
    icon: <Layout className="w-10 h-10 text-orange-500" />,
    screenshots: [dashboardMain, uiCoaching, uiBeauty, uiSeller, uiMotor],
    tech: ["React", "Tailwind CSS", "Mindful UI"],
    category: "Boutique Design",
    color: "#10b981",
    isUI: true
  },
  { 
    id: 'nexus-dashboard', 
    title: "Nexus Admin Suite", 
    desc: "A premium suite of administrative dashboards and business management interfaces. Designed for clarity, data visualization, and seamless user workflow.", 
    logo: null, 
    icon: <Layout className="w-10 h-10 text-orange-500" />,
    screenshots: [dashboardMain, uiCoaching, uiBeauty, uiSeller, uiMotor],
    tech: ["React", "Tailwind CSS", "Data Viz"],
    category: "Admin Suite",
    color: "#3b82f6",
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

const ProjectCard = ({ project, index }) => {
  const [showCode, setShowCode] = React.useState(false);

  const getCodeSnippet = (title) => {
    if (title === "The Crochet City") {
      return `<!-- The Crochet City: Premium Mobile UI -->
<div class="glass-card rounded-[2.5rem] p-8 ambient-shadow">
  <div class="relative group">
    <div class="size-32 rounded-full border-4 border-white shadow-xl ring-1 ring-primary/20">
      <div class="w-full h-full bg-cover scale-110 group-hover:scale-100 transition-700" 
           style="background-image: url('crochet_profile.jpg')"></div>
    </div>
  </div>
  <div class="mt-6 text-center">
    <h1 class="text-3xl font-display font-medium tracking-tight">The Crochet City</h1>
  </div>
  <button class="w-full h-14 bg-whatsapp text-white rounded-full flex items-center justify-center gap-3">
    Inquire on WhatsApp
  </button>
</div>`;
    }
    
    return `<!-- Nexus Admin Dashboard Structure -->
<div class="flex h-screen bg-gray-900">
  <aside class="w-64 bg-orange-600 p-6">
    <nav class="space-y-4">
      <div class="h-10 w-full bg-white/20 rounded-lg animate-pulse" />
    </nav>
  </aside>
</div>`;
  };

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
            <p className="text-gray-500 text-base md:text-xl leading-relaxed mx-auto md:mx-0 font-medium">
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
            <div className="flex items-center gap-4">
                {project.isUI && (
                    <button 
                        onClick={() => setShowCode(!showCode)}
                        className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-orange-500 hover:text-gray-900 transition-colors"
                    >
                        {showCode ? "[ Hide Code ]" : "[ View UI Code ]"}
                    </button>
                )}
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
      </div>

      {/* Code Preview - Colorful & Animated */}
      <AnimatePresence>
        {showCode && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
            >
                <div className="bg-gray-900 rounded-[2rem] p-6 md:p-8 font-mono text-[10px] md:text-xs leading-relaxed text-gray-300 border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-4 right-6 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <pre className="custom-scrollbar overflow-x-auto max-h-[400px]">
                        <code className="block">
                            {getCodeSnippet(project.title).split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-gray-600 select-none w-4">{i + 1}</span>
                                    <span dangerouslySetInnerHTML={{ 
                                        __html: line
                                            .replace(/class="/g, '<span class="text-orange-400">class="</span><span class="text-green-400">')
                                            .replace(/"/g, '</span><span class="text-orange-400">"</span>')
                                            .replace(/<div/g, '<span class="text-blue-400">&lt;div</span>')
                                            .replace(/<\/div>/g, '<span class="text-blue-400">&lt;/div&gt;</span>')
                                            .replace(/<button/g, '<span class="text-purple-400">&lt;button</span>')
                                            .replace(/<\/button>/g, '<span class="text-purple-400">&lt;/button&gt;</span>')
                                            .replace(/<span/g, '<span class="text-yellow-400">&lt;span</span>')
                                            .replace(/<\/span>/g, '<span class="text-yellow-400">&lt;/span&gt;</span>')
                                    }} />
                                </div>
                            ))}
                        </code>
                    </pre>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Screenshot Grid with Hover-to-Scroll for UI */}
      <div className={`w-full ${project.isUI ? 'bg-orange-500' : 'bg-gray-50'} rounded-[2.5rem] md:rounded-[4rem] p-3 md:p-12 border border-gray-100/50 overflow-hidden`}>
        <div className={`grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8`}>
          {project.screenshots.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative group rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl border-2 md:border-4 border-white ${project.isUI ? 'h-[300px] md:h-[450px] overflow-y-auto custom-scrollbar-hide md:overflow-hidden' : 'h-auto'}`}
            >
              <img 
                src={img} 
                className={`w-full ${project.isUI ? 'md:absolute md:top-0 md:left-0 md:transition-transform md:duration-[8s] md:ease-in-out md:group-hover:-translate-y-[calc(100%-100%)] md:group-hover:translate-y-[-70%]' : 'h-auto object-cover'} transition-transform duration-700 group-hover:scale-105`}
                style={project.isUI ? { transformOrigin: 'top' } : {}}
                alt={`${project.title} screenshot ${i + 1}`}
              />
              {project.isUI && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
        {project.isUI && (
            <p className="mt-8 text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Hover to explore full design scroll
            </p>
        )}
      </div>
    </motion.div>
  );
};

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="container-tight px-4 md:px-6">
        {/* Core Apps Section */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center md:text-left"
        >
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Primary Portfolio</span>
            <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-none">
              Featured <span className="text-gray-300 italic underline decoration-orange-500/20 underline-offset-8">Applications</span>
            </h2>
        </motion.div>
        
        <div className="space-y-32 mb-40">
          {coreApps.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* UI Suite Section */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center md:text-left pt-20 border-t border-gray-50"
        >
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Visual Systems</span>
            <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-none">
              UI/UX <span className="text-gray-300 italic underline decoration-orange-500/20 underline-offset-8">Ecosystem</span>
            </h2>
        </motion.div>

        <div className="space-y-40 mb-40">
          {uiSuites.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Micro Projects Section */}
        <div className="pt-24 mt-24 border-t border-gray-100">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full text-orange-600 font-bold text-[10px] uppercase tracking-widest mb-6">
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
                  View Project <ExternalLink size={12} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Global Footer Call to Action */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-40 p-8 md:p-20 bg-gray-900 rounded-[3rem] md:rounded-[5rem] text-center relative overflow-hidden group"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">Ready to Build Your <br/> <span className="text-orange-500">Next Big Idea?</span></h3>
                <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-4 bg-orange-500 text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-widest shadow-2xl hover:bg-white hover:text-gray-900 transition-all"
                >
                    Start a Project
                    <ExternalLink size={20} />
                </motion.a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGallery;
