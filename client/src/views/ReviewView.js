import React, { useState } from "react";
import Search from "../components/Search";

function ReviewView(props) {
  const [filteredReviews, setFilteredReviews] = useState([props.reviews]);

  function filter(cityInput) {
    let tempReviews = props.reviews.filter((e) => {
      return e.city === cityInput;
    });
    setFilteredReviews(tempReviews);
  }

  function reset() {
    setFilteredReviews(props.reviews);
  }

  return (
    <div>
      <Search filterCb={filter} resetAllCb={reset} />
      <div className="ReviewView">
        <h2>Travel Reviews</h2>
        <ul>
          {
            //filteredReviews
            props.reviews.map((r) => (
              <li className="box" key={r.id}>
                <p>
                  {r.city} {r.country} {r.traveldate}
                </p>
                <p>
                  {r.ratesafety} {r.rateaffordability} {r.accessibility}
                </p>
                <p>{r.optional}</p>
                <img
                  src={r.photos ? r.photos : "https://picsum.photos/200/300"}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ReviewView;
