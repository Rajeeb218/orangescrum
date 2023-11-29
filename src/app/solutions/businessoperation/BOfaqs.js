"use client";
import { Add, Minus } from "iconsax-react";
import React, { useState } from "react";

function BOfaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqsData = [
    {
      question: "How can I set a task flow?",
      answer:
        "Use status workflow with custom task status that define your process from start to end.",
    },
    {
      question: "How can I automate tasks?",
      answer:
        "Recurring tasks help you automate repetitive tasks with a variety of options from daily, weekly, monthly, yearly tasks so you never miss them.",
    },
    {
      question: "How can I manage my resource workloads?",
      answer:
        '<a href="https://www.orangescrum.com/resource-management" title="Resource Availability">Resource Availability</a>  and allocation enable robust capacity planning and improved resource utilization.',
    },
    {
      question: "How can I do effective task planning for my business processes?",
      answer:
        '<a href="https://www.orangescrum.com/task-management" title="task management">task management</a> with views of your choice enable effective task planning &amp; execution',
    },
  ];

  return (
    <>
      <section className="pt-[60px] pb-[100px] relative bg-white text-center block">
        <div className="container">
          <div className="header_box">
            <h2 className="heading">FAQs</h2>
            <div className="text-center">
              <div className="flex flex-wrap justify-center w-full max-w-[1000px] mx-auto mt-[50px] mb-[20px] items-start">
                {faqsData.map((faq, index) => (
                  <aside className="px-5 w-[50%]" key={index}>
                    <div className="w-[100%] m-auto float-left relative px-4">
                      <div
                        className={`bg-white text-left box-border border border-white blue-shadow rounded-xl px-10 py-5 mt-[30px] overflow-hidden transition-max-height duration-500 ease-in-out ${
                          openIndex === index
                            ? "min-h-[500px]"
                            : "min-h-[100px]"
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <div className="items-start ">
                          <span className="absolute left-12 font-bold top-16">
                            {openIndex === index ? (
                              <Minus size="32" color="#1C6AE4" />
                            ) : (
                              <Add size="32" color="#1C6AE4" />
                            )}
                          </span>
                          <p className="text-[#24292f] text-[20px] flex items-center pl-10 pr-10 py-[10px] font-medium leading-[28px] cursor-pointer justify-center">
                            {faq.question}
                          </p>
                        </div>
                        {openIndex === index && (
                          <div>
                            <p className="faq_ans">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </aside>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BOfaqs;
