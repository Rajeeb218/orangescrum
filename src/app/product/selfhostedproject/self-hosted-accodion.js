"use client"
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import React, { useState } from "react";
import { Selfhostedfaqs } from "../../../components/Data/self-hosted-faqs-data";

function SelfhostedAccordion() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="folex flex-wrap">
      <div className="w-[100%] box-border m-0 px-5">
      {Selfhostedfaqs.map((item, index) => (
        <div key={index}>
        <div
          onClick={handleToggle}
          className={`p-0 border-b-[1px] border-solid border-[#cfcbcb] ${
            open ? "open" : ""
          }`}
        >
          <div className="flex">
            <h2 className=" items-center justify-between w-full pt-5 pl-8 pr-5 pb-4 m-0 cursor-pointer font-normal text-xl font-sans relative leading-[30px] text-left text-[#000]">
             {item.heading}
            </h2>
            <div
              className={`transform transition-transform ${
                open ? "rotate-180" : ""
              }`}
            >
              {open ? (
                <ArrowDown2 size="28" className="mt-5" color="#000" />
              ) : (
                <ArrowUp2 size="28" className="mt-5" color="#000" />
              )}
            </div>
          </div>
          <div onClick={handleToggle}>
            {open && (
              <div className="pt-3 pl-10 pr-5 pb-6 border-b border-gray-200">
                <div className="text-base leading-[28px] font-normal text-left p-0 m-0 font-sans">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {item.details}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default SelfhostedAccordion;
