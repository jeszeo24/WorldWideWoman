// import { process_params } from "express/lib/router";
// import React, { useEffect, useState } from "react";

// function TravelAdvisory(props) {
//   const [location, setLocation] = useState("Barcelona");
//   const [advisory, setAdvisory] = useState(null);

//   function handleChange(event) {
//     setLocation(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     props.getLocationCb(location);
//   }

//   return (
//     <div className="container-fluid">
//       <h2>Travel Advisory in {location}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             className="mb-2"
//             value={location}
//             onChange={(event) => handleChange(event)}
//           />
//         </div>
//         <button className="btn btn-primary mb-2">Get travel advisory</button>
//       </form>
//       The advisory message is:{" "}
//       {advisory && advisory.advisory && advisory.advisory.message}
//       <br />
//     </div>
//   );
// }

// export default TravelAdvisory;
