import React from 'react';
import Box from "../box";

import "./index.css";

export default function GuestReviews({ guestReviews }) {
  return (
    <div className="guest-reviews__block">
      <div className='review__heading'>Відгуки клієнтів</div>
      <div className="guest-reviews__list">
        {guestReviews.map(({ id, ...rest }) => (
          <GuestReview key={id} {...rest} />
        ))}
      </div>
    </div>
  );
}

function GuestReview({ guestName, rating, review }) {
  return (
    <Box className="guest-review">
      <span className="guest-review__name">{guestName}</span>
      <div className="guest-review__rating">Rating: {rating}</div>
      <p className="guest-review__text">{review}</p>
    </Box>
  );
}