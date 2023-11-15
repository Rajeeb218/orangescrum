import React from "react";

const Progress = () => {
  return (
    <div class="bg-slate-50">
      <div class="text-center ">
        <h1 class="text-5xl font-bold text-center mt-28 pt-10  mb-8 text-gray-900">
          Lost in emails, docs, google sheets, calls, chats?
        </h1>
        <h3 class="text-lg">
          It's time to get your team efficient, organized, and get more done.
          Improve team efficiency and productivity with Orangescrum.
        </h3>
      </div>
      <div class="flex justify-center gap-32  ">
        <div>
          <h3 class="text-4xl font-semibold mt-48 mb-8">
            Unable to{" "}
            <a
              href="https://www.orangescrum.com/time-tracking"
              class="text-blue-700"
            >
              {" "}
              track progress
            </a>
            , <br></br>
            who is doing what?
          </h3>
          <a
            href="https://www.orangescrum.com/signup"
            class="text-blue-700 font-bold text-lg"
          >
            See how it works
            <span class="text-xl ml-2  hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              &#8594;
            </span>
          </a>
        </div>
        <div>
          <img
            src="track-all-in-one-v1.png"
            class="mt-24 transition-transform transform-gpu hover:scale-110 hover:duration-500"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Progress;
