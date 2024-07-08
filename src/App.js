import React, { useState } from "react";
import "./App.css";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dispalyDefinition, setDispalyDefinition] = useState("");

  const findWord = (e) => {
    e.preventDefault();
    const item = dictionary.find(
      (item) =>
        item.word.toLocaleLowerCase() === searchValue.toLocaleLowerCase()
    );
    setDispalyDefinition(
      item ? item.meaning : "Word not found in the dictionary"
    );
  };
  return (
    <div className="root">
      <h1 className="heading">Dictionary App</h1>
      <form onSubmit={findWord}>
        <input
          type="text"
          placeholder="Search for a word..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h2>Definition:</h2>
      <p>{dispalyDefinition}</p>
    </div>
  );
};

export default App;
