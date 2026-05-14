import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Headphones, Palette, Maximize, CircleDollarSign } from 'lucide-react';

const features = [
  {
    title: "Fast Delivery",
    desc: "Agile development process ensuring rapid turnaround without compromising quality.",
    icon: Zap
  },
  {
    title: "Secure & Reliable",
    desc: "Industry-standard security measures prioritizing your data protection in every project.",
    icon: ShieldCheck
  },
  {
    title: "24/7 Support",
    desc: "Dedicated support team available around the clock to assist with any questions.",
    icon: Headphones
  },
  {
    title: "Custom Design",
    desc: "Uniquely crafted solutions that match your brand identity and business requirements.",
    icon: Palette
  },
  {
    title: "Scalable Solutions",
    desc: "Architectures built to handle future growth and expansion of your business.",
    icon: Maximize
  },
  {
    title: "Cost Effective",
    desc: "Competitive pricing offering maximum value for your technical investment.",
    icon: CircleDollarSign
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-surface">
      <div className="container-tight">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="section-title">
            Enterprise <span className="text-primary italic">Grade</span> Features
          </h2>
          <p className="section-subtitle mx-auto">
            Combining speed, security, and scalability to deliver high-impact digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:bg-white/[0.08]"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-on-surface mb-4 tracking-tight uppercase">
                {feature.title}
              </h3>
              <p className="text-on-surface/50 text-base leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
