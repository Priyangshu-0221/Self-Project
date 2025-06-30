import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="h-20 flex flex-row justify-between">
        <Link href ="/">
          <div className="flex flex-row items-center gap-2 px-15 mx-2">
            <img
              className="h-15 rounded-b-full"
              src="/Media/Images/logo.png"
              alt=""
            />
            <h1 className="text-2xl font-bold  py-2">Stockify</h1>
          </div>
        </Link>

        <div className="justify-center gap-8 px-10 flex items-center">
          {/* <a
            className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
            href=""
          >
            Stocks
          </a>
          <a
            className="font-semibold  hover:border-b-2 m-2 hover:scale-125 text-center p-1"
            href=""
          >
            Mutual Funds
          </a> */}
          <Link
            href="/dashboard" 
            className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
          >
            Dashboard
          </Link>
          <Link href="/product"
            className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
      
          >
            Products
          </Link>
          <Link href="/pricing"
            className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
           
          >
            Pricing
          </Link>
          <Link
            className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
            href="/about"
          >
            About
          </Link>
          <a
            className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
            href=""
          >
            Support
          </a>
          <button className="bg-blue-500  active:bg-blue-900 text-lg text-white font-semibold w-full h-10 px-5 rounded-4xl hover:cursor-pointer hover:scale-110 text-center ">
            Login/Signup <i className="ri-arrow-right-circle-fill"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
