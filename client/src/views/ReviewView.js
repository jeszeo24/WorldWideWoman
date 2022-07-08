import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Sort from "../components/Sort";

function ReviewView(props) {
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setFilteredReviews(props.reviews);
  }, [props.reviews]);
  //state stores as Filtered Reviews again (when state changes, rerenders)

  function filter(cityInput) {
    let tempReviews = props.reviews.filter((e) => {
      return e.city === cityInput;
    });
    setFilteredReviews(tempReviews);
  }

  function reset() {
    setFilteredReviews(props.reviews);
    console.log(props.reviews);
  }

  // Initial code for comparison and sorting
  //   function compare(a, b) {
  //     console.log(a.ratesafety);
  //     if (a.ratesafety < b.ratesafety) return -1;
  //     if (a.ratesafety > b.ratesafety) return 1;
  //     return 0;
  //   }

  //   function showSafety() {
  //     let copyReviews = [...props.reviews];
  //     copyReviews.sort(compare);
  //     setFilteredReviews(copyReviews);
  //   }

  // Referred to https://www.educative.io/answers/how-to-sort-an-array-of-objects-in-javascript
  function dynamicsort(property, order) {
    let sort_order = 1;
    if (order === "desc") {
      sort_order = -1;
    }
    return function (a, b) {
      // a should come before b in the sorted order
      if (a[property] < b[property]) {
        return -1 * sort_order;
        // a should come after b in the sorted order
      } else if (a[property] > b[property]) {
        return 1 * sort_order;
        // a and b are the same
      } else {
        return 0 * sort_order;
      }
    };
  }

  function showSafety() {
    let copyReviews = [...props.reviews];
    let safetyFilter = copyReviews.sort(dynamicsort("ratesafety", "desc"));
    setFilteredReviews(safetyFilter);
  }

  function showAffordability() {
    let copyReviews = [...props.reviews];
    let affordabilityFilter = copyReviews.sort(
      dynamicsort("rateaffordability", "desc")
    );
    setFilteredReviews(affordabilityFilter);
  }

  function showAccessability() {
    let copyReviews = [...props.reviews];
    let accessabilityFilter = copyReviews.sort(
      dynamicsort("rateaccessibility", "desc")
    );
    setFilteredReviews(accessabilityFilter);
  }

  //Question: what happens if I want it to maintain that state?
  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="container-fluid">
      <Sort
        showSafetyCb={showSafety}
        showAffordabilityCb={showAffordability}
        showAccessibilityCb={showAccessability}
      />
      <Search filterCb={filter} resetAllCb={reset} />
      <div className="ReviewView container-fluid">
        <h2>Travel Reviews</h2>
        <ul>
          {
            //filteredReviews
            filteredReviews.map((r) => (
              <li className="box" key={r.id}>
                <p>
                  City: {r.city} Country: {r.country} {r.traveldate}
                </p>
                <p>
                  Safety Rating: {r.ratesafety} Affordability Rating:{" "}
                  {r.rateaffordability} Accessibility Rating: {r.accessibility}
                </p>
                <p>{r.username}</p>
                <p>{r.optional}</p>
                <img
                  src={r.photos ? r.photos : "https://picsum.photos/200/300"}
                />
              </li>
            ))
          }
          <button className="like-button" onClick={handleClick}>
            <span className="likes-counter">{`Like | ${likes}`}</span>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default ReviewView;
