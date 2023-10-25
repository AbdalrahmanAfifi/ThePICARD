"use client"
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      { user ? (
        <p>Welcome, {user.displayName} - You're logged in</p>
      ) : (
        <p>You must be logged in to view this page - protected route</p>
      )}
    </div>
  );
};

export default ProfilePage;