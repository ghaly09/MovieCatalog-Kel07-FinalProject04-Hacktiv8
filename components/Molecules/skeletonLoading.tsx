import { Skeleton } from "../ui/skeleton";
import React from "react";

export default function SkeletonLoading() {
  return (
    <div className="flex flex-col items-center space-x-4">
      <Skeleton className="w-60 lg:w-64 md:h-[400px] lg:h-80 rounded-xl" />
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
