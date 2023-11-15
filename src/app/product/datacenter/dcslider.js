import React from "react";
import Slider from "react-slick";
import Sliderimg1 from "../../../assets/sfcg.webp";
import Image from "next/image";
import { ArrowRight } from "iconsax-react";

function DCslider() {
  const settings = {
    dots: true,
  };

  return (
    <div className=" mx-[30px]">
      <Slider {...settings}>
        <div className="flex items-center flex-wrap w-[100%] m-auto ">
          <div className="w-[41.66%] relative">
            <figure className="box-border block">
              <Image
                src={Sliderimg1}
                alt="sliderimg 1"
                className="transition-all duration-200 ease-linear"
              />
            </figure>
          </div>
          <div className="w-[58.33%] py-8 px-[50px]">
            <div className="box-border block">
              <p className="text-lg leading-7 font-semibold mb-[5px]">
                Consultancy
              </p>
            </div>
            <h6 className=" text-[32px] leading=[42px] font-medium mb-[5px]">
              Dairy Consultancy manages its freelancers effortlessly with
              Orangescrum.
            </h6>
            <p className="font-lg leading-7 font-normal mb-[5px]">
              After implementing Orangescrum, we were able to efficiently track
              projects and provide management with a dashboard view of all
              projects. It also allowed the project team
            </p>
            <div className="flex">
            <div className="text-[#0096ff] text-base leading-6 font-medium inline-block mt-[15px] bg-transparent">
              <span title="Learn more">
                Learn more 
              </span>
              </div>
              <div className="absolute left-36 bottom-[34px] hover:translate-x-[1px] transform ease-in-out duration-200 cursor-pointer">

              <ArrowRight size="18" color="#0096ff"/>
              </div>
             
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default DCslider;
