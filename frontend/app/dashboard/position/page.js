import React from "react";
import { positions } from "../data/data";
import WatchlistComponent from "../watchlist/WatchlistComponent";
const page = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-evenly ">
        <div className="w-full px-7.5">
          <WatchlistComponent />
        </div>
        <main className="h-190 w-full border-4 px-2 rounded-2xl border-gray-300 my-2 ">
          <h3 className="text-3xl py-5 text-center font-semibold">Positions ({positions.length})</h3>
          <div className="order-table flex justify-center">
            <table className="text-center w-full">
              <thead className="bg-black text-amber-50">
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg.</th>
                  <th>LTP</th>
                  <th>P&L</th>
                  <th>Chg.</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((stock, index) => {
                  const currentValue = stock.price * stock.qty;
                  const isProfit = currentValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td className="font-medium px-4 py-1">{stock.product}</td>
                      <td className="font-medium px-4 py-1">{stock.name}</td>
                      <td className="font-medium px-4 py-1">{stock.qty}</td>
                      <td className="font-medium px-4 py-1">
                        {stock.avg.toFixed(2)}
                      </td>
                      <td className="font-medium px-4 py-1">
                        {stock.price.toFixed(2)}
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
                          parseFloat  (stock.day) >=0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {stock.day}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
