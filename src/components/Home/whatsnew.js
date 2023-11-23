import React from "react";

const Whatsnew = () => {
  return (
    <section className="pt-[50px] pb-[60px]">
    <div className="container">
      <h1 class="text-5xl font-bold text-center mb-[30px] text-gray-900">
        What's New at Orangescrum?
      </h1>
      <div class="flex justify-center mt-16">
        <aside className="w-[33%] mt-4 px-10">
          <img
            src="password.png"
            alt=""
            class="h-24 w-24 mt-2 mb-2 ml-1 transition-transform transform-gpu hover:scale-110 hover:duration-500  "
          ></img>
          <h3 class="text-lg font-bold mb-3">
            Wrong password attempt threshold to<br></br> lock down account
            temporary
          </h3>
          <p class="mb-3">
            Security enhancement like wrong<br></br> password attempt threshold
            has been<br></br>added to Orangescrum. Now the user<br></br> account
            would be locked for configured<br></br> time if the user continues
            to attempt with
            <br></br> the wrong password.
          </p>
          <a
            href="https://www.orangescrum.com/whats-new"
            class=" text-blue-800  text-base font-bold"
          >
            Learn more
            <span class="text-xl ml-2  hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              &#8594;
            </span>
          </a>
        </aside>
        <aside className="w-[33%] mt-4 px-10">
          <img
            src="calendar.png"
            alt=""
            class="h-24 w-24 ml-1 mb-4 transition-transform transform-gpu hover:scale-110 hover:duration-500"
          ></img>
          <h3 class="text-lg font-bold mb-9">Due date change reason report</h3>
          <p class="mb-3">
            This report is generated based on the due<br></br> date change of
            tasks and the user selects<br></br> a reason for the change. This
            new report<br></br> is available in the task analysis section of
            <br></br> the reports
          </p>
          <a
            href="https://www.orangescrum.com/whats-new"
            class=" text-blue-800  text-base font-bold "
          >
            Learn more
            <span class="text-xl ml-2  hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              &#8594;
            </span>
          </a>
        </aside>
        <aside className="w-[33%] mt-4 px-10">
          <img
            src="ecommerce_3177781.png"
            alt=""
            class="h-24 w-24 mt-2 mb-2 ml-1 transition-transform transform-gpu hover:scale-110 hover:duration-500"
          ></img>
          <h3 class="text-lg font-bold mb-8">Task Cycle Report</h3>
          <p class="mb-3">
            This report provides a comprehensive<br></br>analysis of the time
            spent in each stage<br></br>of the task of a project. It helps you
            <br></br>understand how long tasks take from<br></br>start to
            completion.
          </p>
          <a
            href="https://www.orangescrum.com/whats-new"
            class=" text-blue-800  text-base font-bold"
          >
            Learn more
            <span class="text-xl ml-2  hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
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
