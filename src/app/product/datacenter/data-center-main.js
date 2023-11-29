"use client"
import React from "react";
import Image from "next/image";
import Firstbnraside from "../../../assets/productdatacenter/data-center-project-management.webp";
import Tickimg from "../../../assets/productdatacenter/tick-mark.webp";
import DCprojectmanagement from "./dc-project-management";
import DCslider from "./dcslider";
import Letsdiscuss from "../../../assets/productdatacenter/stripe-bg-demo.webp";
import Faqs from "./dc-faqs";
import Banner from "@/components/Navbar/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
function Datacenter() {
  return (
    <>
    <Banner />
      <Navbar /> 

    <div className="overflow-hidden">
      <section>
        <div className="bg-cover bg-blue-100">
          <div className="p-16 pt-20 pb-28 items-center ">
            <div className="container w-auto">
              <div className="w-[100%] m-auto flex flex-wrap">
                <aside className='w-[60%] m-0 text-left px-[30px] block text-3xl leading-[32px] before:box-border before:content-[url("../../assets/bnr-bg-datacenter.webp ")] before:absolute before:left-[-74px] beftop-[116px] before:w-[170px] before:h-[170px]'>
                  <div className="mb-[30px]">
                    <h1 className="text-[65px] font-sans font-extrabold leading-[70px]">
                      Data Center Project Management Software
                    </h1>
                  </div>
                  <p className="text-2xl box-border leading-[32px]">
                    Experience uninterrupted performance with our flexible and
                    scalable data center solutions for your{" "}
                    <a
                      href="https://www.orangescrum.com/project-management-software"
                      className="text-blue-500"
                    >
                      project management
                    </a>{" "}
                    needs. Reduce the effort of server maintenance and support
                    for running the solution on cloud.
                  </p>
                  <div className="mt-[30px] max-w-[100%] items-start">
                    <div className="p-0">
                      <a
                        href=""
                        className="cursor-pointer inline-block h-[50px] bg-[#ff4876] leading-[50px] text-lg px-5 font-medium text-center rounded text-white hover:bg-[#ef426d] hover:transition-all duration-500 ease-in-out hover:shadow-2xl "
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                </aside>
                <aside className="block w-[40%] text-right">
                  <figure className="inline w-[100%] box-border">
                    <Image
                      src={Firstbnraside}
                      alt="Data Center Project Management Software"
                    />
                  </figure>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative block pt-16 pb-[70px]">
        <div className="w-[100%] m-auto block box-border">
          <div className="box-border mb-20 text-center">
            <h2 className="text-[#24292f] text-[60px] leading-[65px] font-bold font-sans">
              Orangescrum Datacenter Edition
            </h2>
            <p className="p-0 mt-5 text-2xl leading-[40px] font-normal">
              Specifically designed for the team who wants to focus on the
              productivity only
            </p>
          </div>
          <div className="p-[10px] flex flex-wrap ml-16 mr-16 rounded-[18px] bg-[#ECF3FE] pt-5 border border-solid border-transparent border-w-[1px] items-center">
            <div className="px-4 relative w-[33.33%] hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="pt-[70px] text-left relative bg-transparent border-[1px] border-solid border-transparent p-[30px] rounded ">
                <span>
                  <Image
                    src={Tickimg}
                    alt="tick"
                    className="inline-block absolute top-4 left-2 box-border"
                  />
                </span>
                <h5 className="text-left text-2xl mt-5 mb-3 min-h-[60px] text-[#24292f] font-medium leading-[30px]">
                  Plan, execute, track, and report
                </h5>
                <p className="text-[#24292f] font-normal text-lg leading-[30px] ">
                  Project plan identifies the project risks, determines how the
                  project will be executed and monitors progress against the
                  project plan to identify issues or roadblocks.
                </p>
              </div>
            </div>
            <div className="px-4 relative w-[33.33%] hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="pt-[70px] text-left relative bg-transparent border-[1px] border-solid border-transparent p-[30px] rounded ">
                <span>
                  <Image
                    src={Tickimg}
                    alt="tick"
                    className="inline-block absolute top-4 left-2 box-border"
                  />
                </span>
                <h5 className="text-left text-2xl mt-5 mb-3 min-h-[60px] text-[#24292f] font-medium leading-[30px]">
                  Cutting-edge technology
                </h5>
                <p className="text-[#24292f] font-normal text-lg leading-[30px] ">
                  Our data center plan are designed to meet the highest industry
                  standards for security, reliability, and performance to run
                  the project management tool
                </p>
              </div>
            </div>
            <div className="px-4 relative w-[33.33%] hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="pt-[70px] text-left relative bg-transparent border-[1px] border-solid border-transparent p-[30px] rounded ">
                <span>
                  <Image
                    src={Tickimg}
                    alt="tick"
                    className="inline-block absolute top-4 left-2 box-border"
                  />
                </span>
                <h5 className="text-left text-2xl mt-5 mb-3 min-h-[60px] text-[#24292f] font-medium leading-[30px]">
                  Comprehensive support
                </h5>
                <p className="text-[#24292f] font-normal text-lg leading-[30px] ">
                  We monitor the health and performance of your infrastructure
                  24/7 to ensure that any issues or problems are identified and
                  addressed quickly so that you focus on your core job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <DCprojectmanagement />
      </section>

      <section className="py-[100px] relative bg-white box-border ">
        <div className="w-[100%] m-auto box-border ">
          <div className="mx-20 ">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
                Customer success stories
              </h2>
            </div>
            {/* <DCslider /> */}
          </div>
        </div>
      </section>

      <section className="py-[100px] relative bg-white box-border ">
        <div className="w-[100%] m-auto box-border ">
          <div className="mx-20 ">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
                Data Center Service for Any Industry
              </h2>
              <p className="p-0 mt-5 text-2xl leading-[40px] font-normal">
                Data center services are utilized by a wide range of industries
                with reliable and secure IT infrastructure. Organizations are
                also seeking to leverage the advanced technologies to improve
                their operations, efficiency, and remain competitive in the
                digital age. Some of the key industries are,
              </p>
            </div>
            <div className=" flex flex-wrap justify-center mt_60">
              <div className="flex-col w-[33.33%] px-4 mb-5 hover:-translate-y-2 hover:opacity-100 transform transition-transform duration-300 ease-out">
                <a
                  href=""
                  target="_blank"
                  title="Financial Services"
                  className="pr-[10px]"
                >
                  <figure className="bg-transparent w-full h-full inline shadow-lg">
                    <img
                      src="https://www.orangescrum.com/img/webp/datacenter-industry/Financial-services.webp"
                      alt="Financial Services"
                      title="Financial Services"
                    />
                  </figure>
                  <div className="pt-5 px-[25px] relative h-[290px] pb-20 bg-white shadow-xl rounded-b-[32px]">
                    <h6 className="my-3 leading-7 text-xl font-medium text-center">
                      Financial Services
                    </h6>
                    <p className="leading-7 text-lg font-normal text-center">
                      Financial services companies, such as banks and investment
                      firms, rely heavily on data center services to manage and
                      process large volumes of financial data and transactions.
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex-col w-[33.33%] px-4 mb-5 hover:-translate-y-2 hover:opacity-100 transform transition-transform duration-300 ease-out">
                <a
                  href=""
                  target="_blank"
                  title="Financial Services"
                  className="pr-[10px] visible animate-fadeInLeft delay-300"
                >
                  <figure className="bg-transparent w-full h-full inline">
                    <img
                      src="https://www.orangescrum.com/img/webp/datacenter-industry/Healthcare.webp"
                      alt="Healthcare"
                      title="Healthcare"
                    />
                  </figure>
                  <div className="pt-5 px-[25px] relative h-[290px] pb-20 bg-white shadow-xl rounded-b-[32px]">
                    <h6 className="my-3 leading-7 text-xl font-medium text-center">
                      Healthcare
                    </h6>
                    <p className="leading-7 text-lg font-normal text-center">
                      Healthcare industry requires secure and reliable data
                      center infrastructure to support critical operations, such
                      as electronic health records, medical imaging, and
                      telemedicine.
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex-col w-[33.33%] px-4 mb-5 hover:-translate-y-2 hover:opacity-100 transform transition-transform duration-300 ease-out">
                <a
                  href=""
                  target="_blank"
                  title="Financial Services"
                  data-wow-delay="0.3s"
                  className="pr-[10px] visible animate-fadeInLeft delay-300"
                >
                  <figure className="bg-transparent w-full h-full inline">
                    <img
                      src="https://www.orangescrum.com/img/webp/datacenter-industry/E-commerce-retail.webp"
                      alt="E-commerce and Retail"
                    />
                  </figure>
                  <div className="pt-5 px-[25px] relative h-[290px] pb-20 bg-white shadow-xl rounded-b-[32px]">
                    <h6 className="my-3 leading-7 text-xl font-medium text-center">
                      E-commerce and Retail
                    </h6>
                    <p className="leading-7 text-lg font-normal text-center">
                      Retailers and e-commerce companies looking for robust data
                      center infrastructure to support their online and offline
                      operations, including inventory management, order
                      processing, and customer support.
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex-col w-[33.33%] px-4 mb-5 hover:-translate-y-2 hover:opacity-100 transform transition-transform duration-300 ease-out">
                <a
                  href=""
                  target="_blank"
                  title="Financial Services"
                  data-wow-delay="0.3s"
                  className="pr-[10px] visible animate-fadeInLeft delay-300 "
                >
                  <figure className="bg-transparent w-full h-full inline">
                    <img
                      src="https://www.orangescrum.com/img/webp/datacenter-industry/Telecommunications.webp"
                      alt="Telecommunications"
                      title="Telecommunications"
                    />
                  </figure>
                  <div className="pt-5 px-[25px] relative h-[290px] pb-20 bg-white shadow-xl rounded-b-[32px]">
                    <h6 className="my-3 leading-7 text-xl font-medium text-center">
                      Telecommunications
                    </h6>
                    <p className="leading-7 text-lg font-normal text-center">
                      Telecommunications companies require high-capacity data
                      center infrastructure to support their network operations,
                      including voice and data transmission, mobile services,
                      and internet connectivity.
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex-col w-[33.33%] px-4 mb-5 hover:-translate-y-2 hover:opacity-100 transform transition-transform duration-300 ease-out">
                <a
                  href=""
                  target="_blank"
                  title="Financial Services"
                  data-wow-delay="0.3s"
                  className="pr-[10px] visible animate-fadeInLeft delay-300  h-min-[509px]"
                >
                  <figure className="bg-transparent w-full h-full inline">
                    <img
                      src="https://www.orangescrum.com/img/webp/datacenter-industry/Government.webp"
                      alt="Government"
                      title="Government"
                    />
                  </figure>
                  <div className="pt-5 px-[25px] relative h-[290px] pb-20 bg-white shadow-xl rounded-b-[32px]">
                    <h6 className="my-3 leading-7 text-xl font-medium text-center">
                      Government
                    </h6>
                    <p className="leading-7 text-lg font-normal text-center">
                      Government agencies require secure and reliable data
                      center infrastructure to support critical operations, such
                      as national security, public safety, and emergency
                      response.
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex-col w-[33.33%] px-4 mb-5 hover:-translate-y-2 hover:opacity-100 transform transition-transform duration-300 ease-out">
                <a
                  href=""
                  target="_blank"
                  title="Financial Services"
                  data-wow-delay="0.3s"
                  className="pr-[10px] h-min-[509px] visible animate-fadeInLeft delay-300"
                >
                  <figure className="bg-transparent w-full h-full inline">
                    <img
                      src="https://www.orangescrum.com/img/webp/datacenter-industry/Education.webp"
                      alt="Education"
                      title="Education"
                    />
                  </figure>
                  <div className="pt-5 px-[25px] relative h-[290px] pb-20 bg-white shadow-xl rounded-b-[32px]">
                    <h6 className="my-3 leading-7 text-xl font-medium text-center">
                      Education
                    </h6>
                    <p className="leading-7 text-lg font-normal text-center">
                      Educational institutions require data center services to
                      support their learning management systems, student
                      information systems, and other academic and administrative
                      systems.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <Image
          src={Letsdiscuss}
          alt="banner-bg"
          className="absolute inset-0 w-full h-full object-cover rounded-none"
        />
        <div className="w-[100%] m-auto relative block ">
          <div className="mx-20 text-center text-blsck box-border">
            <h4 className="text-center text-[32px] font-semibold mb-4">
              Are you looking for data center service for your industry?
            </h4>
            <p className="text-center"></p>
            <div className="mt-6 p-0">
              <a
                href="https://www.orangescrum.com/schedule-a-demo"
                title="Let's Discuss"
                className="cursor-pointer inline-block  bg-[#ff4876] leading-[50px] text-lg px-5 font-normal text-center rounded text-white hover:bg-[#ef126d] hover:transition-all duration-700 ease-in-out hover:shadow-2xl "
              >
                Let's Discuss
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] relative bg-white box-border ">
        <div className="w-[100%] m-auto box-border ">
          <div className="mx-24 ">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
                Get Started with Orangescrum <br></br> Data Center Edition
              </h2>
            </div>
            <div className="flex flex-wrap item-center box-border">
              <ul className="w-[58.33%] mb-[10px] relative float-left px-4 pt-16 leading-6 text-base">
                <li className=" flex flex-wrap relative  mb-4 leading-[30px] font-normal text-lg">
                  {" "}
                  <Image
                    src={Tickimg}
                    alt="verify"
                    className="absolute -top-1 -left-10 h-12 w-12 mr-3"
                  />
                  <p className=" hover:translate-x-1 transition-transform duration-300 ease-out">
                    Access to centralized data and resources from anywhere, at
                    any time
                  </p>
                </li>
                <li className=" flex flex-wrap relative  mb-4 leading-[30px] font-normal text-lg">
                  {" "}
                  <Image
                    src={Tickimg}
                    alt="verify"
                    className="absolute -top-1 -left-10 h-12 w-12 mr-3"
                  />
                  <p className=" hover:translate-x-1 transition-transform duration-300 ease-out">
                    Enabling greater collaboration and efficiency across teams
                  </p>
                </li>
                <li className=" flex flex-wrap relative  mb-4 leading-[30px] font-normal text-lg">
                  {" "}
                  <Image
                    src={Tickimg}
                    alt="verify"
                    className="absolute -top-1 -left-10 h-12 w-12 mr-3"
                  />
                  <p className=" hover:translate-x-1 transition-transform duration-300 ease-out">
                    No more investment in additional hardware or infrastructure
                  </p>
                </li>
                <li className=" flex flex-wrap relative  mb-4 leading-[30px] font-normal text-lg">
                  {" "}
                  <Image
                    src={Tickimg}
                    alt="verify"
                    className="absolute -top-1 -left-10 h-12 w-12 mr-3"
                  />
                  <p className=" hover:translate-x-1 transition-transform duration-300 ease-out"></p>
                  Advanced security features, like encryption, firewalls, and
                  multi-factor authentication
                </li>
                <li className=" flex flex-wrap relative  mb-4 leading-[30px] font-normal text-lg">
                  {" "}
                  <Image
                    src={Tickimg}
                    alt="verify"
                    className="absolute -top-1 -left-10 h-12 w-12 mr-3"
                  />
                  <p className=" hover:translate-x-1 transition-transform duration-300 ease-out">
                    Advanced disaster recovery capabilities and daily backup and
                  </p>
                  recovery services
                </li>
              </ul>
              <div className="w-[41.66%] float-left relative px-4">
                <div className="bg-[#eee] p-10 rounded-md border-[1px] border-transparent border-solid ">
                  <form
                    className="box-border block relative "
                    action="https://www.orangescrum.com/users/contact_support_submit"
                    method="post"
                  >
                    <div className="">
                      <input
                        type="hidden"
                        className="h-6"
                        name="_method"
                        value="POST"
                      />
                      <label
                        for="default"
                        className="relative inline-block mb-[6px] text-sm font-medium text-gray-900 dark:text-white"
                      >
                        No of Users
                      </label>
                      <select
                        id="default"
                        className="relative bg-white font-sans leading-5 pr-10 h-10 w-[100%] text-gray-900 mb-6 focus:ring-blue-500 focus:border-blue-500 block p-2  border-solid border-[2px]  border-gray-200 text-base dark:bg-gray-700 rounded-[2px] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected value="0-50">
                          1-50
                        </option>
                        <option value="51-100">51-100</option>
                        <option value="101-200">101-200</option>
                        <option value="201-300">201-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                    <div className="">
                      <input
                        type="hidden"
                        className="h-6"
                        name="_method"
                        value="POST"
                      />
                      <label
                        for="default"
                        className="relative inline-block mb-[6px] text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Industry
                      </label>
                      <select
                        id="default"
                        className="relative bg-white font-sans leading-5 pr-10 h-10 w-[100%] text-gray-900 mb-6 focus:ring-blue-500 focus:border-blue-500 block p-2  border-solid border-[2px]  border-gray-200 text-base dark:bg-gray-700 rounded-[2px] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected value="Financial Services">
                          Industry
                        </option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="E-commerece and retail">
                          E-commerece and retail
                        </option>
                        <option value="Telecommunications">
                          Telecommunications
                        </option>
                        <option value="Education">Education</option>
                        <option value="Education">Government</option>
                        <option value="others">others</option>
                      </select>
                    </div>
                    <div class="inpfld_row email_fld">
                      <input
                        type="hidden"
                        className="h-6"
                        name="_method"
                        value="POST"
                      />
                     <label
                        for="default"
                        className="relative inline-block mb-[6px] text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email Address
                      </label>
                      <input
                        name="data[Contact][email]"
                        title="Email"
                        id="dc_txt_email"
                        autocomplete="off"
                        className="relative w-full bg-white font-sans leading-5 pr-10 h-10  text-gray-900 mb-6 focus:ring-blue-500 focus:border-blue-500 block p-2  border-solid border-[2px]  border-gray-200 text-base dark:bg-gray-700 rounded-[2px] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Work Email"
                        type="text"
                      />
                    </div>
                    <div className="mt-[30px] text-center max-w-[100%]">
                      <div className="p-0">
                        <a
                          href=""
                          className="cursor-pointer inline-block h-[50px] bg-[#ff4876] leading-[50px] text-lg px-5 font-normal text-center rounded text-white hover:bg-[#ef126d] hover:transition-all duration-500 ease-in-out hover:shadow-2xl "
                        >
                          Contact Sales
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-[50px] relative bg-white box-border ">
        <div className="w-[100%] m-auto box-border ">
        
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
              FAQs
              </h2>
            </div>
           <Faqs />
          </div>
      
      </section>

      <section className="relative pt-[100px] pb-[140px] mx-16">
        <Image
          src={Letsdiscuss}
          alt="banner-bg"
          className="absolute w-full m-auto object-cover"
        />
        <div className="relative w-full m-auto block">
          <div className="flex flex-wrap">
            <div className=" py-10 px-[60px]">
              <div className="w-[58.33%] float-left px-4">
                <div className="box-border block">
                  <h4 className="text-4xl leading-10 font-semibold mb-4">
                    Data Center Support Services
                  </h4>
                  <p className="text-lg font-normal leading-7">
                    To ensure your success, we offer specialized services and
                    support for all your enterprise needs.
                  </p>
                </div>
              </div>
              <div className="w-[41.66%] float-left px-4 box-border">
                <div className="flex flex-col">
                  <div className="py-[5px] pr-[10px] pl-[50px] relative flex flex-row items-center">
                    <a
                      href="javascript:void(0)"
                      onClick={() => contactSales()}
                      title="Contact Sales"
                      className="text-2xl leading-[34px] font-medium block mb-1"
                    >
                      Contact Sales
                    </a>
                  </div>

                  <div className="py-[5px] pr-[10px] pl-[50px] relative flex flex-row items-center">
                    <span className="h-10 w-10 items-center mr-[10px]">
                      <img
                        src="https://www.orangescrum.com/img/webp/datacenter-industry/support-call.webp"
                        className=""
                        width="50"
                        height="50"
                        alt="contact support"
                      />
                    </span>
                    <div className="flex-col">
                      <a
                        href="tel:+1 (408)9074166"
                        className="block text-lg leading-7 font-semibold"
                      >
                        +1 (408) 907 4166
                      </a>
                    </div>
                  </div>

                  <div className="py-[5px] pr-[10px] pl-[50px] relative flex flex-row items-center">
                    <span className="h-10 w-10 items-center mr-[10px]">
                      <img
                        src="https://www.orangescrum.com/img/webp/datacenter-industry/whatsapp.webp"
                        className=""
                        width="50"
                        height="50"
                        alt="contact support"
                      />
                    </span>
                    <div className="d-flex contact_support">
                      <a
                        href="tel:+919668465389"
                        className="block text-lg leading-7 font-semibold"
                      >
                        +91 966 846 5389
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    <Footer />
  </>
  );
}

export default Datacenter;
