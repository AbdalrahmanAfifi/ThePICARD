import React, { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Add state for phone number and MFA
  const [mynumber, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [confirmationResult, setConfirmation] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google sign-in successful
        setUser(result.user);
        // Prompt user to add phone number (MFA)
        setShow(true);
      })
      .catch((error) => {
        // Handle Google sign-in error
        alert(error.message);
      });
  };

  const verifyOTP = () => {
    if (otp === "" || confirmationResult === null) return;

    confirmationResult
      .confirm(otp)
      .then((userCredential) => {
        // Successful MFA
        setUser(userCredential.user);
        setShow(false);
      })
      .catch((error) => {
        // Handle MFA verification error
        alert(error.message);
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, verifyOTP, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
