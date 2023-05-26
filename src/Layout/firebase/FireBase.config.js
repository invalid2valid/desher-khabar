// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_ID,
  appId: import.meta.env.VITE_APP_PRODUCTID,
};

export const app = initializeApp(firebaseConfig);
