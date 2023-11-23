import React from "react";

const Whatsnew = () => {
  return (
    <section className="wht_nw_sec pt-[50px] pb-[60px]">
    <div className="container">
      <h1 className="text-5xl font-bold text-center mb-[30px] text-gray-900">
        What's New at Orangescrum?
      </h1>
      <div className="flex justify-center mt-16">
        <aside className="w-[33%] mt-4 px-10">
          <span className="wh_nw_spn wh_nw_spn_1"></span>
          {/* <img
            src="https://www.orangescrum.com/img/home/new-releases-icons.png"
            alt=""
            className=" h-24 w-24 mt-2 mb-2 ml-1 transition-transform transform-gpu hover:scale-110 hover:duration-500  "
          ></img> */}
          <h3 className="text-lg font-bold mb-3 pt-[76px]">
            Wrong password attempt threshold to lock down account
            temporary
          </h3>
          <p className="mb-3">
            Security enhancement like wrong password attempt threshold
            has beenadded to Orangescrum. Now the user account
            would be locked for configured time if the user continues
            to attempt with
             the wrong password.
          </p>
          <a
            href="https://www.orangescrum.com/whats-new"
            className=" text-blue-800  text-base font-bold"
          >
            Learn more
            <span className="text-xl ml-2  hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              &#8594;
            </span>
          </a>
        </aside>
        <aside className="w-[33%] mt-4 px-10">
        <span className="wh_nw_spn wh_nw_spn_2 "></span>

          <h3 className="text-lg font-bold mb-9 pt-[76px]">Due date change reason report</h3>
          <p className="mb-3">
            This report is generated based on the due date change of
            tasks and the user selects a reason for the change. This
            new report is available in the task analysis section of
             the reports
          </p>
          <a
            href="https://www.orangescrum.com/whats-new"
            className=" text-blue-800  text-base font-bold "
          >
            Learn more
            <span class="text-xl ml-2  hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              &#8594;
            </span>
          </a>
        </aside>
        <aside className="w-[33%] mt-4 px-10">
        <span className="wh_nw_spn wh_nw_spn_3"></span>
          <h3 className="text-lg font-bold mb-8 pt-[76px]">Task Cycle Report</h3>
          <p className="mb-3">
            This report provides a comprehensiveanalysis of the time
            spent in each stageof the task of a project. It helps you
            understand how long tasks take fromstart to
            completion.
          </p>
          <a
            href="https://www.orangescrum.com/whats-new"
            className=" text-blue-800  text-base font-bold"
          >
            Learn more
            <span className="text-xl ml-2  hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              &#8594;
            </span>
          </a>
        </aside>
      </div>
    </div>
    </section>
  );
};

export default Whatsnew;
