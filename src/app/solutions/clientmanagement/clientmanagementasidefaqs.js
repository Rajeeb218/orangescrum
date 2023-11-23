"use client";
import { Add, Minus } from "iconsax-react";
import React, { useState } from "react";
import { clientmanagementasidefaqsdata } from "@/components/Data/clientmanagementasidefaqs";

function Clientmanagementasidefaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-[100%] mx-auto box-border">
      <div className= "flex flex-wrap">
        {clientmanagementasidefaqsdata.map((item, index) => (
          <div key={index} className="w-[100%] m-auto float-left relative px-4">
            <div
              className={`bg-white text-left box-border border border-white blue-shadow rounded-[10px] px-7 py-4  mt-[30px] ${
                openIndex === index
                  ? "transition-all duration-100 ease-in-out"
                  : "transition-none"
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex flex-wrap items-start ">
                <div className="absolute left-8 font-bold top-16">
                  {openIndex === index ? (
                    <Minus size="32" color="#1C6AE4" />
                  ) : (
                    <Add size="32" color="#1C6AE4" />
                  )}
                </div>
                <p className="text-[#24292f] text-[24px] leading-8 font-sans flex align items-center pl-8 py-4 font-medium ">
                  {item.active}
                </p>
              </div>
              <div onClick={() => handleToggle(index)}>
                {openIndex === index && (
                  <p className=" leading-8 text-lg px-4 pt-4 pb-5">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clientmanagementasidefaqs;
