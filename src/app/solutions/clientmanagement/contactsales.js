import React from 'react';
import Banner6img from "../../../assets/solution/productmanage/orangescrum-selfhosted.png";
import Image from 'next/image';

function Contactsales() {
  return (
    <>
        <section className="pt-10 pb-[100px] bg-white">
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

    </>
  )
}

export default Contactsales