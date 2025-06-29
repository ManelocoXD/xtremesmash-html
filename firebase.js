// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9faajBXF16FEPgy_qbVhrqCBN0NzyfIw",
  authDomain: "xtremsmash-demo.firebaseapp.com",
  databaseURL: "https://xtremsmash-demo-default-rtdb.firebaseio.com",
  projectId: "xtremsmash-demo",
  storageBucket: "xtremsmash-demo.firebasestorage.app",
  messagingSenderId: "488413826938",
  appId: "1:488413826938:web:a5730d0d0e911f7a5c10c3",
  measurementId: "G-E1LYL693M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);