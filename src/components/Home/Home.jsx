import React, { useContext } from "react";
import Cards from "../Cards";
import { useSelector } from "react-redux";

const Home = () => {
  const {artists} = useSelector(state => state.song);
  return (
    <div className="flex gap-2 container">
      <div className="w-[425px] flex-shrink-0 p-5 bg-[#121212] rounded-lg">
        <div className="text-gray-400 flex justify-between">
          <h3 className="font-semibold hover:text-white cursor-pointer transition-all">
            <i className="fa text-xl me-2 fa-layer-group"></i>
            Your Library
          </h3>
          <button className="w-8 h-8 hover:bg-[#1E1E1E] hover:text-white rounded-full">
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <div>

        </div>
      </div>
      <div className="w-full flex flex-col gap-7 myScroll p-5 h-[calc(100vh-168px)] overflow-y-scroll bg-gradient-to-t from-[#121212] to-[#222] rounded-lg">
        <Cards title="Popular Artists" circle={true} playlist={artists.slice(0, 6)} />
        <Cards title="Popular Albums and singles" circle={false} playlist={artists.slice(6, 12)} />
        <Cards title="Popular radio" circle={false} playlist={artists.slice(9, 15)} />
      </div>
    </div>
  );
};

export default Home;
