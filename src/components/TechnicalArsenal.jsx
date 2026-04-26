import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Cpu, Database, Shield } from 'lucide-react';

const skills = [
  {
    category: "Mobile Architecture",
    icon: <Smartphone className="w-6 h-6" />,
    items: ["Kotlin", "Android SDK", "Jetpack Compose", "MVVM / Clean Architecture"],
    color: "bg-orange-500"
  },
  {
    category: "Full-Stack Web",
    icon: <Globe className="w-6 h-6" />,
    items: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
    color: "bg-blue-500"
  },
  {
    category: "Core Engineering",
    icon: <Code className="w-6 h-6" />,
    items: ["TypeScript", "Java", "Python", "Data Structures"],
    color: "bg-purple-500"
  },
  {
    category: "Backend & Systems",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL", "Firebase", "Redis", "System Design"],
    color: "bg-green-500"
  },
  {
    category: "DevOps & Security",
    icon: <Shield className="w-6 h-6" />,
    items: ["Docker", "Google Cloud", "API Security", "Payment Gateways"],
    color: "bg-red-500"
  }
];

const TechnicalArsenal = () => {
  return (
    <section id="skills" className="py-32 bg-white overflow-hidden">
      <div className="container-tight">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block text-center md:text-left">Tech Stack</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-center md:text-left">
            Technical <br/> <span className="text-gray-300">Arsenal.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${skill.color} text-white flex items-center justify-center mb-8 shadow-xl group-hover:rotate-12 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-6 uppercase">{skill.category}</h3>
              <ul className="space-y-4">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 font-bold text-sm uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-orange-500 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalArsenal;
