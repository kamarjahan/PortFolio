import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcuRKy2fxI-0ONH4GQCNWfcBZ4Kpl40Q8",
  authDomain: "portfolio-88557.firebaseapp.com",
  projectId: "portfolio-88557",
  storageBucket: "portfolio-88557.firebasestorage.app",
  messagingSenderId: "1019691312874",
  appId: "1:1019691312874:web:e44ba839eeb5f359c19993",
  measurementId: "G-JM7QE1YPZQ"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();
