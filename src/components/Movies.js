import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div>
          <h1>Title: {movie.title}</h1>
          <h1>Time: {movie.time}</h1>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre) =>(
                <li>{genre}</li>
            ))}
          </ul>
          <h1>Metascore: {movie.metascore}</h1>
        </div>
      ))}
    </div>
  );
};

export default Movies;
