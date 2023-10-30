"use client";
import React from "react";
import Button from "../Button";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="h-10 bg-black text-white flex justify-around items-center">
      <div className="flex gap-6">
        <h1 className="text-[15px] font-bold">Black Friday Sales! Grab 10% Off.</h1>
        <button className="bg-[#1d6ae5] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-[12px]">
          Learn More
        </button>
      </div>
      <div className="flex gap-4 text-[12px] font-bold uppercase">
        <Link href="/" className="hover:text-gray-500 hover:border-b-2">Product Support</Link>
        <Link href="/" className="hover:text-gray-500 hover:border-b-2">Contact Sales</Link>
        <Link href="/" className="hover:text-gray-500 hover:border-b-2">Book A Demo</Link>
      </div>
    </div>
  );
};

export default Banner;
