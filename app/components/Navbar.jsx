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
      <Image src="/logo.png" width={50} height={50} alt="" />
        </li>
        <button className="button">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        </button>
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
          <button className="button">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          </button>
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