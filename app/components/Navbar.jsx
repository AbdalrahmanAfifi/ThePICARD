import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { updateProfile, signInWithPhoneNumber } from "firebase/auth";
import firebase from "firebase/app"; // Import Firebase app if not already done

const Navbar = () => {
  const { user, googleSignIn, logOut } = useAuth();
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showPhoneNumberForm, setShowPhoneNumberForm] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      // Show the phone number form after Google sign-in
      setShowPhoneNumberForm(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false); // Add '()' to call setLoading
    };
    checkAuthentication();
  }, [user]);

  const handlePhoneNumberSubmit = async () => {
    try {
      // Update user profile with phone number
      await updateProfile(user, {
        phoneNumber: phoneNumber,
      });
  
      // Send OTP to the provided phone number
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
  
      // Set the confirmation result and hide the phone number form
      setConfirmationResult(confirmationResult);
      setShowPhoneNumberForm(false);
  
      // Log a message to verify that the submission is happening
      console.log("Phone number submitted successfully.");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>

        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          {showPhoneNumberForm ? (
            <div>
              <input
                type="text"
                placeholder="Enter your phone number (+1 xxx-xxx-xxxx)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ color: "black" }}
              />
              <button onClick={handlePhoneNumberSubmit}>Submit</button>
            </div>
          ) : (
            <div>
              <p>Welcome, {user.displayName}</p>
              <p className="cursor-pointer" onClick={handleSignOut}>
                Sign out
              </p>
              {user.phoneNumber ? (
                <p>Phone Number: {user.phoneNumber}</p>
              ) : (
                <p onClick={() => setShowPhoneNumberForm(true)}>Add Phone Number</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Add the reCAPTCHA container element here */}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Navbar;
