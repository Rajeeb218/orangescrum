import { ArrowRight } from "iconsax-react";
import React from "react";

const TrackSection = () => {
  return (
    <>
      <section className="pt-[30px] pb-[100px] bg-[#F8F9FF]">
        <div className="container">
          <div className="header_box text-center">
            <h2 className="text-[45px] font-semibold leading-[55px] mb-4">
              Lost in emails, docs, google sheets, calls, chats?
            </h2>
            <p className="text-xl leading-[30px] font-normal">
              It's time to get your team efficient, organized, and get more
              done. Improve team efficiency and productivity with Orangescrum.
            </p>
          </div>
          <div className="flex mt-[60px] mb-[30px] mx-auto items-center flex-wrap max-w-[1100px]">
            <aside className="w-2/5 px-[30px] block">
              <div className="text-[32px] leading-[45px] font-semibold mb-4">
                <h3>
                  Unable to{" "}
                  <a
                    href="https://www.orangescrum.com/time-tracking"
                    title="track progress"
                    className="text-[#1d6ae5]"
                  >
                    track progress
                  </a>
                  , <br />
                  who is doing what?
                </h3>
              </div>
              <div className="text-left mt-[30px] relative">
                <a
                  href="#"
                  className="text-base text-[#1d6ae5] font-semibold"
                  title="See how it works"
                >
                  See how it works
                  <span className="absolute ml-2 top-1 font-bold hover:ml-3 transform duration-700 ease-in-out"><ArrowRight
                    size="16"
                    color="#1d6ae5"
                    variant="bold"
                    className=""
                  /></span>
                </a>
              </div>
            </aside>
            <aside className="w-3/5 px-[30px] block">
              <figure className="text-right">
                <img
                  src="https://www.orangescrum.com/img/home/track-all-in-one-v1.webp"
                  alt="Improve team efficiency and productivity with Orangescrum"
                  width={528}
                  height={343}
                  className="hover:scale-110 transition-all ease-in-out duration-500 "
                  style={{ display: "inline" }}
                />
              </figure>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackSection;
