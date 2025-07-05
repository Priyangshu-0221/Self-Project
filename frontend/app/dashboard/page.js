"use client";
import React, { useEffect, useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Page = () => {
  const addwacthlist = () => {
    toast.success("Added to Watchlist", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const [allstocks, setAllstocks] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    axios.get("http://localhost:8080/allstocks").then((res) => {
      setAllstocks(res.data);
    });
    return () => {
      console.log("Stock Data");
    };
  }, []);
  // const searchedItem = allstocks.filter((stock)=> stock.name.includes(query))
  return (
    <>
      <main className="h-150 w-full border-4 px-2 rounded-2xl border-gray-300 my-2 ">
        <div className="flex flex-col justify-center items-center h-25 mb-5">
          <h1 className="text-center mb-2 text-3xl ">
            <span className="font-serif ">All stocks</span> ({allstocks.length})
          </h1>
          <input
            className="h-10 w-[50%] border-2 text-center placeholder:text-center rounded-full" 
            type="text" placeholder="Trending Now: Indian Stock Market Favourites"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>

        <div className="overflow-y-auto h-115 flex flex-row justify-evenly  ">
          <table className="w-full">
            <thead className="bg-purple-500 text-white font-semibold text-xl ">
              <tr>
                <th className="px-5 py-1 text-center font-medium">Company</th>
                <th className="px-5 py-1 text-center font-medium">Open</th>
                <th className="px-5 py-1 text-center font-medium">High</th>
                <th className="px-5 py-1 text-center font-medium">Low</th>
                <th className="px-5 py-1 text-center font-medium">
                  Prev_Close
                </th>
                <th className="px-5 py-1 text-center font-medium">
                  1D Price_Change
                </th>
                <th className="px-5 py-1 text-center font-medium">Volume(₹)</th>
                <th className="px-5 py-1 text-center font-medium">Watchlist</th>
              </tr>
            </thead>
            <tbody>
              {allstocks
                .filter((a) => a.company.toLowerCase().includes(query))
                .map((stock, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-5 text-start py-1 text-center  font-medium">
                        {stock.company}
                      </td>
                      <td className="px-5 py-1 text-center font-medium ">
                        {stock.open}
                      </td>
                      <td className="px-5 py-1 text-center  font-medium">
                        {stock.high}
                      </td>
                      <td className="px-5 py-1 text-center font-medium ">
                        {stock.low}
                      </td>
                      <td className="px-5 py-1 text-center  font-medium">
                        {stock.prev_close}
                      </td>
                      <td
                        className={`px-5 py-1 text-center  font-medium ${
                          parseFloat(stock.price_change) > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {stock.price_change}
                      </td>
                      <td className="px-5 py-1 text-center font-medium ">
                        {stock.volume}
                      </td>
                      <td className="mx-[50%] py-1 text-center font-medium items-center flex justify-around">
                        <button
                          onClick={addwacthlist} 
                          className="hover:cursor-pointer"
                        >
                          <BookmarkAddIcon />
                        </button>
                        <ToastContainer
                          position="top-right"
                          autoClose={2000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick={false}
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="colored"
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Page;
