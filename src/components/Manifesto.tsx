import { useRef, useEffect, useState } from 'react';

const Manifesto = () => {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [imgInView, setImgInView] = useState(false);
  const [textInView, setTextInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          setImgInView(true);
        }
      }
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setTextInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section className="bg-white text-black py-16 md:py-24 px-4 md:px-6 lg:px-20 relative overflow-hidden">
        {/* Floating Heart Background - Single Large Heart */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-heart-main">
            <img 
              src="/heart.png" 
              alt="" 
              className="w-80 md:w-96 lg:w-[28rem] select-none"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
          
          {/* Texto */}
          <div
            ref={textRef}
            className={`max-w-xl space-y-6 md:space-y-10 text-center md:text-left transition-all duration-700 ${
              textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-tight leading-tight">
              NÃO É UM BRINQUEDO.
            </h2>

            <ul className="space-y-2 md:space-y-3 text-lg md:text-xl lg:text-2xl font-light text-gray-700 leading-snug list-none pl-0">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold text-xl">•</span> 
                <span><strong>É um símbolo.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold text-xl">•</span> 
                <span>De <strong>autenticidade</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold text-xl">•</span> 
                <span>De <strong>rebeldia inteligente</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold text-xl">•</span> 
                <span>De <strong>um novo tempo</strong>.</span>
              </li>
            </ul>

            <div className="pt-4 text-sm md:text-base lg:text-lg text-gray-500">
              <p>
                Criado pelo artista <strong className="text-black font-semibold">Homero</strong>, 
                o <strong>Mico Leão Bolado™</strong> é um toy art colecionável que representa uma nova espécie:
              </p>
              <p className="italic text-gray-700 pt-2">
                a de quem <strong>pensa</strong>, <strong>sente</strong> e <strong>age diferente</strong>.
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex-shrink-0 order-first md:order-last">
            <div
              ref={imgRef}
              className={`w-48 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden border-2 md:border-4 border-red-500 shadow-lg transition-all duration-700 ${
                imgInView ? 'opacity-100 blur-0 translate-y-0' : 'opacity-40 blur-md -translate-y-16'
              }`}
              style={{ willChange: 'transform, filter, opacity' }}
            >
              <img
                src="/Homero-Mauricio-461x1024.jpg"
                alt="Foto do artista Homero"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(120%)' }}
              />
            </div>
            
            <div className="flex flex-col items-center mt-3 md:mt-4 space-y-1 md:space-y-2">
              <a 
                href="https://www.instagram.com/homero.arte/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs md:text-sm text-gray-700 hover:text-black font-semibold transition-colors"
              >
                <svg 
                  width="16" 
                  height="16" 
                  className="md:w-5 md:h-5"
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/>
                </svg>
                @homero.arte
              </a>
              
              <a 
                href="https://www.instagram.com/artspace.goiania/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs md:text-sm text-gray-700 hover:text-black font-semibold transition-colors"
              >
                <svg 
                  width="16" 
                  height="16" 
                  className="md:w-5 md:h-5"
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/>
                </svg>
                @artspace.goiania
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifesto;