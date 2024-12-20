import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Cards = ({ title, playlist, circle }) => {
  return (
    <div>
      <div className="flex font-bold justify-between items-center">
        <Link className="text-2xl hover:underline text-white" to={"/"}>
          {title}
        </Link>
        <Link className="text-sm hover:underline text-gray-400" to={"/"}>
          Show all
        </Link>
      </div>
      <div className="grid grid-cols-6">
        {playlist.map((p) => (
          <Card circle={circle} card={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
