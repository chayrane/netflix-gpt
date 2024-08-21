import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";

const usePopularMovies = () => {
  // Fetch data from TMDB API and update the store.
  const dispatch = useDispatch();

  const getPopularMovies = useCallback(async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const jsonResponse = await response.json();
    dispatch(addPopularMovies(jsonResponse.results));
  }, [dispatch]);

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);
};

export default usePopularMovies;
