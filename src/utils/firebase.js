// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP1QXXiiC-YC5GSYc46UGnoBirdVeak2g",
  authDomain: "netflixai-amit9036.firebaseapp.com",
  projectId: "netflixai-amit9036",
  storageBucket: "netflixai-amit9036.firebasestorage.app",
  messagingSenderId: "552720746574",
  appId: "1:552720746574:web:139270e176c19c04e0db1f",
  measurementId: "G-H3TL306ZXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();