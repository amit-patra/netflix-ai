import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_VIDEO_CDN_URL } from "../utils/constants";


import { useDispatch } from "react-redux";
import { addUpcomingVideo } from "../utils/movieSlice";

export const useUpcomingVideos = () => {
  const dispatch = useDispatch();
  const getUpcomingVideos = async () => {
    const data = await fetch(UPCOMING_VIDEO_CDN_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingVideo(json.results))
  };

  useEffect(() => {
    getUpcomingVideos();
  }, []);
};
