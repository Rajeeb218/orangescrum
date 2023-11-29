import React from "react";
import Button from "../Button";


function Teamsgotcontrol() {
  const cardsData = [
    {
      imageSrc: "https://www.orangescrum.com/img/home/100-data-ownership.webp",
      title: "100% data ownership",
      description:
        "Keep all your data on-premises by hosting Orangescrum On-Premises edition on your server.",
    },
    {
      imageSrc: "https://www.orangescrum.com/img/home/100-privacy.webp",
      title: "100% privacy",
      description:
        "End-to-end encrypted, compliance with GDPR, CCPA, and ISO/IEC 27001:2013 certified.",
    },
    {
      imageSrc: "https://www.orangescrum.com/img/home/100-customizable.webp",
      title: "100% customizable",
      description:
        "Custom-tailored project management with personalized implementations and migration services.",
    },
  ];

  return (
    <>
      <section className="pt-[80px] pb-[110px]">
        <div className="container">
          <div className="mb-[30px]">
            <h2 class="text-[45px] font-bold leading-[55px] text-center mb-[30px]text-gray-900">
              Teams got more control with Orangescrum
            </h2>
          </div>
          <div class="flex justify-center text-center mt-16 w-[100%]">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="bg-white  hover:translate-y-1 hover:duration-1000 hover:transition-all hover:ease-out w-[33.33%] px-[15px]"
              >
                <div className="p-[30px] border-[1px] border-solid border-[#E1E1E1] rounded-2xl blue-shadow">
                  <figure className="h-[80px] w-[80px] m-auto">
                    <img src={card.imageSrc} alt="" />
                  </figure>
                  <h6 class="text-2xl leading-[40px] relative font-semibold mt-[10px]">
                    {card.title}
                  </h6>
                  <p class="text-[17px] leading-[30px] mt-[10px] font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center my-10 mb-20">
            <a className="action_blue_btn nocard pr" title="Get started">
              Get started <span className="right_arrow" />
            </a>
          </div>
        
        </div>
      </section>
    </>
  );
}

export default Teamsgotcontrol;
