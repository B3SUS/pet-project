"use client";
import { Checkbox } from "@/components/ui";
import React, { useEffect, useState } from "react";
import { Api } from "../../../../services/api-client";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  checked,
  onCheckedChange,
}) => {
  return (
    <div
      className={
        "flex items-center border border-t-0 border-x-0 border-b-[#E6E7E8] w-full py-3 px-1 gap-2"
      }
    >
      <Checkbox
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={""}
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className={"cursor-pointer text-[#474B57]"}
      >
        {text}
      </label>
    </div>
  );
};
