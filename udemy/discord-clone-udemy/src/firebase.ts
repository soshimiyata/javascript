import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDqH5M0GNCdrhjmIXTh6PWKYU_6Ot5hMVI",
  authDomain: "discord-clone-udemy-3e4c1.firebaseapp.com",
  projectId: "discord-clone-udemy-3e4c1",
  storageBucket: "discord-clone-udemy-3e4c1.appspot.com",
  messagingSenderId: "336739208704",
  appId: "1:336739208704:web:a15568c0bbae9c2d3c52e5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provaider = new GoogleAuthProvider();

export { auth, provaider, db };