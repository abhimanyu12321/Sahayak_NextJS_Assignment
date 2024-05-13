import React from "react";
import Link from "next/link";
import CreateProduct from "./createProduct";
import { Button } from "@/components/ui/button";

import ProductList from "./ProductList";

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://fastapi-ecommerce-api.onrender.com/products/all",
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
async function page() {
  const products = await fetchProducts();
  return (
    <div className="pt-6 pl-6">
      <Button asChild variant="outline" className="text-2xl p-6 m-6">
        <Link href="/">Home</Link>
      </Button>
      <div className="flex gap-4 border p-4 m-4 justify-center items-center">
        <h1 className="text-4xl font-medium">Your products</h1>
        <div>
          <CreateProduct />
        </div>
      </div>
      <ProductList data={products} />
    </div>
  );
}

export default page;
