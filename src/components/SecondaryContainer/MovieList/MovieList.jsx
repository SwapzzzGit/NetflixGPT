import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div className="flex ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
/*<div className="flex gap-x-2 display-scroll">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>*/
