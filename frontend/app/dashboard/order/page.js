"use client";
import React, { useEffect, useState } from "react";
import WatchlistComponent from "../watchlist/WatchlistComponent";
import { GeneralContextProvider } from "../GeneralContext";
import axios from "axios";
import OrderComponent from "../components/OrderComponent";
const Page = () => {
  const [allorders, setallorders] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/allorders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setallorders(res.data);
      });
    return () => {
      console.log();
    };
  }, []);
  return (
    <>
      <div className="flex flex-row w-full justify-evenly ">
        <aside className="w-full px-7.5">
          <GeneralContextProvider>
            <WatchlistComponent />
          </GeneralContextProvider>
        </aside>
        {allorders.length > 0 ? (
          <OrderComponent orders={allorders} />
        ) : (
          <div className="border-4  flex items-center justify-center text-lg w-full px-3 my-2 h-180 rounded-2xl border-gray-300">
            <div className="text-center  h-11 w-full rounded-full">
              <h1 className="text-5xl mb-2 font-serif">No Orders.. 🥲🥲</h1>
              <p className="text-sm text-gray-600 font-serif">
                Execute your strategy: Place stock orders and take control!!!!
              </p>
              <hr />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
