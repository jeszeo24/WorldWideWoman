import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import ReviewView from "./views/ReviewView";
import AddReviewView from "./views/AddReviewView";
import UserProfileView from "./views/UserProfileView";
import Error404View from "./views/Error404View";
import TravelAdvisory from "./views/TravelAdvisory";

function App() {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [advisories, setAdvisories] = useState([]);

  useEffect(() => {
    getReviews();
    getUsers();
    getAdvisories();
  }, []);

  async function getReviews() {
    await fetch("/reviews")
      .then((response) => response.json())
      .then((reviews) => {
        setReviews(reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getUsers() {
    await fetch("/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function addReview(newReview) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    };

    try {
      let response = await fetch("/reviews", options);
      const data = await response.json();

      if (response.ok) setReviews(data);
      else throw new Error(data.message);
    } catch (error) {
      setError(error.message);
    }
  }

  async function getAdvisories(location) {
    await fetch(`https://www.travel-advisory.info/api?countrycode=${location}`)
      .then((response) => response.json())
      .then((advisories) => {
        setAdvisories(advisories);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  {
    /* // does not work yet because review does not have User ID tied to it */
  }
  function redirectToUser(id) {
    setUsers(null);
    getUsers(id);
  }

  return (
    <div className="App">
      <h1>World Wide Women</h1>

      <NavBar />

      <Routes>
        <Route path="/" element={<ReviewView reviews={reviews} />} />
        <Route
          path="add-reviews"
          element={<AddReviewView addReviewCb={addReview} />}
        />
        <Route
          path="users/:id"
          element={
            <UserProfileView users={users} redirectToUserCb={redirectToUser} />
          }
        />
        <Route
          path="advisory"
          element={
            <TravelAdvisory
              advisories={advisories}
              advisoryCb={(location) => getAdvisories(location)}
            />
          }
        />
        <Route path="bad-route" element={<Error404View />} />
      </Routes>
    </div>
  );
}

export default App;
