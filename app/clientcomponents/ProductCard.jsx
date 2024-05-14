"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { deleteProduct, updateProduct } from "../actions";
import { Spinner } from "@nextui-org/spinner";
import { useRouter } from "next/navigation";

const ProductCard = ({ name, price, quantity, id }) => {
  const [cname, setCname] = useState(name);
  const [cprice, setCprice] = useState(price);
  const [cquantity, setCquantity] = useState(quantity);
  const [dloading, setDloading] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleUpdateSubmit(id) {
    setLoading(true);
    let response = await updateProduct(cname, cprice, cquantity, id);
    setLoading(false);
    router.push("/");
  }

  async function handleDeleteSubmit(id) {
    setDloading(true);
    let response = await deleteProduct(id);
    setDloading(false);
    router.push("/");
  }

  return (
    <div className="flex gap-4 border p-4 justify-around items-center">
      <div>{name}</div>
      <div>{price}</div>
      <div>{quantity}</div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>{loading ? <Spinner color="white" /> : "Update"}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit product</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={cname}
                className="col-span-3"
                onChange={(e) => setCname(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="username"
                defaultValue={cprice}
                className="col-span-3"
                type="number"
                onChange={(e) => setCprice(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                defaultValue={cquantity}
                className="col-span-3"
                type="number"
                onChange={(e) => setCquantity(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" onClick={() => handleUpdateSubmit(id)}>
                update
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button variant="destructive" onClick={() => handleDeleteSubmit(id)}>
        {dloading ? <Spinner color="white" /> : "Delete"}
      </Button>
    </div>
  );
};

export default ProductCard;
