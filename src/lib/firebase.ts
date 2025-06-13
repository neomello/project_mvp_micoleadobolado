import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Add your Firebase config here
  apiKey: "AIzaSyCT4tr1063Bgxo87jkL0wqAuhqFCV_cNNY",
  authDomain: "micoleao-app.firebaseapp.com",
  projectId: "micoleao-app",
  storageBucket: "micoleao-app.firebasestorage.app",
  messagingSenderId: "985009668145",
  appId: "1:985009668145:web:0635fa470b3c6bb8b59510",
  measurementId: "G-P77L3VBNHF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);