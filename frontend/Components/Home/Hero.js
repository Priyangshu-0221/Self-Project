import React from "react";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Hero = () => {
  return (
    <>
      <div className="bg-white text-black ">
        <div className="mx-10 mt-2 px-5 py-12 flex flex-col items-center">
          <h1 className="text-center font-semibold text-4xl mb-5">
            Your Money works Day & Night
          </h1>
          <h2 className="text-center font-bold text-7xl mb-10">
            Invest in Indian Share Market
          </h2>
          <SignedOut>
            <SignUpButton>
              <Link href="">
                <button className="w-60 h-15 bg-blue-500 rounded-full   active:bg-blue-900 hover:scale-110 hover:cursor-pointer text-2xl font-semibold text-white ">
                  Get Started Now <i className="ri-funds-fill"></i>
                </button>{" "}
              </Link>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
            <button className="w-100 h-15 bg-blue-500 rounded-full  active:bg-blue-900 hover:cursor-pointer text-2xl font-semibold text-white ">
              Secure Your Future, Start Today   
              <i className="ri-arrow-right-circle-fill"></i>
            </button>
            </Link>
          </SignedIn>
        </div>
        <div className="items-center my-2 py-2 ">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            className="w-full h-200 "
            src="/media/hero 1.mp4"
            alt="Video"
            onContextMenu={(e) => e.preventDefault()} // Prevent right-click context menu
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
