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

const certifications = [
  {
    id: 1,
    title: "5-Day AI Agent Intensive",
    issuer: "Google Cloud / AI Academy",
    image: aiAgentCert,
    date: "2025",
    credentialUrl: "https://www.kaggle.com/certification/badges/sahilrazaa/105"
  },
  {
    id: 2,
    title: "TypeScript Mastery",
    issuer: "Microsoft / TechInst.",
    image: tsCert,
    date: "2025",
    credentialUrl: null
  },
  {
    id: 3,
    title: "React Architecture",
    issuer: "Meta Systems",
    image: reactCert,
    date: "2024",
    credentialUrl: null
  },
  {
    id: 4,
    title: "SQL Data Modeling",
    issuer: "Kaggle",
    image: sqlCert,
    date: "2023",
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
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      <div className="container-tight px-4 md:px-6">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left"
        >
           <div className="max-w-xl">
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-4 md:mb-6 block">Expertise Verification</span>
              <h2 className="text-4xl md:text-6xl font-black mb-0 tracking-tighter leading-none">
                Verified <br className="hidden md:block" /> <span className="text-gray-300 italic underline decoration-orange-500/20 underline-offset-8">Professionalism</span>
              </h2>
           </div>
           <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xs md:mb-2">
              A collection of industry-standard credentials validating my technical mastery in AI, Cloud, and Engineering.
           </p>
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
              <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 p-2 md:p-4 transition-all duration-500 hover:shadow-xl hover:border-orange-200 group-hover:bg-white">
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
                    className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-1 bg-orange-500 text-white text-[7px] md:text-[9px] font-black uppercase tracking-widest px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg hover:bg-gray-900 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
                  >
                    <ExternalLink size={9} />
                    <span>Verify</span>
                  </a>
                )}
              </div>
              
              <div className="mt-4 md:mt-8 px-1 md:px-4 text-center md:text-left">
                 <div className="flex items-center gap-2 mb-1 md:mb-2 justify-center md:justify-start">
                    <div className="text-[8px] md:text-[10px] font-black text-orange-500 uppercase tracking-widest">{cert.issuer}</div>
                 </div>
                 <div className="font-black text-gray-900 uppercase text-[10px] md:text-sm leading-tight tracking-tight mb-1 md:mb-2 min-h-[30px] md:min-h-[40px] line-clamp-2 md:line-clamp-none">
                    {cert.title}
                 </div>
                 <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-2">
                    <div className="text-[7px] md:text-[10px] text-gray-300 font-bold tracking-widest uppercase">{cert.date} // VALIDATED</div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-1 text-[8px] font-black text-orange-500 hover:text-gray-900 uppercase tracking-widest transition-colors"
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
