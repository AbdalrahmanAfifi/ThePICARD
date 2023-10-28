import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import Image from 'next/image'
import './styles.css';

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
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
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full flex items-center justify-between p-2">
        
      <ul className="flex">
      <li className="p-2 cursor-pointer">
      <Image src="/logo.png" width={100} height={100} alt="" />
        </li>
        
        <li className="p-2 cursor-pointer">
          <a href="/">
              <button
                style={{
                  position: 'absolute', left: 130, top: 15
                }}
              >
                <p className="button">Home</p>
              </button>
            </a>
        </li>
        
        
          <li className="p-2 cursor-pointer">
          {/* <button className="button" style={{ position: 'absolute', left: 250, top: 15 }}>
            <a href="/about">About</a>
            </button> */}
            <a href="/about">
              <button
                style={{
                  position: 'absolute', left: 250, top: 15
                }}
              >
                <p className="button">About</p>
              </button>
            </a>
            
          </li>
        
      </ul>

      {!user ? (
        <ul className="flex">
          
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
          <button className="button">
            Login
            </button>
          </li>
          
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button className ="button">
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;