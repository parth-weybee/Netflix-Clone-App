// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKG3-voV0BLjh2CgAVKX9kvGlG6hHSst8",
  authDomain: "netflix-clone-eaf0c.firebaseapp.com",
  projectId: "netflix-clone-eaf0c",
  storageBucket: "netflix-clone-eaf0c.firebasestorage.app",
  messagingSenderId: "384916156720",
  appId: "1:384916156720:web:e10cfaec4303d7859398f5",
  measurementId: "G-PVL9XNX0VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();