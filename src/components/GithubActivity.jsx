import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const GithubActivity = () => {
  const [realData, setRealData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://github-contributions-api.deno.dev/SahilCodeLab.json')
      .then(res => res.json())
      .then(data => {
        const flattened = data.contributions.flat();
        setRealData(flattened);
        setTotal(data.totalContributions);
        setLoading(false);
      })
      .catch(err => {
        console.error("GitHub Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case "FOURTH_QUARTILE": return 'bg-primary';
      case "THIRD_QUARTILE": return 'bg-primary/80';
      case "SECOND_QUARTILE": return 'bg-primary/60';
      case "FIRST_QUARTILE": return 'bg-primary/30';
      default: return 'bg-gray-100';
    }
  };

  const skeletonData = useMemo(() => Array(365).fill(0), []);

  return (
    <section className="py-24 bg-surface border-t border-gray-100 overflow-hidden relative text-on-surface">
      <div className="container-tight px-4 md:px-6">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-on-surface font-bold text-[10px] uppercase tracking-widest mb-6">
              <FaGithub className="w-3 h-3" />
              <span>Real-Time Contributions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
            Code <span className="text-on-surface/20 italic">Consistency.</span>
          </h2>
          <p className="text-on-surface/40 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Live data fetched from GitHub showcasing my daily commitment to open-source and software engineering.
          </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-6 md:p-12 shadow-sm"
        >
          {/* Calendar Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                <FaGithub className="w-6 h-6 text-on-surface" />
              </div>
              <div>
                <div className="text-xl font-black tracking-tight">SahilCodeLab</div>
                <div className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest">Verified Developer Journey</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
                <div className="text-3xl font-black text-on-surface leading-none mb-1">{loading ? "..." : total.toLocaleString()}</div>
                <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Total Contributions</div>
            </div>
          </div>

          {/* Custom Grid */}
          <div className="overflow-x-auto custom-scrollbar pb-6">
            <div className="min-w-[800px]">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 md:gap-2">
                {(loading ? skeletonData : realData).map((day, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 52) * 0.005 }}
                    title={day.date ? `${day.date}: ${day.contributionCount} commits` : ""}
                    className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-sm ${day === 0 ? 'bg-gray-100' : getLevelColor(day.contributionLevel)} transition-colors duration-500 hover:ring-2 hover:ring-primary/20`}
                  />
                ))}
              </div>
              
              <div className="flex flex-col items-center mt-10 gap-6">
                <div className="flex gap-8 text-[11px] font-bold text-on-surface/40 uppercase tracking-[0.2em] w-full justify-between px-2">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-100/50 px-6 py-3 rounded-full border border-gray-200">
                    <span className="text-[10px] font-bold text-on-surface/60 uppercase tracking-widest">Less</span>
                    <div className="flex gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-sm bg-gray-100" />
                        <div className="w-3.5 h-3.5 rounded-sm bg-primary/30" />
                        <div className="w-3.5 h-3.5 rounded-sm bg-primary/60" />
                        <div className="w-3.5 h-3.5 rounded-sm bg-primary/80" />
                        <div className="w-3.5 h-3.5 rounded-sm bg-primary" />
                    </div>
                    <span className="text-[10px] font-bold text-on-surface/60 uppercase tracking-widest">More</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 flex justify-center">
            <a 
              href="https://github.com/SahilCodeLab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-on-surface text-surface rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg hover:shadow-primary/20"
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
