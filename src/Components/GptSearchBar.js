import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import useGptMovieSearch from "../hooks/useGptMovieSearch";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const { searchMovies } = useGptMovieSearch();

  const handleGptSearchClick = async () => {
    if (searchText.current.value) {
      searchMovies(searchText.current.value);
    }
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-3 my-2 mx-2 mr-0 col-span-9 rounded-lg md:p-4 md:m-4"
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        />
        <button
          className="m-2 my-2 md:m-4 py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
