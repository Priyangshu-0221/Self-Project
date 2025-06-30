import React from "react";
import Menu from "./Menu";

const Topbar = () => {
  return (
    <>
      <div className="flex flex-row rounded-4xl justify-between px-10 bg-black text-white">
        <div className="flex flex-row border-r-5 border-e-amber-50 items-center text-center text-2xl font-medium font-sans  px-5 justify-evenly w-full ">
          <div>
            <h3>NIFTY 50</h3>
            <p className="text-red-400">100.2</p>
          </div>
          <div>
            <h3>SENSEX</h3>
            <p className="text-green-500">100.2</p>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Topbar;
