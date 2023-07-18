import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  if (localStorage.getItem("userEmail")) {
    dispatch(setUser(localStorage.getItem("userEmail")));
  }

  const handleLogout = () => {
    console.log("Logout");
    signOut(auth).then(() => {
      dispatch(setUser(null));
      localStorage.removeItem("userEmail");
    });
  };

  const menuItems = (
    <React.Fragment>
      <li className="font-medium">
        <Link to="/home">Home</Link>
      </li>
      <li className="font-medium">
        <Link to="/allbooks">All Books</Link>
      </li>

      {user?.email ? (
        <>
          <li className="font-medium">
            <Link to="/wishlist">Wishlist</Link>
          </li>

          <li className="font-medium">
            <button onClick={handleLogout} className="btn btn-ghost">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="font-medium">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="font-medium">
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-[#1ac1b5]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Pages of Time</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
