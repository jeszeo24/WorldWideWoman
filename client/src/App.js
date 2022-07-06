import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import ReviewView from "./views/ReviewView";
import AddReviewView from "./views/AddReviewView";

function App() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getReviews();
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
      </Routes>
    </div>
  );
}

export default App;
