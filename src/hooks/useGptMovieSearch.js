import { useDispatch } from "react-redux";
// import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const useGptMovieSearch = () => {
  const dispatch = useDispatch();

  const searchMovies = async (searchText) => {
    // Make an API call to OpenAI API and get movie results.

    // const queryMessage = `Act as a Movie recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give names of 5 movies and comma separated like the example given ahead. Example Result: The Shawshank Redemption, Schindler's List, The Dark Knight, Forrest Gump, Pulp Fiction.`;

    // const chatResult = await client.chat.completions.create({
    //   messages: [{ role: "user", content: queryMessage }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (chatResult.choices) {
    // // TODO: Error Handling.
    // }

    // // gptMovieList = "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan"
    // const gptMoviesList = chatResult.choices?.[0]?.message.content;

    // // movieList = ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"];
    // const moviesList = gptMoviesList.split(", ");

    /**
     * *************** OpenAI API Request & Response ***************
     *
     * REQUEST:
     * queryMessage: Act as a Movie recommendation system and suggest some movies for the
     * query: funny indian retro movies. Only give names of 5 movies and comma
     * separated like the example given ahead. Example Result: The Shawshank Redemption,
     * Schindler's List, The Dark Knight, Forrest Gump, Pulp Fiction.
     *
     * RESPONSE:
     * {
     *    finish_reason: "stop",
     *    index:0,
     *    message: {
     *      content: "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan",
     *      role: "user"
     *    }
     * }
     */

    // Simulating the GPT movies list for fetching the data from TMDB.
    const moviesList = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];

    // For each movie of moviesList, search in TMDB API
    const moviesPromiseArray = moviesList.map((movie) =>
      searchMovieInTMDB(movie)
    ); // will return promise array for all movies

    const tmdbMoviesResult = await Promise.all(moviesPromiseArray);
    dispatch(
      addGptMoviesResult({
        gptMovieNames: moviesList,
        gptMoviesList: tmdbMoviesResult,
      })
    );
  };

  // Function to make API call to TMDB.
  const searchMovieInTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const jsonResponse = await response.json();
    return jsonResponse.results;
  };

  return { searchMovies };
};

export default useGptMovieSearch;
