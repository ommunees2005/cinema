


import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  const imageSrc = require(`../assets/${movie.poster}`);
  <div className="movie-card">
  {/* Card content */}
</div>


  return (
    <div className="movie-card" onClick={() => onClick(movie)} style={{ cursor: 'pointer' }}>
      <img
        src={imageSrc}
        alt={movie.title}
        width="200"
        height="300"
        style={{ objectFit: 'cover', borderRadius: '10px' }}
      />
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>IMDb Rating: ⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;



