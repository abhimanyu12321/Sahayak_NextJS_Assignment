import React from "react";
import axios from "axios";
import Link from "next/link";
import ProductCard from "../clientcomponents/ProductCard";
import CreateProduct from "./createProduct";

async function fetchProducts() {
  try {
    const response = await axios.get(
      "https://fastapi-ecommerce-api.onrender.com/products/all"
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}
async function page() {
  const products = await fetchProducts();
  return (
    <div className="pt-6 pl-6">
      <Link href={"/"} className="text-blue-600 hover:underline py-12">
        Home
      </Link>
      <div className="flex gap-4 border p-4">
        <h1>Your products</h1>
        <div>
          <CreateProduct />
        </div>
      </div>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            id={product.id}
          />
        );
      })}
    </div>
  );
}

export default page;
