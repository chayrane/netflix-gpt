import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // Get trailer video & update the store with trailer video data.
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    // Getting the object containing movie trailer.
    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    // console.log(trailer);
    // console.log(json.results[0]);
    // console.log(`https://youtube.com/watch?v=${trailer.key}`);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
