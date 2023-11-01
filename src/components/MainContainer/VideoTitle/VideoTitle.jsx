import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute z-20 px-12 pt-36 text-white bg-gradient-to-r from-black w-[100%] aspect-video border border-violet-500">
      <h1 className="font-bold text-6xl py-5 ">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0 flex items-center">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80 flex items-center mr-4">
          <FaPlay className=" mr-2 text-2xl" />
          Play
        </button>
        <button className="bg-[#6d6d6d] bg-opacity-70 text-white p-4 px-12 text-xl hover:bg-opacity-40 rounded-lg flex items-center">
          <AiOutlineInfoCircle className="text-white mr-2 text-2xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
