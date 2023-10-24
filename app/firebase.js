// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHZc8BVNOKCZIANe7aVcmpt6J3HvCMSGI",
  authDomain: "picard1-ece0a.firebaseapp.com",
  projectId: "picard1-ece0a",
  storageBucket: "picard1-ece0a.appspot.com",
  messagingSenderId: "394241549887",
  appId: "1:394241549887:web:ec71774d7786412c2bfa8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);