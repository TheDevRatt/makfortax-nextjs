"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";

interface SplineProps {
  scene: string;
}

export const SplineComponent = ({ scene }: SplineProps) => {
  return (
    <div className="scale-[0.3] md:scale-100">
      {/* Ensuring the div is full width on mobile and custom width on larger screens with a fixed height */}
      <Spline
        scene={scene}
        onLoad={() => {
          document
            .querySelector(".spline-container")
            ?.classList.remove("opacity-0");
          document
            .querySelector(".spline-container")
            ?.classList.add("opacity-100");
        }}
        className="spline-container transition-opacity duration-500 ease-out opacity-0"
      />
    </div>
  );
};
