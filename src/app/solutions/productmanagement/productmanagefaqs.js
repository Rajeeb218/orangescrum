"use client";
import { Add, Minus } from "iconsax-react";
import React, { useState } from "react";
import { solutionproductmanagement } from "@/components/Data/solutionproductmanagedata";

function Productmanagefaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="pt-[60px] pb-[100px] relative bg-white text-center block ">
      <div className="container">
        <div className="header_box">
          <h2 className="heading">FAQs</h2>
        </div>
        <div className="justify-center w-[1100px] mx-auto box-border">
          <div className="mx-16 flex flex-wrap">
            {solutionproductmanagement.map((item, index) => (
              <div
                key={index}
                className="w-[100%] m-auto float-left relative px-4"
              >
                <div
                  className={`bg-white text-left box-border border border-white blue-shadow rounded-xl px-10 py-5 mt-[30px] ${
                    openIndex === index
                      ? "transition-all duration-100 ease-in-out"
                      : "transition-none"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex flex-wrap items-start ">
                    <div className="absolute left-12 font-bold top-16">
                      {openIndex === index ? (
                        <Minus size="32" color="#1C6AE4" />
                      ) : (
                        <Add size="32" color="#1C6AE4" />
                      )}
                    </div>
                    <p className="text-[#24292f] text-[22px] flex align items-center pl-10 pr-10 py-[15px] font-medium  leading-[30px] cursor-pointer">
                      {item.active}
                    </p>
                  </div>
                  <div onClick={() => handleToggle(index)}>
                    {openIndex === index && (
                      <p className="faq_ans">{item.details}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productmanagefaqs;
