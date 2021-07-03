import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBMrGLNzhn4fJt9vRFXkrFtFC1_r91IrCo",
  authDomain: "compact-5205a.firebaseapp.com",
  projectId: "compact-5205a",
  storageBucket: "compact-5205a.appspot.com",
  messagingSenderId: "1075993977531",
  appId: "1:1075993977531:web:5f74fa99b510176ef1ff9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;