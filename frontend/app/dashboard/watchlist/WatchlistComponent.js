"use client";
import React, { useState, useContext, useEffect } from "react";
import { Tooltip, Grow } from "@mui/material";
// import { watchlist } from "../data/data";
import GeneralContext from "../GeneralContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Page = () => {
  const [watchlist, setwatchlist] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allwatchlist").then((res) => {
      setwatchlist(res.data);
    });
    return () => {
      console.log("Wachlist Data fetched");
    };
  }, []);
  return (
    <>
      {watchlist.length > 0 ? (
        <div className="border-4 text-lg font-semibold w-full mx-1 my-2 h-180 rounded-2xl border-gray-300">
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
      ) : (
        <div className="border-4 flex items-center justify-center text-lg w-full mx-1 my-2 h-180 rounded-2xl border-gray-300">
          <div className="text-center  h-11 rounded-full">
            <h1 className="text-5xl mb-2 font-serif">
              Watchlist is Currently Empty
            </h1>
            <p className="text-sm text-gray-600 font-serif">
              Your watchlist, your way: Add stocks and start trading!
            </p>
            <hr />
          </div>
        </div>
      )}
    </>
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
      <div className=" flex flex-row gap-5 items-center justify-between relative my-3 py-2 px-2">
        <p className="text-black">{stock.company}</p>
        <div className="flex flex-row gap-5 bg-amber-100  items-center text-center justify-end">
          <h1 className="px-1">
            <span className="text-black">Open Price:</span> {stock.open}
          </h1>
          {/* {stock.open < stock.prev_close ? (
            <KeyboardArrowDown className="text-red-500" />
          ) : (
            <KeyboardArrowUp className="text-green-600" />
          )} */}
          <h1 className="px-1">
            <span className="text-black">Previous Close:</span>{" "}
            {stock.prev_close}
          </h1>
          {/* {stock.open > stock.prev_close ? (
            <KeyboardArrowDown className="text-red-500" />
          ) : (
            <KeyboardArrowUp className="text-green-600" />
          )} */}
          <span
            className={
              parseFloat(stock.price_change) > 0
                ? "text-green-600 "
                : "text-red-500"
            }
          >
            <span className="text-black">1D Price_Change:</span>{" "}
            {stock.price_change}
          </span>
        </div>
      </div>
      {show && <WatchListActions uid={stock._id} />}
      {/* works only when show is true the wacthlist actions will be shown */}
    </li>
  );
};
const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);
  const removeItem = (uid) => {
    console.log(uid);
    axios
      .delete("http://localhost:8080/removewatchlist", { data: { uid } })
      .then((res) => {
        console.log("Item removed");
      });
  };
  const addwacthlist = () => {
    toast.error("Item removed from Watchlist", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <span>
      <div>
        <Tooltip
          title="Sell [S]"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button
            onClick={() => {
              removeItem(uid);
            }}
            className="bg-red-500 h-8   text-white rounded-full w-full"
          >
            Remove
          </button>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Tooltip>
        <Tooltip
          title="Buy [B]"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button
            className="bg-green-500 h-8  text-white rounded-full w-full"
            onClick={() => openBuyWindow(uid)}
          >
            Buy
          </button>
        </Tooltip>
      </div>
    </span>
  );
};
