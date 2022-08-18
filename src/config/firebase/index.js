import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
  } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDA8LoHNeUIIOZDqKrQOgJPajp32xGsKCg",
    authDomain: "frontend-ecommerce-f6569.firebaseapp.com",
    projectId: "frontend-ecommerce-f6569",
    storageBucket: "frontend-ecommerce-f6569.appspot.com",
    messagingSenderId: "430329970428",
    appId: "1:430329970428:web:f208b34f4bedacc9be6179"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  export {auth,db, logInWithEmailAndPassword }
