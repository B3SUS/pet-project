import { Prisma } from "@prisma/client";
import Decimal = Prisma.Decimal;

export interface category {
  id: number;
  name: string;
  parent_category_id: number | null;
}

export interface product {
  id: number;
  category_id: number;
  name: string;
  description: string;
  product_image: string;
  price: Decimal;
}

export interface CategoryWithProducts extends category {
  product: product[];
}
