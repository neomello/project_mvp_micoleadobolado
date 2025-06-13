import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Heart, Users, Lightbulb, Target, Globe } from 'lucide-react';

const ArtSpaceGallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section 
        ref={sectionRef}
        className="py-24 md:py-32 bg-gradient-to-br from-amber-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-yellow-400/20 rounded-full">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold uppercase tracking-wider">Impacto Social</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Homero transforma arte e tecnologia em{' '}
              <span className="text-yellow-600">ferramentas de inclusão social</span>{' '}
              no Brasil
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              À frente da fundação Coração de Rua e do centro criativo Artspace Lab, 
              artista e empreendedor social brasileiro promove acesso à cultura e 
              oportunidades para jovens talentos de baixa renda.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Users className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-300">Jovens impactados</p>
            </div>
            <div className="space-y-2">
              <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-gray-300">Projetos realizados</p>
            </div>
            <div className="space-y-2">
              <Globe className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-gray-300">Cidades alcançadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Quote Section */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 mb-16 rounded-r-lg">
              <blockquote className="text-xl md:text-2xl font-medium italic text-gray-800 leading-relaxed">
                "O coração que eu pinto nas ruas é um símbolo de amor, mas também de presença. 
                É um chamado para que a arte seja acessível e transforme vidas, principalmente de quem mais precisa"
              </blockquote>
              <cite className="block mt-4 text-lg font-semibold text-yellow-600">— Homero</cite>
            </div>

            {/* Coração de Rua Section */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold">Fundação Coração de Rua</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Conhecido por espalhar corações em muros e fachadas de grandes cidades, 
                    Homero não se limita à arte visual que o público encontra nas ruas. 
                    Seu trabalho vai além da estética: é parte de uma atuação social estruturada, 
                    voltada a crianças e jovens que enfrentam falta de acesso à cultura, 
                    à educação criativa e ao mercado profissional.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700">
                    Essa visão se concretiza por meio da fundação Coração de Rua, organização 
                    sem fins lucrativos que oferece oficinas, ações educativas, formações e 
                    experiências culturais para jovens talentos de baixa renda.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Nossos Programas</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Oficinas de arte e design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Formações em tecnologias criativas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Experiências culturais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inteligência artificial aplicada à arte</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Artspace Lab Section */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-purple-500" />
                <h2 className="text-3xl md:text-4xl font-bold">Artspace Lab</h2>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-600">
                  Formação, rede e futuro na economia criativa
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">O que oferecemos:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Formação técnica especializada</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Residências artísticas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Mentorias personalizadas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Programas de aceleração</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Nosso impacto:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Conexão com empresas parceiras</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Rede nacional de criadores</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Intercâmbios educativos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Carreiras sustentáveis na economia criativa</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border-l-4 border-purple-500 p-8 rounded-r-lg">
                <blockquote className="text-xl font-medium italic text-gray-800 leading-relaxed">
                  "O grande desafio do setor criativo é o desperdício de talento. 
                  Há muitos jovens com sensibilidade e potencial, mas sem acesso às ferramentas certas, 
                  ambiente e boas referências. O Artspace existe para preencher essa lacuna e 
                  transformar criatividade em realização"
                </blockquote>
                <cite className="block mt-4 text-lg font-semibold text-purple-600">— Homero</cite>
              </div>
            </div>

            {/* Compromisso com o Brasil */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Um compromisso com o Brasil criativo
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 md:p-12 rounded-2xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Foco no Brasil</h3>
                </div>
                
                <blockquote className="text-xl font-medium italic text-gray-800 leading-relaxed text-center mb-6">
                  "O reconhecimento internacional é consequência, não objetivo. 
                  Meu trabalho está voltado para o impacto social, para mudar realidades de jovens brasileiros — 
                  que, na minha opinião, formam o país mais criativo e cultural do mundo"
                </blockquote>
                <cite className="block text-lg font-semibold text-green-600 text-center">— Homero</cite>
              </div>
            </div>

            {/* Conclusão */}
            <div className="text-center bg-black text-white p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Arte como instrumento de mudança social
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-8">
                Com o Coração de Rua e o Artspace Lab, Homero constrói caminhos para que a arte, 
                somada à educação e à tecnologia, deixe de ser privilégio e passe a ser ferramenta de transformação. 
                É assim que muros viram mensagens, oficinas se tornam portas de entrada e talentos encontram espaço para se desenvolver.
              </p>
              
              <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold">
                <Heart className="w-5 h-5" />
                <span>A arte, nesse contexto, não é apenas estética. É ação, é presença, é um instrumento vivo de mudança social.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conheça mais sobre o Artspace Lab
          </h2>
          <p className="text-lg md:text-xl mb-8 text-purple-100">
            Acompanhe nosso trabalho e faça parte da transformação social através da arte
          </p>
          
          <a
            href="https://www.instagram.com/artspace.goiania/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Instagram className="w-6 h-6" />
            <span>Seguir @artspace.goiania</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ArtSpaceGallery;