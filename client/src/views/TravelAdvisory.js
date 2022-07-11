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
        <div id="countryinput">
          <input
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
        <div>
          <strong>The advisory message is:</strong>
        </div>
        <div>
          {props.advisories &&
            props.advisories.data &&
            props.advisories.data[location] &&
            props.advisories.data[location].advisory &&
            props.advisories.data[location].advisory.message}
        </div>
      </div>
    </div>
  );
}

export default TravelAdvisory;
