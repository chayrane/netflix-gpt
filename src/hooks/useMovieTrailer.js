import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();

  // Get trailer video & update the store with trailer video data.
  const getMovieVideos = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonResponse = await response.json();

    // Getting the object containing movie trailer.
    const filterTrailer = jsonResponse.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterTrailer.length
      ? filterTrailer[0]
      : jsonResponse.results[0];
    dispatch(addTrailerVideo(trailer));
  }, [dispatch, movieId]);

  useEffect(() => {
    if (!trailerVideo) {
      getMovieVideos();
    }
  }, [getMovieVideos, trailerVideo]);
};

export default useMovieTrailer;
