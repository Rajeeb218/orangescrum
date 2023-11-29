import Getademobanner from "@/app/product/selfhostedproject/getademobanner";
import CustomForm from "@/components/CustomForm";
import { programmanagementbannerdata } from "@/components/Data/CustomForm";
import React from "react";
import Tryitforfree from "../clientmanagement/tryitforfree";
import Contactsales from "../clientmanagement/contactsales";
import Baneer2img from "../../../assets/solution/productmanage/orangescrum-world-team.webp";
import Softwareforallteams from "./softwareforallteams";
import Image from "next/image";
import Ourcustomers from "./ourcustomers";


function Programmanagement() {
 
  return (
    <>
      <section>
        <CustomForm
          title={programmanagementbannerdata.title}
          image={programmanagementbannerdata.image}
          description={programmanagementbannerdata.description}
        />
      </section>

      <section className="team_sec  text-center py-20 bg-white">
        <div className="container">
          <h4 className="text-2xl">Trusted by the World's best teams</h4>
          <figure className="flex justify-center pt-10">
            <Image src={Baneer2img} alt="" width="593" height="94" />
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

      <section className="py-[88px] block pb-10">
        <div className="container">
          <div className="header_box">
            <h2 className="heading font-bold">
              Reduces 40% project delivery <br></br> time with Orangescrum{" "}
              <br></br>{" "}
              <a
                href="https://www.orangescrum.com/project-management-software"
                className="text-[#0af]"
                title="Project Management software"
              >
                Project Management software
              </a>
            </h2>
          </div>
          <article className="flex items-center justify-center text-center my-20 text-[#000] text-lg leading-7 box-border">
            <div className="bg-[#8265fd] cursor-default float-none text-left ml-[30px] w-[33.33%] rounded-2xl overflow-hidden min-h-[220px] p-5 transition-width duration-200 ease-in-out">
              <figure className="block">
                <img
                  src="https://www.orangescrum.com/img/teams/program-management-task.png"
                  alt="Map Your Tasks &amp; Plan Your Actions"
                  width="65"
                  height="65"
                  className="inline transition-width duration-200 ease-in-out"
                />
              </figure>
              <h5 className="text-2xl mt-5 leading-8 font-normal text-left text-white">
                Improved Collaboration and Communication
              </h5>
            </div>
            <div className="bg-[#ffbc3a] cursor-default float-none text-left ml-[30px] w-[33.33%] rounded-2xl overflow-hidden min-h-[220px] p-5 transition-width duration-200 ease-in-out">
              <figure className="block">
                <img
                  src="https://www.orangescrum.com/img/teams/program-management-analyze.png"
                  alt="Analyze and Get Clear Picture of Your Entire Project"
                  width="65"
                  height="65"
                  className="inline transition-width duration-200 ease-in-out"
                />
              </figure>
              <h5 className="text-2xl mt-5 leading-8 font-normal text-left text-white">
                Efficient Resource Allocation
              </h5>
            </div>
            <div className="bg-[#fd7889] cursor-default float-none text-left ml-[30px] w-[33.33%] rounded-2xl overflow-hidden min-h-[220px] p-5 transition-width duration-200 ease-in-out">
              <figure className="block">
                <img
                  src="https://www.orangescrum.com/img/teams/program-management-resource.png"
                  alt="Simplify Resource Management for Project Success"
                  width="65"
                  height="65"
                  className="inline transition-width duration-200 ease-in-out"
                />
              </figure>
              <h5 className="text-2xl mt-5 leading-8 font-normal text-left text-white">
                Enhanced Visibility and Reporting
              </h5>
            </div>
          </article>
          <figure className="text-center block">
            <img
              src="https://www.orangescrum.com/img/teams/orangescrum-Program-management.png"
              alt="All-in-One Program Management Software"
              width="1005"
              height="706"
              className="inline transition-all duration-200 ease-in-out"
            />
          </figure>
        </div>
      </section>

      <section>
        <Contactsales />
      </section>

      <section>
        <Tryitforfree />
      </section>

      <section>
        <Softwareforallteams />
      </section>

     <section>
      <Ourcustomers />
     </section>

      <section>
        <Getademobanner />
      </section>
    </>
  );
}

export default Programmanagement;
