"use client";
import React, { useEffect, useState } from "react";
import WatchlistComponent from "../watchlist/WatchlistComponent";
import { GeneralContextProvider } from "../GeneralContext";
import axios from "axios";

const Page = () => {
  const [holdings, setholdings] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/allholdings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setholdings(res.data);
      });
    return () => {
      console.log("Holdings Fetched");
    };
  }, []);
  const [variations, setVariations] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setVariations((prev) =>
        holdings.map((stock, index) => {
          const presentValue = stock.price * stock.qty;
          return Math.random() * 10 - 8 + presentValue;
        })
      );
    }, 500); // updates every 1 second

    return () => clearInterval(interval);
  }, [holdings]);
  return (
    <>
      <GeneralContextProvider>
        <div className="flex flex-row w-full justify-evenly ">
          <div className="w-full px-7.5">
            <WatchlistComponent />
          </div>
          <main className="h-190 w-full border-4 px-2 rounded-2xl border-gray-300 my-2 ">
            <h1 className="text-center text-3xl ">
              <span className="font-serif">Holdings</span> ({holdings.length})
              <hr />
            </h1>
            <div className="flex flex-row justify-evenly">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr className=" text-center">
                    <th className="px-4 py-4 text-lg text-center font-medium">
                      Company
                    </th>
                    <th className="px-4 py-4 text-lg text-center font-medium">
                      Qty
                    </th>
                    <th className="px-4 py-4 text-lg text-center font-medium">
                      Price
                    </th>
                    <th className="px-4 py-4 text-lg text-center font-medium">
                      Avg_Cost
                    </th>
                    <th className="px-4 py-4 text-lg text-center font-medium">
                      Market Value
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {holdings.map((stock, index) => {
                    const presentValue = stock.price * stock.qty;
                    const variation = variations[index] ?? presentValue; // fallback initially
                    const marketValue = variation;
                    return (
                      <tr
                        key={index}
                        className="hover:bg-blue-50 transition cursor-pointer"
                      >
                        <td className="font-medium text-center px-5 py-4">
                          {stock.name}
                        </td>
                        <td className="font-medium text-center px-5 py-4">
                          {stock.qty}
                        </td>
                        <td className="font-medium text-center px-5 py-4">
                          {stock.price.toFixed(2)}
                        </td>
                        <td className="font-medium text-center px-5 py-4">
                          {presentValue.toFixed(2)}
                        </td>
                        <td
                          className={
                            marketValue > presentValue
                              ? "text-green-500 font-medium text-center px-5 py-4"
                              : "text-red-500 font-medium text-center px-5 py-4"
                          }
                        >
                          {marketValue.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </GeneralContextProvider>
    </>
  );
};

export default Page;
