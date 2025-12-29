import React from "react";
import { Header } from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopulareVideo } from "../hooks/usePopularVideo";
import { useUpcomingVideos } from "../hooks/useUpcomingVideos";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

export const Browse = () => {
  useNowPlayingMovies();
  usePopulareVideo();
  useUpcomingVideos();

  const showSearchContent = useSelector((store) => store?.gptSearch?.showSearchContent);
  return (
    <div>
      <Header />
      <div className="">
        {showSearchContent ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SeconderyContainer />{" "}
          </>
        )}
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
