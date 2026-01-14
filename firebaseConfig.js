import { initializeApp, getApps, getApp } from "firebase/app"; // Adicionado getApps e getApp
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Lógica para não inicializar o Firebase duas vezes (Evita erros no Hot Reload)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Inicializa a autenticação e exporta
const auth = getAuth(app);

export { auth };