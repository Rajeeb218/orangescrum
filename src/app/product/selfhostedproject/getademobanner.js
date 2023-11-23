import React from 'react'

function Getademobanner() {
  return (
    <main className="block">
    <section className="bg-[#effaff] py-20">
      <div className="container">
        <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
          <div className="relative px-4 w-[41.66%] float-left text-center">
            <div>
              <h2 className="mb-10 font-semibold text-[45px] leading-[55px] font-sans">
                Get a Demo
              </h2>
              <p className="mb-[10px] text-lg leading-[30px] p-0 font-sans">
                It's always good idea to explore the product before
                selecting the best suits your needs.
              </p>
              <a
                href="https://www.orangescrum.com/schedule-a-demo"
                title="Schedule a Demo"
                className="bg-[#ff4876] shadow-4 shadow-y-4 shadow-blur-20 shadow-[#ff9db6] cursor-pointer h-[50px] text-lg py-2 inline-block text-white font-normal mt-16 px-5 item-center rounded-md hover:bg-[#ef426d] hover:transition-all duration-500 ease-in-out "
              >
                Schedule a Demo
              </a>
            </div>
          </div>
          <div className="float-left px-[15px] relative w-[16.66%]">
            <div className="text-[#979797] text-xl relative text-center ">
              <div className="divide-x-2 bg-[#a8b0bb] h-[111px]  w-[1px] relative left-[86px] block top-[-20px]"></div>
              <span>OR</span>
              <div className="divide-x-2 bg-[#a8b0bb] h-[111px]  w-[1px] relative left-[86px] block top-4"></div>
            </div>
          </div>

          <div className="relative px-4 w-[41.66%] float-left text-center">
            <div>
              <h2 className="mb-10 font-semibold text-[45px] leading-[55px] font-sans">
                Start a Free trial
              </h2>
              <p className="mb-[10px] text-lg leading-[30px] p-0 font-sans">
                It's time to take control and bring efficiency back.
                First step toward more organized projects!
              </p>
              <a
                href="https://www.orangescrum.com/schedule-a-demo"
                title="Schedule a Demo"
                className="bg-[#effaff] shadow-4 shadow-y-4 shadow-blur-20 shadow-[#ff9db6] cursor-pointer h-[50px] text-lg py-2 inline-block text-[#ff4876] font-normal mt-16 px-5 item-center rounded-md border border-solid border-[#ff4876] hover:bg-[#ff4876] hover:text-white hover:transition-all duration-500 ease-in-out "
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Getademobanner