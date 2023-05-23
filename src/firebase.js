import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo73habxHUWIjKKT5_B4Zvbsmmj5iqQq8",
  authDomain: "chat-70729.firebaseapp.com",
  projectId: "chat-70729",
  storageBucket: "chat-70729.appspot.com",
  messagingSenderId: "728847564047",
  appId: "1:728847564047:web:50b3690c05f22a9643927a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()