"use client";
import React, { useEffect, useState } from "react";
import { FilterCheckbox } from "@/components/shared/listing-page/FilterCheckbox";
import { Slider, ToggleGroup, ToggleGroupItem } from "@/components/ui";
import { CategoryFilters } from "@/components/shared/listing-page/CategoryFilters";
import { useProductStore } from "@/stores/useProductStore";

export interface FiltersProps {
  className?: string;
}
export const Filters: React.FC<FiltersProps> = ({}) => {
  const [priceRange, setPriceRange] = useState([0, 800]);

  return (
    <div
      className={
        "flex flex-col gap-6 w-[248px] px-4 pt-6 pb-8 border rounded-[6px] border-[#E6E7E8]"
      }
    >
      <CategoryFilters />
      <div className={"flex flex-col gap-3"}>
        <h1>Size</h1>
        <ToggleGroup
          type={"multiple"}
          className={"max-w-[200px] grid grid-cols-4"}
        >
          <ToggleGroupItem value={"s"} variant={"outline"}>
            S
          </ToggleGroupItem>
          <ToggleGroupItem value={"m"} variant={"outline"}>
            M
          </ToggleGroupItem>
          <ToggleGroupItem value={"l"} variant={"outline"}>
            L
          </ToggleGroupItem>
          <ToggleGroupItem value={"xl"} variant={"outline"}>
            XL
          </ToggleGroupItem>
          <ToggleGroupItem value={"xxl"} variant={"outline"}>
            XXL
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className={"flex flex-col gap-3"}>
        <h1>Price</h1>
        <Slider
          defaultValue={[0, 800]}
          max={800}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className={"mt-2"}
        />
        <div className="mt-2 text-sm flex justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};
