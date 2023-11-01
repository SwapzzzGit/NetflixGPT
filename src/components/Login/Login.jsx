import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { NETFLIX_BANNER, PROFILE_IMAGES } from "../../utils/constants";
import { checkValidData } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [data, setData] = useState(false);
  const [isSignInform, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      isSignInform ? null : name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (!isSignInform) {
      // Sign up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_IMAGES[Math.round(Math.random() * 10)],
          })
            .then(() => {
              // Profile updated!
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
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setData(true);

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInform(!isSignInform);
  };
  return (
    <div>
      <Header />
      <div className="absolute h-full">
        <img src={NETFLIX_BANNER} alt="netflix-banner" />
      </div>

      <form
        className="absolute w-[30%] p-12 bg-black my-36 mx-auto bg-opacity-80 flex flex-col left-[32%]  translate-x-12 rounded-lg text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-semibold  py-4">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-[#333]"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter Email"
          className="p-4 my-2 w-full rounded-md bg-[#333]"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-[#333]"
        />
        <p className="text-red-500 font-semibold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-[#e50914] w-full rounded-md opacity-100"
          onClick={handleButtonClick}
        >
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-[#737373] " onClick={toggleSignInForm}>
          {isSignInform ? "New to Netflix?" : "Already Registered?"}
          <button className="cursor-pointer text-white pl-1">
            {isSignInform ? "Sign up now" : "Sign In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
