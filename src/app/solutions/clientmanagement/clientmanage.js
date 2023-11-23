import CustomForm from "@/components/CustomForm";
import { clientmanagementdata } from "@/components/Data/clientmanagementdata";
import React from "react";
import Styles from "../../../style/CustomForm.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Navbar/Banner";
import Baneer2img from "../../../assets/solution/productmanage/orangescrum-world-team.webp";
import Getademobanner from "@/app/product/selfhostedproject/getademobanner";
import Banner6img from "../../../assets/solution/productmanage/orangescrum-selfhosted.png";
import Clientmanagementfaqs from "./clientmanagefaqs";
import Clientmanagementasidefaqs from "./clientmanagementasidefaqs";
import Leftarrow from "../../../assets/solution/clientmanagement/fold-arrow-left.png";
import Rightarrow from "../../../assets/solution/clientmanagement/fold-arrow-right.png";
import Customtemplet from "./customtemplet";
import Manageclient from "./manageclient";
import Clientmanagementblog from "./clientmanagementblog";
import Cardtestimonial from "./cardtestimonial";

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

      <section className="team_sec  text-center py-20 bg-[#f7f5f5]">
        <div className="container">
          <h4 className="text-2xl">Trusted by the World's best teams</h4>
          <figure className="flex justify-center pt-10">
            <Image src={Baneer2img} alt="" width="914" height="38" />
          </figure>
          <div className="flex justify-center pt-8">
            <div className="pl-5 pr-5">
              <a href="" className="hover:text-[#00acff] font-semibold text-lg">
                <span className="bst_spn hw_spn"></span>How Orangescrum works
              </a>
            </div>
            <div className="pl-5 pr-5">
              <a href="" className="hover:text-[#00acff] font-semibold text-lg">
                <span className="bst_spn ty_spn"></span>Try it free
              </a>
            </div>
            <div className="pl-5 pr-5">
              <a href="" className="hover:text-[#00acff] font-semibold text-lg">
                <span className="bst_spn bk_spn"></span>Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Manageclient />
      </section>

      <section className="py-[100px] relative bg-[#f7f5f5] box-border">
        <div
          className="bottom-1 bg-cover"
          style={{
            backgroundImage:
              "url(https://www.orangescrum.com/img/features/collaborate-and-engage-with-customers.png)",
          }}
        >
          <div className="container">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
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
        <div className="py-[100px] relative bg-[#f7f5f5] box-border ">
          <div className="container">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
                Manage All Client Communication and Documents In a Single
                Platform
              </h2>
              <p className="text-[#24292f] text-2xl leading-[30px] my-5 p-[5px]">
                Get the all-in-one{" "}
                <a
                  href="https://www.orangescrum.com/project-management-software"
                  title="Program Management Software"
                  className="text-[#337ab7] hover:text-[#23527c] hover:underline"
                >
                  Program Management Software
                </a>
              </p>
              <div className="text-center relative">
                {" "}
                <span className="absolute  width:[86px] height:[62px] inline-block top-[7px] left-[36%]">
                  <Image src={Leftarrow} />
                </span>
                <a
                  href="https://www.orangescrum.com/schedule-a-demo"
                  title="Try it Free"
                  className=" bg-[#ff4876] shadow-4 shadow-y-4 shadow-blur-20 shadow-[#ff9db6] cursor-pointer h-[50px] text-lg inline-block text-white font-normal px-5 item-center hover:bg-[#ef426d] hover:transition-all duration-500 rounded-[4px] ease-in-out leading-[50px] relative mt-[30px] border-none blue-shadow "
                >
                  Try it Free
                </a>
                <span className="absolute  width:[86px] height:[62px] inline-block top-[7px] right-[36%]">
                  <Image src={Rightarrow} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Customtemplet />
      </section>

      <section>
        <div className="py-[100px] relative bg-[#f7f5f5] box-border ">
          <div className="container">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
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

      <section className="pt-10 pb-[100px] bg-[#f7f5f5]">
        <div className="container">
          <div className="items-center m-auto max-w-[1080px] flex flex-wrap">
            <div class="w-[100%] flex p-10 rounded-[30px] h-auto bg-[#eee] item-center">
              <div className="w-[20%] ">
                <Image src={Banner6img} alt="img" hright="130" width="130" />
              </div>
              <div className=" py-[10px] w-[60%]">
                <h2 className="font-bold text-[26px] font-sans">
                  <p className="text-lg font-semibold mb-1">TRY</p>
                  Orangescrum Self Hosted for Product Management
                </h2>
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <a
                  href="https://www.orangescrum.com/schedule-a-demo"
                  title=""
                  className="bg-[#eee]  shadow-4 shadow-y-4 shadow-blur-20 shadow-[#ff9db6] cursor-pointer h-[50px] text-lg py-2 inline-block text-[#ff4876] font-normal px-5 item-center rounded-md border-solid border-[2px] border-[#ff4876] hover:bg-[#ff4876] hover:text-white hover:transition-all duration-500 ease-in-out "
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
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
