"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { filterProduct } from "../actions";

export const FilterPrice = () => {
  const [minPrice, setminPrice] = useState();
  const [maxPrice, setmaxPrice] = useState();

  async function handleFilter(min, max) {
    const products = await filterProduct(min, max);
    console.log("filtered products are -->", products);
  }
  return (
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
      <Button onClick={() => handleFilter(minPrice, maxPrice)}>Filter</Button>
    </div>
  );
};
