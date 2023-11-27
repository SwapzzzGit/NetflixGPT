import React from "react";
import { IMG_CDN_URL } from "../../../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className=" pr-4 w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
