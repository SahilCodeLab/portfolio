import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Palette, Globe, Code, Shield } from 'lucide-react';

const services = [
  {
    title: "Premium Android Development",
    desc: "Custom high-performance Kotlin applications with biometric security and real-time features.",
    icon: <Smartphone className="w-8 h-8 text-orange-500" />,
    size: "col-span-2 md:col-span-1"
  },
  {
    title: "UI/UX & Branding",
    desc: "Crafting visually stunning interfaces and unique brand identities that resonate with users.",
    icon: <Palette className="w-8 h-8 text-orange-500" />,
    size: "col-span-2 md:col-span-1"
  },
  {
    title: "Full-Stack Web Architectures",
    desc: "Scalable web platforms built with Next.js, focused on speed and conversion optimization.",
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    size: "col-span-2 md:col-span-2"
  },
  {
    title: "Source Code Lab",
    desc: "Providing developers with ready-to-use, high-quality source codes for rapid application building.",
    icon: <Code className="w-8 h-8 text-orange-500" />,
    size: "col-span-2 md:col-span-2"
  },
  {
    title: "System Security",
    desc: "Implementing military-grade encryption and security protocols for data-sensitive applications.",
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    size: "col-span-2 md:col-span-1"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container-tight">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-xl">
            <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase mb-4 block">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-black mb-0 tracking-tighter">
              Elite Services for <br/> <span className="text-gray-300">Modern Businesses</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-xs">
            Tailored development and design services built to scale your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -15, transition: { duration: 0.4 } }}
              className={`${service.size} p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between h-full`}
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all"
              >
                {React.cloneElement(service.icon, { className: "w-8 h-8 transition-colors group-hover:text-white" })}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors tracking-tight">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
// Optimized for performance and SEO

