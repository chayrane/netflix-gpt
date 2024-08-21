import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";

const useUpcomingMovies = () => {
  // Fetch data from TMDB API and update the store.
  const dispatch = useDispatch();

  const getUpcomingMovies = useCallback(async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const jsonResponse = await response.json();
    dispatch(addUpcomingMovies(jsonResponse.results));
  }, [dispatch]);

  useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);
};

export default useUpcomingMovies;
