import React from "react";
import { Badge } from "@/components/ui";
import { X } from "lucide-react";

export interface AppliedProps {
  className?: string;
}

export const Applied: React.FC<AppliedProps> = ({}) => {
  return (
    <div className={"flex flex-col gap-3"}>
      <h1 className={"text-sm font-semibold"}>Applied Filters:</h1>
      <div>
        <Badge
          variant={"secondary"}
          className={
            "flex gap-2 px-4 py-1 cursor-pointer border border-[#E6E7E8] rounded-full w-fit"
          }
        >
          <h2 className={"text-black text-[12px]"}>Size: M</h2>
          <button>
            <X color="#5C5F6A" size={20} />
          </button>
        </Badge>
      </div>
    </div>
  );
};
