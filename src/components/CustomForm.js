import React from "react";
import GoogleIcon from "@/assets/google-placeholder.png";
import Image from "next/image";
import { featureItems } from "./Data/CustomForm";
import Styles from "../style/CustomForm.module.css";

const CustomForm = () => {
  return (
    <>
      <section className={`${Styles.feature_bnr_hero}`}>
        <div className={`${Styles.container_medium}`}>
          {featureItems.map((item, index) => (
            <div
              className={`${Styles.width_100_per} ${Styles.d_flex} ${Styles.align_item_center}`}
              key={index}
            >
              {/* left side */}
              <aside className={`${Styles.width_65_per}`}>
                <div className={`${Styles.hero_title} ${Styles.cmn_head_font}`}>
                  <h1 className="mb-10">{item.title}</h1>
                </div>
                {item.description}
                <div className="flex flex-row space-x-4 items-center w-full mt-8">
                  <form className="flex items-center">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 text-[18px]"
                      id="home_emailid"
                    />
                    <button
                      type="button"
                      title="Get Started"
                      className={`mt-2 ml-3 bg-[#ff4876] text-white py-1 text-[15px] font-semibold px-2 rounded-md cursor-pointer relative ${Styles.custom_after}`}
                    >
                      Get Started
                    </button>
                  </form>
                  <div className="flex gap-2 items-center">
                    <div className=" text-gray-500 text-[12px] font-bold">
                      OR
                    </div>
                    <div
                      className="mt-2 bg-white border border-gray-300 rounded-md p-2 cursor-pointer"
                      id="gSignInWrapper"
                    >
                      <Image
                        src={GoogleIcon}
                        alt="Sign in with Google"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </aside>

              {/* right side */}
              <aside className={`${Styles.width_35_per}`}>
                <figure>
                  <img
                    src={item.image}
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
          ))}
        </div>
      </section>
    </>
  );
};

export default CustomForm;
