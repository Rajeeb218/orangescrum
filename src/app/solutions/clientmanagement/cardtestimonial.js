"use client"
import React, { useRef } from "react";
import Productmanageshortdetails from "../productmanagement/productmanageshortdetails";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "@/components/Data/clientmanagementtestimonialdata";


function Cardtestimonial() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePaginationClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <>
      <div
        className="py-[140px] bg-center"
        style={{
          backgroundImage:
            "url(https://www.orangescrum.com/img/webp/work-management-testimonial.webp)",
        }}
      >
        <div className="container">
          <div className="-mx-4 ">
            <div className="w-[33.33%] float-left relative px-4">
            <div className="header_box">
              <h2 className="heading text-center mb-[30px]">
                  What Our <br></br> Customers Say
                </h2>
              </div>
            </div>
            <div className="w-[66.66%] float-left relative px-4">
              <div className="pr-[100px]">
              <Slider {...settings} ref={sliderRef}>
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-[100%] mb-16 mx-auto relative">
                      <div className="overflow-hidden relative h-[233px]">
                        <article className="relative w-[690px] float-none list-none">
                          <div className="flex">
                            <figure className="overflow-hidden h-[100px] w-[100px] rounded-[50%] absolute left-4 top-6">
                              {" "}
                              <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                width="100"
                                height="100"
                                className="w-full block"
                              />{" "}
                            </figure>
                            <div className="text-lg text-left leading-7 pr-5 pl-[160px]">
                              <span className="text-[20px] leading-[40px] relative left-[-21px] top-[22px]">
                                <RiDoubleQuotesL />
                              </span>
                              {testimonial.quote}
                              <span className="inline-block text-[20px] leading-[40px] relative left-[4px] top-[10px] align-text-top">
                                <RiDoubleQuotesR />
                              </span>
                            </div>
                          </div>
                          <div className="align-baseline">
                            <div className="text-left mt-[10px] pt-5 text-base border-t-solid border-t-[#ddd] border-t-[1px] w-[100%] ml-[160px] ">
                              <div className="font-semibold text-left">{testimonial.author}</div>
                              <div className="text-left">{testimonial.title}</div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <ul className="page-list mb-[10px]">
                {testimonials.map((_, index) => (
                  <li key={index} className="text-sm leading-7 block">
                    <a
                      onClick={() => handlePaginationClick(index)}
                      href="javascript:void(0)"
                      className="li-link"
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Productmanageshortdetails />
        </div>
      </div>
    </>
  );
}

export default Cardtestimonial;
