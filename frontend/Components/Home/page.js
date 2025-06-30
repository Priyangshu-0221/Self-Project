"use client"
import React from "react";
import Hero from "./Hero";
import IndianStocks from "./IndianStocks";
import Privacy from "./Privacy";
import Education from "./Education";

const Home = () => {
  return (
    <div>
      <Hero />
      <IndianStocks />
      <Education/>
      <Privacy />
    </div>
  );
};

export default Home;
