import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex flex-row w-full justify-evenly bg-black text-white  items-center">
      <Link href="/dashboard">
        <p className="text-md font-medium">Dashboard</p>
      </Link>
        <Link href="/dashboard/order">
          <p className="text-md font-medium">Orders</p>
        </Link>
        <Link href="/dashboard/holdings">
          <p className="text-md font-medium">Holdings</p>
        </Link>
        <Link href="/dashboard/position">
          <p className="text-md font-medium">Position</p>
        </Link>
        <Link href="/dashboard/funds">
          <p className="text-md font-medium">Funds</p>
        </Link>

    </div>
  );
};

export default Menu;
