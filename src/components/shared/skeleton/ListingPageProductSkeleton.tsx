import { Skeleton } from "@/components/ui";
import React from "react";

export function ListingPageProductSkeleton() {
  return (
    <div className={"px-2 py-4 flex flex-col gap-6"}>
      <Skeleton className={"h-[312px] w-[237px]"} />
      <div className={"flex flex-col gap-3"}>
        <Skeleton className={"h-6 w-60"} />
        <div className={"flex gap-4"}>
          <Skeleton className={"w-20 h-[26px]"} />
          <Skeleton className={"w-8 h-[26px]"} />
        </div>
      </div>
    </div>
  );
}
