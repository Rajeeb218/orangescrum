"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 font-oswald">
      {/* Left Side */}
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10" /> */}
        <h1 className="text-3xl">Orangescrum.</h1>
        <ul className="flex ml-4">
          <li className="mr-4">
            <a href="/products">Products</a>
          </li>
          <li className="mr-4">
            <a href="/features">Features</a>
          </li>
          <li className="mr-4">
            <a href="/pricing">Pricing</a>
          </li>
          <li className="mr-4">
            <a href="/support">Support</a>
          </li>
          <li className="mr-4">
            <a href="/about">About</a>
          </li>
          <li className="dropdown">
            <a href="#" onClick={handleDropdownClick}>
              Dropdown
            </a>
            <ul
              className={`dropdown-menu hidden ${
                isDropdownOpen ? "block" : ""
              }`}
            >
              <li>
                <a href="#">Dropdown Item 1</a>
              </li>
              <li>
                <a href="#">Dropdown Item 2</a>
              </li>
              <li>
                <a href="#">Dropdown Item 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* Right Side */}
      <div className="flex items-center">
        <a href="/try-free" className="bg-blue-600 text-white text-[16px] px-3 py-2 rounded-lg">
          Try Free
        </a>
        <a href="/signin" className="btn btn-secondary ml-4">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
