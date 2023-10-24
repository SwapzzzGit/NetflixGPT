import React from "react";
import { ProfileIcon } from "../../utils/constants";
import ArrowImg from "../../assets/arrow.png";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/userSlice";

const ProfileDropdown = ({ toggleDropdown }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.alert(error);
      });
  };

  return (
    <div className="absolute right-20 w-48 mt-2">
      <div className="right-20 flex justify-end">
        <img className="w-4 h-4 mr-6 " src={ArrowImg} alt="arrow-icon" />
      </div>
      <div className="origin-top-right absolute right-0 shadow-lg bg-black text-white z-10 border border-gray-700">
        {Object.values(ProfileIcon).map((item, index) => (
          <div key={index} className="hover:underline">
            <div className="flex items-center p-2">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-5 h-5 mr-2.5"
                />
              )}
              <span className="cursor-pointer text-sm">{item.text}</span>
            </div>
          </div>
        ))}
        <div className="w-full h-[0.25px] bg-gray-700"></div>
        <div
          className="hover:underline cursor-pointer flex justify-center p-2.5 text-sm"
          onClick={handleSignOut}
        >
          <h2>Sign Out of NetflixGPT</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
