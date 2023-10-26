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
      <title>Past Results</title>
      <div className="max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex grad">
        {/* The following code shows the logo in the top right corner and takes you back to the login page when clicked*/}
      </div>
      {/* the following code makes the button that will take you to the experiment page */}
      {loading ? null : !user ? (
        <p></p>
      ) : (
        <>
          <div>
            <div
              style={{
                position: "absolute",
                float: "left",
                left: 550,
                top: 200,
              }}
            >
              <button
                style={{
                  background: "dark-grey",
                  width: 500,
                  marginRight: 15,
                }}
              >
                <p className="button">Experiment 1: Results and Metrics</p>
              </button>
              <button
                style={{
                  background: "dark-grey",
                }}
              >
                <p className="button">Delete</p>
              </button>
            </div>

            <div
              style={{
                position: "absolute",
                float: "left",
                left: 550,
                top: 300,
              }}
            >
              <button
                style={{
                  background: "dark-grey",
                  width: 500,
                  marginRight: 15,
                }}
              >
                <p className="button">Experiment 2: Results and Metrics</p>
              </button>
              <button
                style={{
                  background: "dark-grey",
                }}
              >
                <p className="button">Delete</p>
              </button>
            </div>

            <div
              style={{
                position: "absolute",
                float: "left",
                left: 550,
                top: 400,
              }}
            >
              <button
                style={{
                  background: "dark-grey",
                  width: 500,
                  marginRight: 15,
                }}
              >
                <p className="button">Experiment 3: Results and Metrics</p>
              </button>
              <button
                style={{
                  background: "dark-grey",
                }}
              >
                <p className="button">Delete</p>
              </button>
            </div>

            <div
              style={{
                position: "absolute",
                float: "left",
                left: 550,
                top: 500,
              }}
            >
              <button
                style={{
                  background: "dark-grey",
                  width: 500,
                  marginRight: 15,
                }}
              >
                <p className="button">Experiment 4: Results and Metrics</p>
              </button>
              <button
                style={{
                  background: "dark-grey",
                }}
              >
                <p className="button">Delete</p>
              </button>
            </div>

            <div
              style={{
                position: "absolute",
                float: "left",
                left: 550,
                top: 600,
              }}
            >
              <button
                style={{
                  background: "dark-grey",
                  width: 500,
                  marginRight: 15,
                }}
              >
                <p className="button">Experiment 5: Results and Metrics</p>
              </button>
              <button
                style={{
                  background: "dark-grey",
                }}
              >
                <p className="button">Delete</p>
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
