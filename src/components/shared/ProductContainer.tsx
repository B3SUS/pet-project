import { Badge } from "@/components/ui";
import React from "react";
import Link from "next/link";

export interface ProductContainerProps {
  className?: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export const ProductContainer: React.FC<ProductContainerProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={"px-2 py-4 flex flex-col gap-6"}>
      <Link href={`/product/${id}`}>
        <img height={312} width={237} src={imageUrl} alt={name} />
        <div className={"flex flex-col gap-3"}>
          <h1>{name}</h1>
          <div className={"flex gap-4"}>
            <Badge
              className={
                "flex gap-2 px-4 py-1 border border-[#E6E7E8] rounded-full w-fit"
              }
            >
              In Stock
            </Badge>
            <h1>${price}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};
