"use client";
import React from "react";

const RightSection = ({ imgUrl, prod_des, prod_name, learnmore, glgplay }) => {
  return (
    <>
      <div className="flex flex-row  my-7 px-20">
        <div className="flex flex-col ml-10 my-15 px-20 ">
          <h1 className="text-5xl font-semibold font-serif mb-5">
            {prod_name}
          </h1>
          <p className="text-lg font-serif">{prod_des}</p>
          <div className="flex flex-row my-2 text-blue-800 gap-5">
            <a href={learnmore}>Learn More</a>
          </div>
        </div>
        <div>
          <img className="h-110 w-275 rounded-xl " src={imgUrl} onContextMenu={e => e.preventDefault()} alt="image" />
        </div>
      </div>
    </>
  );
};

export default RightSection;
