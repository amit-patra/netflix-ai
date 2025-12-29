import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SeconderyContainer = () => {
  const nowPlayingVideoList = useSelector(
    (store) => store?.movies?.nowPlayingVideoList
  );
  const popularVideos = useSelector((store) => store?.movies?.popularVideos);
  const upcomingVideos = useSelector((store) => store?.movies?.upcomingVideos);
  return (
    <div className="-mt-32 bg-black">
      <MovieList title={"Upcoming Movie"} movies={upcomingVideos} />
      <MovieList title={"Now Playing Movie"} movies={nowPlayingVideoList} />
      <MovieList title={"Popular Movie"} movies={popularVideos} />
    </div>
  );
};

export default SeconderyContainer;

/*

Secondery Container
 - MovieList
 - MovieCard
*/
