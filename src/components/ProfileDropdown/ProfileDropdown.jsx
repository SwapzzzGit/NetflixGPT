import React from "react";
import { ProfileIcon } from "../../utils/constants";
import ArrowImg from "../../assets/arrow.png";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";

const ProfileDropdown = () => {
  const user = useSelector((store) => store.user);
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
        <img className="w-4 h-4 mr-6" src={ArrowImg} alt="arrow-icon" />
      </div>
      <div className="origin-top-right absolute w-[220px] right-0 shadow-lg bg-black text-white z-10 border border-gray-700">
        <div className="pt-[10px] pb-[5px]">
          <div className="flex gap-[10px] px-[10px] py-[5px]  items-center">
            <img
              className="w-8 h-8 rounded-sm"
              src={user.photoURL}
              alt={user.displayName}
            />
            <div>{user.displayName}</div>
          </div>
        </div>
        <div className="pb-[10px]">
          {Object.values(ProfileIcon).map((item, index) => (
            <div key={index} className="hover:underline pl-[10px] pr-[10px] ">
              <div className="flex items-center py-[5px]">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-6 h-6 ml-1 mr-[14px]"
                  />
                )}
                <span className="cursor-pointer text-sm">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[0.25px] bg-gray-700"></div>
        <div
          className="hover:underline cursor-pointer flex justify-center p-2.5"
          onClick={handleSignOut}
        >
          <h2 className="text-sm">Sign Out of NetflixGPT</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
