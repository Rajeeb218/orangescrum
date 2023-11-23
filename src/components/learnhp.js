import { ArrowRight, TickCircle } from "iconsax-react";
import React from "react";
import Style from "../style/customcss.module.css";

function Learn() {
  return (
    <section className="py-[120px] overflow-hidden bg-[#FCFCD0]">
      <div className="container">
        <div className="mb-20 flex justify-center">
          <h2 className="text-5xl leading-5xl font-semibold text-center w-[55%] ">
            Learn how Orangescrum helps you to deliver more projects
          </h2>
        </div>


        <div className=" relative box-border ">
        <div className="custom-right">
          <div className="m-auto w-[100%]">
            <article className=" flex mt-[120px] px-[30px] items-center">
              <aside className=" pb-3 pr-[30px] w-[45%] box-border block ">
                <div className="box-border mb-7 text-left">
                  <h3 className="text-3xl leading-10 font-semibold mb-4 ">
                    Get more done with <br></br>
                    organized tasks
                  </h3>
                  <p className="text-[18px] leading-[35px]">
                    Bring clarity to your teams. Organize projects, milestones
                    and tasks in one{" "}
                    <a className="text-blue-500 cursor-pointer">
                      centralized place
                    </a>
                  </p>
                </div>
                <h5 className="text-lg mb-3 font-bold leading-[30px]">
                  Popular features:
                </h5>
                <ul className="m-0 p-0 list-none checklist">
                  <li className="w-full flex">
                    <div className="flex leading-6 mt-5 relative w-1/2">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <div className=" hover:translate-x-1 duration-500 ease-in-out">
                        <a className="text-base px-[15px] cursor-pointer hover:text-blue-500">
                          Task Groups
                        </a>
                        <a className="cursor-pointer  px-[15px] hover:text-blue-500">
                          Tasks
                        </a>
                        <p className="px-[15px]">, subtasks, checklists</p>
                      </div>
                    </div>
                    <div className=" leading-6 mt-5 relative flex w-1/2">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <a className="text-base  hover:translate-x-1 duration-500 ease-in-out cursor-pointer px-[15px] hover:text-blue-500">
                        Custom Task types & labels
                      </a>
                    </div>
                  </li>
                  <li className="flex w-full">
                    <div className="flex leading-6 mt-5 relative w-1/2">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <a className="text-base  hover:translate-x-1 duration-500 ease-in-out cursor-pointer px-[15px] hover:text-blue-500">
                        Epics, stories, backlogs, Story points
                      </a>
                    </div>
                    <div className="leading-6 relative mt-5 flex w-1/2">
                      <div >
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <p className="px-[15px]  hover:translate-x-1 duration-500 ease-in-out">
                        Task Views (List,
                        <a className="cursor-pointer  hover:text-blue-500">
                           Kanban,
                        </a>
                        <a className="cursor-pointer hover:text-blue-500">
                           Gantt,
                        </a>
                        <a className="cursor-pointer hover:text-blue-500">
                          Sprint
                        </a>
                        )
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center text-md text-left mt-8 ml-[30px] font-bold text-blue-600 font-roboto w-full cursor-pointer">
                  <a className="">Start managing tasks</a>&nbsp;&nbsp;
                  <a className=" relative ">
                    <ArrowRight
                      size="18"
                      color="#1d6ae5"
                      className="  font-bold hover:translate-x-1 "
                    />{" "}
                  </a>
                </div>
              </aside>
              <aside className="pl-[30px] block w-[55%] pb-3">
                <figure className="text-left relative right-[-30px]">
                  <img
                    src="https://www.orangescrum.com/img/home/Get-more-done-with-organized-tasks.webp"
                    alt="Get more done with organized tasks"
                    className="inline max-w-full relative left-[-30px] duration-500 ease-in-out transform hover:scale-105"
                  />
                </figure>
              </aside>
            </article>
          </div>
          </div>
        </div>
    

      <div classname="box-border">
        <div className="custom-left">
          <div className="m-auto w-[100%]">
            <article className="flex mt-[150px] px-[30px] items-center">
              <aside className="  pb-3  pr-[30px] block w-[55%]">
                <figure className="text-left relative left-[-30px] ">
                  <img
                    src="https://www.orangescrum.com/img/home/Improve-your-project-planning-gives-you-back-your-time.webp"
                    alt="Get more done with organized tasks"
                    className="inline max-w-full relative right-[-30px] duration-500 ease-in-out transform hover:scale-105"
                  />
                </figure>
              </aside>
              <aside className=" pb-3 pl-[30px] w-[45%] box-border block ">
                <div className="box-border mb-7 text-left">
                  <h3 className="text-3xl leading-10 font-semibold mb-4 ">
                    Improve your project planning gives you back your time
                  </h3>
                  <p className="text-[18px] leading-[35px]">
                    Schedule and visualize your projects to stay on top of your
                    timeline. Let's be real!
                  </p>
                </div>
                <h5 className="text-lg mb-3 font-bold leading-[30px]">
                  Popular features:
                </h5>
                <ul className="m-0 p-0 list-none checklist">
                  <li className="flex w-full">
                    <div className=" leading-5  mt-5 relative w-1/2 flex">
                      <div >
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <a className="text-base hover:translate-x-1 duration-500 ease-in-out px-[15px] cursor-pointer hover:text-blue-500 ">
                        Project plan
                      </a>
                    </div>
                    <div className="leading-5 mt-5 relative w-[50%] flex">
                      <div className="mr-3">
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <a className="text-base hover:translate-x-1 duration-500 ease-in-out px-[15px] cursor-pointer hover:text-blue-500  ">
                        Sprint
                      </a>
                    </div>
                  </li>
                  <li className="flex w-full">
                    <div className="leading-5 mt-5 relative w-[50%] flex">
                      <div className="mr-3">
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <a className="text-base hover:translate-x-1 duration-500 ease-in-out px-[15px] cursor-pointer hover:text-blue-500 ">
                        Gantt
                      </a>
                    </div>
                    <div className="leading-[20px] mt-5 relative flex w-[50%]">
                      <div className="mr-3">
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <div className="hover:translate-x-1 duration-500 ease-in-out px-[15px]">
                        <a className="cursor-pointer hover:text-blue-500 ">
                          Resource availability
                        </a>{" "}
                        (
                        <a className="cursor-pointer hover:text-blue-500 ">
                          worked
                        </a>
                        ) & allocated
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center text-md text-left mt-8 ml-[30px] font-bold text-blue-600 font-roboto w-full cursor-pointer">
                  <a className=""> Start planning projects</a>&nbsp;&nbsp;
                  <a className=" relative font-bold">
                    <ArrowRight
                      size="18"
                      color="#1d6ae5"
                      className="hover:translate-x-1 "
                    />{" "}
                  </a>
                </div>
              </aside>
            </article>
          </div>
        </div>
      </div>

      <div className=" relative box-border ">
      <div className="custom-right">
          <div className="m-auto w-[100%]">
            <article className=" flex mt-[150px] px-[30px] items-center">
              <aside className=" pb-3 pr-[30px] w-[45%] box-border block ">
                <div className="box-border mb-7 text-left">
                  <h3 className="text-3xl leading-10 font-semibold mb-4 ">
                  Streamline your workflow  <br></br>
                  to simplify your work
                  </h3>
                  <p className="text-[18px] leading-[35px]">
                  Setup your workflow, custom fields, billing rates to streamline your projects. Bring more clarity!
                  </p>
                </div>
                <h5 className="text-lg mb-3 font-bold leading-[30px]">
                  Popular features:
                </h5>
                <ul className="m-0 p-0 list-none checklist">
                  <li className="w-full flex">
                    <div className="flex leading-6 mt-5 relative w-1/2">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <div className=" hover:translate-x-1 duration-500 ease-in-out">
                        <a className="text-base px-[15px] cursor-pointer hover:text-blue-500">
                         Status workflow
                        </a>
                      </div>
                    </div>
                    <div className=" leading-6 mt-5 relative flex w-1/2">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <a className="text-base  px-[15px] cursor-pointer hover:text-blue-500 hover:translate-x-1 duration-500 ease-in-out">
                      Project templates
                      </a>
                    </div>
                  </li>
                  <li className="flex w-full">
                    <div className="flex leading-6 mt-5 relative w-1/2">
                      <div >
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <a className="text-base cursor-pointer px-[15px] hover:text-blue-500 hover:translate-x-1 duration-500 ease-in-out">
                        Custom fields
                      </a>
                    </div>
                    <div className="leading-6 mt-5 relative flex w-1/2">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div> 
                      <p className=" px-[15px] hover:translate-x-1 duration-500 ease-in-out">                  
                        <a className="cursor-pointer hover:text-blue-500 ">
                           Custom billing 
                        </a> rate for resources</p> 
                    </div>
                  </li>
                </ul>
                <div className="flex items-center text-md text-left mt-8 ml-[30px] font-bold text-blue-600 font-roboto w-full cursor-pointer">
                  <a className="">Streamline the workflow</a>&nbsp;&nbsp;
                  <a className=" relative ">
                    <ArrowRight
                      size="18"
                      color="#1d6ae5"
                      className="  font-bold hover:translate-x-1 "
                    />{" "}
                  </a>
                </div>
              </aside>
              <aside className="pl-[30px] block w-[55%] pb-3">
                <figure className="text-left relative right-[-30px]">
                  <img
                    src="https://www.orangescrum.com/img/home/Streamline-your-workflow-to-simplify-your-work.webp"
                    alt="Get more done with organized tasks"
                    className="inline max-w-full relative left-[-30px] duration-500 ease-in-out transform hover:scale-105"
                  />
                </figure>
              </aside>
            </article>
          </div>
          </div>
        </div>

        <div classname="box-border">
        <div className="custom-left">
          <div className="m-auto w-[100%]">
            <article className="flex mt-[150px] px-[30px] items-center">
              <aside className="  pb-3  pr-[30px] block w-[55%]">
                <figure className="text-left relative left-[-30px] ">
                  <img
                    src="https://www.orangescrum.com/img/home/Collaborate-across-teams-to-reach-your-goals.webp"
                    alt="Get more done with organized tasks"
                    className="inline max-w-full relative right-[-30px] duration-500 ease-in-out transform hover:scale-105"
                  />
                </figure>
              </aside>
              <aside className=" pb-3 pl-[30px] w-[45%] box-border block ">
                <div className="box-border mb-7 text-left">
                  <h3 className="text-3xl leading-10 font-semibold mb-4 ">
                  Collaborate across teams <br></br>
                  to reach your goals
                  </h3>
                  <p className="text-[18px] leading-[35px]">
                  Bring your teams together & stay in loop with all your activities in real time. Skip the hassle!
                  </p>
                </div>
                <h5 className="text-lg mb-3 font-bold leading-[30px]">
                  Popular features:
                </h5>
                <ul className="m-0 p-0 list-none checklist">
                  <li className="flex w-full">
                    <div className=" leading-5  mt-5 relative w-1/2 flex">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <p className="text-base hover:translate-x-1 duration-500 ease-in-out px-[15px] ">
                      Task comments
                      </p>
                    </div>
                    <div className="leading-5  mt-5 relative w-[50%] flex">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <a className="text-base cursor-pointer hover:text-blue-500  px-[15px] hover:translate-x-1 duration-500 ease-in-out ">
                      @mentions
                      </a>
                    </div>
                  </li>
                  <li className="flex w-full">
                    <div className="leading-5 mt-5 relative w-[50%] flex">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <a className="text-base cursor-pointer hover:text-blue-500  px-[15px] hover:translate-x-1 duration-500 ease-in-out ">
                      Slack integration
                      </a>
                    </div>
                    <div className="leading-[20px]  mt-5 relative flex w-[50%]">
                      <div >
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                        <p className=" px-[15px] hover:translate-x-1 duration-500 ease-in-out">Notifications
                        </p>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center text-md text-left mt-8 ml-[30px] font-bold text-blue-600 font-roboto w-full cursor-pointer">
                  <a className=""> Start collaborating</a>&nbsp;&nbsp;
                  <a className=" relativ  font-bold">
                    <ArrowRight
                      size="18"
                      color="#1d6ae5"
                      className="hover:translate-x-1 "
                    />{" "}
                  </a>
                </div>
              </aside>
            </article>
          </div>
        </div>
      </div>

      <div className=" relative box-border ">
      <div className="custom-right">
          <div className="m-auto w-[100%]">
            <article className=" flex mt-[150px] px-[30px] items-center">
              <aside className=" pb-3 pr-[30px] w-[45%] box-border block ">
                <div className="box-border mb-7 text-left">
                  <h3 className="text-3xl leading-10 font-semibold mb-4 ">
                  Stay on track to deliver projects, faster
                  </h3>
                  <p className="text-[18px] leading-[35px]">
                  Get real-time insights to know your team's progress and help you to take better decisions.
                  </p>
                </div>
                <h5 className="text-lg mb-3 font-bold leading-[30px]">
                  Popular features:
                </h5>
                <ul className="m-0 p-0 list-none checklist">
                  <li className="w-full flex">
                    <div className="flex leading-6 mt-5 relative w-1/2">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <div className=" hover:translate-x-1 duration-500 ease-in-out">
                        <a className="text-base px-[15px] cursor-pointer hover:text-blue-500">
                        Actual vs Planned report
                        </a>
                      </div>
                    </div>
                    <div className=" leading-6 mt-5 relative flex w-1/2">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <p className="text-base px-[15px] duration-500 ease-in-out transform hover:translate-x-1">
                      Profitability report
                      </p>
                    </div>
                  </li>
                  <li className="flex w-full">
                    <div className="flex leading-6 mt-5 relative w-1/2">
                      <div >
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div>
                      <p className="px-[15px] duration-500 ease-in-out transform hover:translate-x-1"> <a className="text-base cursor-pointer hover:text-blue-500">
                      Timesheet
                      </a> with approval</p>
                    </div>
                    <div className="leading-6 mt-5 relative flex w-1/2">
                      <div>
                        <TickCircle size="20" color="#FF722E" variant="Bold" />
                      </div> 
                      <p className=" px-[15px] duration-500 ease-in-out transform hover:translate-x-1">                  
                        <a className="cursor-pointer  hover:text-blue-500 ">
                        Project overview
                        </a> & <a className="cursor-pointer  hover:text-blue-500 ">portfolio report</a></p> 
                    </div>
                  </li>
                </ul>
                <div className="flex items-center text-md text-left mt-8 ml-[30px] font-bold text-blue-600 font-roboto w-full cursor-pointer">
                  <a className="">Start delivering faster</a>&nbsp;&nbsp;
                  <a className=" relative">
                    <ArrowRight
                      size="18"
                      color="#1d6ae5"
                      className="  font-bold hover:translate-x-1 "
                    />{" "}
                  </a>
                </div>
              </aside>
              <aside className="pl-[30px] block w-[55%] pb-3">
                <figure className="text-left relative right-[-30px]">
                  <img
                    src="https://www.orangescrum.com/img/home/Stay-on-track-to-deliver-projects-faster.webp"
                    alt="Get more done with organized tasks"
                    className="inline max-w-full relative left-[-30px] duration-500 ease-in-out transform hover:scale-105"
                  />
                </figure>
              </aside>
            </article>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Learn;
