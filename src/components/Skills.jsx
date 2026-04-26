import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiFlutter, SiDart, SiKotlin, SiNodedotjs, SiPython, 
  SiJavascript, SiBootstrap, 
  SiTailwindcss, SiVite, SiReact, SiFirebase, 
  SiNextdotjs, SiFigma, SiVercel, SiMongodb, SiGithub 
} from 'react-icons/si';

const techStack = [
  { name: "Flutter", icon: <SiFlutter />, color: "text-[#02569B]" },
  { name: "Dart", icon: <SiDart />, color: "text-[#0175C2]" },
  { name: "Kotlin", icon: <SiKotlin />, color: "text-[#7F52FF]" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
  { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "text-[#7952B3]" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
  { name: "Vite", icon: <SiVite />, color: "text-[#646CFF]" },
  { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]" },
  { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E]" },
  { name: "Vercel", icon: <SiVercel />, color: "text-white" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
  { name: "GitHub", icon: <SiGithub />, color: "text-white" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-gray-950 text-white overflow-hidden relative">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase mb-4 block">The Engine Room</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Technologies I <span className="text-gray-500 italic">Master.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
            {/* Strip 1: Moving Left */}
            <div className="relative flex overflow-x-hidden py-4 border-y border-white/5">
            <motion.div 
                className="flex whitespace-nowrap gap-12 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
                {[...techStack, ...techStack].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-4 px-10 py-6 bg-white/5 rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all">
                    <span className={`text-4xl ${tech.color}`}>{tech.icon}</span>
                    <span className="text-xl font-bold tracking-tight text-gray-400">{tech.name}</span>
                </div>
                ))}
            </motion.div>
            </div>

            {/* Strip 2: Moving Right */}
            <div className="relative flex overflow-x-hidden py-4">
            <motion.div 
                className="flex whitespace-nowrap gap-12 items-center"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
                {[...techStack.reverse(), ...techStack].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-4 px-10 py-6 bg-white/5 rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all">
                    <span className={`text-4xl ${tech.color}`}>{tech.icon}</span>
                    <span className="text-xl font-bold tracking-tight text-gray-400">{tech.name}</span>
                </div>
                ))}
            </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
