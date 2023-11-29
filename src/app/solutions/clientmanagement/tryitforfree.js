import React from 'react';
import Leftarrow from "../../../assets/solution/clientmanagement/fold-arrow-left.png";
import Rightarrow from "../../../assets/solution/clientmanagement/fold-arrow-right.png";
import Image from 'next/image';

function Tryitforfree() {
  return (
    <>
 <div className="py-[100px] relative bg-[#f7f5f5] box-border ">
        <div className="container">
            <div className="header_box">
              <h2 className="heading">
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
    </>
  )
}

export default Tryitforfree