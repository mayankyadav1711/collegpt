import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0); // State to keep track of the rating

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating); // Update the rating when a star is clicked
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <i
          key={value}
          className={`star${value} ${value <= rating ? "fas" : "far"} fa-star`}
          onClick={() => handleStarClick(value)}
        ></i>
      ))}
    </div>
  );
};

export default StarRating;
