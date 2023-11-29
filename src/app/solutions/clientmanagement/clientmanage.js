import CustomForm from "@/components/CustomForm";
import { clientmanagementdata } from "@/components/Data/clientmanagementdata";
import React from "react";
import Styles from "../../../style/CustomForm.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Navbar/Banner";
import Getademobanner from "@/app/product/selfhostedproject/getademobanner";
import Clientmanagementfaqs from "./clientmanagefaqs";
import Clientmanagementasidefaqs from "./clientmanagementasidefaqs";
import Customtemplet from "./customtemplet";
import Manageclient from "./manageclient";
import Clientmanagementblog from "./clientmanagementblog";
import Cardtestimonial from "./cardtestimonial";
import Trustedbythe from "../businessoperation/trustedbtthe";
import Tryitforfree from "./tryitforfree";
import Contactsales from "./contactsales.js"

function Clientmanage() {
  return (
    <>
      <Banner />
      <Navbar />

      <section className={`${Styles.feature_bnr_hero}`}>
        <div className={`${Styles.container_medium}`}>
          {clientmanagementdata.map((item, index) => (
            <div key={index}>
              <div
                className={`${Styles.width_100_per} ${Styles.d_flex} ${Styles.align_item_center}`}
              >
                {/* left side */}
                <aside className={`${Styles.width_60_per}`}>
                  <div
                    className={`${Styles.hero_title} ${Styles.cmn_head_font}`}
                  >
                    <h1 className="mb-10">{item.title}</h1>
                  </div>
                  {item.description}
                  <div className="flex-row space-x-4 items-center w-full mt-10">
                    <form className="flex items-center">
                      <button
                        type="button"
                        title="Manage your Client"
                        className={` bg-[#ff4876] text-white py-2 text-[15px] font-semibold px-2 w-44 rounded-sm cursor-pointer relative ${Styles.custom_afterclient}`}
                      >
                        Manage your Client
                      </button>
                    </form>
                    <div className="flex gap-2 items-center"></div>
                  </div>
                </aside>

                {/* right side */}
                <aside className={`${Styles.width_40_per}`}>
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
            </div>
          ))}
        </div>
      </section>

      <section>
        <Trustedbythe />
    </section>

      <section>
        <Manageclient />
      </section>

      <section className="py-[100px] relative bg-[#f7f5f5] box-border">
        <div
          className="bg-cover"
          style={{
            backgroundImage:
              "",
          }}
        >
          <div className="container">
            <div className="header_box">
              <h2 className="heading">
                Collaborate and Engage <br></br> with Clients
              </h2>
            </div>
            <div className="w-[100%] m-auto flex flex-wrap">
              <aside className="w-[50%] relative px-4 float-left">
                <Clientmanagementasidefaqs />
              </aside>
              <aside className="w-[50%] relative px-4 float-left"></aside>
            </div>
          </div>
        </div>
      </section>

      <section>
       <Tryitforfree />
      </section>

      <section>
        <Customtemplet />
      </section>

      <section>
        <div className="py-[100px] relative bg-[#f7f5f5] box-border ">
        <div className="container">
            <div className="header_box">
              <h2 className="heading">
                Integrate Orangescrum with Your Productivity Apps
              </h2>
            </div>
            <figure class="mt-10 w-auto h-auto text-center transition-all duration-500 ease-in-out ">
              <img
                src="https://www.orangescrum.com/img/webp/optimize/orangescrum-integration.webp?v=5913"
                alt="Integrate Orangescrum with your favourite apps"
                width="643"
                height="415"
                className="m-auto inline hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </figure>
            <div className="w-[15%] m-auto items-center">
              <a
                href="https://www.orangescrum.com/integrations"
                title="View All"
                className="bg-[#eee]  shadow-4 shadow-y-4 shadow-blur-20 shadow-[#ff9db6] cursor-pointer h-[50px] text-lg py-2 inline-block text-[#ff4876] font-normal px-7 item-center rounded-md border-solid border-[2px] border-[#ff4876] hover:bg-[#ff4876] hover:text-white hover:transition-all duration-500 ease-in-out bg-transparent relative"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Contactsales />
      </section>

      <section className="bg-[#f7f5f5]">
        <Cardtestimonial />
      </section>

      <section>
        <Clientmanagementblog />
      </section>

      <section>
        <Clientmanagementfaqs />
      </section>

      <section>
        <Getademobanner />
      </section>

      <Footer />
    </>
  );
}

export default Clientmanage;
