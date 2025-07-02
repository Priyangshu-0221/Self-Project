import React from "react";
import WatchlistComponent from "./watchlist/WatchlistComponent";

const page = () => {
  return (
    <>
      <div className="flex flex-row w-full items-center ">
        <div className="w-full px-7.5">
         <WatchlistComponent/>
        </div>
        <div className="border-1 rounded-2xl px-2 my-2 w-full">
          <div className="username text-5xl text-center my-10  font-serif">
            <h6 className="py-5 mb-6 ">Hi, User!</h6>
            <hr className="divider" />
          </div>

          <div className="section ">
            <span>
              <p className="text-xl  ">Equity</p>
            </span>

            <div className="data flex flex-row text-center justify-evenly text-xl mb-10 ">
              <div className="first my-5 w-full border-r-2">
                <h3 className="text-3xl mb-2">3.74k</h3>
                <p>Margin available</p>
              </div>
              <hr />

              <div className="second w-full my-5 ">
                <p className="mb-2">
                  Margins used <span>0</span>{" "}
                </p>
                <p>
                  Opening balance <span>3.74k</span>{" "}
                </p>
              </div>
            </div>
            <hr className="divider" />
          </div>

          <div className="section my-10">
            <span>
              <p className="text-xl ">Holdings (13)</p>
            </span>

            <div className="data flex flex-row text-center items-center justify-evenly mb-3 text-xl ">
              <div className="first w-full">
                <h3 className="profit text-3xl  mt-5 border-r-2 py-1 ">
                  <span className="text-green-400">1.55k <small>+5.20%</small></span>
                </h3>
                <p>P&L</p>
              </div>
              <div className="second w-full ">
                <p className="mb-2">
                  Current Value <span>31.43k</span>{" "}
                </p>
                <p>
                  Investment <span>29.88k</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
