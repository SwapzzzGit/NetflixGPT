import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return <div>Loading...</div>; // or any other fallback content

  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
