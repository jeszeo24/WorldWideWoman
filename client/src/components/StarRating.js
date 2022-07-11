import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating(props) {
  // Learned from https://www.youtube.com/watch?v=eDw46GYAIDQ&ab_channel=EricMurphy
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  function handleClick(ratingValue) {
    setRating(ratingValue);
    props.starClickCb(props.name, ratingValue);
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={40}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
