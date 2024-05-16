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
import { createProduct } from "../actions";
import { Spinner } from "@nextui-org/spinner";
import { useRouter } from "next/navigation";

const CreateProduct = () => {
  const [cname, setCname] = useState();
  const [cprice, setCprice] = useState();
  const [cquantity, setCquantity] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handcreateSubmit(name, price, quantity) {
    setLoading(true);
    let res = await createProduct(name, price, quantity);
    setLoading(false);
    // router.push("/");
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          {loading ? <Spinner color="white" /> : "Add new product"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create product</DialogTitle>
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
            <Button
              type="submit"
              onClick={() => handcreateSubmit(cname, cprice, cquantity)}
            >
              create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProduct;
