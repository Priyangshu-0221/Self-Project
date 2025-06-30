import React from "react";

const Education = () => {
  return (
    <>
      <div>
        <div className="my-5 py-4">
          <h1 className="text-center text-5xl font-bold">
            Take 4 steps to start earning as a real trader
          </h1>
        </div>
        <div className="flex flex-row items-center justify-between px-8 font-semibold mx-4 my-4">
          <div>
            <div>
              <h1 className="text-2xl font-semibold my-3 ">
                1. Learn the Demo
              </h1>
              <div>
                <img
                  className="h-80 rounded-4xl"
                  src="Media\Images\1.png"
                  alt=""
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
                  src="Media\Images\2.png"
                  alt=""
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
                  src="Media\Images\3.png"
                  alt=""
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
                  src="Media\Images\4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-4">
          <button className="my-2 text-2xl h-15 w-50 text-white hover:cursor-pointer font-semibold hover:scale-105 active:scale-110 bg-blue-500 rounded-full">
            Join Us <i className="ri-arrow-right-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Education;
