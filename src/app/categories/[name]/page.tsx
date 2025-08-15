"use client";
import { Container } from "@/components/shared/Container";
import { Filters } from "@/components/shared/listing-page/Filters";
import { Applied } from "@/components/shared/listing-page/Applied";
import { ProductsListing } from "@/components/shared/ProductsListing";
import { useProductStore } from "@/stores/useProductStore";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categories() {
  const { initializeStore, isLoading } = useProductStore();

  const params = useParams<{ name: string }>();
  const categoryName = params.name;

  useEffect(() => {
    if (categoryName) {
      initializeStore(categoryName);
    }
  }, [categoryName]);

  return (
    <div className={"mt-8"}>
      <Container className={"flex justify-between"}>
        <Filters />
        <div className={"w-[824px]"}>
          <Applied />
          <ProductsListing />
        </div>
      </Container>
    </div>
  );
}
