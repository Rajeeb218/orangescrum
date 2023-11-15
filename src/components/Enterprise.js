import React from "react";

const Enterprise = () => {
  return (
    <div
      className="bg-cover bg-center h-full"
      style={{ backgroundImage: `url("/bg.png")` }}
    >
      <div class="text-center">
        <h1 class="text-5xl font-bold  text-gray-900 mt-28 mb-8 pt-28 ">
          Orangescrum offers a complete solution for Enterprise
        </h1>
        <p class="text-lg">
          Want to have data on your cloud? Don't worry! We have built an{" "}
          <a
            href="https://www.orangescrum.com/self-hosted"
            class="text-blue-700 font-bold"
          >
            enterprise{" "}
          </a>
          self-hosted edition for you.
        </p>
      </div>
      <div class="flex justify-center mt-12 gap-44">
        <div>
          <ul class=" list-disc ">
            <li class="text-lg hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out ">
              <a
                href="https://www.orangescrum.com/self-hosted"
                class="hover:text-blue-600"
              >
                Self-host{" "}
              </a>
              Orangescrum on your server
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              Protect your data with 100% data ownership
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              High-level security with{" "}
              <a
                href="https://www.orangescrum.com/integrations/sso"
                class="hover:text-blue-600"
              >
                SSO{" "}
              </a>
              &{" "}
              <a
                href="https://www.orangescrum.com/integrations"
                class="hover:text-blue-600"
              >
                LDAP
              </a>
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              Priority support with a dedicated account manager
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              Free{" "}
              <a
                href="https://www.orangescrum.com/self-hosted"
                class="hover:text-blue-600"
              >
                migration
              </a>
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              Free online training
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              1-year free{" "}
              <a
                href="https://www.orangescrum.com/self-hosted"
                class="hover:text-blue-600"
              >
                product updates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="list-disc ">
            <li class="text-lg hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              All premium features
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out ">
              <a
                href="https://www.orangescrum.com/self-hosted"
                class="hover:text-blue-600"
              >
                APIs
              </a>
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              Compliance with GDPR, CCPA, and ISO/IEC 27001: 2013
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              Request for{" "}
              <a
                href="https://www.orangescrum.com/self-hosted"
                class="hover:text-blue-600"
              >
                custom feature
              </a>
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              Professional support &{" "}
              <a
                href="https://www.orangescrum.com/self-hosted"
                class="hover:text-blue-600"
              >
                maintainence plan{" "}
              </a>
              available
            </li>
            <li class="text-lg mt-3 hover:ml-4 transform transition-transform hover:translate-x-2 duration-300 ease-in-out">
              Hire a developer for{" "}
              <a
                href="https://www.orangescrum.com/self-hosted"
                class="hover:text-blue-600"
              >
                customization
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="justify-center text-center ">
        <button class="hover:bg-blue-500 text-blue-700  hover:text-white border-solid rounded-md border-2 border-black w-36 h-10 pr-3 text-lg relative transition-bg duration-1000 mt-12 mb-10">
          Take a tour{" "}
          <span class="absolute right-0 top-1/2 transform -translate-y-1/2 inline-block ml-1  text-base">
            &gt;&gt;
          </span>
        </button>
      </div>
    </div>
  );
};

export default Enterprise;
