import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  // PRODUCTION *****************

  apiKey: "AIzaSyBMrGLNzhn4fJt9vRFXkrFtFC1_r91IrCo",
  authDomain: "compact-5205a.firebaseapp.com",
  databaseURL: "https://compact-5205a-default-rtdb.firebaseio.com",
  projectId: "compact-5205a",
  storageBucket: "compact-5205a.appspot.com",
  messagingSenderId: "1075993977531",
  appId: "1:1075993977531:web:5f74fa99b510176ef1ff9e",



// DEV *********************

  // apiKey: "AIzaSyANW0C3GcQPSLyp5G2DOeKGiFegyuPjd_s",
  // authDomain: "compactdev-1baa5.firebaseapp.com",
  // projectId: "compactdev-1baa5",
  // storageBucket: "compactdev-1baa5.appspot.com",
  // messagingSenderId: "284691991023",
  // appId: "1:284691991023:web:b1fea8367a89a25d904e1a"
};


const app = initializeApp(firebaseConfig)

export const db = getFirestore();

export const auth = getAuth(app);

export const storage = getStorage(app);


export default db;

// update to 9 modular soon
// https://firebase.google.com/docs/web/modular-upgrade