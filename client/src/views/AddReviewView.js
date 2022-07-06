import React, { useState } from "react";

const EMPTY_FORM = {
  city: "",
  country: "",
  traveldate: "",
  ratesafety: "",
  rateaffordability: "",
  rateaccessibility: "",
  photos: "",
  optional: "",
};

function AddReviewView(props) {
  const [formData, setFormData] = useState(EMPTY_FORM);

  function handleChange(event) {
    let { name, value } = event.target;

    setFormData((data) => ({ ...data, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addReviewCb(formData);
    setFormData(EMPTY_FORM);
  }

  return (
    <div className="AddReviewView">
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit}>
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

        <label>
          Safety Rating
          <input
            name="ratesafety"
            type="number"
            min="0"
            max="5"
            value={formData.ratesafety}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Affordability Rating
          <input
            name="rateaffordability"
            type="number"
            min="0"
            max="5"
            value={formData.rateaffordability}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Accessibility Rating
          <input
            name="rateaccessibility"
            type="number"
            min="0"
            max="5"
            value={formData.rateaccessibility}
            onChange={handleChange}
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
          Optional Additional Notes
          <input
            name="optional"
            type="text"
            value={formData.optional}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default AddReviewView;
