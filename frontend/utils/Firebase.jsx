import {getAuth, GoogleAuthProvider} from  "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "oncart-bb322.firebaseapp.com",
  projectId: "oncart-bb322",
  storageBucket: "oncart-bb322.firebasestorage.app",
  messagingSenderId: "172003637053",
  appId: "1:172003637053:web:791bfd7c635aa2026af754"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}