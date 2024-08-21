import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={NETFLIX_BG}
          alt="nf-background-image"
          className="h-screen object-cover"
        />
      </div>
      <div>
        {/* 
      ****** COMPONENT STRUCTURE *******
      GPT Search Bar
      GPT Movie Suggestion    
    */}

        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
