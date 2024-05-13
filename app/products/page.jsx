import React, { Suspense } from "react";
import axios from "axios";
import Link from "next/link";
import ProductCard from "../clientcomponents/ProductCard";
import CreateProduct from "./createProduct";
import { Button } from "@/components/ui/button";
import { FilterPrice } from "../clientcomponents/FilterPrice";
import { Spinner } from "@nextui-org/spinner";

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

      <div className="productContainer w-[80vw] mx-auto ">
        <FilterPrice />
        <div className="flex gap-4 border p-4 justify-around items-center font-extrabold">
          <div>Name</div>
          <div className="flex flex-col">
            <span>Price</span>
            <span>sort</span>
          </div>
          <div>Quantity</div>
          <div>Update Action</div>
          <div>Delete Action</div>
        </div>

        <Suspense fallback={<Spinner color="white" />}>
          {products &&
            products.map((product) => {
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
        </Suspense>
      </div>
    </div>
  );
}

export default page;
