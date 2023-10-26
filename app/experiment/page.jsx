"use client";
import { React, useState, useEffect } from "react";
import "./styles.css";
import { UserAuth } from "../context/AuthContext";
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

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
        <p></p>
      ) : (
        <>

      <Card className="results" style={{ width: '40rem', height: '15rem' }}>
        <Card.Body>
          <Card.Title style={{borderBottom: '1px white'}}>
            Experiment Results:
          </Card.Title>
          
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card> 
          
      <div
        style={{ position: "absolute", float: "left", left: 525, top: 100 }}
      >
        <button className="button" style={{ padding: 20, width: 150, marginRight: 20 }}>
          <p>Environment</p>
        </button>
        
        <button className="button">
          <p>Distribute</p>
        </button>
      </div>
 
      <div 
        style={{ position: "absolute", float: "left", left: 525, top: 190 }}
      >
        <button className="button">
          Number of Nodes
          <p>
            <input type="number" min={1} className="numNodes"></input>
          </p>
        </button>
      </div>

      <div className="algDropdown">
        <Dropdown className="button">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Algorithm...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
