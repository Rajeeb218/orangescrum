import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineDesktopWindows } from "react-icons/md";

function Questions() {
  return (
    <>
      <section className="relative mt-[120px] pt-20 pb-10 bg-[#000b50] trgl_top">
        <div className="container">
          <div className=" flex flex-wrap border-b-[1px] border-b-solid boeder-b-[#fff] items-center pb-[60px]">
            <aside className="w-[60%] block pr-[30px] text-left">
              <div className="text-left mb-[30px]">
                <h3 className="text-[32px] leading-[45px] font-semibold mb-4 text-white">
                  Questions? <br></br>We'll put you on the right path
                </h3>
                <p className="text-xl leading-8 text-left text-white">
                  Ask about{" "}
                  <a
                    href="https://www.orangescrum.com/agile-project-management"
                    title="Orangescrum features" className="text-yellow-300"
                  >
                    Orangescrum features
                  </a>
                  ,{" "}
                  <a href="https://www.orangescrum.com/pricing" title="pricing" className="text-yellow-300">
                    pricing
                  </a>
                  ,{" "}
                  <a
                    href="https://www.orangescrum.com/integrations"
                    title="integrations" className="text-yellow-300"
                  >
                    integrations
                  </a>
                  , <br></br>
                  <a
                    href="https://www.orangescrum.com/self-hosted"
                    title="Self-hosted installation" className="text-yellow-300"
                  >
                    Self-hosted installation
                  </a>
                  , or anything else.
                </p>
              </div>
              <div className="flex flex-wrap ">
                <div className="relative flex pt-[5px] pr-[10px] pl-[50px] pb-[5px] flex-col items-center justify-center mr-[30px] border-[1px] border-solid border-transparent">
                  <span className=" flex absolute m-auto left-0 rounded-[50%] h-10 w-10 text-white border-[1px] border-solid border-[#eee] items-center justify-center text-center"><TfiEmail /></span>
                  <a
                   className="block text-base leading-7 text-white bg-transparent"
                  >
                    Contact Sales
                  </a>
                </div>
                <div className="relative flex pt-[5px] pr-[10px] pl-[50px] pb-[5px] flex-col items-center justify-center mr-[30px] border-[1px] border-solid border-transparent">
                  <span className="flex absolute m-auto left-0 rounded-[50%] h-10 w-10 text-white border-[1px] border-solid bg-[#eee]border-[#eee] items-center justify-center text-center"><MdOutlineDesktopWindows /></span>
                  <a
                    href="javascript:void(0)"
                    className="block text-base leading-7 text-white"
                  >
                    Schedule a Call
                  </a>
                </div>
                <div className="relative flex pt-[5px] pr-[10px] pl-[50px] pb-[5px] flex-col items-center justify-center mr-[30px] border-[1px] border-solid border-transparent">
                  <span className="flex absolute m-auto left-0 rounded-[50%] h-10 w-10 text-white border-[1px] border-solid border-[#eee] items-center justify-center text-center"><IoCallOutline /></span>
                  <a href="tel:+1 (408)9074166" className="block text-base leading-7 text-white">+1 (408) 907 4166</a>
                  <a href="tel:+919668465389" className="block text-base leading-7 text-white">+91 966 846 5389</a>
                  
                </div>
              </div>
              <p className="text-lg leading-8 mt-[30px] pb-4 text-white">
                <a
                  href="https://www.orangescrum.com/customers"
                  title="See why we have a 99% customers happiness rating"
                >
                  See why we have a 99% customers happiness rating
                </a>{" "}
              </p>
            </aside>
            <aside className="w-[40%] text-right block">
              <figure className="m-0">
                <img
                  src="https://www.orangescrum.com/img/home/customer-support.webp"
                  alt="Free Instant Support"
                  width="380"
                  height="300"
                  className="inline"
                />
              </figure>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default Questions;
