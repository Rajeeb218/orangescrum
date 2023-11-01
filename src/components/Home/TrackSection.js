import { ArrowRight } from "iconsax-react";
import React from "react";

const TrackSection = () => {
  return (
    <>
      <section className="unable_track">
        <div className="container_medium">
          <div className="subhero_title text-center">
            <h2 className="text-4xl font-bold leading-6">
              Lost in emails, docs, google sheets, calls, chats?
            </h2>
            <p className="text-1xl pt-5">
              It's time to get your team efficient, organized, and get more
              done. Improve team efficiency and productivity with Orangescrum.
            </p>
          </div>
          <div className="d-flex align-item-center efficiency_productivity">
            <aside className="width-40-per left">
              <div className=" text-3xl font-bold">
                <h3>
                  Unable to{" "}
                  <a
                    href="https://www.orangescrum.com/time-tracking"
                    title="track progress"
                    className="text-blue-500"
                  >
                    track progress
                  </a>
                  , <br />
                  who is doing what?
                </h3>
              </div>
              <div className="text-left mt_30">
                <a
                  href="#"
                  className="link_text flex items-center"
                  title="See how it works"
                >
                  <p className="mr-2">See how it works</p>{" "}
                  <ArrowRight
                    size="18"
                    color="blue"
                    variant="bold"
                    className="hover:translate-x-1 ease-in-out"
                  />
                </a>
              </div>
            </aside>
            <aside className="width-60-per right">
              <figure className="text-right">
                <img
                  src="https://www.orangescrum.com/img/home/track-all-in-one-v1.webp"
                  alt="Improve team efficiency and productivity with Orangescrum"
                  width={528}
                  height={343}
                  className="transition-scale lazy"
                  style={{ display: "inline" }}
                />
              </figure>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackSection;
