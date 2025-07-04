"use client";
import React, { useEffect, useState } from "react";
// import { holdings } from "../data/data";
import WatchlistComponent from "../watchlist/WatchlistComponent";
import axios from "axios";

const Page = () => {
  const [holdings, setholdings] = useState([]);
  useEffect(() => {
    const eventSource = new EventSource(
      "http://localhost:8080/allholdings-stream"
    );
    eventSource.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      setholdings(parsedData); // Live update
      eventSource.onerror = (err) => {
        console.error("SSE error:", err);
        eventSource.close();
      };
    };

    return () => {
      console.log("Holdings Data Fetched from Backend");
      eventSource.close();
    };
  }, []);
  const totalCurrentValue = holdings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  return (
    <>
      <div className="flex flex-row w-full justify-evenly ">
        <div className="w-full px-7.5">
          <WatchlistComponent />
        </div>
        <main className="h-190 w-full border-4 px-2 rounded-2xl border-gray-300 my-2 ">
          <h1 className="text-center text-3xl ">
            <span className="font-serif">Holdings</span> ({holdings.length}){" "}
            <hr />
          </h1>
          <div>
            <table className="mb-5">
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty</th>
                  <th>Avg. Cost</th>
                  <th>LTP</th>
                  <th>Cur. Val</th>
                  <th>P&L</th>
                  <th>Net. Chng</th>
                  <th>Day Chng</th>
                </tr>
              </thead>
              <tbody className="">
                {holdings.map((stock, index) => {
                  const currentValue = stock.price * stock.qty;
                  const profitLoss = currentValue - stock.avg * stock.qty;
                  const isProfit = profitLoss >= 0.0;
                  const profitIndicator = isProfit
                    ? "text-green-600"
                    : "text-red-600";
                  const dayChangeindicar = stock.isLoss
                    ? "text-red-600"
                    : "text-green-600";

                  return (
                    <tr key={index}>
                      <td className="font-medium px-4 py-1">{stock.name}</td>
                      <td className="font-medium px-4 py-1">{stock.qty}</td>
                      <td className="font-medium px-4 py-1">
                        {stock.avg.toFixed(2)}
                      </td>
                      <td className="font-medium px-4 py-1">
                        {stock.price.toFixed(2)}
                      </td>
                      <td className="font-medium px-4 py-1">
                        {currentValue.toFixed(2)}
                      </td>
                      <td
                        className={`px-4 py-2 font-medium text-right ${
                          currentValue - stock.avg * stock.qty >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {(currentValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td
                        className={`px-4 py-2 font-medium text-right ${
                          parseFloat(stock.net) >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stock.net}
                      </td>

                      <td
                        className={`px-4 py-2 font-medium text-right ${
                          stock.isLoss ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {stock.day}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex flex-row justify-between px-4 text-center text-2xl font-medium border-2 py-6 rounded-full">
              <div className="">
                <h5>
                  29,875.<span>55</span>{" "}
                </h5>
                <p>Total investment</p>
              </div>
              <div className="col">
                <h5>
                  {totalCurrentValue.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h5>
                <p>Current value</p>
              </div>
              <div className="col">
                <h5>1,553.40 (+5.20%)</h5>
                <p>P&L</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
