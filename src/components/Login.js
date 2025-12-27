import { useRef, useState } from "react";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Header } from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
 
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const toggleSignInForm = () => {
    setErrorMessage("");
    setisSignIn(!isSignIn);
  };

  const handleButton = () => {
    const message = validateForm(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": :" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name?.current?.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              // Profile updated!
              const user = auth.currentUser;
              dispatch(
                addUser({
                  displayName: user.displayName,
                  email: user.email,
                  photoURL: user.photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": :" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <img
        className="h-screen w-screen absolute"
        src={BACKGROUND_IMG}
        alt="netflix-background"
      />

      <div className="absolute justify-center items-center flex h-screen w-screen">
        <div className="text-white px-10 py-10 rounded-md bg-black/80 w-1/3 h-1/2">
          <label className="font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </label>
          <form onSubmit={(e) => e.preventDefault()} className="mt-5">
            {!isSignIn && (
              <input
                ref={name}
                className="w-full bg-gray-700 h-5 p-6 mb-3 border-solid border-white rounded-s-sm"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              ref={email}
              className="w-full bg-gray-700 h-5 p-6 mb-3 border-solid border-white rounded-s-sm"
              type="text"
              placeholder="Email"
            />
            <input
              ref={password}
              className="w-full bg-gray-700 h-5 p-6 mb-3 rounded-s-sm"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500 font-bold mb-2">{errorMessage}</p>
            <button
              className="w-full p-2 bg-red-700 text-center rounded-s-sm"
              onClick={handleButton}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          {isSignIn ? (
            <p className="pt-8">
              Alreay registred?{" "}
              <span
                className="underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p className="pt-8">
              New to Netflix?{" "}
              <span
                className="underline cursor-pointer"
                onClick={toggleSignInForm}
              >
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
