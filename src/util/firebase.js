import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBMrGLNzhn4fJt9vRFXkrFtFC1_r91IrCo",
  authDomain: "compact-5205a.firebaseapp.com",
  databaseURL: "https://compact-5205a-default-rtdb.firebaseio.com",
  projectId: "compact-5205a",
  storageBucket: "compact-5205a.appspot.com",
  messagingSenderId: "1075993977531",
  appId: "1:1075993977531:web:5f74fa99b510176ef1ff9e",
});

export const db = firebase.firestore();

export const auth = app.auth();

// const firebaseApp = initializeApp(app);
export const storage = getStorage(app);

// note ref prob only needs to be used on ind pages.
// export const profileRef = ref(storage, 'profile_images')

export default db;

// update to 9 modular soon
// https://firebase.google.com/docs/web/modular-upgrade