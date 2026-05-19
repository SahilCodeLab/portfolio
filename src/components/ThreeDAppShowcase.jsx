import React, { useRef, useEffect } from 'react';

// Assets (Using existing PocketID screenshots)
import pocketId1 from '../assets/pocket_id_1_ss.jpg';
import pocketId3 from '../assets/pocket_id_3rd_ss.jpg';
import pocketId4 from '../assets/pocket_id_4rd_ss.jpg';
import pocketId5 from '../assets/pocket_id_5rd_ss.jpg';
import pocketIdCert from '../assets/pocket_id_subscription_certificate.jpg';

// ==========================================
// 🚀 AI INPUT ZONE (Configuration)
// ==========================================
const APP_SHOWCASE_CONFIG = {
  showcaseText: "POCKETID", // Big background text
  authorName: "SAHIL",
  authorSubtitle: "Code Lab",
  projectType: "Secure Vault App",
  
  // App screenshots for the 3D cylinder (10 items for a full circle)
  screenshots: [
    pocketId1,
    pocketId3,
    pocketId4,
    pocketId5,
    pocketIdCert,
    pocketId1,
    pocketId3,
    pocketId4,
    pocketId5,
    pocketIdCert
  ]
};

// ==========================================
// 🛠️ CORE ENGINE
// ==========================================
const ThreeDAppShowcase = () => {
  const sliderRef = useRef(null);
  
  const stateRef = useRef({
    isDragging: false,
    startX: 0,
    rotateY: 0,
    targetRotateY: 0,
    autoSpinSpeed: 0.1, // Auto rotation speed
  });

  const totalQuantity = APP_SHOWCASE_CONFIG.screenshots.length;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId;

    const handleStart = (clientX) => {
      stateRef.current.isDragging = true;
      stateRef.current.startX = clientX;
      stateRef.current.targetRotateY = stateRef.current.rotateY;
    };

    const handleMove = (clientX) => {
      if (!stateRef.current.isDragging) return;
      const deltaX = clientX - stateRef.current.startX;
      stateRef.current.targetRotateY += deltaX * -0.25; // Drag sensitivity
      stateRef.current.startX = clientX;
    };

    const handleEnd = () => {
      stateRef.current.isDragging = false;
    };

    const onMouseDown = (e) => handleStart(e.clientX);
    const onMouseMove = (e) => handleMove(e.clientX);
    const onTouchStart = (e) => handleStart(e.touches[0].clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);

    slider.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', handleEnd);
    slider.addEventListener('touchstart', onTouchStart, {passive: true});
    window.addEventListener('touchmove', onTouchMove, {passive: true});
    window.addEventListener('touchend', handleEnd);

    // Hover pauses auto spin
    const onMouseEnter = () => { stateRef.current.autoSpinSpeed = 0; };
    const onMouseLeave = () => { if (!stateRef.current.isDragging) stateRef.current.autoSpinSpeed = 0.1; };

    slider.addEventListener('mouseenter', onMouseEnter);
    slider.addEventListener('mouseleave', onMouseLeave);

    // 120fps Lerp Render Engine
    const updateSlider = () => {
      const state = stateRef.current;
      if (!state.isDragging && state.autoSpinSpeed > 0) {
        state.targetRotateY += state.autoSpinSpeed;
      }
      state.rotateY += (state.targetRotateY - state.rotateY) * 0.1; // Smooth easing
      slider.style.setProperty('--rotateY', `${state.rotateY}deg`);
      animationFrameId = requestAnimationFrame(updateSlider);
    };

    updateSlider();

    return () => {
      cancelAnimationFrame(animationFrameId);
      slider.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      slider.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', handleEnd);
      slider.removeEventListener('mouseenter', onMouseEnter);
      slider.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section className="banner-3d-showcase relative py-20 border-b border-gray-100 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      {/* Section Title */}
      <div className="absolute top-10 md:top-20 left-4 md:left-20 z-20">
        <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 md:w-10 h-[2px] bg-primary" />
            <span className="text-primary font-black tracking-widest text-[9px] md:text-[10px] uppercase">Interactive</span>
        </div>
        <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase">
          App <span className="text-primary italic">Showcase.</span>
        </h2>
      </div>

      {/* 3D Rotating Cylinder */}
      <div 
        className="slider-3d-box" 
        ref={sliderRef} 
        style={{ '--quantity': totalQuantity }}
      >
        {APP_SHOWCASE_CONFIG.screenshots.map((imgUrl, index) => (
          <div 
            key={index} 
            className="slider-3d-item" 
            style={{ '--position': index + 1 }}
          >
            <img src={imgUrl} alt={`App Screen ${index + 1}`} draggable="false" />
          </div>
        ))}
      </div>

      {/* Dynamic Texts & Layout Overlays */}
      <div className="showcase-content-layer">
        <h1 data-content={APP_SHOWCASE_CONFIG.showcaseText} className="hidden md:block">{APP_SHOWCASE_CONFIG.showcaseText}</h1>
        <div className="showcase-author-credits hidden md:block">
          <h2 className="text-primary font-black uppercase tracking-tighter text-5xl mb-2">{APP_SHOWCASE_CONFIG.authorName}</h2>
          <p className="text-on-surface uppercase tracking-widest text-sm font-black"><b>{APP_SHOWCASE_CONFIG.authorSubtitle}</b></p>
          <p className="text-on-surface/40 uppercase tracking-widest text-[10px] mt-2 font-bold">{APP_SHOWCASE_CONFIG.projectType}</p>
        </div>
      </div>
      
      {/* Mobile Title Backdrop */}
      <div className="absolute inset-x-0 bottom-10 flex justify-center md:hidden pointer-events-none z-0">
          <h1 className="text-6xl font-black text-on-surface/5 uppercase tracking-tighter" style={{ WebkitTextStroke: '1px var(--color-primary)'}}>{APP_SHOWCASE_CONFIG.showcaseText}</h1>
      </div>

      {/* Styled Inline CSS */}
      <style>{`
        .banner-3d-showcase {
          width: 100%;
          height: 100vh;
          min-height: 700px;
          text-align: center;
          position: relative;
        }
        .banner-3d-showcase .slider-3d-box {
          position: absolute;
          width: 260px;
          height: 520px;
          top: 20%;
          left: calc(50% - 130px);
          transform-style: preserve-3d;
          transform: perspective(2500px) rotateX(-8deg) rotateY(var(--rotateY, 0deg));
          z-index: 10;
          cursor: grab;
          will-change: transform;
        }
        @media (max-width: 768px) {
            .banner-3d-showcase .slider-3d-box {
                width: 180px;
                height: 380px;
                left: calc(50% - 90px);
                top: 25%;
                transform: perspective(2000px) rotateX(-10deg) rotateY(var(--rotateY, 0deg));
            }
        }
        .banner-3d-showcase .slider-3d-box:active {
          cursor: grabbing;
        }
        .banner-3d-showcase .slider-3d-item {
          position: absolute;
          inset: 0;
          transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(480px);
        }
        @media (max-width: 768px) {
            .banner-3d-showcase .slider-3d-item {
                transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(280px);
            }
        }
        .banner-3d-showcase .slider-3d-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.05);
          pointer-events: none; /* Prevent image dragging issues */
          background: white;
        }
        .showcase-content-layer {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1400px;
          height: 100%;
          padding: 0 40px;
          padding-bottom: 80px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          z-index: 1;
          pointer-events: none;
        }
        .showcase-content-layer h1 {
          font-family: var(--font-sans);
          font-size: 11vw;
          font-weight: 900;
          line-height: 0.8em;
          position: relative;
          color: rgba(0,0,0,0.02);
          margin: 0;
          letter-spacing: -0.05em;
        }
        .showcase-content-layer h1::after {
          position: absolute;
          inset: 0;
          content: attr(data-content);
          color: transparent;
          -webkit-text-stroke: 1.5px var(--color-primary);
          opacity: 0.2;
          z-index: 3;
        }
        .showcase-author-credits {
          text-align: right;
          max-width: 250px;
        }
      `}</style>
    </section>
  );
};

export default ThreeDAppShowcase;
