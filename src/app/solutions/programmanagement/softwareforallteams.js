import { Softwareforalldata, TeamData, teamData } from '@/components/Data/softwareforalldata';
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

function Softwareforallteams() {
  
  return (
    <>
        <section className="pt-[100px]">
<div className="container">
  <div className="header_box">
    <h2 className="heading font-bold">
      Program Management Software for All Teams
    </h2>
    <p className="text-[#24292f] text-2xl leading-[40px] mt-5 ">
      Enable team members from various departments to collaborate on a
      single platform.
    </p>
  </div>

  <div className="flex flex-wrap box-border">
    <ul className="flex flex-wrap text-sm leading-6 mb-[10px] box-border">
    {Softwareforalldata.map((Softwareforalldata, index) => (
                <aside key={index}
   className="w-1/2 p-[30px]">
        <a
          href={Softwareforalldata.link}
          title="IT Teams"
          className="pg_all_teams"
        >
          <figure className="absolute left-[30px] top-[60px]">
            <img
              src={Softwareforalldata.imageUrl}
              alt="IT Teams"
              width="150"
              height="100"
              className="inline-block w-auto max-w-[150px] max-h-[100px]"
            />
          </figure>
          <h4 className="font-semibold text-2xl leading-7 hover:transition-colors duration-300 ease">
          {Softwareforalldata.title}
          </h4>
          <p className="text-lg leading-[30px] mt-[10px] mb-[20px] hover:transition-colors duration-300 ease">
          {Softwareforalldata.description}
          </p>
          <div className="leranmore">
            <strong>Learn More</strong>{" "}
            <span className="ml-[10px] hover:ml-[15px]">
              <FaLongArrowAltRight className="arrow_right" />
            </span>
          </div>
        </a>
      </aside>
      ))}
    </ul>
  </div>
</div>
</section>
    </>
  )
}

export default Softwareforallteams

