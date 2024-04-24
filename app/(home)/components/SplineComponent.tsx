"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";

interface SplineProps {
  scene: string;
}

export const SplineComponent = ({ scene }: SplineProps) => {
  return <Spline scene={scene} />;
};
