import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

const CallToAction: React.FC = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
          Você não compra um Mico Leão Bolado™.
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-light text-gray-400 mb-12 md:mb-16 leading-tight">
          Você entra para o movimento.
        </h3>
        
        <div className="flex justify-center">
          {user ? (
            <div className="flex flex-col items-center gap-4 md:gap-6">
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 max-w-md">
                {user.photoURL && (
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName || 'Usuário'} 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white" 
                  />
                )}
                <div className="text-center md:text-left">
                  <span className="text-base md:text-lg font-bold block">
                    Bem-vindo ao movimento, {user.displayName || user.email?.split('@')[0]}!
                  </span>
                  <span className="text-gray-300 text-xs md:text-sm">
                    Membro oficial da comunidade
                  </span>
                </div>
              </div>
              
              <div className="text-center space-y-3 md:space-y-4">
                <p className="text-base md:text-lg text-gray-300 max-w-md px-4">
                  Agora você faz parte de algo maior. Explore o conteúdo exclusivo e descubra o que vem por aí.
                </p>
                
                <button 
                  onClick={handleLogout} 
                  className="px-4 md:px-6 py-2 md:py-3 bg-white/10 border border-white/30 text-white font-bold rounded hover:bg-white/20 transition-colors duration-300 text-sm md:text-base"
                >
                  Sair
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center px-4">
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
                Faça login para se juntar ao movimento.
              </p>
              <div className="w-16 md:w-24 h-1 bg-yellow-400 mx-auto"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;