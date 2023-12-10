import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const useFirebase = () => useContext(FirebaseContext);
const firebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(FirebaseAuth, googleProvider);

      // If user signed in successfully, update the profile with additional info
      if (result.user) {
        await updateProfile(result.user, {
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        });

        setUser(result.user);
      }
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };


  const signOut = async () => {
    try {
      await FirebaseAuth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const isLoggedIn = !!user;
  const userEmail = user?.email;
  const userName = user?.displayName;

  return (
    <FirebaseContext.Provider
      value={{
        signInWithGoogle,
        isLoggedIn,
        userEmail,
        signOut,
        userName,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
