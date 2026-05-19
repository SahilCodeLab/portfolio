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
    autoSpinSpeed: -0.3, // Match 20s for 360deg. Negative makes it spin leftwards naturally
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
      slider.style.cursor = 'grabbing';
    };

    const handleMove = (clientX) => {
      if (!stateRef.current.isDragging) return;
      const deltaX = clientX - stateRef.current.startX;
      // FIX: Drag direction corrected so it follows the mouse (positive multiplier)
      stateRef.current.targetRotateY += deltaX * 0.2; 
      stateRef.current.startX = clientX;
    };

    const handleEnd = () => {
      stateRef.current.isDragging = false;
      slider.style.cursor = 'grab';
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
    const onMouseLeave = () => { if (!stateRef.current.isDragging) stateRef.current.autoSpinSpeed = -0.3; };

    slider.addEventListener('mouseenter', onMouseEnter);
    slider.addEventListener('mouseleave', onMouseLeave);

    // Smooth Lerp Engine
    const updateSlider = () => {
      const state = stateRef.current;
      if (!state.isDragging && state.autoSpinSpeed !== 0) {
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
    <section className="banner-3d-showcase bg-surface border-b border-gray-100">
      
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
        <div className="showcase-author-credits text-on-surface">
          <h2 className="text-primary font-black uppercase tracking-tighter text-4xl mb-2">{APP_SHOWCASE_CONFIG.authorName}</h2>
          <p className="font-bold tracking-widest text-sm uppercase">{APP_SHOWCASE_CONFIG.authorSubtitle}</p>
          <p className="text-on-surface/50 text-[10px] tracking-widest uppercase font-bold mt-1">{APP_SHOWCASE_CONFIG.projectType}</p>
        </div>
      </div>

      {/* Styled Inline CSS Matching User's Clone Request Exactly */}
      <style>{`
        .banner-3d-showcase {
          width: 100%;
          height: 100vh;
          text-align: center;
          overflow: hidden;
          position: relative;
        }

        .banner-3d-showcase .slider-3d-box {
          position: absolute;
          width: 220px;
          height: 450px;
          top: calc(50% - 225px);
          left: calc(50% - 110px);
          transform-style: preserve-3d;
          transform: perspective(3000px) rotateX(-16deg) rotateY(var(--rotateY, 0deg));
          z-index: 2;
          cursor: grab;
          will-change: transform;
        }

        .banner-3d-showcase .slider-3d-box:active {
          cursor: grabbing;
        }

        .banner-3d-showcase .slider-3d-item {
          position: absolute;
          inset: 0 0 0 0;
          transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(600px);
        }

        .banner-3d-showcase .slider-3d-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
          pointer-events: none;
        }

        .showcase-content-layer {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1400px;
          max-width: 100%;
          height: max-content;
          padding-bottom: 100px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end; /* Align right side info */
          align-items: center;
          z-index: 1;
          pointer-events: none; /* Allows interacting with slider through the gap */
        }

        .showcase-author-credits {
          text-align: right;
          max-width: 200px;
          padding-right: 40px; /* Add padding for mobile view */
        }
        
        /* Mobile Scaling */
        @media (max-width: 1024px) {
            .showcase-content-layer { padding-left: 20px; padding-right: 20px; }
            .banner-3d-showcase .slider-3d-box {
                width: 160px;
                height: 330px;
                top: calc(50% - 165px);
                left: calc(50% - 80px);
            }
            .banner-3d-showcase .slider-3d-item { transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(350px); }
        }
      `}</style>
    </section>
  );
};

export default ThreeDAppShowcase;
