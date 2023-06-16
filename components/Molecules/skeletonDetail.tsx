import { Skeleton } from "../ui/skeleton";
import React from "react";

export default function SkeletonDetail() {
  return (
    <div className="flex flex-col items-center space-x-4">
      <Skeleton className="lg:w-full w-60 md:h-[400px] lg:h-80 rounded-xl" />
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-80" />
        <Skeleton className="h-4 w-80" />
      </div>
    </div>
  );
}
