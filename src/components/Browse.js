import React from "react";
import { Header } from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import {useNowPlayingMovies} from "../hooks/useNowPlayingMovies";

export const Browse = () => {
  useNowPlayingMovies();
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
