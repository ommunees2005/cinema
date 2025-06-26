import React, { useState } from 'react';
import movies from './data/movies';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        onClick={() => handleCardClick(movie)}
      />
    ));

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>🎬 MY FAVOURITE MOVIES WEBSITE</h1>
        <p>Movies make life better</p>
      </header>

      {/* Movie List */}
      <div className="movie-list">{renderMovies()}</div>

      {/* Movie Details Section */}
      {selectedMovie && (
        <div className="details-section">
          <h2>{selectedMovie.title}</h2>
          <div className="details-content">
            <img
              src={require(`./assets/${selectedMovie.poster}`)}
              alt={selectedMovie.title}
              width="250"
              height="350"
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
            <div className="details-text">
              <p><strong>Year:</strong> {selectedMovie.year}</p>
              <p><strong>Rating:</strong> ⭐ {selectedMovie.rating}</p>
              <p><strong>Description:</strong> {selectedMovie.description}</p>
              <p><strong>Box Office:</strong> {selectedMovie.boxOffice}</p>
              <button onClick={() => setSelectedMovie(null)} className="close-button">
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} MovieZone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

