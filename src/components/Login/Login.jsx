import React, { useState } from "react";
import Header from "../Header/Header";
import { NETFLIX_BANNER } from "../../utils/constants";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInform(!isSignInform);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BANNER} alt="netflix-banner" />
      </div>

      <form
        className="absolute w-[30%] p-12 bg-black my-36 mx-auto bg-opacity-80 flex flex-col left-[32%]  translate-x-12 rounded-lg text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl  text-bold py-4">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-[#333]"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-2 w-full rounded-md bg-[#333]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-[#333]"
        />
        <button className="p-4 my-6 bg-[#e50914] w-full rounded-md opacity-100">
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
