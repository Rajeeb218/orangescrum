import { TickCircle } from "iconsax-react";
import React from "react";
const Subtab = () => {
  return (
    <>
      <section className="relative bg-[#000b50] z-[1] block">
        <div className="">
          <div className="container">
            <div className="flex items-center">
              <aside className=" items-center w-[35%] mr-[30px] py-[65px] block relative">
                <div className="font-normal text-lg leading-8">
                  <h3 className="text-[32px] leading-[45px] font-semibold mb-4 text-white">
                    Overcome your pain points using the best project management
                    tool
                  </h3>
                  <p className="text-lg leading-[30px] font-normal text-white">
                    Streamline your project management processes while
                    delighting your customers.
                  </p>
                </div>
                <div className="mt-[30px]">
                  <a
                    href="https://www.orangescrum.com/self-hosted/"
                    className="bg-[#1d6ae5] text-white leading-10 cursor-pointer rounded-[4px] px-5 text-center text-lg font-normal inline-block hover:transition-all duration-500 ease-in-out"
                    title="See how it works"
                  >
                    See how it works <span className="right_arrow"></span>
                  </a>
                </div>
              </aside>
              <aside className="w-[65%] block pl-[30px]">
                <div className="flex flex-end relative w-full  z-2 m-auto">
                  <aside
                    className="w-1/2 block overflow-hidden absolute top-[-280px] mb-[50px] rounded-2xl bg-white shadow-lg "
                    style={{
                      boxShadow: "0px 0px 30px rgba(117, 123, 129, 0.28)",
                    }}
                  >
                    <div className="bg-[#FFC729] text-2xl leading-[65px] text-center font-semibold px-[10px] ">
                      Without Orangescrum
                    </div>
                    <ul className="pt-[5px] px-5 pb-10">
                      <li className="py-2 text-[17px] leading-[30px] my-2 pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out border-b-[3px] border-dotted border-b-black-600">
                        {" "}
                        <span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#ff722e"
                            className="text-white"
                            variant="Bold"
                          />
                        </span>{" "}
                        Project information scattered in emails, chats, calls,
                        excels
                      </li>
                      <li className="py-2 text-[17px] leading-[30px] my-2 pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out border-b-[3px] border-dotted border-b-black-600">
                        {" "}
                        <span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#ff722e"
                            className="text-white"
                            variant="Bold"
                          />
                        </span>{" "} No real-time collaboration of activities</li>
						<li className="py-2 text-[17px] leading-[30px] my-2 pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out border-b-[3px] border-dotted border-b-black-600">
                        {" "}
                        <span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#ff722e"
                            className="text-white"
                            variant="Bold"
                          />
                        </span>
                        Hard to know who is doing what and when to complete the
                        task
                      </li>
                      <li className="py-2 text-[17px] leading-[30px] my-2 pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out border-b-[3px] border-dotted border-b-black-600">
                        {" "}
                        <span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#ff722e"
                            className="text-white"
                            variant="Bold"
                          />
                        </span>
                        Difficult to find critical, overdue tasks, and project
                        delivery on time
                      </li>
					  <li className="py-2 text-[17px] leading-[30px] my-2 pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out ">
                        {" "}
                        <span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#ff722e"
                            className="text-white"
                            variant="Bold"
                          />
                        </span>
                        Unable to track billable hours and see resource workload
                      </li>
					 
                    </ul>
                  </aside>
                  <aside className="w-1/2 block overflow-hidden  left-[346px] top-[-305px] absolute rounded-2xl bg-white shadow-lg "
                    style={{
                      boxShadow: "0px 0px 30px rgba(117, 123, 129, 0.28)",
                    }}>
                    <div className="bg-[#FFC729] text-2xl leading-[90px] text-center font-semibold px-[10px] ">With Orangescrum</div>
                    <ul className="pt-[5px] px-5 pb-10">
                      <li  className="py-2 text-[17px] leading-[30px] my-2 font-normal pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out border-b-[3px] border-dotted border-b-black-600"> <span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#63bb86 "
                            className="text-white"
                            variant="Bold"
                          />
                        </span>
                        <strong>Organize</strong> teams, clients, projects,
                        tasks in one place
                      </li>
                      <li className="py-2 text-[17px] leading-[30px] font-normal my-2 pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out border-b-[3px] border-dotted border-b-black-600"><span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#63bb86 "
                            className="text-white"
                            variant="Bold"
                          />
                        </span>
                        <strong>Collaboration</strong> &amp;{" "}
                        <a
                          href="https://www.orangescrum.com/project-management-software"
                          title="project visibility"
                        >
                          project <strong>visibility</strong>
                        </a>{" "}
                        made easy
                      </li>
                      <li className="py-2 text-[17px] leading-[30px] font-normal my-2 pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out border-b-[3px] border-dotted border-b-black-600"><span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#63bb86 "
                            className="text-white"
                            variant="Bold"
                          />
                        </span>
                        <strong>Monitor</strong> progress and{" "}
                        <a
                          href="https://www.orangescrum.com/gantt-chart"
                          title="visualize"
                        >
                          <strong>visualize</strong>
                        </a>{" "}
                        who's doing what
                      </li>
                      <li className="py-2 text-[17px] leading-[30px] font-normal my-2 pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out border-b-[3px] border-dotted border-b-black-600"><span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#63bb86 "
                            className="text-white"
                            variant="Bold"
                          />
                        </span>
                        <strong>Boost</strong>{" "}
                        <a
                          href="https://www.orangescrum.com/product-management-software"
                          title="productivity"
                        >
                          productivity
                        </a>
                        , increase team's deliverables and grow your business
                      </li>
                      <li className="py-2 text-[17px] font-normal leading-[30px] my-2 pl-[30px] relative hover:transition-transform hover:translate-x-1 duration-400 ease-in-out "><span className="flex absolute left-[-2px] top-[14px]">
                          <TickCircle
                            size="22"
                            color="#63bb86 "
                            className="text-white"
                            variant="Bold"
                          />
                        </span>
                        <a
                          href="https://www.orangescrum.com/time-tracking"
                          title="Track billable hours"
                        >
                          <strong>Track</strong> billable hours
                        </a>{" "}
                        and get <strong>clarity</strong> on your{" "}
                        <a
                          href="https://www.orangescrum.com/resource-management"
                          title="resource allocation"
                        >
                          resource allocation
                        </a>{" "}
                        &amp;{" "}
                        <a
                          href="https://www.orangescrum.com/resource-management"
                          title="utilization"
                        >
                          utilization
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Subtab;
