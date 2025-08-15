"use client";
import React, { useEffect, useState } from "react";
import { FilterCheckbox } from "@/components/shared/listing-page/FilterCheckbox";
import { useProductStore } from "@/stores/useProductStore";
import { useRouter, useSearchParams } from "next/navigation";
import { search } from "../../../../services/products";

export const CategoryFilters = ({}) => {
  const { applyFilters, childCategories } = useProductStore();
  const [localActiveFilters, setLocalActiveFilters] = useState<Set<number>>(
    new Set(),
  );
  const router = useRouter();
  const params = useSearchParams();
  useEffect(() => {
    const filterParam = params.get("filter");
    if (filterParam) {
      const ids = filterParam
        ? filterParam
            .split(",")
            .map(Number)
            .filter((id) => !isNaN(id))
        : [];
      const newFilters = new Set(ids);

      if (
        newFilters.size !== localActiveFilters.size ||
        ![...newFilters].every((id) => localActiveFilters.has(id))
      ) {
        setLocalActiveFilters(newFilters);
        applyFilters(newFilters);
      }
    }
  }, [params]);

  const handleFilterChange = (categoryId: number) => {
    const currentFilters = new Set(localActiveFilters);
    let nextFilters: Set<number>;
    if (currentFilters.has(categoryId)) {
      nextFilters = new Set(currentFilters);
      nextFilters.delete(categoryId);
    } else {
      nextFilters = new Set(currentFilters);
      nextFilters.add(categoryId);
    }

    setLocalActiveFilters(nextFilters);

    const currentSearchParams = new URLSearchParams(
      Array.from(params.entries()),
    );
    const filterIds = Array.from(nextFilters).join(",");

    if (filterIds) {
      currentSearchParams.set("filter", filterIds);
    } else {
      currentSearchParams.delete("filter");
    }
    const newQueryString = currentSearchParams.toString();
    const newUrl = `${window.location.pathname}${newQueryString ? `?${newQueryString}` : ""}`;

    if (
      window.location.search !== (newQueryString ? `?${newQueryString}` : "")
    ) {
      router.replace(newUrl);
    }
    applyFilters(nextFilters);
  };

  return (
    <div className={"flex flex-col gap-4"}>
      {childCategories && <h1>Categories</h1>}
      <div>
        {childCategories.map((childCategory) => (
          <FilterCheckbox
            key={childCategory.id}
            text={childCategory.name}
            value={String(childCategory.id)}
            checked={localActiveFilters.has(childCategory.id)}
            onCheckedChange={() => handleFilterChange(childCategory.id)}
          />
        ))}
      </div>
    </div>
  );
};
