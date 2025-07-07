import React, { useRef } from "react";
import Link from "next/link";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Education = () => {
  const boxRef1 = useRef();
  useGSAP(() => {
    gsap.from(boxRef1.current, {
      opacity: 0,
      stagger: 5,
      scrollTrigger: {
        trigger: boxRef1.current,
        start: "top 100%",
        toggleActions: "play reverse play reverse",
      },
      y: 500,
      duration: 1.25,
    });
  });
  return (
    <>
      <div className="w-full b">
        <div className="my-5 py-4">
          <h1 className="text-center text-5xl font-bold">
            Take 4 steps to start earning as a real trader
          </h1>
        </div>
        <div
          ref={boxRef1}
          className="flex flex-row items-center justify-between px-8 font-semibold mx-4 my-4"
        >
          <div>
            <div>
              <h1 className="text-2xl font-semibold my-3 ">
                1. Learn the Demo
              </h1>
              <div>
                <img
                  className="h-80 rounded-4xl"
                  src="/media/1.png"
                  alt="image"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-semibold my-3 ">
                2. Make your first Deposit
              </h1>
              <div>
                <img
                  className="h-80 rounded-4xl"
                  src="/media/2.png"
                  alt="image"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-semibold my-3 ">
                3. Make Successful Deals
              </h1>
              <div>
                <img
                  className="h-80 rounded-4xl"
                  src="/media/3.png"
                  alt="image"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-semibold my-3 ">
                4. Withdraw Money
              </h1>
              <div>
                <img
                  className="h-80 rounded-4xl"
                  src="/media/4.png"
                  alt="image"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-4">
          <SignedOut>
            <SignUpButton>
              <a>
                <button className="my-2 text-2xl h-15 w-50 text-white hover:cursor-pointer font-semibold hover:scale-105 active:scale-110 bg-blue-500 rounded-full">
                  Join Us <HandshakeOutlinedIcon fontSize="large" />
                </button>
              </a>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
              <button className="w-90 h-15 bg-blue-500 rounded-full  active:bg-blue-900 hover:cursor-pointer text-2xl font-semibold text-white ">
                Invest, Grow, Prosper
                <i className="ri-arrow-right-circle-fill"></i>
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Education;
