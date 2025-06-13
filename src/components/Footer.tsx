import { forwardRef } from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-black text-gray-400 text-xs py-12 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        
        {/* Seção principal com links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Coluna 1 - Navegação */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Explorar</h3>
            <div className="space-y-2">
              <Link 
                to="/artspacegallery" 
                className="block hover:text-yellow-400 transition-colors duration-300"
              >
                Artspace Gallery
              </Link>
              <Link 
                to="/Manifesto" 
                className="block hover:text-yellow-400 transition-colors duration-300"
              >
                Manifesto
              </Link>
            </div>
          </div>

          {/* Coluna 2 - Legal */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Legal</h3>
            <div className="space-y-2">
              <Link 
                to="/termos" 
                className="block hover:text-yellow-400 transition-colors duration-300"
              >
                Termos de Uso
              </Link>
              <Link 
                to="/privacidade" 
                className="block hover:text-yellow-400 transition-colors duration-300"
              >
                Privacidade
              </Link>
              <Link 
                to="/trocas" 
                className="block hover:text-yellow-400 transition-colors duration-300"
              >
                Trocas e Reembolsos
              </Link>
            </div>
          </div>

          {/* Coluna 3 - Social */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Conecte-se</h3>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/micobolado/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
                @micobolado
              </a>
              <a 
                href="https://www.instagram.com/homero.arte/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block hover:text-yellow-400 transition-colors duration-300"
              >
                @homero.arte
              </a>
              <a 
                href="https://www.instagram.com/artspace.goiania/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block hover:text-yellow-400 transition-colors duration-300"
              >
                @artspace.goiania
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col items-center gap-4">
            
            {/* Frase críptica */}
            <p className="uppercase tracking-widest text-gray-500 text-center">
              Guardiões sabem. O resto sente.
            </p>

            {/* Marca + crédito */}
            <div className="text-center space-y-1">
              <p className="text-gray-600 text-[10px]">
                © 2025 Mico Leão Bolado™
              </p>
              <p className="text-[10px] text-gray-700">
                dev por <a href="https://instagram.com/mello_.dev" target="_blank" className="hover:text-yellow-400 transition-colors">MELLØ</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;