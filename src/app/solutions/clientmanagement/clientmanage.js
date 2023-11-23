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
import { Arrowright1 } from "../../../assets/solution/clientmanagement/next-nav-arrow (1).png";

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

      <section className="team_sec text-center py-20">
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
      </section>

      <section className="pt-10 pb-[100px]">
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
      </section>

      <section className={`${Styles.bag_cover}`}>
        <div className="py-[100px] relative bg-[#f7f5f5] fox-border ">
          <div className="w-[100%] m-auto box-border ">
            <div className="mx-20 ">
              <div className="text-center mb-[80px] box-border">
                <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
                  Collaborate and Engage <br></br> with Clients
                </h2>
              </div>
              <div className="w-[100%] m-auto flex flex-wrap">
                <aside className="w-[50%]  relative px-4 float-left">
                  <Clientmanagementasidefaqs />
                </aside>
                <aside className="w-[50%] relative px-4 float-left"></aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-[100px] relative bg-white box-border ">
          <div className="w-[100%] m-auto box-border ">
            <div className="mx-20 ">
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
        </div>
      </section>

      <section className="py-[100px] relative bg-white box-border">
        <div className="w-[100%] m-auto box-border ">
          <div className="mx-20 ">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
                Custom Templates to Streamlines Tasks<br></br> and Team
                Collaboration
              </h2>
              <p className="text-[#24292f] text-2xl leading-[30px] my-5 p-[5px]">
                Orangescrum provides fully customizable project templates to fit
                your teams’ needs and project requirements
              </p>
            </div>
          </div>
          <div className="bg-transparent mx-16 ">
            <div className="flex flex-wrap  w-[100%] ">
              <div className="w-[25%] float-left relative px-4">
                <article className="text-lg leading-7 text-[#000] float-left box-border ">
                  <a
                    href="https://www.orangescrum.com/project-template/kanban"
                    className="block w-[100%] h-[320px] relative overflow-hidden border-[1px] border-solid  border-[#eee] hover:bg-[#337ab7] bg-whit shadow  transition-all duration-500 ease-in-out"
                    title="Kanban"
                  >
                    <figure className="flex items-center justify-center w-full h-60 bg-white transition-all duration-500 ease-in-out">
                      <img
                        src="https://www.orangescrum.com/img/features/kanban-project-template.png"
                        alt="Kanban"
                        className="block w-24 h-24 relative left-[-10px]"
                      />
                    </figure>
                    <h6 className=" flex justify-center items-center font-sans h-20 bg-white m-0 absolute w-[100%] py-[10px] px-4 z-[1px] border-solid border-t-[1px] border-[#d7edfa] box-border">
                      <strong className="text-2xl leading-[30px] font-medium ">
                        Kanban
                      </strong>
                    </h6>
                    <p className="text-lg leading-[30px] text-white font-medium  text-center p-4 -translate-y-1/5 opacity-0 transition-all duration-500 ease-in-out">
                      Visualize work in progress and optimize your processes.
                    </p>
                  </a>
                </article>
              </div>
              <div className="w-[25%] float-left relative px-4 ">
                <article>
                  <a
                    href="https://www.orangescrum.com/project-template/bug-tracking"
                    className="bg-white block w-[100%] h-[320px] relative overflow-hidden border-[1px] border-solid  border-[#eee] hover:bg-[#337ab7] shadow transition-all duration-500 ease-in-out"
                    title="Bug Tracking"
                  >
                    <figure className="flex items-center justify-center w-full h-60 bg-white transition-all duration-500 ease-in-out">
                      <img
                        src="https://www.orangescrum.com/img/features/bug-tracking-project-template.png"
                        alt="Bug Tracking"
                        className="block w-24 h-24 relative left-[-10px]"
                      />
                    </figure>
                    <h6 className=" flex justify-center items-center font-sans h-20 bg-white m-0 absolute w-[100%] py-[10px] px-4 z-[1px] border-solid border-t-[1px] border-[#d7edfa] box-border">
                      <strong className="text-2xl leading-[30px] font-medium ">
                        Bug Tracking
                      </strong>
                    </h6>
                    <p>Track and resolve software issues seamlessly</p>
                  </a>
                </article>
              </div>
              <div className="w-[25%] float-left relative px-4">
                <article>
                  <a
                    href="https://www.orangescrum.com/project-template/task-tracking"
                    className="bg-white block w-[100%] h-[320px] relative overflow-hidden border-[1px] border-solid  border-[#eee] hover:bg-[#337ab7] shadow transition-all duration-500 ease-in-out"
                    title="Task Tracking"
                  >
                    <figure className="flex items-center justify-center w-full h-60 bg-white transition-all duration-500 ease-in-out">
                      <img
                        src="https://www.orangescrum.com/img/features/task-tracking-project-template.png"
                        alt="Task Tracking"
                        className="block w-24 h-24 relative left-[-10px]"
                      />
                    </figure>
                    <h6 className=" flex justify-center items-center font-sans h-20 bg-white m-0 absolute w-[100%] py-[10px] px-4 z-[1px] border-solid border-t-[1px] border-[#d7edfa] box-border">
                      <strong className="text-2xl leading-[30px] font-medium ">
                        Task Tracking
                      </strong>
                    </h6>
                    <p>Stay on top of tasks, deadlines, and project progress</p>
                  </a>
                </article>
              </div>
              <div className="w-[25%] float-left relative px-4">
                <article>
                  <a
                    href="https://www.orangescrum.com/project-template/agile-scrum"
                    className="bg-white block w-[100%] h-[320px] relative overflow-hidden border-[1px] border-solid  border-[#eee] hover:bg-[#337ab7] shadow transition-all duration-500 ease-in-out"
                    title="Scrum"
                  >
                    <figure className="flex items-center justify-center w-full h-60 bg-white transition-all duration-500 ease-in-out">
                      <img
                        src="https://www.orangescrum.com/img/features/scrum-project-template.png"
                        alt="Scrum"
                        className="block w-24 h-24 relative left-[-10px]"
                      />
                    </figure>
                    <h6 className=" flex justify-center items-center font-sans h-20 bg-white m-0 absolute w-[100%] py-[10px] px-4 z-[1px] border-solid border-t-[1px] border-[#d7edfa] box-border">
                      <strong className="text-2xl leading-[30px] font-medium ">
                        Scrum
                      </strong>
                    </h6>
                    <p>
                      Enabling iterative development and collaboration for
                      successful projects
                    </p>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 flex">
        <div className=" m-auto w-[100%]">
          <div class="flex items-center relative w-[650px] h-[100px] mx-auto">
            <div className="flex items-center h-[100%] w-[50%] pr-[50px] ">
              <a
                href="https://www.orangescrum.com/signup"
                title="Try Orangescrum"
                className="flex items-center justify-center bg-[#17044a] flex-1 text-white text-center rounded-[4px] h-[50px] hover:h-full text-xl leading-[30px] "
              >
                Try Orangescrum
              </a>
            </div>
            <div
              className="w-[1px] h-[100%] absolute
    left-0
    right-0
    m-auto
    block
    z-index-1
    bg-[#c4eefb]
    bottom-0
    top-0"
            ></div>
            <div className="flex h-[100%] w-[50%] pl-[50px]">
              <a
                href="https://www.orangescrum.com/product-videos"
                title=" Kanban View"
                className="bg-white hover:bg-[#0af] text-center font-medium w-full h-full py-4 relative flex items-center justify-center border transition-all duration-250 shadow-lg text-2xl leading[30px] hover:text-white px-[30px] rounded"
              >
                Take a tour{" "}
                <span className="inline-block">
                  <Image
                    src={Arrowright1}
                    alt="Arrow right"
                    className="w-12 h-12 absolute right-[-25px] top-0 bottom-0 m-auto flex items-center text-left rounded-full shadow-md"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
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
