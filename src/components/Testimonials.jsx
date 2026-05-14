import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import undrawCodeReview from '../assets/undraw_code_review.svg';

const testimonials = [
  {
    name: "Aman Gupta",
    role: "Android Developer @ TechNext",
    text: "Sahil's understanding of Android architecture is next level. His code is clean, modular, and extremely scalable. Truly a pro!",
    image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/sahil-raza-b3b3b3/",
    verified: true
  },
  {
    name: "Priya Sharma",
    role: "Product Manager @ DevStack",
    text: "Highly impressed by SahilCodeLab's delivery speed. The UI performance of the apps he builds is unmatched. Definitely a top-tier dev.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    rating: 5,
    linkedin: "#",
    verified: true
  },
  {
    name: "Kevin Peterson",
    role: "Startup Founder",
    text: "Needed a premium landing page in 3 days, and Sahil delivered. The animations and speed are just wow. My go-to guy for web development.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
    rating: 5
  },
  {
    name: "Anita Jaiswal",
    role: "CTO, Zenith Systems Pvt Ltd",
    text: "Delivered a robust Android application for our internal management. The security architecture is top-notch and the UI is very smooth.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-surface relative overflow-hidden text-on-surface">
      <div className="container-tight px-4 mb-20 text-center flex flex-col items-center">
          <span className="text-primary font-black tracking-widest text-[9px] md:text-[10px] uppercase mb-4 block">Client Feedback</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
            Trusted by <br/> <span className="text-on-surface/20 italic underline decoration-primary/20 underline-offset-8">Happy Clients</span>
          </h2>
          <div className="w-full max-w-[150px] md:max-w-[200px] mb-6">
            <img src={undrawCodeReview} alt="Reviews Illustration" className="w-full h-auto drop-shadow-md transition-all" />
          </div>
          <p className="text-on-surface/40 text-base md:text-lg max-w-2xl mx-auto font-medium px-4">
            Real reviews from professionals and entrepreneurs who trust SahilCodeLab.
          </p>
      </div>

      {/* Testimonial Slider / Marquee */}
      <div className="flex flex-col gap-10">
          <div className="relative flex overflow-x-hidden py-10">
            <motion.div 
                className="flex whitespace-nowrap gap-6 md:gap-10 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 45, repeat: Infinity }}
            >
                {[...testimonials, ...testimonials].map((item, idx) => (
                <div 
                    key={idx} 
                    className="w-[320px] md:w-[450px] flex-shrink-0 p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group whitespace-normal relative overflow-hidden"
                >
                    {item.verified && (
                        <div className="absolute top-6 right-6 flex items-center gap-1 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[8px] font-black uppercase tracking-widest text-green-500">Verified LinkedIn</span>
                        </div>
                    )}
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-0.5">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                        </div>
                        <p className="text-on-surface/70 text-base md:text-lg leading-relaxed mb-8 font-medium">
                            "{item.text}"
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-lg ${!item.image ? 'bg-primary flex items-center justify-center text-surface font-black text-xl' : ''}`}>
                                {item.image ? (
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span>{item.name[0]}</span>
                                )}
                            </div>
                            <div>
                                <div className="font-bold text-on-surface text-base tracking-tight">{item.name}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-primary">{item.role}</div>
                            </div>
                        </div>
                        {item.linkedin && (
                            <a 
                                href={item.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 shadow-sm flex items-center justify-center hover:bg-primary transition-colors text-on-surface hover:text-surface border border-white/10"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        )}
                    </div>
                </div>
                ))}
            </motion.div>
          </div>
      </div>

      <div className="mt-20 text-center px-4">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 bg-primary/5 rounded-[2rem] md:rounded-full border border-primary/10">
                <div className="flex -space-x-3 mb-2 md:mb-0">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-surface overflow-hidden shadow-sm">
                            <img src={`https://xsgames.co/randomusers/assets/avatars/${i%2 === 0 ? 'female' : 'male'}/${i+10}.jpg`} alt="Client" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <span className="text-[11px] md:text-sm font-bold text-on-surface/70 tracking-tight text-center">5.0 Average Rating from 100+ Clients Worldwide</span>
            </div>
      </div>
    </section>
  );
};

export default Testimonials;
