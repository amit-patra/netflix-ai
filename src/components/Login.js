import { useState } from "react";

const Login = () => {
  const BACKGROUND_IMG =
    "https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_large.jpg";
  const [isSignIn, setIsSignIn] = useState(true);
  const handlClik = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="">
      <img
        className="h-screen w-screen absolute"
        src={BACKGROUND_IMG}
        alt="netflix-background"
      />

      <div className="absolute justify-center items-center flex h-screen w-screen">
        <div className="text-white px-5 py-10 rounded-md bg-black/80 w-1/5 h-1/2">
          <label className="font-bold">
            {isSignIn ? "Sign In" : "Sign Out"}
          </label>
          <form className="mt-5">
            {!isSignIn && (
              <input
                className="w-full bg-gray-700 h-5 p-6 mb-3 border-solid border-white rounded-s-sm"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              className="w-full bg-gray-700 h-5 p-6 mb-3 border-solid border-white rounded-s-sm"
              type="text"
              placeholder="Email or mobile number"
            />
            <input
              className="w-full bg-gray-700 h-5 p-6 mb-3 rounded-s-sm"
              type="password"
              placeholder="Password"
            />
            <button className="w-full p-2 bg-red-700 text-center rounded-s-sm">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          {isSignIn ? (
            <p className="pt-8">
              Alreay registred?{" "}
              <span className="underline cursor-pointer" onClick={handlClik}>
                Sign In
              </span>
            </p>
          ) : (
            <p className="pt-8">
              New to Netflix?{" "}
              <span className="underline cursor-pointer" onClick={handlClik}>
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
