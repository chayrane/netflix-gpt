import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Check if movies is not null or undefined and has elements
  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available.</p>
      </div>
    );
  }

  return (
    <div className="pl-4 pr-4 md:pl-12 md:pr-2 py-3">
      <h1 className="text-xl md:text-3xl pb-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              imgAlt={movie.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
