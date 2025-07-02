"use client";
import React from "react";

const LeftSection = ({
  imgUrl,
  prod_name,
  prod_des,
  trydemo,
  learnmore,
  glgplay,
}) => {
  return (
    <>
      <div className="flex flex-row px-20 my-5">
        <div>
          <img className="h-110 w-300 rounded-xl " src={imgUrl} alt="image" onContextMenu={e => e.preventDefault()}/>
        </div>
        <div className="flex flex-col ml-10 my-15 px-20 ">
          <h1 className="text-5xl font-semibold font-serif mb-5">
            {prod_name}
          </h1>
          <p className="text-lg font-serif">{prod_des}</p>
          <div className="flex flex-row my-2 text-blue-800 gap-5">
            <a href={trydemo}>Try Demo</a>
            <a href={learnmore}>Learn More</a>
          </div>
          <div className="flex flex-row my-2">
            <a href={glgplay}>
              <img className="h-10" src="/media/gplay.webp" alt=""  />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
