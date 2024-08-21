import React from "react";
import { MOVIES_CARD_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, imgAlt = "Movie Poster" }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 hover:opacity-60 transition-opacity duration-300">
      <img
        className="rounded-lg"
        src={MOVIES_CARD_IMG_CDN_URL + posterPath}
        alt={imgAlt}
      />
    </div>
  );
};

export default MovieCard;
