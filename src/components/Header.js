import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const userDetails = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const LOGO_URL =
    "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
  return (
    <div className="w-full bg-gradient-to-b to-black from-transparent absolute z-10 flex justify-between">
      <img src={LOGO_URL} alt="netflix-logo" className="w-40" />
      {userDetails && (
        <div className="flex">
          <img
            className="h-14 pt-1 pr-2"
            alt="user-logo"
            src={userDetails.photoURL}
          />
          <button
            className="bg-green-400 p-2 rounded-sm text-white font-bold cursor-pointer"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
