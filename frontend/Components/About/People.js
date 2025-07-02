"use client";
import React from "react";

const People = () => {
  return (
    <>
      <h1 className="text-center font-serif text-3xl font-medium my-10">
        People
      </h1>
      <div className=" flex flex-row mx-40">
        <div className="px-10">
          <img
            className="h-90 w-90 rounded-full"
            src="/media/owner.png"
            alt="image"
            onContextMenu={e => e.preventDefault()}
          />
          <h1 className="text-center my-3 font-medium text-xl">
            Priyangshu Mondal
          </h1>
          <h2 className="text-center m-4 ">Founder, CEO</h2>
        </div>
        <div>
          <div className="px-5 tracking-wider font-serif">
            <p className="font-medium ">
              Priyangshu bootstrapped and founded Stockify  in 2025 to overcome
              the <br />
              hurdles he faced during his decade long stint as a trader. Today,{" "}
              <br />
              Stockify has changed the landscape of the Indian broking industry.{" "}
              <br />
              <br />
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee{" "}
              <br />
              (SMAC) and the Market Data Advisory Committee (MDAC). <br />
              <br />
            </p>
            <p>Connect On <br /></p>
            <div className="m-1 gap-2">
                <a href="https://x.com/Priyangshu0221" className="mr-2"><i className="ri-twitter-x-fill text-3xl"></i></a>
                <a href="https://github.com/Priyangshu-0221"><i className="ri-github-fill text-3xl"></i></a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default People;
