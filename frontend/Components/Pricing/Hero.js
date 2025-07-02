"use client";
import React from "react";
const Hero = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly px-8 my-5 gap-5">
        <div className="border-2 w-100 rounded-2xl border-gray-300 text-center flex flex-col justify-between  items-center px-8 py-5">
          <img
            className="h-60 rounded-full w-60 mb-5"
            src="/media/0.png"
            alt="image"
            onContextMenu={e => e.preventDefault()}
          />
          <h4 className="text-3xl mb-2 font-medium">Acc Opening & AMC</h4>
          <p>0.1% per executed order whichever is lower , minimum Rs 5</p>
        </div>
        <div className="border-2 w-100 rounded-2xl border-gray-300 text-center flex flex-col justify-between items-center px-8 py-5">
          <img
            className="h-60 rounded-full mb-5 w-60 "
            src="/media/2_0.png"
            alt="image"
            onContextMenu={e => e.preventDefault()}
          />
          <h4 className="text-3xl mb-2 font-medium">Equity Brokerage</h4>
          <p>0.1% per executed order whichever is lower , minimum Rs 5</p>
        </div>
        <div className="border-2 w-100 rounded-2xl border-gray-300 text-center flex flex-col justify-between  items-center px-8 py-5">
          <img
            className="h-60 rounded-full w-60 "
            src="/media/0.png"
            alt="image"
            onContextMenu={e => e.preventDefault()}
          />
          <h4 className="text-3xl font-medium">Pledge</h4>
          <p className="mb-2">per ISIN, for Pledge/Unpledge order</p>
        </div>
      </div>
      <div className="flex flex-row bg-gray-200  justify-evenly text-center">
        <h1 className="text-4xl font-semibold  text-gray-500 my-5 py-5   ">
          Zero Hidden Charges
        </h1>
        <h1 className="text-4xl  font-semibold text-gray-500  my-5 py-5  ">
          Zero Fixed Charges
        </h1>
      </div>
    </>
  );
};
export default Hero;
