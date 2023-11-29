"use client";
import { Add, Minus } from "iconsax-react";
import React, { useState } from "react";
import { clientmanagementfaqscata } from "@/components/Data/clientmanagementfaqsdata";

function Clientmanagementfaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="pt-[60px] pb-[100px] relative bg-white text-center block ">
        <div className="container">
            <div className="header_box">
              <h2 className="heading">
              FAQs
            </h2>
          </div>
          <div className="justify-center w-[100%] mx-auto box-border">
            <div className="mx-4 flex flex-wrap">
              {clientmanagementfaqscata.map((item, index) => (
                <div
                  key={index}
                  className="w-[100%] m-auto float-left relative px-4">
                  <div
                    className={`bg-white text-left box-border border border-white blue-shadow rounded-xl px-5 py-2  mt-[30px] ${
                      openIndex === index
                        ? "transition-all duration-100 ease-in-out"
                        : "transition-none"
                    }`}
                    onClick={() => handleToggle(index)}
                  >
                    <div className="flex flex-wrap items-start ">
                      <div className="absolute left-8 font-bold top-14">
                        {openIndex === index ? (
                          <Minus size="32" color="#1C6AE4" />
                        ) : (
                          <Add size="32" color="#1C6AE4" />
                        )}
                      </div>
                      <p className="text-[#24292f] text-[24px] leading-8 font-sans flex align items-center px-10 py-[15px] font-medium  cursor-pointer">
                        {item.active}
                      </p>
                    </div>
                    <div onClick={() => handleToggle(index)}>
                      {openIndex === index && (
                        <p className=" leading-8 text-lg px-4 pt-4 pb-5">{item.details}</p>
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

export default Clientmanagementfaqs;
