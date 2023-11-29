import React from "react";
import { featuresdata } from "../Data/whatsnewdata";

const Whatsnew = () => {
  return (
    <section className="wht_nw_sec pt-[50px] pb-[160px]">
      <div className="container">
        <h1 className="text-5xl font-bold text-center mb-[30px] text-gray-900">
          What's New at Orangescrum?
        </h1>
        <div className="flex justify-center mt-16">
        {featuresdata.map((feature, index) => (
            <aside key={index} className="w-1/3 mt-4 px-10">
            <span className={`wh_nw_spn wh_nw_spn_${index + 1}`}></span>

              <h3 className="text-lg font-bold mb-9 pt-[90px]">
              {feature.title}
              </h3>
              <p className=" leadingg-[30px] mt-4 text-[17px] font-sans p">
              {feature.description}
              </p>
              <a
                href="{feature.link}"
                className=" text-blue-800  text-base font-bold "
              >
                Learn more
                <span class="text-xl ml-2  hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
                  &#8594;
                </span>
              </a>
            </aside>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Whatsnew;
