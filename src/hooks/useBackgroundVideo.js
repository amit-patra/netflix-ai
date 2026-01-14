import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addBackgroundVedio} from "../utils/movieSlice";

export const useBackgroundVideo = (videoId) => {
const backgroundVideoList  = useSelector(store => store?.movies?.backgroundVides);
const dispatch = useDispatch()
  const getBackgroundVideoDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+videoId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addBackgroundVedio(json.results))
    // console.log(json.results);
  };
  useEffect(() => {
    !backgroundVideoList && getBackgroundVideoDetails();
  }, []);
};
