import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gptData = useSelector((store) => store.gpt);
  const { gptMovieNames, gptMoviesList } = gptData;

  // TODO: Shimmer UI.
  if (!gptMovieNames) return null;

  return (
    <div>
      <div className="mt-4 py-4 text-white bg-black bg-opacity-80">
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMoviesList[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
