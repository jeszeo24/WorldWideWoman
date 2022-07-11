import React, { useState } from "react";
// const countrydata = require("../public/alpha2.json");

function TravelAdvisory(props) {
  const [location, setLocation] = useState("");

  function handleChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.advisoryCb(location);
  }

  return (
    <div className="container-fluid">
      <h2 id="traveladvisory">Travel Advisory in {location}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="countryinput"
            className="mb-2"
            value={location}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <button id="advisorybutton" className="btn btn-primary mb-2">
          Get travel advisory
        </button>
      </form>
      <div className="box">
        <strong>The advisory message is:</strong>
        {props.advisories &&
          props.advisories.data &&
          props.advisories.data[location] &&
          props.advisories.data[location].advisory &&
          props.advisories.data[location].advisory.message}
      </div>
      <img
        id="advisorypic"
        src="https://www.nevispages.com/wp-content/uploads/2021/07/travel.jpg"
      />
    </div>
  );
}

export default TravelAdvisory;
