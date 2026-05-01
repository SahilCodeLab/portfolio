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
const ProjectCard = ({ project, index }) => {
  const [showCode, setShowCode] = React.useState(true); // Default to true for UI to show off

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
    <div class="flex items-center justify-center gap-2 text-sm text-[#866573]">
      <span class="text-primary font-bold">6.2k Followers</span>
    </div>
  </div>
  <button class="w-full h-14 bg-whatsapp text-white rounded-full flex items-center justify-center gap-3">
    <span class="material-symbols-outlined">chat_bubble</span>
    Inquire on WhatsApp
  </button>
</div>`;
    }
    
    return `<!-- Nexus Admin Dashboard Structure -->
<div class="flex h-screen bg-gray-900">
  <aside class="w-64 bg-orange-600 p-6">
    <nav class="space-y-4">
      <div class="h-10 w-full bg-white/20 rounded-lg animate-pulse" />
      <div class="h-10 w-3/4 bg-white/10 rounded-lg" />
    </nav>
  </aside>
  <main class="flex-1 p-10">
    <header class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-white tracking-tight">Analytics Dashboard</h1>
    </header>
  </main>
</div>`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-8 md:gap-12"
    >
      {/* Header Info */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-end justify-between">
        <div className="max-w-2xl w-full">
            <div className="flex items-center gap-4 mb-4">
                <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-2 shadow-lg border border-gray-100 flex items-center justify-center"
                >
                {project.logo ? (
                    <img src={project.logo} className="w-full h-full object-contain" />
                ) : (
                    project.icon
                )}
                </motion.div>
                <div>
                    <span className="text-orange-500 font-black tracking-widest text-[8px] md:text-[9px] uppercase block mb-1">
                        {project.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black tracking-tighter leading-none">
                        {project.title}
                    </h3>
                </div>
            </div>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-medium">
            {project.desc}
            </p>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-gray-50 rounded-lg text-[8px] md:text-[9px] font-bold text-gray-400 border border-gray-100 uppercase tracking-widest">
                {t}
                </span>
            ))}
        </div>
      </div>

      {/* Split View Content */}
      <div className={`grid grid-cols-1 ${project.isUI ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-6 md:gap-10`}>
        
        {/* Design Side */}
        <div className={`relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white ${project.isUI ? 'bg-orange-500' : 'bg-gray-100'}`}>
            <div className={`p-4 md:p-8 ${project.isUI ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'}`}>
                {project.screenshots.slice(0, project.isUI ? 1 : 6).map((img, i) => (
                    <motion.div 
                        key={i}
                        className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white"
                    >
                        <img 
                            src={img} 
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            alt={project.title}
                        />
                    </motion.div>
                ))}
            </div>
            {project.isUI && (
                <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">Original Concept</span>
                </div>
            )}
        </div>

        {/* Code Side (Only for UI) */}
        {project.isUI && (
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-white/5 shadow-2xl flex flex-col justify-between"
            >
                <div className="mb-6 flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/30" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                        <div className="w-3 h-3 rounded-full bg-green-500/30" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Source Structure</div>
                </div>
                
                <div className="font-mono text-[9px] md:text-xs leading-relaxed text-gray-400 overflow-x-auto custom-scrollbar-hide max-h-[350px]">
                    <pre>
                        <code>
                            {getCodeSnippet(project.title).split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-gray-700 select-none w-4">{i + 1}</span>
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

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Code size={16} className="text-orange-500" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Tailwind Architecture</span>
                    </div>
                    <motion.a 
                        href={project.liveLink || "#contact"}
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white transition-all border border-white/10"
                    >
                        View Full Source
                    </motion.a>
                </div>
            </motion.div>
        )}
      </div>

      {/* Link for non-UI apps */}
      {!project.isUI && (
          <div className="flex justify-center md:justify-end">
            <motion.a 
                href={project.liveLink || "#contact"}
                target={project.liveLink ? "_blank" : undefined}
                rel={project.liveLink ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 group"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-orange-500 transition-colors">
                    {project.liveLink ? "Explore Live App" : "Request Access"}
                </span>
                <div className="w-10 h-10 rounded-xl border-2 border-gray-100 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <ExternalLink size={16} />
                </div>
            </motion.a>
          </div>
      )}
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

        <div className="space-y-40">
          {uiSuites.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
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
