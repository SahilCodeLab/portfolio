import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechFlow",
    text: "Sahil's ability to translate complex requirements into clean, high-performance code is unmatched. The PocketID implementation was flawless.",
    image: "https://i.pravatar.cc/150?u=alex",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, Aura",
    text: "Working with SahilCodeLab was a game-changer for our UI strategy. The attention to detail in the transitions and layout is world-class.",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Founder, MasterDex",
    text: "Fast, reliable, and highly creative. The source code provided was well-documented and easy to scale. Highly recommended for premium builds.",
    image: "https://i.pravatar.cc/150?u=marcus",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="container-tight px-4">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-black tracking-widest text-[9px] md:text-[10px] uppercase mb-4 block">Success Stories</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
            Trusted by <br/> <span className="text-gray-300 italic underline decoration-orange-500/20 underline-offset-8">Global Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-gray-50 border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:border-orange-200 transition-all duration-500 group"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 font-medium">
                  "{item.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-lg group-hover:rotate-6 transition-transform">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-base md:text-lg tracking-tight">{item.name}</div>
                  <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-orange-500">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 px-6 md:px-8 py-4 bg-orange-500/5 rounded-[2rem] md:rounded-full border border-orange-500/10">
                <div className="flex -space-x-3 mb-2 md:mb-0">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                            <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="Client" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <span className="text-[11px] md:text-sm font-bold text-gray-900 tracking-tight">5.0 Average Rating from 100+ Clients Worldwide</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
