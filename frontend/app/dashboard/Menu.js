"use client";
import React, { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [menu, setMenu] = useState(0);
  const click = (index) => {
    setMenu(index);
  };
  return (
    <div className="flex flex-row w-full justify-evenly bg-black text-white  items-center">
      <Link
        prefetch={true}
        onClick={() => {
          setMenu(0);
        }}
        href="/dashboard"
      >
        <p
          className={`text-md font-medium ${
            menu === 0 ? "border-b-2 border-white" : "border-0"
          }`}
        >
          Dashboard
        </p>
      </Link>
      <Link prefetch={true} onClick={() => {
          setMenu(1);
        }} href="/dashboard/order">
        <p
          className={`text-md font-medium ${
            menu === 1 ? "border-b-2" : "border-0"
          }`}
        >
          Orders
        </p>
      </Link>
      <Link prefetch={true} onClick={() => {
          setMenu(2);
        }} href="/dashboard/holdings">
        <p className={`text-md font-medium ${
            menu === 2 ? "border-b-2" : "border-0"
          }`}>Holdings</p>
      </Link>
      <Link prefetch={true} onClick={() => {
          setMenu(3);
        }}  href="/dashboard/position">
        <p className={`text-md font-medium ${
            menu === 3 ? "border-b-2" : "border-0"
          }`}>Position</p>
      </Link>
      <Link onClick={()=>{
        setMenu(4);
      }} prefetch={true} href="/dashboard/funds">
        <p className={`text-md font-medium ${
            menu === 4 ? "border-b-2" : "border-0"
          }`}>Funds</p>
      </Link>
    </div>
  );
};

export default Menu;
