import {Checkbox} from "@/components/ui";
import React from "react";

export interface FilterCheckboxProps{
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
        <div>
            <Checkbox
                value={value}
                checked={checked}
                onCheckedChange={onCheckedChange}
                className={''}
                id={`checkbox-${String(value)}`}
            />
            <label htmlFor={`checkbox-${String(value)}`} className={'cursor-pointer'}>
                {text}
            </label>
        </div>
    )
}