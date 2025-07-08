"use client";
import React, { useState, useEffect } from "react";

import axios from "axios";
import { DoughnutChart } from "../components/DoghnutChart";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Page = () => {
  const [watchlist, setwatchlist] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allwatchlist").then((res) => {
      setwatchlist(res.data);
    });
    return () => {
      console.log("Data fetched");
    };
  }, []);
  const data = watchlist.map((item, index) => ({
    subject: item.company || `Item ${index + 1}`, // Fallback to index if name is missing
    prev_close: item.prev_close,
  }));

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Prev_Close",
  //       data: watchlist.map((stock) => stock.prev_close),
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.6)",
  //         "rgba(54, 162, 235, 0.6)",
  //         "rgba(255, 206, 86, 0.6)",
  //         "rgba(75, 192, 192, 0.6)",
  //         "rgba(153, 102, 255, 0.6)",
  //         "rgba(255, 159, 64, 0.6)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(153, 102, 255, 1)",
  //         "rgba(255, 159, 64, 1)",
  //       ],
  //       borderWidth: 2,
  //     },
  //   ],
  // };
  return (
    <>
      <main className="w-full flex flex-row">
        {watchlist.length > 0 ? (
          <div className="border-4 overflow-y-auto  text-lg font-semibold w-full mx-1 my-2 h-180 rounded-2xl border-gray-300">
            <div className="text-center  h-11 rounded-full">
              <h1 className="text-3xl mb-2">Watchlist {watchlist.length}/50</h1>
              <hr />
            </div>
            <ul>
              <div className="flex flex-row justify-evenly">
                <table className="w-full ">
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th className="px-4 py-4 text-lg text-center font-medium">Company</th>
                      <th className="px-4 py-4 text-lg text-center font-medium">Open</th>
                      <th className="px-4 py-4 text-lg text-center font-medium">High</th>
                      <th className="px-4 py-4 text-lg text-center font-medium">Low</th>
                      <th className="px-4 py-4 text-lg text-center font-medium">Prev_Close</th>
                      <th className="px-6 py-4 text-lg text-center font-medium">1D Price_Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {watchlist.map((stock, index) => {
                      return (
                        <tr key={index} className="hover:bg-blue-50 transition">
                          <td className="px-5 py-4 text-center font-medium">{stock.company}</td>
                          <td className="px-5 py-4 text-center font-medium">{stock.open}</td>
                          <td className="px-5 py-4 text-center font-medium">{stock.high}</td>
                          <td className="px-5 py-4 text-center font-medium">{stock.low}</td>
                          <td className="px-5 py-4 text-center font-medium">{stock.prev_close}</td>
                          <td
                            className={ 
                              parseFloat(stock.price_change) > 0
                                ? "text-green-500"
                                : "text-red-600"
                            }
                          >
                            {stock.price_change}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
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
        <div className="w-full h-180 my-4">
          <h1 className="text-2xl text-center font-serif bg-black text-white rounded-4xl">Prev Close Radar Chart</h1>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
              <PolarGrid stroke="black" strokeOpacity={0.5} />
              <PolarAngleAxis dataKey="subject" stroke="black" />
              <PolarRadiusAxis stroke="black" />
              <Radar
                name="WatchList"
                dataKey="prev_close"
                stroke="black"
                fill="#CAFE48"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </>
  );
};

export default Page;
