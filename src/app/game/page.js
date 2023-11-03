"use client";
import React, { useState } from "react";

function game() {
  const contextList = ["Cities", "Animals", "Countries"];
  const maxContext = contextList.length - 1;
  const [contextIndex, setContextIndex] = useState(0);
  //const [context, setContext] = useState("countries");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleInputSubmit = () => {
    const lowerInputValue = inputValue.toLowerCase();
    console.log(lowerInputValue);
    console.log(alphabet)
    if (contextIndex < maxContext) {
      setContextIndex(contextIndex + 1);
    }else{
      setContextIndex(0);
    }
    setInputValue("");
    // Logic should happen here maybe?
  };

  // Handles when Enter key is pressed after input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInputSubmit();
    }
  };

  return (
    <div className="game-menu">
      <div className="menu-center">
        <h1>{contextList[contextIndex]}</h1>
        <input
          id="inputValue"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default game;
