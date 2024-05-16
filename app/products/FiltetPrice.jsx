"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function FiltetPrice() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  console.log("value of pathname", pathname);
  function handleFilter() {}

  return (
    <div className="flex gap-4 m-4">
      <Input
        type="number"
        placeholder="Enter Min price"
        onChange={(e) => {
          const params = new URLSearchParams(searchParams);
          if (e.target.value) params.set("minPrice", e.target.value);
          else params.delete("minPrice");
          replace(`${pathname}?${params.toString()}`);
        }}
        defaultValue={searchParams.get("minPrice")}
      />
      <Input
        type="number"
        placeholder="Enter Max price"
        onChange={(e) => {
          const params = new URLSearchParams(searchParams);
          if (e.target.value) params.set("maxPrice", e.target.value);
          else params.delete("maxPrice");
          replace(`${pathname}?${params.toString()}`);
        }}
        defaultValue={searchParams.get("maxPrice")}
      />
      <Button onClick={handleFilter}>{"Filter"}</Button>
    </div>
  );
}
