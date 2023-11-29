"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { solutionproductmanagesliderdata } from "@/components/Data/solutionproductmanagesliderdata";

function Productmanageslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="customer_testimonial">
      <div className="container">
        <div className="w-[100%] relative mb-[30px]">
          <div class="owl-wrapper">
            <div className="w-[1200px] m-auto">
              <Slider {...settings}>
                {solutionproductmanagesliderdata.map((sliderData, index) => (
                  <div key={sliderData.id}>
                    <article
                      className="bg-cover bg-center w-[950px] relative mx-[150px] text-white py-[80px] pl-[200px] pr-[160px]  rounded-[30px]"
                      style={{
                        backgroundImage:
                          "url(https://www.orangescrum.com/img/teams/testimonial-article-bg.webp)",
                      }}
                    >
                      <div className="flex flex-wrap relative -mx-[15px]">
                        <div className="px-[15px]">
                          <figure className="w-[150px] h-[150px] absolute -top-[8px] -left-56 bg-white rounded-[30px] flex items-center justify-center shadow-xl">
                            {" "}
                            <img
                              src={sliderData.image}
                              alt="Kuda Msipa"
                              className="rounded-full w-[100px] h-[100px]"
                            />{" "}
                          </figure>
                          <div className="text-2xl quote_position leading-9 text-[#fdf502] font-normal relative mb-[30px]">
                            <span className="srt_quote"></span>
                            {sliderData.details}
                            <span className="end_quote"></span>
                          </div>
                          <div class="cmny_logo_postion">
                            <div class="tmonial_owner">
                              <h5 className="text-xl my-[10px] leading-[26px] font-normal">
                                {sliderData.name}
                              </h5>
                              <div className="text-sm leading-6 font-normal">
                                {sliderData.position}
                              </div>
                            </div>
                            <div className="mt-[10px]">
                              <img
                                src={sliderData.loogo}
                                alt="Cutmec"
                                width="49"
                                height="48"
                                className="inline"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productmanageslider;
