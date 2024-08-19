import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  // Getting movies from the redux store.
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        {/* 
            ********* COMPONENT STRUCTURE **********
            - MovieList - Now Playing Movies
              - MovieCards * n
            - MovieList - Popular Movies
              - MovieCards * n
            - MovieList - Top Rated Movies
              - MovieCards * n
            - MovieList - Upcoming Movies
              - MovieCards * n
        */}
        <div className="-mt-32 relative z-20">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
