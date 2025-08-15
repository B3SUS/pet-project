"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Products = {
  id: number;
  image: string;
  name: string;
  price: number;
  stock: "In Stock" | "Out of Stock";
  categories: string[];
};

export const columns: ColumnDef<Products>[] = [
  {
    id: "image",
    accessorFn: (row) => row.image,
    header: "Image",
    cell: ({ row }) => (
      <img
        src={
          row.original.image ||
          "/placeholder.svg?height=48&width=48&query=product image"
        }
        alt={row.original.name}
        className="h-12 w-12 rounded-md object-cover"
      />
    ),
  },
  {
    id: "name",
    accessorFn: (row) => row.name,
    header: "Name",
    cell: ({ row }) => <div>{row.original.name}</div>,
  },
  {
    id: "price",
    accessorFn: (row) => row.price,
    header: "Price",
    cell: ({ row }) => <div>{`$${row.original.price.toFixed(2)}`}</div>,
  },
  {
    id: "stock",
    accessorFn: (row) => row.stock,
    header: "Stock",
    cell: ({ row }) => <div>{row.original.stock}</div>,
  },
  {
    id: "categories",
    accessorFn: (row) => row.categories,
    header: "Categories",
    cell: ({ row }) => <div>{row.original.categories.join(", ")}</div>,
  },
];
