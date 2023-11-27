import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MovieList = ({ title, movies, id }) => {
  if (!movies) {
    return <div>Loading...</div>;
  }

  const slideLeft = () => {
    var slider = document.getElementById(`slider-${id}`);
    slider.scrollLeft = slider.scrollLeft - 660;
  };
  const slideRight = () => {
    var slider = document.getElementById(`slider-${id}`);
    slider.scrollLeft = slider.scrollLeft + 660;
  };

  return (
    <div className="px-6  text-white relative">
      <h1 className="text-3xl py-6">{title}</h1>
      <div className="relative flex items-center">
        <div className="absolute top-0 left-0 h-[315px] flex items-center bg-black bg-opacity-30 group">
          <FaChevronLeft
            onClick={slideLeft}
            size={40}
            className="text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <div
          id={`slider-${id}`}
          className="w-full h-full overflow-x-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide group"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
        <div className="absolute top-0 right-0 h-[315px] flex items-center bg-black bg-opacity-30 group">
          <FaChevronRight
            onClick={slideRight}
            size={40}
            className="text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
