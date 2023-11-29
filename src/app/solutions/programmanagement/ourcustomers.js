"use client"
import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Ourcustomers() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const ourcustomerData = [
        {
          title: 'Hailstorm Development',
          imageUrl: 'https://www.orangescrum.com/img/home_outer/success-story/hailstorm.jpg',
          logoUrl: 'https://www.orangescrum.com/img/home_outer/success-story/hd.png',
          companyUrl: 'https://www.orangescrum.com/success-story/hailstorm',
          industry: 'Information Technology',
          shortdspt:"Hailstorm Development is a remote digital and web agency.",
          description: 'Hailstorm Development is a remote digital and web agency. Orangescrum support was exceptional right from the start through implementation and adoption. Our task execution and monitoring became really easy.',
        },
        {
          title: 'Hailstorm Development',
          imageUrl: 'https://www.orangescrum.com/img/home_outer/success-story/sfcg1.jpg',
          logoUrl: 'https://www.orangescrum.com/img/home_outer/success-story/sfcgn.png',
          companyUrl: 'https://www.orangescrum.com/success-story/sfcg',
          industry: 'Information Technology',
          shortdspt:"Marketing Agency finds a trusted partner in Orangescrum",
          description: "Orangescrum's attention to product requests and questions outstanding. There are many features (including subtasks and printable gantt charts)",
        },
        {
            title: 'CAD Consultancy',
            imageUrl: 'https://www.orangescrum.com/img/home_outer/success-story/kewico.jpg',
            logoUrl: 'https://www.orangescrum.com/img/home_outer/success-story/kewicon.png',
            companyUrl: 'https://www.orangescrum.com/success-story/brent',
            industry: 'CAD Consultancy',
            shortdspt:" Dairy Consultancy manages its freelancers effortlessly with Orangescrum",
            description: ' After implementing Orangescrum, we were able to efficiently track projects and provide management with a dashboard view of all projects. It also allowed the project team',
          },
      ];

  return (
    <>
         <section className="pt-[160px] pb-20">
        <div className="card_list_view p-0">
          <div className="container">
            <div className="header_box">
              <h2 className="heading font-bold">
                <small className="uppercase mb-[5px] leading-5 block text-lg font-thin">
                  Why
                </small>
                Our Customers Love Orangescrum
              </h2>
            </div>
            <article className="mt-16 font-lg leading-7 mb-[30px] flex">
            {ourcustomerData.map((customer, index) => (
                <aside key={index} 
              className={`card_animt w-[33.33%] px-4 block ${
                    hoveredIndex === index ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}>
                <div className="relative w-full">
                  {" "}
                  <a
                    href={customer.companyUrl}
                    title="Hailstorm Development"
                    className="card_hub"
                  >
                    <figure className="m-0">
                      {" "}
                      <img
                        src={customer.imageUrl}
                        alt="Information Technology"
                        width="325"
                        height="207"
                        className="inline w-[100%] h-[100%]"
                      />{" "}
                    </figure>
                    <div className="w-full min-h-[215px] p-[15px] box-border">
                      {" "}
                      <strong className="text-2xl leading-[30px] text-center block mb-[15px] overflow-hidden">{customer.industry}</strong>
                      <div className=" h-[50px] text-center py-[15px] flex justify-center items-center">
                        {" "}
                        <img
                          src={customer.logoUrl}
                          alt="hd"
                          className=" h-[50px]"
                        />{" "}
                      </div>
                      <p className="text-[15px] leading-[25px] font-normal mt-[15px] text-left"   >
                      {customer.shortdspt}
                      </p>
                    </div>
                    <div className=" animt_1">
                      <div className="dtbl">
                        <div className="dtbl_cel">
                          <div className=" text-center my-[15px] flex justify-center items-center">
                            {" "}
                            <img
                              src={customer.logoUrl}
                              alt="hd"
                             
                              className=" h-[50px]"
                            />{" "}
                          </div>
                          <strong className="text-2xl leading-[30px] text-center block mb-[15px] overflow-hidden">{customer.industry}</strong>
                          <p className="text-[16px] leading-[25px] font-normal mt-[15px] text-left min-h-[160px]" >
                            {" "}
                            {customer.description}
                          </p>
                          <p className="text-[15px] leading-[25px] font-normal mt-[15px] block px-4 text-right">
                            <span className="text-sm font-medium text-[#0096ff] font-sans">Read more  <IoIosArrowRoundForward className="w-5 h-6 text-blue-500 mask inline-block align-middle ml-2" /></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="card_border"></div>
                </div>
              </aside>
            ))}
              
             
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ourcustomers