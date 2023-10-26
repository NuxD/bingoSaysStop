'use client'
import React, {useState} from 'react';


function game() {
  const [inputType, setInputType] = useState("city");
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputType === "city") {
      // Fetch city data
      // Update the API route URL and the state handling accordingly
    } else if (inputType === "country") {
      // Fetch country data
      // Update the API route URL and the state handling accordingly
    } else if (inputType === "animal") {
      // Fetch animal data
      // Update the API route URL and the state handling accordingly
    }
    // Handle API requests and results
  };

  return (
    <div className="game-menu">
      <div className="menu-center">
        <div>
          <div>
            <button onClick={() => setInputType("city")}>City</button>
            <button onClick={() => setInputType("country")}>Country</button>
            <button onClick={() => setInputType("animal")}>Animal</button>
          </div>
          <form onSubmit={handleSubmit}>
            {inputType === "city" && (
              <input
                type="text"
                placeholder="Enter a city name"
                value={input}
                onChange={handleInputChange}
              />
            )}
            {inputType === "country" && (
              <input
                type="text"
                placeholder="Enter a country name"
                value={input}
                onChange={handleInputChange}
              />
            )}
            {inputType === "animal" && (
              <input
                type="text"
                placeholder="Enter an animal name"
                value={input}
                onChange={handleInputChange}
              />
            )}
            <button type="submit">Search</button>
          </form>
          {result && (
            <div>
              <h2>Result</h2>
              {/* Display the result data here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default game;
