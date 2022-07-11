import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Sort from "../components/Sort";
// FaStar is a star icon  imported from the React Icon library
import { FaStar } from "react-icons/fa";

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

  // Initial code for comparison and sorting, but only covers one property
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
  //   for a more generic sort function
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

  function showAccessibility() {
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

  // Courtesy of Jim!
  function convertDbDateToHuman(dbDateTime) {
    // Create a date obj
    let dateObj = new Date(dbDateTime);

    // Convert it to a (long) human readable format
    let humanReadable = dateObj.toString(); // 'Fri Jul 08 2022 00:00:00 GMT+0200'

    // I only want to keep the date part of it
    let humanDate = humanReadable.substring(4, 15); // 'Jul 08 2022'

    return humanDate;
  }

  return (
    <div className="container-fluid">
      <div className="travelreviews">
        <h2>Travel Reviews</h2>
      </div>
      <div className="row" id="headerrow">
        <div className="col-sm-8" id="search">
          <Search filterCb={filter} resetAllCb={reset} />
        </div>
        <div className="col-sm-4" id="sortdropdown">
          <Sort
            showSafetyCb={showSafety}
            showAffordabilityCb={showAffordability}
            showAccessibilityCb={showAccessibility}
          />
        </div>
      </div>
      <div className="ReviewView container-fluid"></div>
      {filteredReviews.map((r) => (
        <div className="box" key={r.id}>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  className="photo"
                  src={
                    r.photos
                      ? r.photos
                      : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
                  }
                />
              </div>
              <div className="col">
                <div className="row" id="firstrow">
                  <div className="col-sm-4">
                    <strong>City:</strong> {r.city}
                  </div>
                  <div className="col-sm-4">
                    <strong>Country:</strong> {r.country}
                  </div>
                  <div className="col-sm-4">
                    {convertDbDateToHuman(r.traveldate)}
                  </div>
                </div>
                <p>
                  <strong>Safety Rating:</strong>{" "}
                  {[...Array(r.ratesafety)].map((star, i) => (
                    <FaStar
                      className="star"
                      color="#ffc107"
                      size={40}
                      key={i}
                    />
                  ))}{" "}
                </p>
                <p>
                  <strong>Affordability Rating:</strong>{" "}
                  {[...Array(r.rateaffordability)].map((star, i) => (
                    <FaStar
                      className="star"
                      color="#ffc107"
                      size={40}
                      key={i}
                    />
                  ))}{" "}
                </p>
                <p>
                  <strong>Accessibility Rating:</strong>{" "}
                  {[...Array(r.rateaccessibility)].map((star, i) => (
                    <FaStar
                      className="star"
                      color="#ffc107"
                      size={40}
                      key={i}
                    />
                  ))}{" "}
                </p>
                {/* // does not work yet because review does not have User ID tied to it */}
                <p onClick={(e) => props.redirectToUserCb(r.id)}>
                  <strong>Reviewer:</strong> {r.username}
                </p>
                <p>
                  <strong>Notes:</strong> {r.optional}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="like-button" onClick={handleClick}>
        <span className="likes-counter">{`Like | ${likes}`}</span>
      </button>
    </div>
  );
}

export default ReviewView;
