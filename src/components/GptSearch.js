import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG_URL } from "../utils/constants";
import SearchMovieList from "./SearchMovieList";
const GptSearch = () => {
  return (
    <div className="">
      <img
        className="w-full h-screen absolute"
        src={BACKGROUND_IMG_URL}
        alt="netflix-background"
      />
      <div className="p-2 w-full mt-36  flex justify-center items-center absolute">
        <div className="bg-black bg-black/60 p-3 w-1/3">
          <GptSearchBar />
        </div>
      </div>
      <div className="p-2  text-white w-screen mt-56 absolute">
        <SearchMovieList />
      </div>
    </div>
  );
}; 

export default GptSearch;
