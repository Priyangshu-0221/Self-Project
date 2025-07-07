import React, { useRef } from "react";
import Link from "next/link";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const IndianStocks = () => {
  const boxRef1 = useRef();
  useGSAP(() => {
    gsap.from(boxRef1.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: boxRef1.current,
        start: "top 20%",
        toggleActions: "play reverse play reverse",
      },
      x: -500,
      duration: 1.25,
    });
  });
  const boxRef2 = useRef();
  useGSAP(() => {
    gsap.from(boxRef2.current, {
      opacity: 0,
      x: 500,
      scrollTrigger: {
        trigger: boxRef2.current,
        start: "top 20%",
        toggleActions: "play reverse play reverse",
      },
      duration: 1.25,
    });
  });
  return (
    <>
      <div className="flex overflow-hidden flex-row mx-5 overflow-hidden my-4">
        <div ref={boxRef1}>
          <Image
            width={1500}
            height={200}
            className="h-130"
            src="/media/laptop.png"
            alt="image"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <div ref={boxRef2} className=" px-25  my-15 items-center text-black">
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
                  <OpenInNewOutlinedIcon fontSize="large" />
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
