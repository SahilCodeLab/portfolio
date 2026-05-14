import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Import Certificates
import aiAgentCert from '../assets/ai_agent_intensive_cert.jpg';
import tsCert from '../assets/typescript_cert.jpg';
import reactCert from '../assets/react_certificate.jpg';
import sqlCert from '../assets/sql_certificate.jpg';
import promptCert from '../assets/prompt_engineering_certificate.jpg';
import claudeCodeCert from '../assets/claude_code_action_cert.jpg';
import claudeVertexCert from '../assets/claude_vertex_ai_cert.jpg';
import aiFluencyCert from '../assets/ai_fluency_cert.jpg';
import undrawAwards from '../assets/undraw_awards.svg';

const certifications = [
  {
    id: 1,
    title: "5-Day AI Agent Intensive",
    issuer: "Kaggle | Google",
    image: aiAgentCert,
    date: "2025",
    credentialUrl: "https://www.kaggle.com/certification/badges/sahilrazaa/105"
  },
  {
    id: 2,
    title: "TypeScript Mastery",
    issuer: "Mimo",
    image: tsCert,
    date: "2025",
    credentialUrl: null
  },
  {
    id: 3,
    title: "React Architecture",
    issuer: "Mimo",
    image: reactCert,
    date: "2025",
    credentialUrl: null
  },
  {
    id: 4,
    title: "SQL Data Modeling",
    issuer: "Mimo",
    image: sqlCert,
    date: "2025",
    credentialUrl: null
  },
  {
    id: 5,
    title: "AI Prompt Strategy",
    issuer: "Simplilearn",
    image: promptCert,
    date: "2024",
    credentialUrl: "https://simpli-web.app.link/e/Q3TKJIyjG2b"
  },
  {
    id: 6,
    title: "Claude Code in Action",
    issuer: "Anthropic / Claude",
    image: claudeCodeCert,
    date: "2025",
    credentialUrl: "https://verify.skilljar.com/c/3ezqqk5g8ait"
  },
  {
    id: 7,
    title: "Google Vertex AI",
    issuer: "Google Cloud",
    image: claudeVertexCert,
    date: "2025",
    credentialUrl: "https://verify.skilljar.com/c/e8e2uufdhoub"
  },
  {
    id: 8,
    title: "AI Fluency Framework",
    issuer: "Anthropic / Claude",
    image: aiFluencyCert,
    date: "2024",
    credentialUrl: "https://verify.skilljar.com/c/haagesjikas3"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-surface relative overflow-hidden text-on-surface">
      <div className="container-tight px-4 md:px-6">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left"
        >
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full">
               <div className="max-w-xl">
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-4 md:mb-6 block">Expertise Verification</span>
                  <h2 className="text-4xl md:text-6xl font-black mb-0 tracking-tighter leading-none">
                    Verified <br className="hidden md:block" /> <span className="text-on-surface/20 italic underline decoration-primary/20 underline-offset-8">Professionalism</span>
                  </h2>
               </div>
               <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
                 <div className="w-full max-w-[150px] md:max-w-[200px] mb-4">
                   <img src={undrawAwards} alt="Awards Illustration" className="w-full h-auto drop-shadow-md grayscale hover:grayscale-0 transition-all" />
                 </div>
                 <p className="text-on-surface/40 text-base md:text-lg leading-relaxed max-w-xs md:text-right font-medium">
                    A collection of industry-standard credentials validating my technical mastery.
                 </p>
               </div>
            </div>
        </motion.div>

        {/* 2-Column Grid on Mobile Fixed */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/5 p-2 md:p-4 transition-all duration-500 hover:shadow-xl hover:border-primary/30 group-hover:bg-white/[0.04]">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain rounded-lg md:rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                {/* Credential Verify Badge - only if URL exists */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-1 bg-primary text-surface text-[7px] md:text-[9px] font-black uppercase tracking-widest px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg hover:bg-on-surface transition-all"
                  >
                    <ExternalLink size={9} />
                    <span>Verify</span>
                  </a>
                )}
              </div>
              
              <div className="mt-4 md:mt-8 px-1 md:px-4 text-center md:text-left">
                 <div className="flex items-center gap-2 mb-1 md:mb-2 justify-center md:justify-start">
                    <div className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-widest">{cert.issuer}</div>
                 </div>
                 <div className="font-black text-on-surface uppercase text-[10px] md:text-sm leading-tight tracking-tight mb-1 md:mb-2 min-h-[30px] md:min-h-[40px] line-clamp-2 md:line-clamp-none">
                    {cert.title}
                 </div>
                 <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-2">
                    <div className="text-[7px] md:text-[10px] text-on-surface/20 font-bold tracking-widest uppercase">{cert.date} // VALIDATED</div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-1 text-[8px] font-black text-primary hover:text-on-surface uppercase tracking-widest transition-colors"
                      >
                        <ExternalLink size={9} />
                        <span>View Credential</span>
                      </a>
                    )}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
