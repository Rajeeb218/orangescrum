import React from "react";

const HomeBanner = () => {
  return (
    <>
      <section className="baner">
        <div className="container_medium">
          <div className="flex width-100-per hero_mover">
            {/* left side */}
            <aside className="width-45-per left media-100 media-center">
              <div className="hero_title">
                <h1>Project Management Made Better</h1>
                Organize Project, Task, Time, Resource &amp; Budget, at one
                place!
              </div>
              <figure className="text-left media-center">
                <img
                  src="https://www.orangescrum.com/img/home/customer-app-logo.webp"
                  alt="Orangescrum customer apps"
                  width={397}
                  height={21}
                  className
                />
              </figure>
              <div className="mt_30  align-items-center flex items-center">
                <a
                  className="action_blue_btn nocard pr"
                  title="Get started now"
                >
                  Get started now
                  <span className="right_arrow" />
                </a>
                <div className="flex gap-2 ml-4">
                  <img
                    src="https://www.orangescrum.com/img/home_outer/capterra-revies-icon.png"
                    alt="Orangescrum reviews"
                    width={126}
                    height={57}
                    className="lazy"
                  />
                  <img
                    src="https://www.orangescrum.com/img/home_outer/g2-reviews-icon.png"
                    alt="Orangescrum reviews"
                    width={88}
                    height={63}
                    className="lazy"
                  />
                </div>
              </div>
            </aside>
            {/* right side */}
            <aside className="width-55-per right media-100 media-center">
              <figure className="text-right media-center">
                <img
                  src="https://www.orangescrum.com/img/home/project-management-dashboard.webp"
                  alt="Project Management Dashboard"
                  width={630}
                  height={494}
                  className="onload_scale"
                  style={{ transform: "scale(1)" }}
                />
              </figure>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
