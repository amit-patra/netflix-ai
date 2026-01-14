import { API_OPTIONS, SEARCH_MOVIE_URL } from "./constants";

export const searchMovies = async (searchVal) => {
  const searchUrl = SEARCH_MOVIE_URL + searchVal;
  const data = await fetch(searchUrl, API_OPTIONS);
  const json = await data.json();
  return json.results;
};
