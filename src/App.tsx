import React, { useState, useEffect, useRef } from 'react';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import PreSale from './components/PreSale';
import ManifestoSection from './components/Manifesto';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import Termos from './components/Termos';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';
import PoliticaTrocas from './components/PoliticaTrocas';
import LandingPage from './components/LandingPage';
import ArtSpaceGallery from './components/ArtSpaceGallery';
import ProtectedRoute from './components/ProtectedRoute';
import { LoginForm } from './components/Auth/LoginForm';
import { PrivateRoute } from './components/Auth/PrivateRoute';

const App: React.FC = () => {
  const preSaleSectionRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const [showUrgencyContainer, setShowUrgencyContainer] = useState(false);
  const [mainBlur, setMainBlur] = useState(0);
  const [wasInPreSaleSection, setWasInPreSaleSection] = useState(false);
  const urgencyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Blur gradual ao se aproximar do footer
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Quando o topo do footer entra na viewport, começa o blur
        const distance = Math.max(0, windowHeight - footerRect.top);
        // Blur máximo de 12px, começa a partir de 0px
        const blurValue = Math.min(distance / 40, 12); // ajuste divisor para suavidade
        setMainBlur(blurValue);
      }
      
      // Container de urgência na seção de pré-venda
      if (preSaleSectionRef.current) {
        const preSaleElement = preSaleSectionRef.current as HTMLElement;
        const rect = preSaleElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Verifica se o usuário está visualizando a seção de pré-venda
        const isInPreSaleSection = rect.top < windowHeight && rect.bottom > 0;
        
        // Se estava na seção e agora saiu, mostra o container de urgência
        if (wasInPreSaleSection && !isInPreSaleSection && !showUrgencyContainer) {
          setShowUrgencyContainer(true);
          
          // Timer para esconder após 5 segundos
          if (urgencyTimerRef.current) {
            clearTimeout(urgencyTimerRef.current);
          }
          urgencyTimerRef.current = window.setTimeout(() => {
            setShowUrgencyContainer(false);
          }, 5000);
        }
        
        setWasInPreSaleSection(isInPreSaleSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (urgencyTimerRef.current) {
        clearTimeout(urgencyTimerRef.current);
      }
    };
  }, [wasInPreSaleSection, showUrgencyContainer]);

  const handleCloseUrgencyContainer = () => {
    setShowUrgencyContainer(false);
    if (urgencyTimerRef.current) {
      clearTimeout(urgencyTimerRef.current);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div>Dashboard (Protegido)</div>
            </PrivateRoute>
          }
        />
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <VideoSection />
                <main className="pt-0" style={{ filter: `blur(${mainBlur}px)`, transition: 'filter 0.3s' }}>
                  <section ref={preSaleSectionRef} id="prelaunch">
                    <PreSale />
                  </section>
                  <Gallery />
                  <CallToAction />
                  <ManifestoSection />
                  <Hero />
                </main>
                <Footer ref={footerRef} />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/artspacegallery"
          element={
            <>
              <Header />
              <main className="pt-24">
                <ArtSpaceGallery />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/termos"
          element={
            <>
              <Header />
              <main className="pt-24">
                <Termos />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/privacidade" element={
          <>
            <Header />
            <main className="pt-24">
              <PoliticaPrivacidade />
            </main>
            <Footer />
          </>
        } />
        <Route path="/trocas" element={
          <>
            <Header />
            <main className="pt-24">
              <PoliticaTrocas />
            </main>
            <Footer />
          </>
        } />
        <Route path="/Manifesto" element={
          <>
            <Header />
            <main className="pt-24">
              <ManifestoSection />
            </main>
            <Footer />
          </>
        } />
      </Routes>
      
      {/* Container de Urgência */}
      {showUrgencyContainer && (
        <div className="fixed bottom-4 right-4 bg-yellow-600 text-white p-4 rounded-lg shadow-lg z-50 flex items-start max-w-xs animate-pulse">
          <div className="flex-grow">
            <p className="font-bold mb-2">🚨 Atenção:</p>
            <p className="text-sm">As primeiras 200 unidades não serão repetidas.</p>
            <p className="text-sm">Depois disso, o Mico some na floresta…</p>
            <p className="text-sm">e só volta quando quiser.</p>
          </div>
          <button
            className="ml-4 text-white font-bold text-lg leading-none hover:text-gray-200 transition-colors duration-200"
            onClick={handleCloseUrgencyContainer}
          >
            ✕
          </button>
        </div>
      )}
    </Router>
  );
};

export default App;