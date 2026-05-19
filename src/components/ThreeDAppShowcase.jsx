import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Assets
import pocketId1 from '../assets/pocket_id_1_ss.jpg';
import pocketId3 from '../assets/pocket_id_3rd_ss.jpg';
import pocketId4 from '../assets/pocket_id_4rd_ss.jpg';
import pocketId5 from '../assets/pocket_id_5rd_ss.jpg';
import pocketIdCert from '../assets/pocket_id_subscription_certificate.jpg';

const APP_SHOWCASE_CONFIG = {
  authorName: "SAHIL",
  authorSubtitle: "Code Lab",
  projectType: "Secure Vault App",
  screenshots: [
    pocketId1,
    pocketId3,
    pocketId4,
    pocketId5,
    pocketIdCert,
    pocketId1,
    pocketId3
  ]
};

const ThreeDAppShowcase = () => {
  return (
    <section className="relative py-24 border-b border-gray-100 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      {/* Section Title */}
      <div className="container-tight px-4 md:px-6 mb-12 relative z-20 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
            <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-6 md:w-10 h-[2px] bg-primary" />
                <span className="text-primary font-black tracking-widest text-[9px] md:text-[10px] uppercase">Interactive</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
              App <span className="text-primary italic">Showcase.</span>
            </h2>
        </div>
        <div className="text-left md:text-right">
            <h3 className="text-primary font-black uppercase tracking-tighter text-3xl mb-1">{APP_SHOWCASE_CONFIG.authorName}</h3>
            <p className="font-bold tracking-widest text-xs uppercase text-on-surface">{APP_SHOWCASE_CONFIG.authorSubtitle}</p>
            <p className="text-on-surface/50 text-[9px] tracking-widest uppercase font-bold mt-1">{APP_SHOWCASE_CONFIG.projectType}</p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-4 pb-10 relative z-10">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-10"
        >
          {APP_SHOWCASE_CONFIG.screenshots.map((imgUrl, index) => (
            <SwiperSlide key={index} className="w-[180px] sm:w-[220px] md:w-[300px]">
              <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 aspect-[9/19.5] bg-white group">
                <img src={imgUrl} alt={`App Screen ${index + 1}`} className="w-full h-full object-contain pointer-events-none" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* Swiper Custom Styles */
        .swiper-slide {
          transition: filter 0.5s ease, opacity 0.5s ease;
        }
        .swiper-slide:not(.swiper-slide-active) {
          filter: blur(3px) grayscale(30%);
          opacity: 0.6;
        }
        .swiper-pagination-bullet {
          background-color: var(--color-on-surface);
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--color-primary);
          opacity: 1;
        }
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          background-image: none !important; /* Remove harsh default shadows for a cleaner look */
        }
      `}</style>
    </section>
  );
};

export default ThreeDAppShowcase;
