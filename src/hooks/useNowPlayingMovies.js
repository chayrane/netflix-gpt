import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and update the store.
  const dispatch = useDispatch();

  const getNowPlayingMovies = useCallback(async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonResponse = await response.json();
    dispatch(addNowPlayingMovies(jsonResponse.results));
  }, [dispatch]);

  useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);
};

export default useNowPlayingMovies;
