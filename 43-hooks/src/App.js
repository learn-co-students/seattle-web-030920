import React, { useState, useEffect } from "react";
import "./App.css";
import Address from "./components/Address";

const App = () => {
  const [name, setName] = useState("Jane");
  const [clicks, setClicks] = useState(0);

  const handleAddClick = () => {
    setClicks(clicks + 1)
  };

  useEffect(() => {
    document.title = `You have ${clicks} clicks`;
  }, [clicks]);

    return (
      <div className="App">
        <div className="container">
          <h2>Special Flatiron School Super Clicking App</h2>
          <div className="jumbotron">
            <h2>Clicks: {clicks}</h2>
            <button className="btn btn-info" onClick={handleAddClick}>
              Add Click to SFISSCA
            </button>
          </div>
          <Address />
        </div>
      </div>
    );
}

export default App;
