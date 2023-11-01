import React, { useEffect } from "react";
import { NETFLIX_LOGO, USER_ICON } from "../../utils/constants";
import ArrowImg from "../../assets/arrow.png";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import "./Header.css"; // Import a CSS file for styling
import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className=" flex z-30 justify-between items-center bg-gradient-to-b from-black absolute w-[100%] ">
      <img
        className="w-[250px] h-[100px] px-8 py-2"
        src={NETFLIX_LOGO}
        alt="Netflix-logo"
      />
      {user && (
        <div className="relative dop">
          <div></div>
          <div className="flex items-center  mr-20 cursor-pointer">
            <img
              className="w-8 h-8 rounded-sm"
              src={USER_ICON}
              alt="default-user-icon"
            />
            <img
              className={`w-3 h-3 ml-1 arrow-icon rotate-180`}
              src={ArrowImg}
              alt="arrow-icon"
            />
          </div>
          <div className="hide">
            <ProfileDropdown />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
