import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9faaqJBX1F6FPgy_qbVhrqCB8NNzyIfw",
  authDomain: "xtremsmash-demo.firebaseapp.com",
  projectId: "xtremsmash-demo",
  storageBucket: "xtremsmash-demo.appspot.com",
  messagingSenderId: "488413826938",
  appId: "1:488413826938:web:a5730dd0e911f7a5c10c3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, GoogleAuthProvider, signInWithPopup, signOut, collection, addDoc, getDocs, deleteDoc, doc };