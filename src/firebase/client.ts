import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCjuEAHt8JlR7zcdm00vdky5hzOQXutPEc",
  authDomain: "sabata-ecommerce.firebaseapp.com",
  projectId: "sabata-ecommerce",
  storageBucket: "sabata-ecommerce.appspot.com",
  messagingSenderId: "534070439699",
  appId: "1:534070439699:web:e033f0b7e0eb691e4db4e6",
  measurementId: "G-8G0WTD071C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
