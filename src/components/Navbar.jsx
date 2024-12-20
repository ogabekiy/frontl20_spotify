import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-2">
      <div className="container flex justify-between items-center">
        <Link to={"/"} className="w-[200px]">
          <i className="fab text-4xl text-white fa-spotify"></i>
        </Link>
        <div className="flex gap-2 items-center">
          <Link
            to={"/"}
            className="w-12 hover:scale-105 flex-shrink-0 h-12 text-white flex items-center justify-center text-xl rounded-full bg-[#1F1F1F]"
          >
            <i className="fa fa-home"></i>
          </Link>

          <form className="w-[450px] mx-auto nav-search">
            <label
              htmlFor="default-search"
              className="text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                <i className="fa fa-magnifying-glass transition-all nav-glass-icon text-gray-400 text-xl"></i>
              </div>
              <Link to={"/"} className="absolute cursor-pointer z-10 top-1/2 -translate-y-1/2 end-5 border-s flex items-center ps-3 pointer-events-none">
                <i className="fa fa-list text-gray-400 text-xl"></i>
              </Link>
              <input
                type="text"
                id="default-search"
                className="block w-full p-3 ps-12 text-white border-0 rounded-full bg-[#2A2A2A] focus:ring-white placeholder-gray-400 font-semibold"
                placeholder="What do you want to play?"
                required
              />
            </div>
          </form>
        </div>
        <div className="font-bold text-sm">
          <button className="px-8 py-3.5 text-gray-400 hover:scale-[102%] hover:text-white">Sign up</button>
          <Link to={"/login"} className="text-black rounded-full bg-white px-9 py-3.5 hover:scale-[103%] hover:bg-slate-200">Log in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
