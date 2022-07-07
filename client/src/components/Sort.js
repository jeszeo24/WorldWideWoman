import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sort(props) {
  const [selectSort, setSelectSort] = useState("");

  // const handleChange = (event) => {
  //   setSelectSort(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.filterCb(input);
  // };

  return (
    // refer to https://www.studytonight.com/bootstrap/solvedbootstrap-dropdown-not-working
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by:
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a onClick={props.showSafetyCb} className="dropdown-item" href="#">
            Safety
          </a>
        </li>
        <li>
          <a
            onClick={props.showAffordabilityCb}
            className="dropdown-item"
            href="#"
          >
            Affordability
          </a>
        </li>
        <li>
          <a
            onClick={props.showAccessabilityCb}
            className="dropdown-item"
            href="#"
          >
            Accessibility
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sort;
