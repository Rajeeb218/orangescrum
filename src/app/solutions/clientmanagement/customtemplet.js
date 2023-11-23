import React from "react";

import { Arrowright1 } from "../../../assets/solution/clientmanagement/next-nav-arrow.png";
import Image from "next/image";

function Customtemplet() {
  return (
    <>
      <section className="py-[100px] relative bg-[#f7f5f5] box-border">
        <div className="container">          
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
                Custom Templates to Streamlines Tasks<br></br> and Team
                Collaboration
              </h2>
              <p className="text-[#24292f] text-2xl leading-[30px] my-5 p-[5px]">
                Orangescrum provides fully customizable project templates to fit
                your teams’ needs and project requirements
              </p>
            </div>
          </div>
          <div className="bg-transparent mx-16 ">
            <div className="flex flex-wrap  w-[100%] ">
              <div className="w-[25%] float-left relative px-4">
                <article>
                  <a
                    href="https://www.orangescrum.com/project-template/bug-tracking"
                    className="bg-white block w-[100%] h-[320px] relative overflow-hidden border-[1px] border-solid  border-[#eee] hover:bg-[#337ab7] shadow transition-all duration-500 ease-in-out"
                    title="Kanban"
                  >
                    <p className="absolute font-medium text-white p-4 text-center text-base leading-7 group-hover:translate-y">
                    Visualize work in progress and optimize your processes.
                    </p>
                    <figure className="flex items-center justify-center w-full h-60 bg-white transition-all duration-300 ease-in-out hover:bg-[#3B82F680]">
                      <img
                        src="https://www.orangescrum.com/img/features/kanban-project-template.png"
                        alt="Bug Tracking"
                        className="block w-24 h-24 relative left-[-10px]"
                      />
                    </figure>
                    <h6 className="flex justify-center items-center font-sans h-20 bg-white m-0 absolute w-[100%] py-[10px] px-4 z-[1px] border-solid border-t-[1px] border-[#d7edfa] box-border transition-all duration-500 ease-in-out group-hover:-translate-y-30 ">
                      <strong className="text-2xl leading-[30px] font-medium ">
                      Kanban
                      </strong>
                    </h6>
                  </a>
                </article>
              </div>
              <div className="w-[25%] float-left relative px-4 ">
                <article>
                  <a
                    href="https://www.orangescrum.com/project-template/bug-tracking"
                    className="bg-white block w-[100%] h-[320px] relative overflow-hidden border-[1px] border-solid  border-[#eee] hover:bg-[#337ab7] shadow transition-all duration-500 ease-in-out"
                    title="Bug Tracking"
                  >
                    <p className="absolute font-medium text-white p-4 text-center text-base leading-7">
                      Track and resolve software issues seamlessly
                    </p>
                    <figure className="flex items-center justify-center w-full h-60 bg-white transition-all duration-500 ease-in-out">
                      <img
                        src="https://www.orangescrum.com/img/features/bug-tracking-project-template.png"
                        alt="Bug Tracking"
                        className="block w-24 h-24 relative left-[-10px]"
                      />
                    </figure>
                    <h6 className=" flex justify-center items-center font-sans h-20 bg-white m-0 absolute w-[100%] py-[10px] px-4 z-[1px] border-solid border-t-[1px] border-[#d7edfa] box-border">
                      <strong className="text-2xl leading-[30px] font-medium ">
                        Bug Tracking
                      </strong>
                    </h6>
                  </a>
                </article>
              </div>
              <div className="w-[25%] float-left relative px-4">
                <article>
                  <a
                    href="https://www.orangescrum.com/project-template/task-tracking"
                    className="bg-white block w-[100%] h-[320px] relative overflow-hidden border-[1px] border-solid  border-[#eee] hover:bg-[#337ab7] shadow transition-all duration-500 ease-in-out"
                    title="Task Tracking"
                  >
                    <p className="absolute font-medium text-white p-4 text-center text-base leading-7">
                      Stay on top of tasks, deadlines, and project progress
                    </p>
                    <figure className="flex items-center justify-center w-full h-60 bg-white transition-all duration-500 ease-in-out">
                      <img
                        src="https://www.orangescrum.com/img/features/task-tracking-project-template.png"
                        alt="Task Tracking"
                        className="block w-24 h-24 relative left-[-10px]"
                      />
                    </figure>
                    <h6 className=" flex justify-center items-center font-sans h-20 bg-white m-0 absolute w-[100%] py-[10px] px-4 z-[1px] border-solid border-t-[1px] border-[#d7edfa] box-border">
                      <strong className="text-2xl leading-[30px] font-medium ">
                        Task Tracking
                      </strong>
                    </h6>
                  </a>
                </article>
              </div>
              <div className="w-[25%] float-left relative px-4">
                <article>
                  <a
                    href="https://www.orangescrum.com/project-template/agile-scrum"
                    className="bg-white block w-[100%] h-[320px] relative overflow-hidden border-[1px] border-solid  border-[#eee] shadow transition-all duration-500 ease-in-out"
                    title="Scrum"
                  >
                    <p className="absolute font-medium text-white p-4 text-center text-base leading-7">
                      Enabling iterative development and collaboration for
                      successful projects
                    </p>
                    <figure className="flex items-center justify-center w-full h-60 bg-white transition-all duration-500 ease-in-out">
                      <img
                        src="https://www.orangescrum.com/img/features/scrum-project-template.png"
                        alt="Scrum"
                        className="block w-24 h-24 relative left-[-10px]"
                      />
                    </figure>
                    <h6 className=" flex justify-center items-center font-sans h-20 bg-white m-0 absolute w-[100%] py-[10px] px-4 z-[1px] border-solid border-t-[1px] border-[#d7edfa] box-border">
                      <strong className="text-2xl leading-[30px] font-medium ">
                        Scrum
                      </strong>
                    </h6>
                  </a>
                </article>
              </div>
            </div>
         
        </div>
      </section>

      <section className="py-16 flex bg-[#f7f5f5]">
        <div className=" m-auto w-[100%]">
          <div class="flex relative w-[650px] h-[100px] items-center mx-auto">
            <div className="flex items-center h-[100%] w-[50%] pr-[50px]">
              <a
                href="https://www.orangescrum.com/signup"
                title="Try Orangescrum"
                className="bg-[#17044a] flex-1 text-white text-center rounded-[4px] h-[50px] hover:h-full text-xl leading-[30px] duration-500 ease-in-out transition-all duration-250 flex justify-center items-center"
              >
                Try Orangescrum
              </a>
            </div>

            <div
              className="w-[1px] h-[100%] absolute
left-0
right-0
m-auto
block
z-index-1
bg-[#c4eefb]
bottom-0
top-0"
            ></div>
            <div className="flex h-[100%] w-[50%] pl-[50px]">
              <a
                href="https://www.orangescrum.com/product-videos"
                title=" Kanban View"
                className="bg-white hover:bg-[#0af] text-center font-medium w-full h-full py-4 relative flex items-center justify-center border transition-all duration-450 shadow-lg text-2xl leading[30px] hover:text-white px-[30px] rounded"
              >
                Take a tour{" "}
                <span className="inline-block">
                  <Image
                    src={Arrowright1}
                    alt="Arrow right"
                    className="w-12 h-12 absolute right-[-25px] top-0 bottom-0 m-auto flex items-center text-left rounded-full shadow-md"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Customtemplet;
