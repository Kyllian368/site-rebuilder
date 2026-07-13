import React, { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import heroVideo from '@/assets/intendant/toulouse-hero-istock.mp4.asset.json';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const startVideo = () => {
      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');
      video.playsInline = true;
      video.autoplay = true;
      video.controls = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const handleInteraction = () => {
            video.play().catch(() => {});
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
          };
          window.addEventListener('click', handleInteraction, { once: true });
          window.addEventListener('touchstart', handleInteraction, { once: true });
        });
      }
    };

    startVideo();
    video?.addEventListener('loadeddata', startVideo);
    video?.addEventListener('canplay', startVideo);
    document.addEventListener('visibilitychange', startVideo);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target.classList.contains('animate-on-scroll')) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      video?.removeEventListener('loadeddata', startVideo);
      video?.removeEventListener('canplay', startVideo);
      document.removeEventListener('visibilitychange', startVideo);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 bg-gray-100">
        <video
          ref={videoRef}
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover opacity-80"
          style={{ filter: 'grayscale(1) contrast(1.05)' }}
        />
        <div className="absolute inset-0 bg-white/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-elegant-black px-4 sm:px-6 max-w-4xl mx-auto hero-mobile-zoom">
        <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-on-scroll leading-tight">
          Votre bien.
          <br />
          <span className="text-gray-700">Notre expertise.</span>
          <br />
          Vos revenus maximisés.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 animate-on-scroll leading-relaxed max-w-2xl mx-auto">
          Conciergerie toulousaine spécialisée dans la gestion locative courte durée. Nous optimisons votre investissement avec excellence et sérénité.
        </p>

        <div className="animate-on-scroll">
          <Link
            to="/discutons"
            className="bg-elegant-black text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 group border border-gray-800"
          >
            <span>Discutons de votre projet</span>
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
