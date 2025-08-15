import { DataTable } from "@/app/(admin)/products/data-table";
import { columns, type Products } from "@/app/(admin)/products/columns";

async function getProducts(): Promise<Products[]> {
  return [
    {
      id: 1,
      image: "/placeholder.svg?height=150&width=150",
      name: "Smartphone X",
      price: 799.99,
      stock: "In Stock",
      categories: ["Electronics", "Mobile"],
    },
    {
      id: 2,
      image: "/placeholder.svg?height=150&width=150",
      name: "Laptop Pro",
      price: 1200.0,
      stock: "In Stock",
      categories: ["Electronics", "Computers"],
    },
    {
      id: 3,
      image: "/placeholder.svg?height=150&width=150",
      name: "Wireless Headphones",
      price: 149.5,
      stock: "Out of Stock",
      categories: ["Audio", "Accessories"],
    },
    {
      id: 4,
      image: "/placeholder.svg?height=150&width=150",
      name: "Smartwatch Z",
      price: 299.0,
      stock: "In Stock",
      categories: ["Wearables", "Electronics"],
    },
    {
      id: 5,
      image: "/placeholder.svg?height=150&width=150",
      name: "Mechanical Keyboard",
      price: 99.99,
      stock: "In Stock",
      categories: ["Computers", "Peripherals"],
    },
  ];
}

export default async function Products() {
  const data = await getProducts();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
