import React, { useState } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Dhruv ', rating: 5, description: 'Great course! Highly recommend it.' },
    { id: 2, name: 'Bhumi', rating: 4, description: 'Very informative and well-structured.' },
    { id: 3, name: 'Soham', rating: 5, description: 'Excellent material and presentation.' }
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 1, description: '' });

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const reviewToAdd = {
      ...newReview,
      id: reviews.length + 1,
    };
    setReviews([...reviews, reviewToAdd]);
    setNewReview({ name: '', rating: 1, description: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="reviews-section">
        <h3>Reviews</h3>
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <h4>{review.name}</h4>
              <p>Rating: {review.rating}/5</p>
              <p>{review.description}</p>
            </div>
          ))}
        </div>

        <div className="review-form">
          <h3>Add a Review</h3>
          <form onSubmit={handleReviewSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Rating:
              <select
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                required
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={newReview.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Review;
