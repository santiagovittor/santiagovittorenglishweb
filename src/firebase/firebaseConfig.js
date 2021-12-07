
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCm7s57y_oBbQWj3ndFB6MaJ9KsNE7odbE",
  authDomain: "santivittor-490be.firebaseapp.com",
  projectId: "santivittor-490be",
  storageBucket: "santivittor-490be.appspot.com",
  messagingSenderId: "297160207103",
  appId: "1:297160207103:web:876806cc58bc2f1a0c7aca",
  measurementId: "G-KCDXBTYV8G"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)