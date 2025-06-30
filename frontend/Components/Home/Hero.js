import React from "react";

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
          <button className="w-60 h-15 bg-blue-500 rounded-full   active:bg-blue-900 hover:scale-110 hover:cursor-pointer text-2xl font-semibold text-white ">
            Get Started Now <i className="ri-funds-fill"></i>
          </button>
        </div>
        <div className="items-center px-20 mx-5 my-2">
          <img
            className="w-full px-8 mx-8 h-160"
            src="Media\Images\hero.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
