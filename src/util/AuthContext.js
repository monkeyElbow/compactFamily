import React, { useEffect, useState, useContext } from "react";
import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    updatePassword,
    updateEmail,
  } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user ? user : null);
          setLoading(false);
        });
        return unsubscribe;
      }, [currentUser]);
    
      // useEffect(() => {
      //   console.log('The user is', currentUser)
      // }, [currentUser])
      
    
      function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
      }
    
      function signin(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
      }
    
      function signout() {
        return signOut(auth);
      }
    
      function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
      }
    
      function UpdateEmail(email) {
        return updateEmail(auth.currentUser, email);
      }
    
      function UpdatePassword(password) {
        return updatePassword(auth.currentUser, password);
      }
    
      function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
      }
    
    
      const value = {
        currentUser,
        signup,
        signin,
        signInWithGoogle,
        signout,
        resetPassword,
        UpdateEmail,
        UpdatePassword,
      };
    
      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      );
    }
    