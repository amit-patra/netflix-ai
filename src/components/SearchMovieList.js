import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SearchMovieList = () => {
  const searchMovieContecnts = useSelector(
    (store) => store?.movies?.searchMovies
  );
  if (!searchMovieContecnts) return;
  const { searchInput, searchList } = searchMovieContecnts;
  return (
    <div className="mt-4 bg-black/80">
      {searchInput && (
        <MovieList
          title={"Search for the movie named " + searchInput}
          movies={searchList}
        />
      )}
    </div>
  );
};

export default SearchMovieList;
