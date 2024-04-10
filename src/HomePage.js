// HomePage.js
import React, { useState, useEffect } from 'react';

const API_KEY = "88bdf81a6e2b5cc83528f996f075b76c";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to the console
        setMovies(data.results);
      })
      .catch(error => console.error('Error fetching popular movies:', error));
  }, []);


  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;