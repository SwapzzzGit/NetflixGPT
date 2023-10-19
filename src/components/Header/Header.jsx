import React from "react";
import { NETFLIX_LOGO } from "../../utils/constants";

const Header = () => {
  return (
    <div className="absolute w-full z-10">
      <div className="bg-gradient-to-b from-black ">
        <img
          className="w-[250px] h-[100px] px-8 py-2"
          src={NETFLIX_LOGO}
          alt="Netflix-logo"
        />
      </div>
    </div>
  );
};

export default Header;
