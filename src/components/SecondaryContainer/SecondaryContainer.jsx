import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) return <div>Loading...</div>;

  return (
    <div className="bg-black">
      <div className=" -mt-[270px] pl-5 relative z-50">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
          id="nowPlaying"
        />
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
          id="topRated"
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
          id="popular"
        />
        <MovieList
          title={"Upcoming"}
          movies={movies.upcomingMovies}
          id="upcoming"
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
