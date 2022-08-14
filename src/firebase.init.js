// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANN9F-rRli_25T1nFE6YmzsuzdLEkXqcA",
  authDomain: "ehan-technology.firebaseapp.com",
  projectId: "ehan-technology",
  storageBucket: "ehan-technology.appspot.com",
  messagingSenderId: "659944102470",
  appId: "1:659944102470:web:3a5365d3c446181b7f0847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;