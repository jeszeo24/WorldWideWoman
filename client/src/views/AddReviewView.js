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
      <h2 id="addreview">Add Travel Review</h2>
      <form onSubmit={handleSubmit} className="box">
        <div>
          <div id="firstrowaddreview" className="row">
            <div className="col-sm-4">
              <label>
                City {""}
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="col-sm-4">
              <label>
                Country {""}
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="col-sm-4">
              <label>
                Travel Date {""}
                <input
                  id="traveldate"
                  name="traveldate"
                  type="date"
                  value={formData.traveldate}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>

          <div id="addsafetyrating">
            <label>
              Safety Rating
              <StarRating
                name="ratesafety"
                starClickCb={handleStarClick}
                required
              />
            </label>
          </div>

          <div id="addaffordrating">
            <label>
              Affordability Rating
              <StarRating
                name="rateaffordability"
                starClickCb={handleStarClick}
                required
              />
            </label>
          </div>

          <div id="addaccessrating">
            <label>
              Accessibility Rating
              <StarRating
                name="rateaccessibility"
                starClickCb={handleStarClick}
                required
              />
            </label>
          </div>

          <div id="addphotos">
            <label>
              Photos {""}
              <input
                id="photos"
                name="photos"
                type="url"
                value={formData.photos}
                onChange={handleChange}
              />
            </label>
          </div>

          <div id="addusername">
            <label>
              Username {""}
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div id="addnotes">
            <label>
              Optional Additional Notes
              <br />
              <input
                id="optional"
                name="optional"
                type="text"
                value={formData.optional}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit">Add Review</button>
        </div>
      </form>
    </div>
  );
}

export default AddReviewView;
