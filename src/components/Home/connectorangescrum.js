import React from "react";

function Connectorangescrum() {
  return (
    <>
      <section className="relative bg-[#000b50]">
          <div className="container">
            <div className="flex items-center">
              <aside className="w-[45%] relative pt-[130px] pr-[30px] pb-[90px] box-border">
                <div className="mb-[30px]">
                  <h3 className="text-[32px] leading-[45px] font-semibold text-white mb-[15px]">
                    Connect Orangescrum with the<br></br>softwares you use every
                    day
                  </h3>
                  <p class="text-white leading-[30px] text-lg  font-normal">
                    Access Google Drive, Dropbox,{" "}
                    <a
                      href="https://www.orangescrum.com/integrations/slack"
                      className="text-yellow-300"
                    >
                      Slack,{" "}
                    </a>
                    <a
                      href="https://www.orangescrum.com/integrations/github"
                      className="text-yellow-300"
                    >
                      GitHub,{" "}
                    </a>
                    <a
                      href="https://www.orangescrum.com/integrations/zoom"
                      className="text-yellow-300"
                    >
                      Zoom,{" "}
                    </a>
                    <a
                      href="https://www.orangescrum.com/integrations/sso"
                      className="text-yellow-300"
                    >
                      SSO,{" "}
                    </a>
                    <br></br>
                    <a
                      href="https://www.orangescrum.com/integrations/zapier"
                      className="text-yellow-300"
                    >
                      Zapier,{" "}
                    </a>
                    <a
                      href="https://www.orangescrum.com/integrations/google-calendar"
                      className="text-yellow-300"
                    >
                      Google Calendar{" "}
                    </a>
                    and OneDrive bringing them all<br></br>
                    together within Orangescrum.
                  </p>
                </div>
                <a
                  href="https://www.orangescrum.com/integrations"
                  className="text-yellow-300 text-base font-semibold mt-[30px]"
                >
                  See all integrations
                  <span className="text-xl ml-2 font-bold hover:ml-3 transform duration-700 ease-in-out">
                    &#8594;
                  </span>
                </a>
              </aside>
              <aside class="pl-[30px] w-[55%]">
                <figure className="absolute top-[-29px] text-right">
                  <img
                    src="	https://www.orangescrum.com/img/home/orangescrum-integrations-v2.webp"
                    className="custom transform transition-transform hover:scale-105 hover:duration-1000  ease-in-out"
                  ></img>
                </figure>
              </aside>
            </div>
          </div>
      </section>
    </>
  );
}

export default Connectorangescrum;
