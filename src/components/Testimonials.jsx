import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import undrawCodeReview from '../assets/undraw_code_review.svg';

const testimonials = [
  {
    name: "Rohan Sharma",
    role: "Founder, E-Com Solutions",
    text: "Sahil built a high-converting landing page for our brand. The performance optimization is insane! Conversion increased by 40%.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
    rating: 5
  },
  {
    name: "Anita Jaiswal",
    role: "CTO, Zenith Systems Pvt Ltd",
    text: "Delivered a robust Android application for our internal management. The security architecture is top-notch and the UI is very smooth.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    rating: 5
  },
  {
    name: "David Miller",
    role: "SaaS Entrepreneur",
    text: "The dashboard UI Sahil designed is world-class. It's clean, intuitive, and exactly what we needed for our beta launch. Highly recommended!",
    image: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
    rating: 5
  },
  {
    name: "Sneha Kapoor",
    role: "E-learning Platform Owner",
    text: "Best developer for Android source code. Handled our complex Firebase integrations perfectly. Great communication throughout the project.",
    image: null, // Using initials for organic feel
    rating: 5
  },
  {
    name: "Kevin Peterson",
    role: "Startup Founder",
    text: "Needed a premium landing page in 3 days, and Sahil delivered. The animations and speed are just wow. My go-to guy for web development.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
    rating: 5
  },
  {
    name: "Arjun Verma",
    role: "PropTech Solutions",
    text: "Modern UI/UX with super clean code. He understood our business requirements perfectly and delivered a flawless product.",
    image: null, // Using initials for organic feel
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="container-tight px-4 mb-20 text-center flex flex-col items-center">
          <span className="text-orange-500 font-black tracking-widest text-[9px] md:text-[10px] uppercase mb-4 block">Client Feedback</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
            Trusted by <br/> <span className="text-gray-300 italic underline decoration-orange-500/20 underline-offset-8">Happy Clients</span>
          </h2>
          <div className="w-full max-w-[150px] md:max-w-[200px] mb-6">
            <img src={undrawCodeReview} alt="Reviews Illustration" className="w-full h-auto drop-shadow-md" />
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium px-4">
            Real reviews from entrepreneurs and companies who scaled their business with SahilCodeLab.
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
                    className="w-[320px] md:w-[450px] flex-shrink-0 p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:border-orange-200 transition-all duration-500 group whitespace-normal"
                >
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-0.5">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-orange-500/10 group-hover:text-orange-500/20 transition-colors" />
                        </div>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
                            "{item.text}"
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-lg ${!item.image ? 'bg-orange-500 flex items-center justify-center text-white font-black text-xl' : ''}`}>
                            {item.image ? (
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            ) : (
                                <span>{item.name[0]}</span>
                            )}
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 text-base tracking-tight">{item.name}</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-orange-500">{item.role}</div>
                        </div>
                    </div>
                </div>
                ))}
            </motion.div>
          </div>
      </div>

      <div className="mt-20 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 bg-orange-500/5 rounded-[2rem] md:rounded-full border border-orange-500/10">
                <div className="flex -space-x-3 mb-2 md:mb-0">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                            <img src={`https://xsgames.co/randomusers/assets/avatars/${i%2 === 0 ? 'female' : 'male'}/${i+10}.jpg`} alt="Client" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <span className="text-[11px] md:text-sm font-bold text-gray-900 tracking-tight">5.0 Average Rating from 100+ Clients Worldwide</span>
            </div>
      </div>
    </section>
  );
};

export default Testimonials;
