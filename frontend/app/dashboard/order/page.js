import React from "react";
import WatchlistComponent from "../watchlist/WatchlistComponent";

const page = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-evenly ">
        <aside className="w-full px-7.5">
          <WatchlistComponent />
        </aside>
        <main className="h-190 w-full border-4 px-2 rounded-2xl border-gray-300 my-2 ">
          <h1 className="text-center my-5 font-serif text-3xl ">
            You have not placed any order
          </h1>
        </main>
      </div>
    </>
  );
};

export default page;
