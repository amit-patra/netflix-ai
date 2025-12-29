import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
const MovieCard = ({ movie }) => {
  return (
    <div className="flex-none w-44 sm:w-48 md:w-52 snap-start" role="listitem">
      <img
        alt={movie.original_title}
        src={IMAGE_CDN_URL + "/" + movie.poster_path}
      />
    </div>
  );
};

export default MovieCard;
