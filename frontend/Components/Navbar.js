"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setloggedIn(token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <header>
        <nav className="h-20 flex flex-row justify-evenly ">
          <Link href="/" prefetch={true}>
            <div className="flex flex-row items-center gap-2 px-15 mx-2">
              <figure>
                <img
                  className="h-15 rounded-b-full "
                  src="/media/logo.png"
                  alt=""
                />
              </figure>
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
              prefetch={true}
              href="/dashboard"
              className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
            >
              Stocks
            </Link>
            <Link
              href="/product"
              prefetch={true}
              className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
            >
              Products
            </Link>
            <Link
              href="/pricing"
              className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
            >
              Pricing
            </Link>
            <Link
              prefetch={true}
              className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-semibold hover:border-b-2 m-2 hover:scale-125 text-center p-1"
              href="/support"
            >
              <i className="ri-customer-service-2-line text-3xl"></i>
            </Link>

            {!loggedIn && (
              <Link href="/signup" prefetch={true}>
                <button className="bg-blue-500 active:bg-green-500    text-lg text-white font-semibold w-full h-10 px-5 rounded-4xl hover:cursor-pointer hover:scale-110 text-center ">
                  <LoginIcon fontSize="large" />
                  SignUp
                </button>
              </Link>
            )}
            {loggedIn && (
              <Link href="">
                <button
                  onClick={handleLogout}
                  className="bg-red-500  active:bg-green-500  text-lg text-white font-semibold w-full h-10 px-5 rounded-4xl hover:cursor-pointer hover:scale-110 text-center"
                >
                  Logout
                  <LogoutIcon fontSize="large" />
                </button>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
