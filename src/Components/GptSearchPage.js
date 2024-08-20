import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      {/* 
      ****** COMPONENT STRUCTURE *******
      GPT Search Bar
      GPT Movie Suggestion    
    */}

      <div className="absolute -z-10">
        <img src={NETFLIX_BG} alt="nf-background-image" />
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
