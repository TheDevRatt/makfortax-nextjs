import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HeroHighlight, Highlight } from "./components/HeroHighlight";
import { SplineComponent } from "./components/SplineComponent";

export default function page() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <HeroHighlight className="flex flex-col">
          <div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
            {" "}
            <h1>
              Ready to take your finances <br />
              <Highlight className="">to the next step?</Highlight>
            </h1>
            <SplineComponent
              scene={
                "https://prod.spline.design/f6qIT71Tu2wjYrhL/scene.splinecode"
              }
            />
          </div>

          <div className="self-center my-10 space-x-10">
            <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Learn More
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Contact Now
            </button>
          </div>
        </HeroHighlight>

        <HeroSection showGradient={true} title={<span>This is a test</span>} />
      </div>
    </div>
  );
}
