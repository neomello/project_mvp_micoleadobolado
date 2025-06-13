import React from 'react';

interface HeroSectionMinimalProps {
  onEnterClick: () => void;
}

const HeroSectionMinimal: React.FC<HeroSectionMinimalProps> = ({ onEnterClick }) => {
  const videoUrl = "https://res.cloudinary.com/di7ub5dqe/video/upload/v1749377253/loopperfeito_ydcgfl.mov";

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-thin uppercase tracking-wider md:tracking-widest mb-6 md:mb-8 leading-tight">
          <span className="block">Mico Leão</span>
          <span className="block">Bolado™</span>
        </h1>
        
        <button
          onClick={onEnterClick}
          className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white/20 transition-all duration-300 rounded-lg text-sm md:text-base"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default HeroSectionMinimal;