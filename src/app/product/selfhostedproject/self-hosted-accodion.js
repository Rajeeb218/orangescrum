"use client";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import React, { useState } from "react";
import { Selfhostedfaqs } from "../../../components/Data/self-hosted-faqs-data";

function SelfhostedAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="folex flex-wrap">
      <div className="w-[800px] box-border m-auto px-5">
        {Selfhostedfaqs.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => handleToggle(index)}
              className={`p-0 border-b-[1px] border-solid border-[#cfcbcb] ${
                openIndex === index ? "open" : ""
              }`}
            >
              <div className="flex">
                <h2 className="items-center justify-between w-full pt-5 pl-8 pr-5 pb-4 m-0 cursor-pointer font-normal text-xl font-sans relative leading-[30px] text-left text-[#000]">
                  {item.heading}
                </h2>
                <div
                  className={`transform transition-transform ${
                    (openIndex === index ? "" : "rotate-0",
                    openIndex === index ? "max-h-[300px]" : "max-h-[500px]")
                  }`}
                >
                  {openIndex === index ? (
                    <ArrowUp2 size="28" className="mt-5" color="#000" />
                  ) : (
                    <ArrowDown2 size="28" className="mt-5" color="#000" />
                  )}
                </div>
              </div>
              <div>
                {openIndex === index && (
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
