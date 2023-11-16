"use client"
import React, { useState } from "react";
import Priceimg from "../../../assets/productselfhosted/pricing-hero-banner.webp";
import Capterra from "../../../assets/productselfhosted/capterra-revies-icon.png";
import G2 from "../../../assets/productselfhosted/g2-reviews-icon.png";
import Moneyimg from "../../../assets/productselfhosted/money-back.webp";
import Image from "next/image";
import { Clock, TickCircle } from "iconsax-react";
import Selfhostedaccodion from "./self-hosted-accodion";
import Getademobanner from "./getademobanner";

function Selfhosted() {
  const [sliderValue, setSliderValue] = useState(10);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <section>
      <div className="bg-white">
        <div className="bg-cover bg-center bg-no-repeat pb-100 relative">
          <Image
            src={Priceimg}
            alt="background cover"
            className="w-full h-full"
          />
          <div className="p-40 pb-100 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="">
              <div className="flex items-center justify-center text-base mb-1 ">
                <img
                  src="https://www.orangescrum.com/img/home_outer/reviws-stars.png"
                  alt="ratings"
                  width="92"
                  height="15"
                  max-width="100%"
                />
                <span className="text-light ml-2">4.6(1000 reviews)</span>
              </div>
              <h1 className="text-[#212121] text-6xl leading-7.2 font-bold font-sans mb-2">
                Orangescrum Self-Hosted Plans
              </h1>
              <div className="ml-5 flex justify-between">
                <div className=" mt-9 absolute left-28 flex">
                  <Image
                    src={Capterra}
                    alt="Orangescrum reviews"
                    className="mx-3 h-14"
                  />
                  <Image
                    src={G2}
                    alt="Orangescrum reviews"
                    className="mx-3 h-14"
                  />
                </div>
                <div>
                  <Image
                    src={Moneyimg}
                    alt="money back guarantee"
                    className="mx-3 absolute h-40 w-28 right-24 bottom-12 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className=" relative overflow-hidden ">
          <div className="py-[50px] px-[40px]">
            <div className="w-[1170px] m-auto ">
              <div className="text-center m-auto w-[30%]">
                <span className="relative inline-block  text-base uppercase text-white leading-3 font-semibold bg-[#73d75b] px-6 py-4 tracking-tighter box-border z-0 ">
                  On-Premise Plans
                </span>
              </div>
              <div>
                <div className="py-[40px] px-[60px]">
                  <div className="mb-12 w-[100%] ">
                    <div className="text-left">
                      <p className="text-2xl leading-9 font-semibold text-black mb-5">
                        Number of users:
                      </p>
                      <div>
                        <input
                          className="w-full cursor-pointer h-[25px] block"
                          type="range"
                          min="10"
                          max="255"
                          step="5"
                          value={sliderValue}
                          id="user-slider"
                          onChange={handleSliderChange}
                        />
                        <div className="flex flex-wrap text-xl relative justify-between ">
                          <div className="text-left relative ml-[2px]">10</div>
                          <div className="text-left absolute left-[6%]">25</div>
                          <div className="text-left absolute left-[16%]">
                            50
                          </div>
                          <div className="text-left absolute left-[36%]">
                            100
                          </div>
                          <div className="text-left absolute left-[56%]">
                            150
                          </div>
                          <div className="text-left absolute left-[98%]">
                            250+
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 ">
                    <div className="flex flex-wrap ">
                      <div className="w-[50%] float-left relative px-4">
                        <div className="flex flex-wrap ">
                          <div className="w-[50%] text-left">
                            <p className="text-left text-16 leading-24 mb-[6px] text-black font-semibold">
                              Subscription Period:
                            </p>
                            <select
                              className="w-[70%] pl-3 text-sm rounded-md border border-solid border-blue-500  text-blue-500 h-6 cursor-pointer "
                              name="duration"
                            >
                              <option value="1">1 year</option>
                              <option value="2">2 years</option>
                              <option value="3">3 years</option>
                              <option value="4">4 years</option>
                              <option value="5">5 years</option>
                            </select>
                          </div>
                          <div className="w-[25%] float-left relative px-4">
                            <p className="text-base leading-3 text-left font-semibold mb-[14px]">
                              Users:
                            </p>
                            <p>
                              <span className="text-2xl leading-3 text-left mb-[6px]">
                                {sliderValue > "250" ? "250+" : sliderValue}
                              </span>
                            </p>
                          </div>
                          <div className="w-[25%] float-left relative px-4">
                            <p className="text-base leading-3 text-left font-semibold mb-[14px]">
                              Period:
                            </p>
                            <p className="text-2xl leading-3 text-left  mb-[6px]">
                              1 Year
                            </p>
                            <span className=""></span>
                          </div>
                        </div>
                        <div className="text-left mt-9">
                          <p className="text-2xl font-semibold mb-5 text-left leading-6">
                            Add-on:
                          </p>
                          <div className="box-border ">
                            <div className="flex flex-wrap w-[100%]">
                              <div className="text-lg items-center leading-3 w-[66.66%]">
                                <input
                                  type="checkbox"
                                  class="ad-ckbox"
                                  id="installation-support"
                                  data-id="installation-support"
                                  className="mr-[6px] cursor-pointer absolute mt-[3px]"
                                />
                                <label
                                  for="installation-support"
                                  className="inline-block mb-2 font-medium text-gray-700 pl-5 cursor-pointer text-base leading-3"
                                >
                                  Installation Support
                                </label>
                              </div>
                              <div className="w-[33.33%] float-left relative px-4">
                                <span
                                  className="leading-3 font-semibold text-base text-green-600"
                                  data-id="installation-support"
                                >
                                  $199
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-wrap w-[100%]">
                              <div className="text-lg items-center leading-3 w-[66.66%]">
                                <input
                                  type="checkbox"
                                  class="ad-ckbox"
                                  id="installation-support"
                                  data-id="installation-support"
                                  className="mr-[6px] cursor-pointer absolute mt-[3px]"
                                />
                                <label
                                  for="installation-support"
                                  className="inline-block mb-2 font-medium text-gray-700 pl-5 cursor-pointer text-base leading-3"
                                >
                                  Wiki management (Add-on)
                                </label>
                              </div>
                              <div className="w-[33.33%] float-left relative px-4">
                                <span
                                  className="leading-3 font-semibold text-base text-green-600"
                                  data-id="installation-support"
                                >
                                  $1799
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-wrap w-[100%]">
                              <div className="text-lg items-center leading-3 w-[66.66%]">
                                <input
                                  type="checkbox"
                                  class="ad-ckbox"
                                  id="installation-support"
                                  data-id="installation-support"
                                  className="mr-[6px] cursor-pointer absolute mt-[3px]"
                                />
                                <label
                                  for="installation-support"
                                  className="inline-block mb-2 font-medium text-gray-700 pl-5 cursor-pointer text-base leading-3"
                                >
                                  Ticketing module (Add-on)
                                </label>
                              </div>
                              <div className="w-[33.33%] float-left relative px-4">
                                <span
                                  className="leading-3 font-semibold text-base text-green-600"
                                  data-id="installation-support"
                                >
                                  $1699
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 text-left flex-col flex flex-wrap">
                          <div className="font-semibold text-2xl leading-8">
                            <div className=" text-left">
                              Total:
                              <span className="text-2xl font-semmibold">
                                {" "}
                                $21,665
                              </span>
                            </div>
                          </div>
                          <div className="mt-7">
                            <a
                              href="javascript:void(0)"
                              onclick="purchanseSelfHostedPackage(this);"
                              data-user=""
                              className="text-white min-w-[180px] h-[50px] px-6 rounded-md text-lg leading-10 text-center font-bold border border-1.5 border-[#6361fa] bg-[#6361fa] shadow-lg hover:bb-white hover:text-[#6361fa] inline-block "
                              title="Purchase Now"
                            >
                              Purchase now
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a
                              href="javascript:void(0)"
                              title="Contact for custom plan"
                              className="min-w-[180px] h-[50px] px-6 rounded-md text-lg leading-10 text-center font-bold border border-1.5 border-[#6361fa] inline-block text-[#6361fa] hover:text-white shadow-lg hover:bg-[#6361fa]"
                              onclick="contactSales();"
                            >
                              Contact for custom plan
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-[50%] relative px-4 float-left ">
                        <div className="px-4">
                          <div className="text-lg leading-[30px] text-white font-normal flex flex-col text-left py-10 px-14 rounded-[28px] relative bg-[#6361fa]">
                            <p className="leading-[24px] text-md text-[#d7d0fe] ">
                              Your self-hosted Orangescrum includes:
                            </p>
                            <ul className="leading-[24px]">
                              <li className="flex pb-3 leading-[30px] text-xl mt-2 relative text-left font-normal">
                                <TickCircle
                                  size="26"
                                  className="text-yellow-400 mr-2"
                                  variant="Bold"
                                />{" "}
                                Codebase
                              </li>
                              <li className="flex pb-3 leading-[30px] text-xl mt-1 relative text-left font-normal">
                                <TickCircle
                                  size="26"
                                  className="text-yellow-400 mr-2"
                                  variant="Bold"
                                />
                                Free updates
                              </li>
                              <li className="flex pb-3 leading-[30px] text-xl mt-1 relative text-left font-normal">
                                <TickCircle
                                  size="26"
                                  className="text-yellow-400 mr-2"
                                  variant="Bold"
                                />
                                Unlimited projects, tasks and time logs
                              </li>
                              <li className="flex pb-3 leading-[30px] text-xl mt-1 relative text-left font-normal">
                                <TickCircle
                                  size="26"
                                  className="text-yellow-400 mr-2"
                                  variant="Bold"
                                />
                                All premium features
                              </li>
                              <li className="flex pb-3 leading-[30px] text-xl mt-1 relative text-left font-normal">
                                <TickCircle
                                  size="26"
                                  className="text-yellow-400 mr-2"
                                  variant="Bold"
                                />
                                Priority Support
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 mt-[110px] items-center">
              <div className="inline-flex items-center justify-center relative w-full">
              <hr  className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 "  />
                <div className="m-auto absolute w-[20%]">
                  <span className="inline-block h-[45px] text-base uppercase text-white leading-[45px] font-medium bg-[#73d75b] px-7 tracking-tighter text-center">
                    Features
                  </span>
                </div>
              </div>

              <div className="w-[100%] mt-[45px] flex">
                <ul className="m-0 px-[30px] w-[33.33%]">
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                    <Clock size="24" color="#FF8A65" className="mr-2" />
                    <p> Time Management</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p> Custom Workflows</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex  mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /><p> User Role Management</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex  mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p> Executive Reports</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex  mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /><p> Resource Management</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex  mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Custom fields</p>
                  </li>
                </ul>
                <ul className="m-0 px-[30px] w-[33.33%]">
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Scurm Project Management</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Gantt Chart</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Task Management</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" />  <p>Project Templates</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Kanban Project Management</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Timesheet approval</p>
                  </li>
                </ul>
                <ul className="m-0 px-[30px] w-[33.33%]">
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Mobile App (iOS &amp; Android)</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Mobile App (iOS &amp; Android)</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Integrations</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>In-App Chat</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Invoice Management</p>
                  </li>
                  <li className="text-[#8b8c9d]  flex mt-[30px] text-base leading-[20px] font-normal relative pl-14 pt-[3px] text-left">
                  <Clock size="24" color="#FF8A65" className="mr-2" /> <p>Project Budget &amp; cost</p>
                  </li>
                </ul>
              </div>
              <div className=" m-auto w-[20%]  mt-16 ">
                <div className="h-[50px] px-[30px] item-center rounded-lg text-lg leading-[50px] text-white border border-solid border-[ #6361fa] inline-block shadow-lg bg-[#6361fa] hover:bg-white hover:text-[#6361fa] font-medium">
                  <a>Get Started Free</a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 overflow-hidden relative m-auto w-[60%] text-center">
            <div className="pb-[50px] px-8 box-border">
              <div className="m-auto w-[100%]">
                <div className="mb-16">
                  <h2 className="font-sans leading-[65px] text-[55px] font-bold">
                    On-Premise FAQs
                  </h2>
                </div>

                <Selfhostedaccodion />
              </div>
            </div>
          </div>

         <Getademobanner />

        </div>
      </div>
    </section>
  );
}

export default Selfhosted;
