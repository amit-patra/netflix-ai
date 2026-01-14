import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_VIDEO_CDN_URL } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { addUpcomingVideo } from "../utils/movieSlice";

export const useUpcomingVideos = () => {
  const upcomingVideos = useSelector((store) => store.movies.upcomingVideos);
  const dispatch = useDispatch();
  const getUpcomingVideos = async () => {
    const data = await fetch(UPCOMING_VIDEO_CDN_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingVideo(json.results));
  };

  useEffect(() => {
    !upcomingVideos && getUpcomingVideos();
  }, []);
};
