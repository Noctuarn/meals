import React, { useState } from "react";
import useAppContext from "../../hooks/useAppContext";

import "./Search.scss";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchMeal, getRandomMeals } = useAppContext();

  const handleChange = (event) => {
    setText(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchMeal(text)
  };

  const handleRandomMeal = () => {
    setText("");
    setSearchMeal("")
    getRandomMeals()
  }

  return (
    <header className="header">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search meals..."
          className="header-input"
          value={text}
          onChange={handleChange}
        />
        <div className="header-buttons">
          <button type="submit" className="btn header-btn">
            Search
          </button>
          <button type="submit" className="btn header-btn-meal" onClick={handleRandomMeal}>
            Suprise me
          </button>
        </div>
      </form>
    </header>
  );
};

export default Search;
