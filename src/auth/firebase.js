//    İlgili firebase sayfalarından kopyalanacak...

// https://firebase.google.com/docs/auth/web/start
// https://console.firebase.google.com --> project-settings

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEXF0hSBYPsrxbLDX90w0tqBSUh3-GiPI",

  authDomain: "fir-movie-app-8eec7.firebaseapp.com",

  projectId: "fir-movie-app-8eec7",

  storageBucket: "fir-movie-app-8eec7.appspot.com",

  messagingSenderId: "384745376314",

  appId: "1:384745376314:web:66842653ec113179a9c303",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  //fonksiyon dökümanda --- https://firebase.google.com/docs/auth/web/start#sign_up_new_users
  try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
    navigate("/")

  } catch (err) {
    alert(err.message);
  }
};


export const signIn = async (email, password, navigate) => {
  
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
    navigate("/")
  
  } catch (err) {
    alert(err.message);
  }
}


export const logOut = () => {
  signOut(auth)
  alert("Logged out successfully...")
};