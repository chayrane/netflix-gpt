import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";

const useTopRatedMovies = () => {
  // Fetch data from TMDB API and update the store.
  const dispatch = useDispatch();

  const getTopRatedMovies = useCallback(async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const jsonResponse = await response.json();
    dispatch(addTopRatedMovies(jsonResponse.results));
  }, [dispatch]);

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);
};

export default useTopRatedMovies;
