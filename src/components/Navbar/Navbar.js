"use client";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";
import { iconComponents, menuItems } from "./Menuitem";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Navbar = () => {
  const [activeCard, setActiveCard] = useState(null);

  console.log(menuItems);

  const handleMouseEnter = (index) => {
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <nav className="flex justify-between items-center p-4 font-roboto-300 ">
      {/* Left Side */}
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10" /> */}
        <h1 className="text-3xl">Orangescrum.</h1>
        <ul className="flex ml-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group mr-4 flex items-center font-bold cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.link} className="mr-2 font-[400]">
                {item.text}
              </Link>
              {item.icon && (
                <ArrowRight2
                  size="14"
                  color="black"
                  className="padding transform transition-transform duration-300 group-hover:rotate-90"
                />
              )}
              {item.icon && (
                <div
                  className={`absolute top-10 left-0 bg-white p-2 rounded shadow-md  opacity-0 invisible border hover:border-t-4`}
                  style={{
                    opacity: activeCard === index ? 1 : 0,
                    visibility: activeCard === index ? "visible" : "hidden",
                    transition: "opacity 0.3s, visibility 0.3s",
                    width: item.cardWidth,
                  }}
                >
                  {item.cardContent?.map((content, contentIndex) => (
                    <div
                      key={contentIndex}
                      style={item.cardDesign}
                      className="hover:hover:text-blue-500 mt-2"
                    >
                      {iconComponents[content.icon]
                        ? React.createElement(iconComponents[content.icon], {
                          size: "20",
                          color: "black",
                          variant: "Bold",
                          className: "hover:text-blue-500",
                        })
                        : null}
                      {content?.sublink && (
                        <Link
                          href={content?.sublink}
                          className="block text-[12px] font-lightWeight ml-2"
                        >
                          {content.linkText}
                        </Link>
                      )}
                    </div>
                  ))}

                  <div className="flex justify-around">
                    <div>
                      {item.cardContents
                        ?.slice(0, 8)
                        .map((content, contentIndex) => (
                          <div
                            key={contentIndex}
                            className="flex gap-4 items-center mb-3 hover:text-blue-500"
                          >
                            {iconComponents[content.icon]
                              ? React.createElement(
                                iconComponents[content.icon],
                                {
                                  size: "25",
                                  color: "black",
                                  variant: "Bold",
                                }
                              )
                              : null}
                            <Link
                              href={item.link}
                              className="block text-[12px] font-lightWeight ml-2"
                            >
                              {content.linkText}
                            </Link>
                          </div>
                        ))}
                    </div>
                    <div>
                      {item.cardContents
                        ?.slice(8)
                        .map((content, contentIndex) => (
                          <div
                            key={contentIndex}
                            className="flex gap-4 items-center mb-3 hover:text-blue-500"
                          >
                            {iconComponents[content.icon]
                              ? React.createElement(
                                iconComponents[content.icon],
                                {
                                  size: "25",
                                  color: "black",
                                  variant: "Bold",
                                }
                              )
                              : null}
                            <Link
                              href={item.link}
                              className="block text-[12px] font-lightWeight ml-2"
                            >
                              {content.linkText}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                  {item.footerSection1 && (
                    <div style={item.footerSection1}>
                      <div>
                        <h1>Get Instant Support</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <ArrowRight2 size="10" color="black" variant="bold" />
                        </div>
                        <div>
                          <p>+1 (408) 907 4166</p>
                          <p>+91 966 846 5389</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <ArrowRight2 size="14" color="black" variant="bold" />
                        </div>
                        <div>
                          <p>Contact Sales</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <ArrowRight2 size="14" color="black" variant="bold" />
                        </div>
                        <div>
                          <p>Contact Sales</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <div
                      style={{ width: "30%" }}
                      className="flex justify-center items-center bg-blue-400"
                    >
                      {item.cardContent3 && (
                        <div className="text-center">
                          <p className="mb-5 text-[16px] text-white">
                            Explore more features to save time and maximise
                            productivity by{" "}
                            <span className="text-yellow-100 font-bold text-3xl">
                              30%
                            </span>
                          </p>
                          <Button
                            text="Try It Free"
                            onClick={() => alert("Clicked")}
                          />
                        </div>
                      )}
                    </div>
                    <di>
                      {item.cardContent3
                        ?.slice(0, 10)
                        .map((content, contentIndex) => (
                          <div
                            key={contentIndex}
                            className="flex gap-4 items-center mb-3 hover:text-blue-500"
                          >
                            {iconComponents[content.icon]
                              ? React.createElement(
                                iconComponents[content.icon],
                                {
                                  size: "25",
                                  color: "black",
                                  variant: "Bold",
                                }
                              )
                              : null}
                            <Link
                              href={item.link}
                              className="block text-[12px] font-lightWeight ml-2"
                            >
                              {content.linkText}
                            </Link>
                          </div>
                        ))}
                    </di>
                    <div>
                      {item.cardContent3
                        ?.slice(10)
                        .map((content, contentIndex) => (
                          <div
                            key={contentIndex}
                            className="flex gap-4 items-center mb-3 hover:text-blue-500"
                          >
                            {iconComponents[content.icon]
                              ? React.createElement(
                                iconComponents[content.icon],
                                {
                                  size: "25",
                                  color: "black",
                                  variant: "Bold",
                                }
                              )
                              : null}
                            <Link
                              href={item.link}
                              className="block text-[12px] font-lightWeight ml-2"
                            >
                              {content.linkText}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                  {item.footerSection2 && (
                    <div style={item.footerSection2}>
                      <div>
                        <h1>Get Instant Support</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <ArrowRight2 size="10" color="black" variant="bold" />
                        </div>
                        <div>
                          <p>+1 (408) 907 4166</p>
                          <p>+91 966 846 5389</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <ArrowRight2 size="14" color="black" variant="bold" />
                        </div>
                        <div>
                          <p>Contact Sales</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <ArrowRight2 size="14" color="black" variant="bold" />
                        </div>
                        <div>
                          <p>Contact Sales</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        <Link
          href="/try-free"
          className="bg-blue-600 text-white text-[16px] px-[15px] py-[10px] rounded-[4px] leading-5"
        >
          <div className="flex items-center">
            <p>Try Free</p>{" "}
            <MdOutlineKeyboardDoubleArrowRight size={20} />
          </div>
        </Link>
        <Link href="/signin" className="btn btn-secondary ml-4">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
