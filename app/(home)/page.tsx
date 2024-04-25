import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HeroHighlight, Highlight } from "./components/HeroHighlight";
import { SplineComponent } from "./components/SplineComponent";

export default function page() {
  return (
    <div className="bg-black">
      <header className="sticky top-0 border-b border-transparent backdrop-blur-sm transition duration-200 ease-in-out z-30">
        <Navbar />
      </header>

      {/* Main Content Container */}
      <div className="mx-auto max-7xl overflow-hidden">
        <section className="flex">
          <HeroHighlight className="flex flex-col md:flex-row items-center md:-space-y-20 -mt-[20rem]">
            <div className="order-2 md:order-1">
              <div className="flex flex-col md:justify-start">
                <div className="self-center mt-[-15rem] md:self-start">
                  <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                      <span>35+ Years of Accounting Experience</span>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                  </button>
                </div>

                <h1 className="text-5xl font-bold text-neutral-700 dark:text-white leading-snug md:leading-relaxed text-center md:text-left md:text-6xl">
                  Empowering <br />
                  <Highlight>your finances</Highlight>
                </h1>

                <p className="text-base font-light text-slate-300 mt-5 text-center md:text-left">
                  Elevate your financial strategy with expert tax, <br />
                  bookkeeping, and accounting services tailored for you.
                </p>

                <div className="flex flex-col md:flex-row pt-5 items-center space-x-5 space-y-5 md:space-y-0">
                  <button className="inline-flex justify-center w-full md:w-fit px-4 py-4 rounded-full tracking-widest uppercase font-bold bg-white hover:bg-[#dfe6ec] hover:text-black dark:text-black transition duration-200">
                    Contact Now
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
                  </button>
                  <button className="inline-flex justify-center w-full md:w-fit px-4 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                    Our Services
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
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SplineComponent scene="https://prod.spline.design/f6qIT71Tu2wjYrhL/scene.splinecode" />
            </div>
          </HeroHighlight>
        </section>
      </div>

      {/* <div className="relative z-20 pt-[60px] md:h-screen md:max-h-[950px] md:pt-0">
        <section className="mx-auto max-w-5xl px-6 pb-8 md:h-screen md:max-h-[950px] md:max-w-full">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-6 h-full">
            <HeroHighlight className="origin-center order-2 max-w-3xl sm:shrink-0 md:order-1 lg:pl-16">
              <div className="">
                <SplineComponent scene="https://prod.spline.design/f6qIT71Tu2wjYrhL/scene.splinecode" />
              </div>
              <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug ">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    35+ Years of Accounting Experience
                  </span>
                </button>
                <h1 className="mt-5">
                  Empowering <br />
                  <Highlight className="">your finances</Highlight>
                </h1>
              </div>
            </HeroHighlight>
          </div>
        </section>
      </div> */}

      {/* <div className="flex flex-col md:flex-col-reverse">
          <div className="md:order-2">
            <HeroHighlight className="space-x-0 md:space-x-20">
              <div className="flex flex-col justify-center">
                <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug ">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      35+ Years of Accounting Experience
                    </span>
                  </button>
                  <h1 className="mt-5">
                    Empowering <br />
                    <Highlight className="">your finances</Highlight>
                  </h1>
                  <p className="text-base font-light text-slate-300 mt-5">
                    Elevate your financial strategy with expert tax,
                    bookkeeping, and accounting services tailored for you.
                  </p>
                </div>

                <div className="space-x-6 space-y-10">
                  <button className="inline-flex items-center px-4 py-4 rounded-full tracking-widest uppercase font-bold bg-white hover:bg-[#dfe6ec] hover:text-black dark:text-black transition duration-200">
                    Contact Now
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
                  </button>
                  <button className="inline-flex items-center px-4 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                    Our Services
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
                  </button>
                </div>
              </div>
            </HeroHighlight>
          </div>
        </div> */}

      <HeroSection showGradient={true} title={<span>This is a test</span>} />
    </div>
  );
}
