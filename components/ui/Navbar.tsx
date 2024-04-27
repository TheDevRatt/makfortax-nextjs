"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="sticky top-0 border-b border-transparent backdrop-blur-sm transition duration-200 ease-in-out animate-header-slide-down-fade "
      style={{ zIndex: 39 }}
    >
      <div className="md:max-w-7xl mx-auto w-full max-w-5xl px-6">
        <div className="bg-root absolute left-0 top-0 z-20 flex w-full flex-col items-center md:hidden ">
          <div className="flex w-full items-center px-6 py-4 bg-black">
            <div className="flex-auto ">
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-700"
                href="#home"
              >
                <Image
                  src="/MakForTaxLogo.svg"
                  alt="Logo"
                  width={130}
                  height={32}
                />
              </a>
            </div>
            <div className="flex flex-auto justify-end ">
              <button
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                aria-label="menu"
                className="inline-flex items-center justify-center rounded-md p-1 text-slate-400 transition ease-in-out hover:bg-slate-800 hover:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
                type="button"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  aria-hidden="true"
                  className="block h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`flex w-full px-6 py-4 md:hidden bg-black ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu"
          >
            <div className="flex w-full flex-col">
              <a
                className="text-base h-11 pl-4 pr-4 rounded-md gap-2 font-semibold dark:bg-slate-800 border-slate-500 dark:text-slate-100 bg-slate-200 text-slate-900 hover:bg-slate-400 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:outline-none focus-visible:bg-slate-400 disabled:hover:bg-slate-400 inline-flex items-center border justify-center select-none disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mb-4 w-full"
                href="#contact"
              >
                Learn More
              </a>
              <a
                className="text-base h-11 pl-4 pr-4 rounded-md gap-2 font-semibold bg-black dark:bg-white text-white dark:text-black border-slate-500 hover:bg-black/90 dark:hover:bg-white/90 focus-visible:ring-2 dark:focus-visible:ring-white/40 focus-visible:ring-black/40 focus-visible:outline-none dark:focus-visible:bg-white/90 focus-visible:bg-black/90 disabled:hover:bg-black dark:disabled:hover:bg-white inline-flex items-center border justify-center select-none disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mb-4 w-full"
                href="mailto:contact@makfortax.com?subject=Accounting%20Inquiry&body=Hello,%20I%20would%20like%20to%20request%20a%20consultation%20about%20your%20services!"
              >
                Contact Now
              </a>
              <a
                className="text-left text-md block w-full border-b border-slate-600 py-4 font-semibold text-slate-400 transition duration-200 ease-in-out last:border-none hover:text-slate-200"
                href="#home"
              >
                Home
              </a>
              <a
                className="text-left text-md block w-full border-b border-slate-600 py-4 font-semibold text-slate-400 transition duration-200 ease-in-out last:border-none hover:text-slate-200"
                href="#about"
              >
                About Us
              </a>
              <a
                className="text-left text-md block w-full border-b border-slate-600 py-4 font-semibold text-slate-400 transition duration-200 ease-in-out last:border-none hover:text-slate-200"
                href="#services"
              >
                Services
              </a>
              <a
                className="text-left text-md block w-full border-b border-slate-600 py-4 font-semibold text-slate-400 transition duration-200 ease-in-out last:border-none hover:text-slate-200"
                href="#testimonials"
              >
                Testimonials
              </a>
              {/* <a
                className="text-left text-md block w-full border-b border-slate-600 py-4 font-semibold text-slate-400 transition duration-200 ease-in-out last:border-none hover:text-slate-200"
                href="#faq"
              >
                FAQ
              </a> */}
            </div>
          </div>
        </div>
        <div className="mx-auto hidden h-[58px] w-full items-center justify-between transition duration-500 ease-in-out md:flex">
          <div className="flex lg:w-[225px]">
            <span
              data-state="closed"
              className=""
              style={{ WebkitTouchCallout: "none" }}
            >
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-700 py-1"
                aria-label="MakForTax"
                href="#home"
              >
                <Image
                  src="/MakForTaxLogo.svg"
                  alt="Logo"
                  width={130}
                  height={20}
                />
              </a>
            </span>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-700 rounded-md px-1 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 focus-visible:text-slate-200 lg:px-2"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-700 rounded-md px-1 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 focus-visible:text-slate-200 lg:px-2"
                href="#about"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-700 rounded-md px-1 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 focus-visible:text-slate-200 lg:px-2"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-700 rounded-md px-1 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 focus-visible:text-slate-200 lg:px-2"
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>
            <li>
              {/* <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-700 rounded-md px-1 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 focus-visible:text-slate-200 lg:px-2"
                href="#faq"
              >
                FAQ
              </a> */}
            </li>
            <a
              className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-700 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70"
              data-state="closed"
              href="#contact"
            >
              Learn More
              <span className="text-[#70757E]">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
