import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="w-full h-[40vh] bg-black flex items-start justify-center relative overflow-hidden border-y border-white/10">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover object-[center_20%] opacity-90 grayscale-[10%] contrast-125 saturate-50"
        poster="/logo_hrz_white.png"
      >
        <source 
          src="https://res.cloudinary.com/di7ub5dqe/video/upload/v1749377253/loopperfeito_ydcgfl.mov" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay cinematográfico mais sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none z-10" />

      {/* Marca d'água minimalista */}
      <div className="absolute bottom-4 right-4 z-20 text-white font-bold text-xs uppercase tracking-widest opacity-40 select-none">
        Micoleão // Ritual Visual
      </div>
    </section>
  );
};

export default VideoSection;