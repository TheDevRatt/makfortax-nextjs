"use client";
import React, { useEffect, useState } from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";
import { Skeleton } from "@/components/ui/skeleton";

interface SplineProps {
  scene: string;
}

export const SplineComponent = ({ scene }: SplineProps) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // This ensures the loading state is correctly reset on each component mount
    setLoading(true);
  }, [scene]);

  return (
    <div className="scale-[0.4] md:scale-100 -mt-[18rem] -mb-[15rem] md:-mt-[18rem]">
      {isLoading && (
        <div className="flex flex-col mt-[10rem] mb-40 space-y-5">
          <Skeleton className="h-[500px] w-[500px] rounded-xl" />{" "}
        </div>
      )}
      <Spline
        scene={scene}
        onLoad={() => setLoading(false)}
        className="spline-container transition-opacity duration-500 ease-out"
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
};
