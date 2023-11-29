import React from "react";

const Projactivity = () => {
  return (
    <section className="pt-20 pb-[100px] block box-border">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <aside className="w-[60%] block pr-[30px] box-border ">
            <figure className="m-0">
              <img
                src="https://www.orangescrum.com/img/home/project-monitoring-app.webp"
                className="inline w-[80%] transition-transform  hover:scale-105 hover:duration-500"
              />
            </figure>
          </aside>

          <aside className="block w-[40%] pl-[30px]">
            <div className="mb-[30px] text-left box-border">
              <h1 className="text-[32px] leading-[45px]  font-semibold mb-4 ">
                Aha! can not monitor several team and project
                activities?
              </h1>
              <p className="text-lg m-0 leading-[30px] font-normal">
                Track, visualize and streamline each real time activities
                of team and projects at one place. Stay on top of your
                projects progress.
              </p>
              <div className="mt-[30px]">
              <a 
                href="https://www.orangescrum.com/signup"
                className="text-[#1d6ae5] font-semibold text-base"
              >
                Try Project Monitoring App
                <span className="text-xl ml-2 font-bold hover:ml-3
                 transform duration-700 ease-in-out">
                  &#8594;
                </span>
              </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Projactivity;
