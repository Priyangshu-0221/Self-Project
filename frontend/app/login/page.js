"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", res.data.token);
       localStorage.setItem("userId", res.data.userId);
      window.location.href = "/";
    } catch (error) {
      alert("Invalid Credentials !!!!!!! Try with Correct Credentials");
    }
  };
  return (
    <div>
      <div className=" h-150 bg-[#F4FAFF] flex flex-col w-full items-center justify-center">
        <h1 className="text-4xl font-serif font-medium underline">
          Login to Stockify
        </h1>
        <form
          className="flex  text-center bg-white border-gray-300 shadow-2xl border- items-center w-[50%] h-[50%] py-10 rounded-tr-full rounded-bl-full px-5 my-10 mx-5 flex-col text-black"
          action="submit"
        >
          <label className="text-lg font-medium" htmlFor="">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            className="bg-gray-200 h-12 my-2 w-[70%] placeholder:text-center placeholder:text-gray-600 rounded-lg  "
          />
          <label className="text-lg font-medium" htmlFor="">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="bg-gray-200 h-12 my-2 w-[70%] placeholder:text-center placeholder:text-gray-600 rounded-lg "
          />
          <button
            onClick={handleLogin}
            className="bg-green-500 mt-5 h-10 text-lg font-medium rounded-full w-[30%] "
          >
            <span className="text-white font-medium ">Login</span>
          </button>
          <p className="text-xs text-blue-500">Terms & conditions applied*</p>
        </form>
        <div className="flex flex-row">
          <h1 className="text-lg">New here......</h1>
          <span className="text-lg text-blue-700 font-medium">
            <Link href="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
