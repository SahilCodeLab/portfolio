import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const GithubActivity = () => {
  // Custom theme colors for the calendar to match the orange brand
  const explicitTheme = {
    light: ['#f3f4f6', '#fed7aa', '#fb923c', '#ea580c', '#9a3412'],
    dark: ['#1f2937', '#9a3412', '#ea580c', '#fb923c', '#fed7aa'],
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
      <div className="container-tight px-4 md:px-6">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full text-white font-bold text-[10px] uppercase tracking-widest mb-6">
              <Github className="w-3 h-3" />
              <span>Open Source Contributions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
            Code <span className="text-gray-300 italic">Consistency.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            A visual record of my daily coding activity, showcasing 82+ repositories and constant open-source involvement.
          </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-6 md:p-12 flex justify-center overflow-x-auto shadow-inner"
        >
          <div className="min-w-[800px] flex justify-center px-4">
             <GitHubCalendar 
               username="SahilCodeLab" 
               theme={explicitTheme}
               colorScheme="light"
               blockSize={15}
               blockMargin={6}
               fontSize={14}
               hideTotalCount={false}
               hideColorLegend={false}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
