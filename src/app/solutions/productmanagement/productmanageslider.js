
"use client";
import React from "react";
import Slider from "react-slick";

function Productmanageslider() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <section className="customer_testimonial">
      <div className="container_medium">
        <div className="w-[100%] relative mb-[30px]">
          <Slider {...settings}>
          <div class="owl-wrapper">
              <div className="w-[1200px] ">
              <article className="bg-cover bg-center w-900 relative mx-[150px] text-white py-16 pl-[200px] pr-[160px] bg-[#29d7e9] rounded-[30px]">
                  <div className="flex flex-wrap relative -mx-[15px]">
                    <div className="px-[15px]">
                    <figure className="w-[150px] h-[150px] absolute -left-56 bg-white rounded-[30px] flex items-center justify-center shadow-xl">
                        {" "}
                        <img
                          src="https://www.orangescrum.com/img/webp/optimize/Kuda-Msipa.webp"
                          alt="Kuda Msipa" className="rounded-full w-[100px] h-[100px]"
                          
                        />{" "}
                      </figure>
                      <div className="text-2xl leading-9 text-[#fdf502] font-normal relative mb-[30px]">
                        <span class="lt_qt"></span>The most beautiful thing
                        about Orangescrum is easy in its approach which makes it
                        a lot simpler to use. Orangescrum makes a complicated
                        project way easier to run within my <br></br>team.
                        <span class="rt_qt"></span>
                      </div>
                      <div class="cmny_logo_postion">
                        <div class="tmonial_owner">
                          <h5 className="text-xl my-[10px] leading-[26px] font-normal">Kuda Msipa</h5>
                          <div className="text-sm leading-6 font-normal">
                            (CEO Cutmec Group, Bristol, United Kingdom)
                          </div>
                        </div>
                        <div className="mt-[10px]">
                          <img
                            src="https://www.orangescrum.com/img/testimonial/cutmec-v1.png"
                            alt="Cutmec"
                            width="116"
                            height="27"
                            className="inline"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
            </div> 
            
            </div>
          </Slider>
        </div>
        <div className="text-center mt-[10px] ">
        <div className="absolute">
          <div className="owl-page active">
              <span className="bg-[#ade7f4] w-7"></span>
            </div>
            <div className="owl-page">
              <span className="bg-[#ade7f4] w-7"></span>
            </div>
            <div className="owl-page">
              <span className="bg-[#ade7f4] w-7"></span>
            </div>
            <div className="owl-page">
              <span className="bg-[#ade7f4] w-7"></span>
            </div>
            <div className="owl-page">
              <span className="bg-[#ade7f4] w-7"></span>
            </div>
            <div className="owl-page">
              <span className="bg-[#ade7f4] w-7"></span>
            </div>
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="owl-page active">
                <span className="bg-[#ade7f4] w-7"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productmanageslider;
