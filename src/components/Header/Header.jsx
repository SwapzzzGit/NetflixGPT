import React, { useState } from "react";
import { NETFLIX_LOGO, USER_ICON } from "../../utils/constants";
import ArrowImg from "../../assets/arrow.png";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import "./Header.css"; // Import a CSS file for styling
import { useSelector } from "react-redux";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((store) => store.user);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-black absolute w-screen z-10">
      <img
        className="w-[250px] h-[100px] px-8 py-2"
        src={NETFLIX_LOGO}
        alt="Netflix-logo"
      />
      {user && (
        <div
          className="relative"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <div className="flex items-center  pr-20 cursor-pointer">
            <img className="w-8 h-8" src={USER_ICON} alt="default-user-icon" />
            <img
              className={`w-3 h-3 ml-1 arrow-icon ${
                isDropdownOpen ? "rotate-0" : "rotate-180"
              }`}
              src={ArrowImg}
              alt="arrow-icon"
            />
          </div>
          {isDropdownOpen && (
            <ProfileDropdown toggleDropdown={toggleDropdown} />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
