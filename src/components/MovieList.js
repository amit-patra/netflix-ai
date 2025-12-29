import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="p-3 relative">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <div
        className="flex overflow-x-auto space-x-3 py-1 px-1 snap-x snap-mandatory scrollbar-hide" 
        role="list"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
