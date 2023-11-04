import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHWHXWcopx3-FMVikvpi6PdYg0ogCT-IY",
  authDomain: "movie-app-26557.firebaseapp.com",
  projectId: "movie-app-26557",
  storageBucket: "movie-app-26557.appspot.com",
  messagingSenderId: "436430629915",
  appId: "1:436430629915:web:4f959c02a2af4a0b43dcbe",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
