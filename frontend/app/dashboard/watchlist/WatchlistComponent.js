"use client";
import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const page = () => {
  return (
    <div className="border-4 w-full px-3 my-2 h-180 rounded-2xl border-gray-300">
      <div>
        <input
          className="w-130 mr-2 bg-gray-300 text-center text-black font-medium my-3 py-3 rounded-full"
          type="text"
          name="search"
          placeholder="Search eg. infy, bse, nifty fut weekly, gold mcx"
          spellCheck={false}
        />
        <label className="text-lg font-medium">
          {" "}
          Watchlist {watchlist.length}/50
        </label>
      </div>
      <ul>
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default page;

const WatchListItem = ({ stock }) => {
  const [show, setshow] = useState(false);
  const handleMouse = (e) => {
    setshow(true);
  };
  const handleLeave = (e) => {
    setshow(false);
  };

  return (
    <li
      onMouseEnter={handleMouse}
      className="hover:cursor-pointer  hover:border-1 hover:rounded-lg hover:bg-gray-50 hover:font-semibold"
      onMouseLeave={handleLeave}
    >
      <div className=" flex items-center justify-between relative my-3 py-2 px-2">
        <p className={stock.isDown ? "text-red-500" : "text-green-600"}>
          {stock.name}
        </p>
        <div>
          <span className={stock.isDown ? "text-red-500" : "text-green-600"}>
            {stock.percent}
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500" />
          ) : (
            <KeyboardArrowUp className="text-green-600" />
          )}
          <span className={stock.isDown ? "text-red-500" : "text-green-600"}>
            {stock.price}
          </span>
        </div>
      </div>
      {show && <WatchListActions uid={stock.name} />}
      {/* works only when show is true the wacthlist actions will be shown */}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <span >
      <span className="flex flex-row items-center gap-1 px-2 py-1">
        <Tooltip
          title="Sell [S]"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="bg-red-500 h-10 text-white rounded-full w-full">Sell</button>
        </Tooltip>
        <Tooltip
          title="Buy [B]"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="bg-green-500 h-10 text-white rounded-full w-full">Buy</button>
        </Tooltip>
        <Tooltip
          title="Chart [C]"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="text-black border-1 rounded-full h-10 w-full"><i className="ri-line-chart-line text-xl"></i></button>
        </Tooltip>
        <Tooltip
          title="More [M]"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="text-black h-10 w-full" ><i className="ri-more-2-fill text-xl"></i></button>
        </Tooltip>
      </span>
    </span>
  );
};
