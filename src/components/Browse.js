import React from "react";
import { Header } from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import {useNowPlayingMovies} from "../hooks/useNowPlayingMovies";
import { usePopulareVideo } from "../hooks/usePopularVideo";
import {useUpcomingVideos} from "../hooks/useUpcomingVideos";

export const Browse = () => {
  useNowPlayingMovies();
  usePopulareVideo();
  useUpcomingVideos();

  return (
    <div>
      <Header />
      <div className="">
        <MainContainer />
        <SeconderyContainer />
      </div>
    </div>
  );
};

/*
  - Browser List
    - MainCointainer
      - BackgroundVideo
      - VideoTitle
    - Second Containier
      - CardList * n
      - MovieCard * n

*/
