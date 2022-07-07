import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Sort from "../components/Sort";

function ReviewView(props) {
  const [filteredReviews, setFilteredReviews] = useState([]);

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

  // refer to https://www.educative.io/answers/how-to-sort-an-array-of-objects-in-javascript
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
    copyReviews.sort(dynamicsort("ratesafety", "desc"));
    console.log(copyReviews);
  }

  return (
    <div>
      <Sort showSafetyCb={showSafety} />
      <Search filterCb={filter} resetAllCb={reset} />
      <div className="ReviewView">
        <h2>Travel Reviews</h2>
        <ul>
          {
            //filteredReviews
            filteredReviews.map((r) => (
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
