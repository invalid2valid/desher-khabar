import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const authInfo = useContext(AuthContext);
  const [menu, setMenu] = useState(true);
  // console.log(authInfo.user);
  return (
    <div className="my-8 relative flex justify-between items-center">
      <Link
        to={"/"}
        className=" m-2 underline font-extrabold text-4xl bg-red-600 py-2 px-4 rounded-full"
      >
        Desher-<span className="text-white underline">Khabar</span>
      </Link>
      {menu ? (
        <div className="md:hidden" onClick={() => setMenu(!menu)}>
          <HiMenu className="text-4xl mx-2" />
        </div>
      ) : (
        <div className=" absolute flex flex-col py-2 top-0 gap-6 items-center bg-white w-full">
          <div onClick={() => setMenu(!menu)} className="  relative">
            <HiMenuAlt1 className=" absolute left-48 text-3xl" />
          </div>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-red-600" : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? "text-red-600" : "text-black"
            }
          >
            Blog
          </NavLink>
          {authInfo.user ? (
            <div className="flex gap-3 items-center">
              {" "}
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={authInfo.user.displayName}
                className="h-10 w-10 rounded-full"
                src={authInfo.user.photoURL}
                alt=""
              />
              <Tooltip id="my-tooltip" />
              <button onClick={authInfo.logOut}>Logout</button>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? "text-red-600" : "text-black"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      )}

      <div className=" hidden md:flex gap-6 items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-black"
          }
        >
          Blog
        </NavLink>
        {authInfo.user ? (
          <div className="flex gap-3 items-center">
            {" "}
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={authInfo.user.displayName}
              className="h-10 w-10 rounded-full"
              src={authInfo.user.photoURL}
              alt=""
            />
            <Tooltip id="my-tooltip" />
            <button onClick={authInfo.logOut}>Logout</button>
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? "text-red-600" : "text-black"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
