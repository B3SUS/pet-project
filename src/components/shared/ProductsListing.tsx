"use client";
import React from "react";
import { ProductContainer } from "@/components/shared/ProductContainer";
import { useProductStore } from "@/stores/useProductStore";
import { ListingPageProductSkeleton } from "@/components/shared/skeleton/ListingPageProductSkeleton";
import { Skeleton } from "@/components/ui";

export interface ProductsListingProps {
  className?: string;
}
export const ProductsListing: React.FC<ProductsListingProps> = ({
  className,
}) => {
  const { filteredProducts, isLoading, initialized } = useProductStore();
  if (isLoading)
    return (
      <div className={"grid grid-cols-3 gap-x-6 gap-y-8"}>
        {Array.from({ length: 6 }).map((_, i) => (
          <ListingPageProductSkeleton key={i} />
        ))}
      </div>
    );
  if (!filteredProducts && initialized) return <div>No product matches</div>;

  return (
    <div className={"grid grid-cols-3 gap-x-6 gap-y-8"}>
      {filteredProducts.map((product) => (
        <ProductContainer
          key={product.id}
          id={product.id}
          name={product.name}
          imageUrl={product.product_image}
          price={Number(product.price)}
        />
      ))}
    </div>
  );
};
