import React from "react";
import Slider from "react-slick";
import Sliderimg1 from "../../../assets/productdatacenter/hailstorm.webp";
import Sliderimg2 from "../../../assets/productdatacenter/sfcg.webp";
import Sliderimg3 from "../../../assets/productdatacenter/kewico.webp";
import Sliderimg4 from "../../../assets/productdatacenter/sim_global_education.webp";
import Sliderimg5 from "../../../assets/productdatacenter/saral.webp";
import Image from "next/image";
import { ArrowRight } from "iconsax-react";
import { DCsliderdata } from "@/components/Data/DCsliderdata";

function DCslider() {
  const settings = {
    dots: true,
  };

  return (
    <div className=" mx-[30px]">
      <Slider {...settings}>
      {DCsliderdata.map((item, index) => (
        <div key={index}>
        <div className="flex">
        <div className=" w-[100%] m-auto items-center ">
          <div className="w-[41.66%] relative">
            <figure className="box-border block">
              <Image
                src={item.img}
                alt="sliderimg 1"
                className="transition-all duration-200 ease-linear"
              />
            </figure>
          </div>
          <div className="w-[58.33%] py-8 px-[50px]">
            <div className="box-border block">
              <p className="text-lg leading-7 font-semibold mb-[5px]">
               {item.subheading}
              </p>
            </div>
            <h6 className=" text-[32px] leading=[42px] font-medium mb-[5px]">
             {item.heading}
            </h6>
            <p className="font-lg leading-7 font-normal mb-[5px]">
            {item.details}
            </p>
            <div className="flex">
            <div className="text-[#0096ff] text-base leading-6 font-medium inline-block mt-[15px] bg-transparent">
              <span title="Learn more">
                Learn more 
              </span>
              </div>
              <div className="absolute left-36 bottom-[34px] hover:translate-x-[1px] transform ease-in-out duration-200 cursor-pointer">

              <ArrowRight href={item.href} size="18" color="#0096ff"/>
              </div>
             
            </div>
          </div>
        </div>
        </div>
        </div>
        ))}
      </Slider>
     
    </div>
  );
}

export default DCslider;
