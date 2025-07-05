import React from "react";
import Link from "next/link";
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const IndianStocks = () => {
  return (
    <>
      <div className="flex flex-row mx-5 my-4">
        <div>
          <img
            className="h-150 w-700"
            src="/media/laptop.png"
            alt="image"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <div className=" px-25 my-15 items-center text-black">
          <img
            className="h-30 w-40 items-end"
            src="/media/stockbuilding.png"
            alt="image"
            onContextMenu={(e) => e.preventDefault()}
          />
          <h1 className="text-5xl font-bold  mb-2">Invest in Indian Stocks</h1>
          <h2 className="text-4xl font-bold  mb-5">starting ₹100...</h2>
          <p className="text-xl font-semibold text-gray-500  py-1">
            Start investing in Stocks, ETFs & Mutual Funds
          </p>
          <p className="text-xl font-semibold  text-gray-500  py-1 mb-8">
            Long-term or short-term, high risk or low risk. Be the kind of
            investor you want to be.....
          </p>
          <SignedOut>
            <SignUpButton>
              <Link href="">
                <button className="w-90 h-15 bg-blue-500 rounded-full  active:bg-blue-900 hover:cursor-pointer text-2xl font-semibold text-white ">
                  Open a Free Demat A/C*{" "}
                  <OpenInNewOutlinedIcon fontSize="large"/>
                </button>
              </Link>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
            <button className="w-100 h-15 bg-blue-500 rounded-full  active:bg-blue-900 hover:cursor-pointer text-2xl font-semibold text-white ">
             Begin Your Investment Journey
              <i className="ri-arrow-right-circle-fill"></i>
            </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default IndianStocks;
