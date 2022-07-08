import React, { useState } from "react";
import StarRating from "../components/StarRating";

const EMPTY_FORM = {
  city: "",
  country: "",
  traveldate: "",
  ratesafety: 0,
  rateaffordability: 0,
  rateaccessibility: 0,
  photos: "",
  username: "",
  optional: "",
};

function AddReviewView(props) {
  const [formData, setFormData] = useState(EMPTY_FORM);

  function handleChange(event) {
    let { name, value } = event.target;

    setFormData((data) => ({ ...data, [name]: value }));
  }

  function handleStarClick(name, rating) {
    setFormData((data) => ({ ...data, [name]: rating }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addReviewCb(formData);
    alert("Thank you for sharing your review!");
    setFormData(EMPTY_FORM);
  }

  return (
    <div className="AddReviewView">
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit} className="box">
        <div className="row">
          <div className="col">
            <label>
              City
              <input
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Country
              <input
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Travel Date
              <input
                name="traveldate"
                type="date"
                value={formData.traveldate}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Safety Rating
            <StarRating
              name="ratesafety"
              starClickCb={handleStarClick}
              required
            />
          </label>

          <label>
            Affordability Rating
            <StarRating
              name="rateaffordability"
              starClickCb={handleStarClick}
              required
            />
          </label>

          <label>
            Accessibility Rating
            <StarRating
              name="rateaccessibility"
              starClickCb={handleStarClick}
              required
            />
          </label>

          <label>
            Photos
            <input
              name="photos"
              type="url"
              value={formData.photos}
              onChange={handleChange}
            />
          </label>

          <label>
            Username
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Optional Additional Notes
            <input
              name="optional"
              type="text"
              value={formData.optional}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Add Review</button>
        </div>
      </form>
    </div>
  );
}

export default AddReviewView;
