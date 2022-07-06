import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Search(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.filterCb(input);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      Search City:
      <input id="search" onChange={(e) => handleChange(e)} />
      <button type="submit">Search</button>
      <button onClick={props.resetAllCb}>Reset All</button>
    </form>
  );
}

export default Search;
