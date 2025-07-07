import React from "react";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

const SuportHero = () => {
  return (
    <div>
      <div className="px-5 my-5">
        <h1 className="text-center text-4xl font-serif py-5 ">
          Stuck Somewhere...???
        </h1>
        <div className="flex flex-row ">
          <input
            type="text"
            placeholder="Seacrh your issue here...."
            className=" text-black w-full h-13 border-1 rounded-3xl placeholder:text-lg placeholder:text-center"
          />
          <span className="w-full text-end text-green-400 font-bold text-2xl">
            My Tickets
            <BugReportOutlinedIcon fontSize="large" />
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-evenly gap-10 my-4 mx-8 py-2">
        <div className="flex flex-row px-4 gap-5 py-5 w-full  text-blue-500 text-lg border-2 rounded-3xl hover:scale-105 hover:shadow-2xl ">
          <div>
            <QuizOutlinedIcon fontSize="large" />
          </div>
          <div>
            <h1>Most Asked</h1>
            <p>Answers to frequent raised questions</p>
          </div>
        </div>
        <div className="flex flex-row px-4 gap-5 py-5 w-full  text-blue-500 text-lg border-2 rounded-3xl hover:scale-105 hover:shadow-2xl ">
          <div>
            <PermIdentityOutlinedIcon fontSize="large" />
          </div>
          <div>
            <h1>My Account</h1>
            <p>KYC - Referral - Bank</p>
          </div>
        </div>
        <div className="flex flex-row px-4 gap-5 py-5 w-full  text-blue-500 text-lg border-2 rounded-3xl hover:scale-105 hover:shadow-2xl ">
          <div>
            <CurrencyRupeeOutlinedIcon fontSize="large" />
          </div>
          <div>
            <h1>Payments & Withdrawl</h1>
            <p>Stockify Balance - Withdrawls - Stockify Pay </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-5 items-center text-start justify-evenly">
        <table className="min-w-[400px] border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-md font-semibold">
                Field
              </th>
              <th className="px-6 py-3 text-left text-md font-semibold">
                Account
              </th>
              <th className="px-6 py-3 text-left text-md font-semibold">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-50 transition">
              <td className="px-6 py-4 border-b border-gray-200">
                Customer Care Number
              </td>
              <td className="px-6 py-4 border-b border-gray-200">1234567890</td>
              <td className="px-6 py-4 border-b border-gray-200">0987654321</td>
            </tr>
            <tr className="hover:bg-blue-50 transition">
              <td className="px-6 py-4">Contact E-Mail</td>
              <td className="px-6 py-4">acc@mail.com</td>
              <td className="px-6 py-4">pay@mail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuportHero;
