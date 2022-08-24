import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import swal from "sweetalert";

const firebaseConfig = {
  apiKey: "AIzaSyDA8LoHNeUIIOZDqKrQOgJPajp32xGsKCg",
  authDomain: "frontend-ecommerce-f6569.firebaseapp.com",
  projectId: "frontend-ecommerce-f6569",
  storageBucket: "frontend-ecommerce-f6569.appspot.com",
  messagingSenderId: "430329970428",
  appId: "1:430329970428:web:f208b34f4bedacc9be6179",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    swal("Success!", "You're Logined!", "success");
  } catch (err) {
    console.error(err);
    alert(err.message);
    swal("Error", err.message, "error");
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      password,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
    swal("Error", err.message, "error");
  }
};

const logOut = () => {
  signOut(auth);
  swal("You're LogedOut", "Thank You For Coming!", "info")
};
export {
  auth,
  db,
  logOut,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
};
