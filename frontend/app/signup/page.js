"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/newuser", {
      username: username,
      email: email,
      password: password,
    });
    const token = res.data.token;
    localStorage.setItem("token", token);
    window.location.href = "/";
  };
  return (
    <div>
      <div className=" h-150 bg-[#F4FAFF] flex flex-col w-full items-center justify-center">
        <h1 className="text-4xl font-serif font-medium underline">
          SignUp to Stockify
        </h1>
        <form className="flex  text-center bg-white border-gray-300 shadow-2xl border- items-center w-[50%] h-[70%] py-10 rounded-tr-4xl rounded-bl-4xl px-5 my-10 mx-5 flex-col text-black">
          <label className="text-lg font-medium" htmlFor="">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            type="text"
            placeholder="Enter your email"
            className="bg-gray-200 h-12 my-2 w-[70%] placeholder:text-center placeholder:text-gray-600 rounded-lg  "
          />
          <label className="text-lg font-medium" htmlFor="">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="text"
            placeholder="Enter your email"
            className="bg-gray-200 h-12 my-2 w-[70%] placeholder:text-center placeholder:text-gray-600 rounded-lg  "
          />
          <label className="text-lg font-medium" htmlFor="">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Enter your password"
            className="bg-gray-200 h-12 my-2 w-[70%] placeholder:text-center placeholder:text-gray-600 rounded-lg "
          />
          <button
            onClick={handleSignup}
            className="bg-green-500 mt-5 h-10 text-lg font-medium rounded-full w-[30%] "
          >
            <span className="text-white font-medium ">SignUp</span>
          </button>
          <p className="text-xs text-blue-500 ">Terms & conditions applied*</p>
        </form>
        <div className="flex flex-row">
          <h1 className="text-lg">Already a member....</h1>
          <span className="text-lg text-blue-700 font-medium">
            <Link href="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
