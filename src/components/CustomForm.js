import React from "react";
import GoogleIcon from "@/assets/google-placeholder.png";
import Image from "next/image";
import { featureItems } from "./Data/CustomForm";
import Styles from "../style/CustomForm.module.css";

const CustomForm = ({title,image,description}) => {
  return (
    <>
      <section className={`${Styles.feature_bnr_hero}`}>
        <div className={`${Styles.container_medium}`}>
            <div
              className={`${Styles.width_100_per} ${Styles.d_flex} ${Styles.align_item_center}`}
            
            >
              {/* left side */}
              <aside className={`${Styles.width_60_per}`}>
                <div className={`${Styles.hero_title} ${Styles.cmn_head_font}`}>
                  <h1 className="mb-10">{title}</h1>
                </div>
                {description}
                <div className="flex flex-row space-x-4 items-center w-full mt-[30px]">
                  <form className="flex items-center">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="p-2 border border-gray-300 rounded-md w-80 focus:outline-none focus:ring focus:ring-indigo-300 text-[18px]"
                      id="home_emailid"
                    />
                    <button
                      type="button"
                      title="Get Started"
                      className={`ml-3 bg-[#ff4876] text-white text-[18px] font-medium px-5 py-2 rounded-md text-center cursor-pointer relative ${Styles.custom_after}`}
                    >
                      Get Started
                    </button>
                  </form>
                  <div className="flex items-center">
                    <div className=" text-[#2f2f2f] mr-[10px] text-[14px] font-semibold">
                      OR
                    </div>
                    <div
                      className="bg-white border border-[#f5f7f8] rounded-lg p-2 cursor-pointer"
                      id="gSignInWrapper"
                    >
                      <Image
                        src={GoogleIcon}
                        alt="Sign in with Google"
                        width={26}
                        height={26}
                      />
                    </div>
                  </div>
                </div>
              </aside>

              {/* right side */}
              <aside className={`${Styles.width_40_per}`}>
                <figure>
                  <img
                    src={image}
                    alt="Product Management Orangescrum"
                    title="Product Management Orangescrum"
                    width={640}
                    height={528}
                    className="lazy"
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

export default CustomForm;
