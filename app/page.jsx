"use client";
import { React, useState, useEffect } from "react";
import "./styles.css";
import { UserAuth } from "./context/AuthContext";


const Home = () => {
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
    <main className="main-container gradient">
      <title>PICARD</title>
      <div className="max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex grad">
        {/* The following code shows the logo in the top right corner and takes you back to the login page when clicked*/}
        
      </div>
      {/* the following code makes the button that will take you to the experiment page */}
      {loading ? null : !user ? (
        <p>You must be logged in to view this page - protected route</p>
      ) : (
        <>
          <p>Welcome, {user.displayName} - You're logged in</p>
          <div>
            <a href="/experiment">
              <button
                style={{
                  background: "dark-grey",
                }}
              >
                <p className="button">Create Experiment</p>
              </button>
            </a>
            {/* the following code makes the button that will take you to the algorithm page */}
            <a href="/algorithm">
              <button
                style={{
                  background: "dark-grey",
                }}
              >
                <p className="button">Description of Algorithms</p>
              </button>
            </a>
            {/* the following code makes the button that will take you to the pastResults page */}
            <a href="/pastResults">
              <button
                style={{
                  background: "dark-grey",
                }}
              >
                <p className="button">Past Results</p>
              </button>
            </a>
          </div>
        </>
      )}

      <div className="relative flex place-items-center">
        {/* Other elements */}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
};

export default Home;
