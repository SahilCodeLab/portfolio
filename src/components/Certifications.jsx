import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
    date: "2025"
  },
  {
    id: 2,
    title: "TypeScript Mastery",
    issuer: "Microsoft / TechInst.",
    image: tsCert,
    date: "2025"
  },
  {
    id: 3,
    title: "React Architecture",
    issuer: "Meta Systems",
    image: reactCert,
    date: "2024"
  },
  {
    id: 4,
    title: "SQL Data Modeling",
    issuer: "Standard Inst.",
    image: sqlCert,
    date: "2023"
  },
  {
    id: 5,
    title: "AI Prompt Strategy",
    issuer: "OpenAI Labs",
    image: promptCert,
    date: "2024"
  },
  {
    id: 6,
    title: "Claude Code in Action",
    issuer: "Anthropic / Claude",
    image: claudeCodeCert,
    date: "2025"
  },
  {
    id: 7,
    title: "Google Vertex AI",
    issuer: "Google Cloud",
    image: claudeVertexCert,
    date: "2025"
  },
  {
    id: 8,
    title: "AI Fluency Framework",
    issuer: "AI Academy",
    image: aiFluencyCert,
    date: "2024"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      <div className="container-tight">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
           <div className="max-w-xl text-center md:text-left">
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Expertise Verification</span>
              <h2 className="text-4xl md:text-6xl font-black mb-0 tracking-tighter leading-none">
                Verified <br className="hidden md:block" /> <span className="text-gray-300 italic underline decoration-orange-500/20 underline-offset-8">Professionalism</span>
              </h2>
           </div>
           <p className="text-gray-400 text-lg leading-relaxed max-w-xs mb-2 text-center md:text-left">
              A collection of industry-standard credentials validating my technical mastery in AI, Cloud, and Engineering.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 border-2 border-gray-100 p-4 transition-all duration-500 hover:shadow-2xl hover:border-orange-200 group-hover:bg-white">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              
              <div className="mt-8 px-4 text-center md:text-left">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest">{cert.issuer}</div>
                    <div className="h-px flex-1 bg-gray-100 hidden md:block" />
                 </div>
                 <div className="font-black text-gray-900 uppercase text-sm leading-tight tracking-tight mb-2 min-h-[40px]">{cert.title}</div>
                 <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="text-[10px] text-gray-300 font-bold tracking-widest uppercase">{cert.date} // VALIDATED</div>
                    <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-orange-500 text-orange-500" />)}
                    </div>
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
