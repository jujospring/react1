// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingDemo() {
  const [score, setScore] = useState(0);

  return (
    <div>
    <h1>Rating Demo Current Score: {score}</h1>
    <Rating
      name="half-rating" 
      defaultValue={2.5} 
      precision={0.5}
      value={score}
      onChange={(event, newScore) => {
        setScore(newScore);
      }}
    />
    </div>
  );
}