import React from "react";

const Projactivity = () => {
  return (
    <div class="flex justify-center items-center mt-36 gap-48 ">
      <div>
        <img
          src="project.png"
          class=" proj transition-transform transform-gpu hover:scale-110 hover:duration-500"
        />
      </div>
      <div>
        <h1 class="text-4xl font-semibold mt-20 ">
          Aha! can not monitor several<br></br> team and project activities?
        </h1>
        <p class="text-lg mt-5 mb-8">
          Track, visualize and streamline each real time activities<br></br>of
          team and projects at one place. Stay on top of your<br></br>
          projects progress.
        </p>
        <a
          href="https://www.orangescrum.com/signup"
          class="text-blue-600 font-bold text-lg "
        >
          Try Project Monitoring App
          <span class="text-xl ml-2  hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
            &#8594;
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projactivity;
