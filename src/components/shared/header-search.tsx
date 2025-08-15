"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui";
import React, { useEffect, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Api } from "../../../services/api-client";
import { product } from ".prisma/client";

interface headerSearchProps {}
export const HeaderSearch: React.FC<headerSearchProps> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery],
  );
  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div
          className={"fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-10"}
        />
      )}
      <div ref={ref} className={"relative z-30 w-full"}>
        <Search
          size={20}
          className={`absolute top-1/2 -translate-y-1/2 left-1 text-[#878A92] ${focused && "text-white"}`}
        />
        <Input
          type={"text"}
          width={264}
          height={45}
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={
            "pl-6 placeholder:text-[#878A92] border-[#E6E7E8] rounded-[6px] focus:placeholder:text-white focus:text-white"
          }
          placeholder={"Search products"}
        />
        <div
          className={cn(
            "absolute flex flex-col gap-2 text-center w-full top-14 transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12",
          )}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                onClick={onClickItem}
                className={
                  "flex items-center px-4 bg-white rounded-full gap-4 border-b border-black/50 h-[75px] hover:border-[2px] hover:border-black"
                }
              >
                <div className={"flex items-center"}>
                  <img
                    src={product.product_image}
                    alt={product.name}
                    width={60}
                    height={60}
                    className={"rounded-full"}
                  />
                  <span className={"text-sm"}>{product.name}</span>
                </div>
              </Link>
            ))
          ) : (
            <div className={"bg-white rounded-full py-4"}>Nothing found</div>
          )}
        </div>
      </div>
    </>
  );
};
