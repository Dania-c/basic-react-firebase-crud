import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBzn21hVEY_HY_oOBpwSMPM4iwhw3nSos4",
    authDomain: "reactcrud-fda2a.firebaseapp.com",
    projectId: "reactcrud-fda2a",
    storageBucket: "reactcrud-fda2a.appspot.com",
    messagingSenderId: "385548108341",
    appId: "1:385548108341:web:7246db257d368b143de77c",
    measurementId: "G-8DWM60NL76"
  };
  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app)