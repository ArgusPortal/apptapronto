import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from 'react-native';

// Atualizado com base no novo google-services.json
const firebaseConfig = {
  apiKey: "AIzaSyDVsKjJGUUG7XhIA2JvaQalFtBODPW1ttw",
  authDomain: "apptapronto123.firebaseapp.com",
  projectId: "apptapronto123",
  storageBucket: "apptapronto123.firebasestorage.app",
  messagingSenderId: "1035440719213",
  appId: "1:1035440719213:android:6d7c2d2ec820d3e8e88664",
  // Android applicationId
  androidClientId: "com.tapronto.app",
};

// Inicialize o Firebase
export const app = initializeApp(firebaseConfig);

// Inicialize serviços
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

// Configurar persistência se necessário
const configurePersistence = async () => {
  if (Platform.OS !== 'web') {
    try {
      const { setPersistence, browserLocalPersistence } = await import('firebase/auth');
      await setPersistence(auth, browserLocalPersistence);
    } catch (error) {
      console.error("Erro ao configurar persistência:", error);
    }
  }
};

configurePersistence();

