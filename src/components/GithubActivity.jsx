import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const GithubActivity = () => {
  // Generate random contribution levels (0 to 4) for a 52x7 grid
  const activityData = useMemo(() => {
    const data = [];
    for (let i = 0; i < 52 * 7; i++) {
      // Logic to make it look realistic: mostly low activity, some high bursts
      const rand = Math.random();
      if (rand > 0.9) data.push(4);      // Darkest Orange
      else if (rand > 0.75) data.push(3); // Medium Orange
      else if (rand > 0.5) data.push(2);  // Light Orange
      else if (rand > 0.2) data.push(1);  // Very Light Orange
      else data.push(0);                 // Empty
    }
    return data;
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 4: return 'bg-orange-600';
      case 3: return 'bg-orange-500';
      case 2: return 'bg-orange-400';
      case 1: return 'bg-orange-200';
      default: return 'bg-gray-100';
    }
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
              <FaGithub className="w-3 h-3" />
              <span>Open Source Commitment</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
            Code <span className="text-gray-300 italic">Consistency.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Daily commitment to building robust software systems. Tracking 82+ repositories and constant open-source involvement.
          </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-6 md:p-12 shadow-inner"
        >
          {/* Calendar Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                <FaGithub className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <div className="text-xl font-black tracking-tight">SahilCodeLab</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Developer Journey</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
                <div className="text-3xl font-black text-gray-900 leading-none mb-1">1,482+</div>
                <div className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Commits in 2024</div>
            </div>
          </div>

          {/* Custom Grid */}
          <div className="overflow-x-auto custom-scrollbar pb-6">
            <div className="min-w-[800px]">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 md:gap-2">
                {activityData.map((level, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 52) * 0.01 }}
                    className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-sm ${getLevelColor(level)} transition-colors duration-500 hover:ring-2 hover:ring-orange-500/20`}
                  />
                ))}
              </div>
              
              <div className="flex justify-between mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                <div className="flex gap-8">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-sm bg-gray-100" />
                        <div className="w-2.5 h-2.5 rounded-sm bg-orange-200" />
                        <div className="w-2.5 h-2.5 rounded-sm bg-orange-400" />
                        <div className="w-2.5 h-2.5 rounded-sm bg-orange-500" />
                        <div className="w-2.5 h-2.5 rounded-sm bg-orange-600" />
                    </div>
                    <span>More</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 flex justify-center">
            <a 
              href="https://github.com/SahilCodeLab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/20"
            >
              Verify on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
