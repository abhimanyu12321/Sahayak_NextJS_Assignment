"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function FiltetPrice() {
  const [minPrice, setminPrice] = useState();
  const [maxPrice, setmaxPrice] = useState();

  function handleFilter() {
    console.log("filtered function");
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
      <Button onClick={handleFilter}>{"Filter"}</Button>
    </div>
  );
}
