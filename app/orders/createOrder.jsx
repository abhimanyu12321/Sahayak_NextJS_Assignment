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
import { createOrder } from "../actions";
import { Spinner } from "@nextui-org/spinner";
import { useRouter } from "next/navigation";

const CreateOrder = () => {
  const [id, setId] = useState();
  const [city, setCity] = useState();
  const [cquantity, setCquantity] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handcreateSubmit(id, city, quantity) {
    setLoading(true);
    let res = await createOrder(id, city, quantity);
    setLoading(false);
    console.log("create product server action return value", res);
    router.push("/");
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{loading ? <Spinner color="white" /> : "Add new Order"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Order</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Id
            </Label>
            <Input
              id="name"
              defaultValue={id}
              className="col-span-3"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              City
            </Label>
            <Input
              id="username"
              defaultValue={city}
              className="col-span-3"
              type="text"
              onChange={(e) => setCity(e.target.value)}
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
              onClick={() => handcreateSubmit(id, city, cquantity)}
            >
              create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrder;
