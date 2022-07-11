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
    setInput("");
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      Search City:
      <div>
        <input value={input} name="search" onChange={(e) => handleChange(e)} />{" "}
        <button type="submit">Search</button>{" "}
        <button type="button" onClick={props.resetAllCb}>
          Reset All
        </button>
      </div>
    </form>
  );
}

export default Search;
