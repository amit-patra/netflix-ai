import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../utils/languageConstatnt";
import { gptClient } from "../utils/openAi";
import { searchMovies } from "../utils/searchMovies";
import {addSearchMovie} from "../utils/movieSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searcText = useRef("");
  const lang = useSelector((store) => store?.language?.lang);

  const gptSearchHandle = async (searchVal) => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchVal +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const completion = await gptClient.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "developer", content: gptQuery }],
    });

    console.log(completion.choices[0].message.content);
  };

  const handleSearch = async(e) => {
    e.preventDefault();
    // AI Search Implementation
    // gptSearchHandle(searcText.current.value);

    // Normal Movie Search
    // searchMovies(searcText.current.value);
    const seachMovies = await searchMovies(searcText.current.value);
    dispatch(addSearchMovie({searchInput: searcText.current.value, searchList: seachMovies}))
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSearch}>
        <input
          ref={searcText}
          className="p-3 rounded-md w-full"
          type="text"
          placeholder={language[lang].searchText}
        />
        <button className="bg-red-600 opacity-100 p-3 rounded-md ml-1 w-1/3 text-white">
          {language[lang].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
