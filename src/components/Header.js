import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeGptSearchStatus } from "../utils/gptSlice";
import { changeLanguage } from "../utils/transalteSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.user);
  const showSearchContent = useSelector(
    (store) => store?.gptSearch?.showSearchContent
  );
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSearch = () => {
    dispatch(changeGptSearchStatus(!showSearchContent));
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
          {/* Mutlti language Selection */}
          {showSearchContent && (
            <select
              defaultValue="en"
              className="h-7 px-2 py-1 mt-4 mr-2 rounded-md bg-black text-white border border-gray-300 text-xs"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((item) => (
                <option value={item.indetifier}>{item.name}</option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-500 pl-2 pr-2 h-10 mt-2 rounded-md mr-2 text-white cursor-pointer"
            onClick={handleSearch}
          >
            {showSearchContent ? "Home" : "🔍 AI Search"}
          </button>

          <h1 className="text-white font-bold pr-1 pt-2 mt-2">
            Hi! {userDetails.displayName}
          </h1>
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
