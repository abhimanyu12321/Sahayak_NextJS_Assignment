"use client";
import React, { useState } from "react";
import { Spinner } from "@nextui-org/spinner";
import ProductCard from "../clientcomponents/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { filterProduct } from "../actions";
import { CaretSortIcon } from "@radix-ui/react-icons";

const ProductList = ({ data }) => {
  const [products, setProducts] = useState(data || []);
  const [minPrice, setminPrice] = useState();
  const [maxPrice, setmaxPrice] = useState();
  const [loading, setLoading] = useState(false);

  async function handleFilter(min, max) {
    setLoading(true);
    const filteredproducts = await filterProduct(min, max);
    console.log("filtered products are -->", filteredproducts);
    setLoading(false);
    setProducts(filteredproducts.data);
    console.log("filtered products are -->", products);
  }

  function handleSort() {
    let sortedPrrducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedPrrducts);
  }

  return (
    <div className="productContainer w-[80vw] mx-auto ">
      {/* Filter Price */}

      <div className="flex gap-4 m-4">
        <Input
          type="number"
          placeholder="Enter Min price"
          value={minPrice}
          onChange={(e) => setminPrice(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Enter Max price"
          value={maxPrice}
          onChange={(e) => setmaxPrice(e.target.value)}
        />
        <Button onClick={() => handleFilter(minPrice, maxPrice)}>
          {loading ? <Spinner color="white" /> : "Filter"}
        </Button>
      </div>

      <div className="flex gap-4 border p-4 justify-around items-center font-extrabold">
        <div>Name</div>
        <div className="flex justify-center items-center gap-2">
          <span>Price</span>
          <span onClick={handleSort}>
            <CaretSortIcon className="text-2xl cursor-pointer font-extrabold" />
          </span>
        </div>
        <div>Quantity</div>
        <div>Update Action</div>
        <div>Delete Action</div>
      </div>

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
    </div>
  );
};

export default ProductList;
