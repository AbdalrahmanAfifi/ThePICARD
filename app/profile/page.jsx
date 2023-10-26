"use client";
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
      <title>PICARD</title>
      {loading ? null : !user ? (
        <p>You must be logged in to view this page - protected route</p>
      ) : (
        <p>Welcome, {user.displayName} - You're logged in</p>
      )}
    </div>
  );
};

export default ProfilePage;
