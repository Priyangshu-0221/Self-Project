import React from "react";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Privacy = () => {
  return (
    <>
      <div className="bg-[#071108] text-white flex flex-row px-12 ">
        <div>
          <div className="flex flex-col justify-center items-start italic py-5 my-8">
            <h1 className="text-green-400 font-bold text-2xl py-10">
              Stockify is 100% Safe and Secure!
            </h1>
            <h2 className="text-5xl font-bold mb-3 ">
              Your security and privacy
            </h2>
            <h2 className="text-5xl font-bold">are our top priority!</h2>
          </div>
          <div className="flex flex-row w-full border-1 rounded-full justify-between  items-center  px-8 gap-4">
            <div className="flex flex-row py-5 pl-5 text-xl">
              <WorkspacePremiumOutlinedIcon fontSize="large" />
              <span className="p-1">ISO Certified</span>
            </div>
            <div className="flex flex-row py-5 text-xl">
              <AutoStoriesOutlinedIcon fontSize="large" />
              <span className="p-1">
                Audited by cert-in empanelled auditors
              </span>
            </div>
            <div className="flex flex-row py-5 text-xl">
              <SecurityOutlinedIcon fontSize="large" />
              <span className="p-1">SSL Secured</span>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-100 px-25  my-20 mx-25"
            src="/media/privacylogo.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default Privacy;
