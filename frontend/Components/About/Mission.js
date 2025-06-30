import React from "react";
const Mission = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-20">
        <div className="flex flex-row px-15 mx-5 my-4">
          <div>
            <img
              className="h-80 rounded-full"
              src="Media/Images/mission.png"
              alt=""
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-xl font-semibold text-gray-500">
            Improve your financial future by helping you to save and earn more.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-20 ">
        <div className="px-5 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Vision</h1>
          <p className="text-xl font-semibold text-gray-500">
            Our vision is to be the one stop shop for your finances
            <br />
            Your Family's Super Money App
          </p>
        </div>
        <div className="flex flex-row px-15 mx-5 my-4">
          <div>
            <img
              className="h-80 rounded-full"
              src="Media/Images/vision.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Mission;
