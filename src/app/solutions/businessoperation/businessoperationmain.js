import CustomForm from "@/components/CustomForm";
import { businessoperationbannerdata } from "@/components/Data/CustomForm";
import React from "react";
import Trustedbythe from "./trustedbtthe";
import Getademobanner from "@/app/product/selfhostedproject/getademobanner";
import Tryorangescrum from "../productmanagement/tryorangescrum";
import baneer3imga from "../../../assets/solution/bussinessoperation/Automate-repetitive-tasks.webp";
import Image from "next/image";
import baneer3imgb from "../../../assets/solution/bussinessoperation/Define-your-task-flow.webp";
import baneer3imgc from "../../../assets/solution/bussinessoperation/Enable-cross-team-collaboration.webp";
import { ArrowRight } from "iconsax-react";
import banner5aimg from "../../../assets/solution/bussinessoperation/Procurement.webp";
import banner5bimg from "../../../assets/solution/bussinessoperation/Enable-cross-team-collaboration.webp";
import banner5cimg from "../../../assets/solution/bussinessoperation/Content-Management.webp";
import Productmanageslider from "../productmanagement/productmanageslider";
import Productmanageshortdetails from "../productmanagement/productmanageshortdetails";
import BOfaqs from "./BOfaqs";
import Productmanagefaqs from "../productmanagement/productmanagefaqs";
import banner4img from "../../../assets/solution/bussinessoperation/Execute-with-efficiency.webp"

function Businessoperationmain() {
  return (
    <>
      <section>
        <CustomForm
          title={businessoperationbannerdata.title}
          image={businessoperationbannerdata.image}
          description={businessoperationbannerdata.description}
        />
      </section>

      <section>
        <Trustedbythe />
      </section>

      <section className="py-[100px] relative bg-[#f6f6f7] text-center block ">
        <div className="container">
          <div className="header_box">
            <h2 className="heading font-sans">
              Streamline your operations and enable desired business outcomes
            </h2>
          </div>
          <div className="flex">
            <aside className="w-[33.33%] px-[60px] block text-center">
              <figure className="flex justify-center transition-all duration-200 ease-linear hover:scale-110">
                <Image src={baneer3imga} alt="Product Management Concepts" />
              </figure>
              <h5 className="text-2xl leading-8 font-semibold pt-[30px] pb-[15px]">
                Automate repetitive tasks
              </h5>
              <p className="text-lg leading-[30px] font-normal p-0 m-0">
                Prevent manual work &amp; errors by setting up{" "}
                <a
                  href="https://www.orangescrum.com/task-management"
                  title="recurring tasks"
                >
                  recurring tasks
                </a>
              </p>
            </aside>
            <aside className="w-[33.33%] px-[60px] block text-center">
              <figure className="flex justify-center transition-all duration-200 ease-linear hover:scale-110">
                <Image src={baneer3imgb} alt="Product Management Concepts" />
              </figure>
              <h5 className="text-2xl leading-8 font-semibold pt-[30px] pb-[15px]">
                Define your task flow
              </h5>
              <p className="text-lg leading-[30px] font-normal p-0 m-0">
                Give a logical flow to your{" "}
                <a
                  href="https://www.orangescrum.com/task-management"
                  title="tasks"
                >
                  tasks
                </a>{" "}
                for specific processes
              </p>
            </aside>
            <aside className="w-[33.33%] px-[60px] block text-center">
              <figure className="flex justify-center transition-all duration-200 ease-linear hover:scale-110">
                <Image src={baneer3imgc} alt="Product Management Concepts" />
              </figure>
              <h5 className="text-2xl leading-8 font-semibold pt-[30px] pb-[15px]">
                Enable cross-team collaboration
              </h5>
              <p className="text-lg leading-[30px] font-normal p-0 m-0">
                Simplify collaboration across teams with{" "}
                <a href="https://www.orangescrum.com/mention" title="@mentions">
                  @mentions
                </a>
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-[70px] relative bg-white text-center block ">
      <div className="container">
            <div className="header_box">
              <h2 className="heading">
                Execute  with efficiency
              </h2>
            </div>
            <div className="flex text-left box-border">
              <aside className="block w-1/2 pr-[30px]">
                <figure className="relative top-[20px] -left-[30px]">
                  <Image
                    src={banner4img}
                    alt="Develop Seamlessly Product Management Backlog"
                    width="500"
                    height="479"
                  />
                </figure>
              </aside>
              <aside className="block w-1/2">
                <ul className="text-sm set_icon pb-[30px] leading-6">
                  <li className="flex li_icon relative bg-white mb-[30px] rounded-[10px]  py-5 pr-5 pl-[100px] border-solid border-[1px] border-[#eee] transition-all duration-200 ease-linear  text-sm leading-7 hover:shadow-2xl ">
                    <a
                      href="https://www.orangescrum.com/agile-project-management"
                      title="Groom Backlogs"
                    >
                      <span className="icon_devop icon_devop_1"></span>
                      <span class="hover_icon hover_icon_a"></span>
                      <div>
                        <h6 className="text-[#433a65] text-2xl leading-7 font-semibold mb-[10px]">
                          Backlog grooming
                        </h6>
                        <p className="text-lg leading-[30px] font-normal p-0 m-0 text-[#24292f]">
                          Prioritize and refine user stories in the backlog for
                          sprint planning.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex li_icon relative bg-white mb-[30px] rounded-[10px] py-5 pr-5 pl-[100px] border-solid border-[1px] border-[#eee] transition-all duration-200 ease-linear  text-sm leading-7 hover:shadow-2xl ">
                    <a
                      href="https://www.orangescrum.com/agile-project-management"
                      title="Run Sprints"
                    >
                      <span className="icon_devop icon_devop_2"></span>
                      <span className="hover_icon hover_icon_b"></span>
                      <div>
                        <h6 className="text-[#433a65] text-2xl leading-7 font-semibold mb-[10px]">
                          Sprint execution
                        </h6>
                        <p className="text-lg leading-[30px] font-normal p-0 m-0 text-[#24292f]">
                          Execute tasks and user-stories in a sprint to achieve
                          project goals.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex li_icon relative bg-white mb-[30px] rounded-[10px] py-5 pr-5 pl-[100px]  border-solid border-[1px] border-[#eee] transition-all duration-200 ease-linear  text-sm leading-7 hover:shadow-2xl ">
                    <a
                      href="https://www.orangescrum.com/agile-project-management"
                      title="Measure Team Velocity"
                    >
                      <span className="icon_devop icon_devop_3"></span>
                      <span className="hover_icon hover_icon_c"></span>
                      <div>
                        <h6 className="text-[#433a65] text-2xl leading-7 font-semibold mb-[10px]">
                          Velocity measurement
                        </h6>
                        <p className="text-lg leading-[30px] font-normal p-0 m-0 text-[#24292f]">
                          Measure team capacity to enhance sprint planning and
                          predictability.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
      </section>
     
      <section className="product_template">
        <div className="container">
          <div className="header_box">
            <h2 className="heading">
              Standardize processes at scale for company-wide succes
            </h2>
          </div>
          <div className="flex">
            <aside className="w-[33.33%] px-[30px] group">
              <a
                href="https://www.orangescrum.com/project-template/kanban"
                title="Go Agile"
                className="template_card relative group-hover:bg-[#29d7e9]"
              >
                <figure className="absolute left-0 top-[-50px]">
                  <Image
                    src={banner5aimg}
                    alt="Go Agile"
                    width="115"
                    height="104"
                  />
                </figure>
                <h5 className="text-2xl leading-[30px] mb-5 font-semibold text-[#433a65] group-hover:text-[#fdf502]">
                  Procurement
                </h5>
                <p className="text-[#24292f] text-[17px] font-normal leading-[28px] mb-8 group-hover:text-white">
                  Track your procurement process from RFP to order closure
                </p>
                <div className="start_template  mt-auto">
                  <span className="group-hover:text-white font-bold">
                    Start with this template
                  </span>
                  <span className="group-hover:text-white">
                    <ArrowRight href="" size="16" color="#4af3eb" />
                  </span>
                </div>
              </a>
            </aside>
            <aside className="w-[33.33%] px-[30px] group">
              <a
                href="https://www.orangescrum.com/project-template/kanban"
                title="Go Agile"
                className="template_card relative group-hover:bg-[#29d7e9]"
              >
                <figure className="absolute left-0 top-[-50px]">
                  <Image
                    src={banner5bimg}
                    alt="Go Agile"
                    width="115"
                    height="104"
                  />
                </figure>
                <h5 className="text-2xl leading-[30px] mb-5 font-semibold text-[#433a65] group-hover:text-[#fdf502]">
                  Recruitment
                </h5>
                <p className="text-[#24292f] text-[17px] font-normal leading-[28px] mb-8 group-hover:text-white">
                  Automate custom workflows, ensuring consistency and efficiency
                </p>
                <div className="start_template mt-auto">
                  <span className="group-hover:text-white  font-bold">
                    Start with this template
                  </span>
                  <span className="group-hover:text-white">
                    <ArrowRight href="" size="16" color="#4af3eb" />
                  </span>
                </div>
              </a>
            </aside>
            <aside className="w-[33.33%] px-[30px] group">
              <a
                href="https://www.orangescrum.com/project-template/bug-tracking"
                title="Go Agile"
                className="template_card relative group-hover:bg-[#29d7e9]"
              >
                <figure className="absolute left-0 top-[-50px] ">
                  <Image
                    src={banner5cimg}
                    alt="Go Agile"
                    width="115"
                    height="104"
                  />
                </figure>
                <h5 className="text-2xl leading-[30px] mb-5 font-semibold text-[#433a65] group-hover:text-[#fdf502]">
                  Content Management
                </h5>
                <p className="text-[#24292f] text-[17px] font-normal leading-[28px] mb-8 group-hover:text-white">
                  Plan & release contents with a pre-defined review & approval
                  process
                </p>
                <div className="start_template mt-auto">
                  <span className="group-hover:text-white font-bold">
                    Start with this template
                  </span>
                  <span className="group-hover:text-white">
                    <ArrowRight href="" size="16" color="#4af3eb" />
                  </span>
                </div>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section>
        <Tryorangescrum />
      </section>

      <section>
        <Productmanageslider />
      </section>

      <section>
        <Productmanageshortdetails />
      </section>

      <section><Productmanagefaqs /></section>

      <section>
        <Getademobanner />
      </section>
    </>
  );
}

export default Businessoperationmain;
