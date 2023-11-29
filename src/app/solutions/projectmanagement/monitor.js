import React from "react";

const Monitor = () => {
  return (
    <section className="px-0 py-[60px]">
      <div className="container mx-auto my-0">
        <div className="flex text-center items-center flex-wrap">
          <aside className="w-[55%] pr-[30px!important]">
            <figure className="relative left-[-30px] mx-0 my-0">
              <img
                src="	https://www.orangescrum.com/img/home_outer/project-monitoring.webp"
                className="h-[474px] w-[564px] inline align-middle border-0 max-w-[100%] "
              ></img>
            </figure>
          </aside>
          <aside className="pl-[30px!important] w-[45%]">
            <div className="text-left ">
              <h3
                className="text-[36px] leading-[46px] text-[#24292f] font-semibold mx-0 mt-0 mb-[15px] "
                style={{ fontFamily: "'Proxima Nova Rg Regular', sans-serif" }}
              >
                Are you struggling to get real-time visibility of your project
                activities?
              </h3>
              <p className="px-0 py-0 text-[18px] leading-[30px] text-[#24292f] mx-0 mt-0 mb-[10px] font-normal">
                <strong className="block text-[22px] font-semibold mx-0 mt-[20px] mb-[15px]">
                  <a
                    href=""
                    className="no-underline  inline-block text-[#0096ff] "
                  >
                    Try Project Monitoring App{" "}
                    <span className="arrowmove"></span>
                  </a>
                </strong>
                Bring transparency and accountability to individual tasks in the
                project. Monitor time and effort with accuracy to stay on top of
                your project.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Monitor;
