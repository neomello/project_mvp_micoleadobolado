import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Check, Loader2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animação de entrada quando a seção fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Por favor, insira um email válido.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      await addDoc(collection(db, 'newsletters'), {
        email: email.trim(),
        subscribedAt: new Date().toISOString(),
        status: 'active'
      });

      setMessage('✅ Email cadastrado com sucesso! Você será notificado sobre novidades.');
      setEmail('');
      setTimeout(() => {
        setShowForm(false);
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Erro ao cadastrar email:', error);
      setMessage('❌ Erro ao cadastrar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToPreSale = () => {
    const preSaleSection = document.getElementById('prelaunch');
    if (preSaleSection) {
      preSaleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="membros" 
      className="py-24 bg-white text-black overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Título poderoso com ênfase emocional */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Este não é só um produto.
            <br />
            <span className="text-gray-600">É um protesto silencioso.</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Manifesto com blocos marcantes */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-xl md:text-2xl text-gray-900 font-medium space-y-4 leading-relaxed">
            <p className="transform transition-all duration-500 hover:scale-105 hover:text-black">
              O Mico não sorri.
            </p>
            <p className="transform transition-all duration-500 hover:scale-105 hover:text-black">
              Ele observa. Ele questiona.
            </p>
            <p className="transform transition-all duration-500 hover:scale-105 hover:text-black">
              Representa quem não aceita o mundo como está.
            </p>
            <p className="transform transition-all duration-500 hover:scale-105 hover:text-black text-yellow-600 font-semibold">
              Se você sente que está fora do lugar comum...
            </p>
            <p className="transform transition-all duration-500 hover:scale-105 hover:text-black text-2xl md:text-3xl font-bold">
              Ele é seu totem. Seu espelho. Seu manifesto.
            </p>
          </div>
        </div>

        {/* Chamada de ação mais urgente e vibrante */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {!showForm ? (
            <div className="space-y-6">
              <button 
                onClick={scrollToPreSale}
                className="inline-block px-10 py-5 text-lg font-bold uppercase text-black bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
              >
                GARANTIR O MEU MICO LEÃO BOLADO™ AGORA
              </button>
              
              <div className="mt-6">
                <button
                  onClick={() => setShowForm(true)}
                  className="text-sm text-gray-600 hover:text-black underline underline-offset-4 transition-all duration-300 hover:scale-105 font-medium"
                >
                  📩 Receber novidades exclusivas por email
                </button>
              </div>
            </div>
          ) : (
            /* Formulário com estilo "caixa mágica" temática */
            <div className="max-w-md mx-auto bg-black/90 border-2 border-yellow-400 p-8 rounded-2xl shadow-2xl text-white transform transition-all duration-500 scale-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                  🔥 Entre no movimento
                </h3>
                <p className="text-gray-300 text-sm">
                  Seja o primeiro a saber das novidades
                </p>
              </div>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    className="w-full px-4 py-4 border-2 border-yellow-400/50 rounded-xl bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-black/70 transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-yellow-400 text-black py-4 px-6 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Cadastrando...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        Cadastrar
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setMessage('');
                      setEmail('');
                    }}
                    className="px-6 py-4 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-xl"
                  >
                    ✕
                  </button>
                </div>
              </form>
              
              {/* Microanimação na submissão do email */}
              {message && (
                <div className={`mt-6 p-4 rounded-xl text-sm font-medium transition-all duration-500 transform ${
                  message.includes('✅') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/50 scale-105' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/50 scale-105'
                }`}>
                  {message}
                </div>
              )}
            </div>
          )}
          
          {!showForm && (
            <p className={`mt-6 text-gray-500 text-sm font-medium transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              ⏰ Antes que ele desapareça para sempre.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;