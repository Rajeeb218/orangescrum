import React from "react";
import Productmanageshortdetails from "../productmanagement/productmanageshortdetails";

function Cardtestimonial() {
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
              <div className="text-left mb-[80px] box-border">
                <h2 className="text-[57px] font-bold leading-[65px] text-[#24292f] font-sans">
                  What Our <br></br> Customers Say
                </h2>
              </div>
            </div>
            <div className="w-[66.66%] float-left relative px-4">
              <div className="pr-[100px]">
                <div class="w-[100%] mb-16 mx-auto relative">
                  <div className="overflow-hidden relative h-[233px]">
                    <article className=" relative w-[690px] float-none list-none">
                      <div className="flex">
                        <figure className="overflow-hidden h-[100px] w-[100px] rounded-[50%] absolute left-4 top-6">
                          {" "}
                          <img
                            src="https://www.orangescrum.com/img/webp/optimize/Hayley-Turner-400.webp"
                            alt="Hayley Turner"
                            width="100"
                            height="100"
                            className="w-full block"
                          />{" "}
                        </figure>
                        <div className="text-lg text-left leading-7 pr-5 pl-[160px]">
                          <span className="inline-block text-[55px] leading-[40px] relative left-[-21px] top-[13px]">
                            “
                          </span>
                          My team (Hailstorm-Development) and I LOVE
                          Orangescrum! We are a flextime remote business
                          solution specialist agency, and this tool has enabled
                          us to actually create this company. Without you all,
                          we wouldn't even exist!
                          <span className="inline-block text-[55px] leading-[40px] relative left-[10px] top-[13px] align-text-top">
                            ”
                          </span>
                        </div>
                      </div>
                      <div className="align-baseline">
                        <div className="text-left mt-[10px] pt-5 text-base border-t-solid border-t-[#ddd] border-t-[1px] w-[100%] ml-[160px] ">
                          <div className="font-semibold text-left">
                            Hayley Turner
                          </div>
                          <div className="text-left">
                            (Founder &amp; CEO, United States, Michigan)
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="bx-controls"></div>
              </div>
              <ul className="pager-list">
                <li>
                  {" "}
                  <a data-slide-index="0" href="javascript:void(0)" class="">
                    1
                  </a>
                </li>
                <li>
                  {" "}
                  <a data-slide-index="1" href="javascript:void(0)" class="">
                    2
                  </a>
                </li>
                <li>
                  {" "}
                  <a data-slide-index="2" href="javascript:void(0)" class="">
                    3
                  </a>
                </li>
                <li>
                  {" "}
                  <a data-slide-index="3" href="javascript:void(0)" class="">
                    4
                  </a>
                </li>
                <li>
                  {" "}
                  <a data-slide-index="4" href="javascript:void(0)" class="">
                    5
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    data-slide-index="5"
                    href="javascript:void(0)"
                    class="active"
                  >
                    6
                  </a>
                </li>
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
