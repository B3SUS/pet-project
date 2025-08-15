"use client";
import React, { useEffect } from "react";
import { Container } from "@/components/shared/Container";
import { useParams } from "next/navigation";
import { useProductPageStore } from "@/stores/useProductPageStore";
import { Star } from "lucide-react";

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const productId = Number(params.id);
  const { initializeStore, product } = useProductPageStore();
  useEffect(() => {
    if (productId) {
      initializeStore(productId);
    }
  }, [productId]);

  return (
    <div>
      {product && (
        <Container className={"flex flex-col gap-40"}>
          <div className={" product-variables flex gap-[120px] w-full"}>
            <div
              className={
                "product-image flex flex-col items-center px-32 py-7 bg-[#f6f6f6] gap-24"
              }
            >
              <img
                src={product.product_image}
                width={288}
                height={404}
                alt={product.name}
              ></img>
              <div className={"bg-black w-[56px] h-[8px]"}></div>
            </div>
            <div
              className={"product-info top-1 flex flex-col gap-3 items-start"}
            >
              <h1 className={"product-name text-3xl font-bold"}>
                {product.name}
              </h1>
              <div className={"reviews/stock flex items-center gap-2"}>
                <div
                  className={
                    "flex items-center gap-2 py-0.5 px-4 bg-[#F6F6F6] border border-[#F6F6F6] rounded-full"
                  }
                >
                  <Star className={"w-4 h-4 fill-[#5C5F6A] text-[#5C5F6A]"} />
                  <span className={"text-sm text-[#5C5F6A]"}>
                    4.2 - 54 Reviews
                  </span>
                </div>
                <div
                  className={
                    "flex items-center py-0.5 px-4 bg-white border border-[#E6E7E8] rounded-full text-xs font-semibold text-[#0E1422]"
                  }
                >
                  IN STOCK
                </div>
              </div>
              <div className={"text-[#0E1422] text-xl font-semibold"}>
                ${Number(product.price).toFixed(2)}
              </div>
              <div className={"colors flex flex-col gap-[10px]"}>
                <span className={"font-semibold text-sm leading-[24px]"}>
                  AVAILABLE COLORS
                </span>
              </div>
            </div>
          </div>
          <div className={"products-details flex gap-8"}>
            <div className={"buttons!!!!!!! w-[241px] bg-black"}></div>
            <div className={"details flex flex-col"}>
              <h1 className={"font-semibold text-[#0E1422] text-[16px]"}>
                Detail
              </h1>
              <span className={"mt-6"}>{product.description}</span>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}
