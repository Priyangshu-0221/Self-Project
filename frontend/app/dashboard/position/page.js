"use client";
import React, { useState, useContext, useEffect } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import GeneralContext from "../GeneralContext";
import axios from "axios";

const Page = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="border-4 w-[50%] px-3 my-2 h-180 rounded-2xl border-gray-300">
        <div className="text-center  h-11 rounded-full">
          <h1 className="text-3xl mb-2">Watchlist {watchlist.length}/50</h1>
          <hr />
        </div>
        <ul>
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Page;

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
      onMouseLeave={handleLeave}
      className="hover:cursor-pointer  hover:border-1 hover:rounded-lg hover:bg-gray-50 hover:font-semibold"
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
      {/* {show && <WatchListActions uid={stock.name} />}
      works only when show is true the wacthlist actions will be shown */}
    </li>
  );
};

// const WatchListActions = ({ uid }) => {
//   const { openBuyWindow } = useContext(GeneralContext);
//   const { closeBuyWindow } = useContext(GeneralContext);
//   return (
//     <span>
//       <span className="flex flex-row items-center gap-1 px-2 py-1">
//         <Tooltip
//           title="Sell [S]"
//           placement="top"
//           arrow
//           slots={{ transition: Grow }}
//         >
//           <button
//             className="bg-red-500 h-8   text-white rounded-full w-full"
//             onClick={() => closeBuyWindow(uid)}
//           >
//             Sell
//           </button>
//         </Tooltip>
//         <Tooltip
//           title="Buy [B]"
//           placement="top"
//           arrow
//           slots={{ transition: Grow }}
//         >
//           <button
//             className="bg-green-500 h-8  text-white rounded-full w-full"
//             onClick={() => openBuyWindow(uid)}
//           >
//             Buy
//           </button>
//         </Tooltip>
//         <Tooltip
//           title="Chart [C]"
//           placement="top"
//           arrow
//           slots={{ transition: Grow }}
//         >
//           <button className="text-black border-1 rounded-full h-8 w-full">
//             <i className="ri-line-chart-line text-xl"></i>
//           </button>
//         </Tooltip>
//         <Tooltip
//           title="More [M]"
//           placement="top"
//           arrow
//           slots={{ transition: Grow }}
//         >
//           <button className="text-black h-8 w-full">
//             <i className="ri-more-2-fill text-xl"></i>
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };
