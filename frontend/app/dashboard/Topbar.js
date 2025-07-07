import React from "react";
import Menu from "./Menu";

const Topbar = () => {
  return (
    <>
      <div className="flex flex-row rounded-4xl justify-between px-10 bg-[#FEFAE0] text-black">
        <div className="flex flex-row border-r-5 border-black-50 items-center text-center text-2xl font-medium font-sans  px-5 justify-evenly w-full ">
          <div>
            <h3>NIFTY 50</h3>
            <p className="text-red-400">100.2<i className="ri-arrow-down-double-fill text-3xl"></i></p>
          </div>
          <div>
            <h3>SENSEX</h3>
            <p className="text-green-500">100.2<i className="ri-arrow-up-double-fill text-3xl"></i></p>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Topbar;
