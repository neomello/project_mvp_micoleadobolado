import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, provider, db } from '../lib/firebase';
import HeroSectionMinimal from './HeroSectionMinimal';
import LandingFooter from './LandingFooter';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isInitialized } = useAuth();
  const hasNavigated = useRef(false);
  const [showAuth, setShowAuth] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    if (hasNavigated.current) {
      return;
    }
    
    // Se o usuário está autenticado, navega para /app após 3 segundos
    if (user) {
      const timer = setTimeout(() => {
        if (!hasNavigated.current) {
          hasNavigated.current = true;
          navigate('/app', { replace: true });
        }
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isInitialized, user, navigate]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setAuthError('');
    try {
      const result = await signInWithPopup(auth, provider);
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        lastLogin: new Date().toISOString(),
      }, { merge: true });
      // Após autenticação, navega automaticamente
      navigate('/app', { replace: true });
    } catch (error: any) {
      if (error.code === 'auth/unauthorized-domain') {
        setAuthError('Login com Google não disponível no ambiente de desenvolvimento. Use email/senha.');
      } else {
        setAuthError('Erro ao autenticar com Google. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async () => {
    setLoading(true);
    setAuthError('');
    try {
      let result;
      if (isRegister) {
        result = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        result = await signInWithEmailAndPassword(auth, email, password);
      }
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        name: result.user.displayName || email,
        email: result.user.email,
        photoURL: result.user.photoURL || '',
        lastLogin: new Date().toISOString(),
      }, { merge: true });
      // Após autenticação, navega automaticamente
      navigate('/app', { replace: true });
    } catch (error: any) {
      if (isRegister) {
        setAuthError('Erro ao cadastrar: ' + (error?.message || 'Verifique os dados.'));
      } else {
        setAuthError('Erro ao autenticar: ' + (error?.message || 'Verifique os dados.'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowAuth(false);
  };

  const handleEnterClick = () => {
    if (user) {
      navigate('/app');
    } else {
      setShowAuth(true);
    }
  };

  return (
    <div className={`landing-page relative overflow-hidden`}>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center transition-all duration-700">
        <HeroSectionMinimal onEnterClick={handleEnterClick} />
        
        {/* Modal de Autenticação */}
        {showAuth && !user && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-black border border-white/10 p-6 md:p-8 rounded-lg max-w-sm w-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-white">
                Entrar no Movimento
              </h2>
              
              {authError && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-red-300 text-sm">
                  {authError}
                </div>
              )}
              
              <div className="space-y-3 md:space-y-4">
                <button 
                  onClick={handleGoogleLogin} 
                  disabled={loading} 
                  className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-white text-black text-base md:text-lg font-bold rounded hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <svg width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M44.5 20H24V28.5H36.9C35.5 33.1 31.2 36.5 24 36.5C16.3 36.5 10 30.2 10 22.5C10 14.8 16.3 8.5 24 8.5C27.3 8.5 30.2 9.7 32.4 11.7L38.1 6C34.4 2.7 29.5 0.5 24 0.5C11.8 0.5 2 10.3 2 22.5C2 34.7 11.8 44.5 24 44.5C36.2 44.5 46 34.7 46 22.5C46 21.1 45.8 20.5 45.5 20Z" fill="#FFC107"/>
                      <path d="M6.3 14.7L13.2 19.3C15 15.2 19.1 12.5 24 12.5C26.6 12.5 29 13.4 30.8 14.9L37.1 9.2C33.7 6.2 29.1 4.5 24 4.5C16.7 4.5 10.3 9.2 6.3 14.7Z" fill="#FF3D00"/>
                      <path d="M24 44.5C31.1 44.5 37.1 41.2 40.7 36.1L33.2 30.8C31.1 32.3 28.3 33.5 24 33.5C19.1 33.5 15 30.8 13.2 26.7L6.3 31.3C10.3 36.8 16.7 44.5 24 44.5Z" fill="#4CAF50"/>
                      <path d="M44.5 20H24V28.5H36.9C36.2 31 34.5 33.1 33.2 34.2L40.7 39.9C43.8 36.3 46 30.9 46 22.5C46 21.1 45.8 20.5 45.5 20Z" fill="#1976D2"/>
                    </g>
                  </svg>
                  <span className="hidden sm:inline">{loading ? 'Entrando...' : 'Entrar com Google'}</span>
                  <span className="sm:hidden">{loading ? 'Entrando...' : 'Google'}</span>
                </button>
                
                <div className="text-center text-gray-400 text-sm">ou</div>
                
                <form onSubmit={(e) => { e.preventDefault(); handleEmailAuth(); }} className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded text-black text-sm md:text-base" 
                    autoComplete="email"
                    required
                  />
                  <input 
                    type="password" 
                    placeholder="Senha (mín. 6 caracteres)" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded text-black text-sm md:text-base" 
                    autoComplete="current-password"
                    minLength={6}
                    required
                  />
                  <button 
                    type="submit"
                    disabled={loading} 
                    className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-white text-black text-base md:text-lg font-bold rounded hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50"
                  >
                    {loading ? 'Processando...' : (isRegister ? 'Cadastrar' : 'Entrar')}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setIsRegister(r => !r)} 
                    className="text-xs md:text-sm underline text-gray-300 mt-2 w-full"
                  >
                    {isRegister ? 'Já tem conta? Entrar' : 'Não tem conta? Cadastre-se'}
                  </button>
                </form>
                
                <button
                  onClick={() => setShowAuth(false)}
                  className="w-full mt-3 md:mt-4 px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Se usuário está logado, mostra info */}
        {user && (
          <div className="fixed top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 z-50 max-w-xs">
            <div className="flex items-center gap-2 md:gap-3">
              <img src={user.photoURL || ''} alt={user.displayName || ''} className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
              <span className="text-white text-xs md:text-sm truncate">{user.displayName || user.email}</span>
              <button onClick={handleLogout} className="text-gray-400 hover:text-white text-xs md:text-sm">
                Sair
              </button>
            </div>
          </div>
        )}
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;