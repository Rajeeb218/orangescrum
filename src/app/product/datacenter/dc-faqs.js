"use client";
import { Add, Minus } from "iconsax-react";
import React, { useState } from "react";
import { DCfaqsdata } from "../../../components/Data/DC-faqsfata";

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="justify-center w-[900px] mx-auto box-border">
      <div className="mx-16 flex flex-wrap">
        {DCfaqsdata.map((item, index) => (
          <div key={index} className="w-[100%] m-auto float-left relative px-4">
            <div
              className={`bg-white border-b-[1px] border-gray-500 text-left px-[30px] py-[15px] mt-[30px] ${
                openIndex === index
                  ? "transition-all duration-100 ease-in-out"
                  : "transition-none"
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex flex-wrap">
                <p className="text-[#24292f] text-[22px] flex align items-center pl-[10px] pr-10 py-[15px] font-medium leading-[30px] cursor-pointer">
                  {item.active}
                </p>
                <div className="absolute right-14 top-14">
                  {openIndex === index ? (
                    <Minus size="32" color="#1C6AE4" />
                  ) : (
                    <Add size="32" color="#1C6AE4" />
                  )}
                </div>
              </div>

              <div onClick={() => handleToggle(index)}>
                {openIndex === index && (
                  <p className="text-lg leading-[30px] text-[#2b2d3f] overflow-hidden mt-[15px] mb-[20px] font-normal pl-[10px] text-left">
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

export default Faqs;
