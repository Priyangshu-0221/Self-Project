import React from "react";
import WatchlistComponent from "../watchlist/WatchlistComponent";
import Link from "next/link";
import { GeneralContextProvider } from "../GeneralContext";

const order = () => {
  return (
    <>
      <GeneralContextProvider>
        <div className="flex flex-row w-full justify-evenly ">
          <div className="w-full px-7.5">
            <WatchlistComponent />
          </div>
          <main className="h-190 w-full  border-4 px-2 rounded-2xl border-gray-300 my-2 ">
            <div className=" text-center">
              <p className="text-2xl font-serif py-2 ">Add Funds Now........</p>
              <div className="flex flex-row justify-center items-center  h-10 w-full ">
                <Link
                  href=""
                  className=" w-full bg-green-500 text-white mx-1 py-1 rounded-full"
                >
                  Add funds
                </Link>
                <Link
                  href=""
                  className=" w-full bg-red-500 text-white mx-1 py-1 rounded-full"
                >
                  Withdraw
                </Link>
              </div>
            </div>
            <div className="my-2">
              <div className=" bg-gray-200">
                <div className="text-center bg-black w-full text-white text-3xl  py-2 my-1 font-medium font-serif">
                  <span>
                    <p>Equity</p>
                  </span>
                </div>
                <div className="">
                  <div className=" flex flex-row gap-5 justify-evenly items-center font-bold my-4 ">
                    <p>Available margin</p>
                    <p>4,043.10</p>
                    <p>Used margin</p>
                    <p className="imp">3,757.30</p>
                    <p>Available cash</p>
                    <p className="imp">4,043.10</p>
                  </div>
                  <hr />
                  <div className="flex flex-col items-center font-bold my-4">
                    <p>Opening Balance</p>
                    <p>4,043.10</p>

                    <p>Opening Balance</p>
                    <p>3736.40</p>

                    <p>Payin</p>
                    <p>4064.00</p>

                    <p>SPAN</p>
                    <p>0.00</p>

                    <p>Delivery margin</p>
                    <p>0.00</p>

                    <p>Exposure</p>
                    <p>0.00</p>

                    <p>Options premium</p>
                    <p>0.00</p>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-5 justify-evenly items-center font-bold my-2 py-4 ">
                    <p>Collateral (Liquid funds)</p>
                    <p>0.00</p>
                    <p>Collateral (Equity)</p>
                    <p>0.00</p>
                    <p>Total Collateral</p>
                    <p>0.00</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </GeneralContextProvider>
    </>
  );
};

export default order;
