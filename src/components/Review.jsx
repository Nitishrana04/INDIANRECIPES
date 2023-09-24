import React, { useState } from 'react';

const Review = ({ recipe }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can submit the rating and comment to your backend or store it locally.
    // You can also implement validation and error handling.
    // Reset the form after submission.
    setRating(0);
    setComment('');
  };

  return (
    <div className="review">
      <h3>Rate and Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="rating">
          <label>Rating:</label>
          <select value={rating} onChange={handleRatingChange}>
            <option value={1}>1 star</option>
            <option value={2}>2 stars</option>
            <option value={3}>3 stars</option>
            <option value={4}>4 stars</option>
            <option value={5}>5 stars</option>
          </select>
        </div>
        <div className="comment">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            rows="4"
            cols="50"
          />
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Review;
