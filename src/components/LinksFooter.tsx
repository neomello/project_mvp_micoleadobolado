import React from 'react';
import { Link } from 'react-router-dom';

const LinksFooter: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Ritual */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <span className="text-4xl md:text-6xl">📜</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
            Ritual do Acordo
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Conteúdo Principal */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 mb-12">
            <blockquote className="text-lg md:text-xl leading-relaxed text-gray-300 italic mb-8">
              "Ao entrar neste território, você aceita os termos da travessia.
              <br />
              Leia os detalhes da jornada:"
            </blockquote>
            
            {/* Links dos Termos */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
              <Link 
                to="/termos" 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-purple-400 group-hover:scale-110 transition-transform">⚖️</span>
                <span className="font-medium">Termos de Uso</span>
              </Link>
              
              <span className="text-gray-500 hidden md:inline">·</span>
              
              <Link 
                to="/privacidade" 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-blue-400 group-hover:scale-110 transition-transform">🔒</span>
                <span className="font-medium">Privacidade</span>
              </Link>
              
              <span className="text-gray-500 hidden md:inline">·</span>
              
              <Link 
                to="/trocas" 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-green-400 group-hover:scale-110 transition-transform">🔄</span>
                <span className="font-medium">Trocas e Reembolsos</span>
              </Link>
            </div>
          </div>

          {/* Seção Adicional - Ritual */}
          <div className="text-center space-y-8">
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
                🔮 O Código do Guardião
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-6">
                  <div className="text-3xl mb-3">🎭</div>
                  <h3 className="font-bold mb-2 text-purple-400">Autenticidade</h3>
                  <p className="text-sm text-gray-400">Seja verdadeiro consigo mesmo</p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-600/20 to-red-600/20 border border-yellow-400/30 rounded-lg p-6">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-bold mb-2 text-yellow-400">Rebeldia</h3>
                  <p className="text-sm text-gray-400">Questione o status quo</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg p-6 md:col-span-2 lg:col-span-1">
                  <div className="text-3xl mb-3">🌟</div>
                  <h3 className="font-bold mb-2 text-green-400">Transformação</h3>
                  <p className="text-sm text-gray-400">Mude o mundo ao seu redor</p>
                </div>
              </div>
            </div>

            {/* Footer da Página */}
            <div className="border-t border-white/10 pt-8 mt-12">
              <p className="text-gray-500 text-sm">
                Ao navegar por este site, você aceita fazer parte do movimento.
                <br />
                <span className="text-yellow-400 font-medium">O Mico observa. O Mico lembra.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksFooter;