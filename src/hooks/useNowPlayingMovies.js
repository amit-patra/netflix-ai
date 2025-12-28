import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingVideo } from "../utils/movieSlice";
import {NOW_PLAYING_MOVIE_URL} from "../utils/constants";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      NOW_PLAYING_MOVIE_URL,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingVideo(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};
