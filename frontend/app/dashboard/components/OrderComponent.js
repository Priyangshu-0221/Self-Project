import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const OrderComponent = ({ orders }) => {
  const sellItemIndicator = () => {
    toast.error("Item Sold", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  
  //sending a delete req to backend to sell individual stock with respect to their id
  const sellItem = (id) => {
    axios
      .delete("http://localhost:8080/sellitem", { data: { id } })
      .then((res) => {
        toast.error("Stock Sold");
        window.location.reload();
      });
    console.log(id);
  };

  return (
    <main className="h-190 w-full border-4 px-2 rounded-2xl border-gray-300 my-2">
      <h1 className="text-center my-5 font-serif text-3xl">
        No. of Orders Placed {orders.length}/20
      </h1>
      <div className="w-full ">
        <div className=" p-4 rounded-xl w-fit  mx-auto">
          <table className="mb-5 text-center ">
            <thead>
              <tr className="bg-black text-white">
                <th className="px-4 py-2">Stock Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((stock, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{stock.name}</td>
                  <td className="px-4 py-2">{stock.qty}</td>
                  <td className="px-4 py-2">{stock.price}</td>
                  <td className="px-4 py-2">
                    <div className="flex gap-4">
                      <button className="h-10 bg-gray-500 text-white font-medium text-md cursor-pointer w-24 rounded">
                        Edit
                      </button>
                      <button
                        onClick={() => sellItem(stock._id)}
                        className="h-10 bg-red-500  text-white font-medium text-md cursor-pointer w-24 rounded"
                      >
                        Sell
                      </button>
                      <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default OrderComponent;
