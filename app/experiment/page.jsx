"use client";
import { React, useState, useEffect } from "react";
import "./styles.css";
import { UserAuth } from "../context/AuthContext";

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
      <title>Create Experiment</title>
      <div className="max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex grad">
        {/* The following code shows the logo in the top right corner and takes you back to the login page when clicked*/}
      </div>
      {/* the following code makes the button that will take you to the experiment page */}
      {loading ? null : !user ? (
        <p></p>
      ) : (
        <>
          <div
            style={{ position: "absolute", float: "left", left: 525, top: 465 }}
          >
            <div className="card">
              <div className="chat-header">Results of Current Experiment</div>
              <div className="chat-window">
                <ul className="message-list"></ul>
              </div>
            </div>
          </div>
          <div
            style={{ position: "absolute", float: "left", left: 525, top: 100 }}
          >
            <button
              style={{
                background: "dark-grey",
                width: 350,
              }}
            >
              <p className="button">Environment</p>
            </button>
            <button
              style={{
                background: "dark-grey",
              }}
            >
              <p className="button">Distribute</p>
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              float: "left",
              left: 1020,
              top: 280,
            }}
          >
            <button
              style={{
                background: "dark-grey",
                width: 275,
              }}
            >
              <div className="button"></div>
            </button>
          </div>
          <div
            style={{ position: "absolute", float: "left", left: 525, top: 280 }}
          >
            <button
              style={{
                background: "dark-grey",
                width: 250,
              }}
            >
              <p className="button">
                {" "}
                <label className="white text-sm">Number of Nodes</label>
                <input type="number" min={0} className="node"></input>
              </p>
            </button>
          </div>
          <div
            style={{ position: "absolute", float: "left", left: 800, top: 370 }}
          >
            <button
              style={{
                background: "dark-grey",
                width: 200,
              }}
            >
              <p className="button">Run Experiment</p>
            </button>
          </div>
          <div>
            <div
              style={{
                position: "absolute",
                float: "left",
                left: 1200,
                top: 500,
              }}
            >
              <button
                style={{
                  background: "dark-grey",
                  width: 160,
                }}
              >
                <p className="button">Save Locally</p>
              </button>
            </div>

            <div
              style={{
                position: "absolute",
                float: "left",
                left: 1200,
                top: 650,
              }}
            >
              <button
                style={{
                  background: "dark-grey",
                  width: 160,
                }}
              >
                <p className="button">Delete Results</p>
              </button>
            </div>
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
