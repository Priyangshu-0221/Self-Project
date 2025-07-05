import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    console.log("Buying stock with UID:", uid);
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div
      className="h-70 px-5 bg-cyan-200 absolute shadow-lg bottom-0 left-[35%] top-[40%]  flex flex-col text-white"
      draggable="false"
    >
      <div className=" px-2  text-black">
        <div className="flex flex-col  items-center justify-between my-2 py-2">
          <fieldset className=" box-border mr-2">
            <legend>Qty</legend>
            <input
              type="number"
              name="qty"
              className="bg-white text-black h-8 w-80 "
            />
          </fieldset>
          <fieldset className="box-border mr-2">
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              className="bg-white text-black h-8 w-80 "
            />
          </fieldset>
        </div>
      </div>
      <span className="text-lg text-center my-2 text-black font-medium">
        Margin Required Rs 140.65
      </span>
      <div className="flex flex-row gap-2 items-center justify-center ">
        <button
          className="bg-green-500 w-full h-10 rounded-full"
          onClick={handleBuyClick}
        >
          Buy
        </button>
        <button
          className="bg-red-500 w-full h-10 rounded-full"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;
