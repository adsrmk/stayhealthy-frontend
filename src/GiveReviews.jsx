import React, { useState } from 'react';

export default function GiveReviews() {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('5');
  const [submitted, setSubmitted] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <form onSubmit={submit}>
      <label>Rating<select value={rating} disabled={submitted} onChange={e => setRating(e.target.value)}><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></label>
      <label>Review<textarea value={review} disabled={submitted} onChange={e => setReview(e.target.value)} /></label>
      <button type="submit" disabled={submitted}>{submitted ? 'Review Submitted' : 'Submit Review'}</button>
    </form>
  );
}
