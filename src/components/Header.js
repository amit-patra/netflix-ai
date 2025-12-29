import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="w-full bg-gradient-to-b to-black from-transparent absolute z-10 flex justify-between">
      <img src={LOGO_URL} alt="netflix-logo" className="w-40" />
      {userDetails && (
        <div className="flex">
          <h1 className="text-white font-bold pr-1 pt-2">Hi! {userDetails.displayName}</h1>
          <img
            className="h-14 pt-1 pr-2"
            alt="user-logo"
            src={userDetails.photoURL}
          />
          <button
            className="bg-red-500  p-2 rounded-sm text-white font-bold cursor-pointer"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
